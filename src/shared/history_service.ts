/**
 * Antigravity Cockpit - History Service
 * 管理配额历史数据的持久化存储
 */

import * as vscode from 'vscode';
import { QuotaSnapshot } from './types';
import { logger } from './log_service';

/** 历史数据点 */
export interface HistoryPoint {
    timestamp: number;  // Unix 时间戳 (ms)
    models: Record<string, number>;  // { modelId: percentage }
}

/** 历史数据存储格式 */
interface HistoryData {
    version: number;
    points: HistoryPoint[];
}

/**
 * 历史数据管理服务
 */
class HistoryServiceImpl {
    private readonly STORAGE_KEY = 'quotaHistory';
    private readonly DATA_VERSION = 1;
    private context?: vscode.ExtensionContext;
    
    /**
     * 初始化服务（需要在扩展激活时调用）
     */
    init(context: vscode.ExtensionContext): void {
        this.context = context;
        logger.debug('HistoryService initialized');
        // 启动时清理过期数据
        this.prune();
    }
    
    /**
     * 记录当前快照到历史
     */
    record(snapshot: QuotaSnapshot): void {
        if (!this.context || !snapshot.isConnected || snapshot.models.length === 0) {
            return;
        }
        
        const point: HistoryPoint = {
            timestamp: Date.now(),
            models: {},
        };
        
        for (const model of snapshot.models) {
            if (model.remainingPercentage !== undefined) {
                point.models[model.modelId] = model.remainingPercentage;
            }
        }
        
        // 读取现有数据
        const data = this.loadData();
        data.points.push(point);
        
        // 保存
        this.saveData(data);
        
        logger.debug(`History: Recorded ${Object.keys(point.models).length} models`);
    }
    
    /**
     * 获取历史数据
     */
    getHistory(): HistoryPoint[] {
        const data = this.loadData();
        return data.points;
    }
    
    /**
     * 清理过期数据
     */
    prune(): void {
        if (!this.context) {
            return;
        }
        
        const retentionDays = this.getRetentionDays();
        const maxAgeMs = retentionDays * 24 * 60 * 60 * 1000;
        const cutoff = Date.now() - maxAgeMs;
        
        const data = this.loadData();
        const originalCount = data.points.length;
        
        data.points = data.points.filter(p => p.timestamp >= cutoff);
        
        const prunedCount = originalCount - data.points.length;
        if (prunedCount > 0) {
            this.saveData(data);
            logger.info(`History: Pruned ${prunedCount} old records (retention: ${retentionDays} days)`);
        }
    }
    
    /**
     * 清空所有历史数据
     */
    clear(): void {
        if (!this.context) {
            return;
        }
        
        this.saveData({ version: this.DATA_VERSION, points: [] });
        logger.info('History: Cleared all data');
    }
    
    /**
     * 获取配置的保留天数
     */
    private getRetentionDays(): number {
        const config = vscode.workspace.getConfiguration('agCockpit');
        return config.get<number>('historyRetentionDays', 7);
    }
    
    /**
     * 加载历史数据
     */
    private loadData(): HistoryData {
        if (!this.context) {
            return { version: this.DATA_VERSION, points: [] };
        }
        
        const raw = this.context.globalState.get<HistoryData>(this.STORAGE_KEY);
        
        if (!raw || raw.version !== this.DATA_VERSION) {
            return { version: this.DATA_VERSION, points: [] };
        }
        
        return raw;
    }
    
    /**
     * 保存历史数据
     */
    private saveData(data: HistoryData): void {
        if (!this.context) {
            return;
        }
        
        this.context.globalState.update(this.STORAGE_KEY, data);
    }
}

// 导出单例
export const historyService = new HistoryServiceImpl();
