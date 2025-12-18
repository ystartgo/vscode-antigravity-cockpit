# Antigravity Cockpit 🚀

> 在 VS Code 中監控 Google Antigravity AI 配額的未來感儀表板。

[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文]

[![Version](https://img.shields.io/open-vsx/v/jlcodes/antigravity-cockpit)](https://open-vsx.org/extension/jlcodes/antigravity-cockpit)
[![GitHub stars](https://img.shields.io/github/stars/jlcodes99/vscode-antigravity-cockpit?style=flat&color=gold)](https://github.com/jlcodes99/vscode-antigravity-cockpit)
[![GitHub issues](https://img.shields.io/github/issues/jlcodes99/vscode-antigravity-cockpit)](https://github.com/jlcodes99/vscode-antigravity-cockpit/issues)
[![License](https://img.shields.io/github/license/jlcodes99/vscode-antigravity-cockpit)](https://github.com/jlcodes99/vscode-antigravity-cockpit)

**Antigravity Cockpit** 以賽博龐克風格的進階 HUD 介面，為您的程式開發體驗帶來革命性的改變，讓您能夠監控 AI 模型配額。告別猜測模型限制何時重置的日子。

![Antigravity Cockpit Dashboard](assets/dashboard_preview.png)

---

## ✨ 功能特色

### 🚀 沉浸式儀表板
美觀的深色模式 Webview 視覺化介面，即時顯示所有 AI 模型（**Gemini 3 Pro (High)**、**Claude Sonnet 4.5**、**GPT-OSS 120B (Medium)** 等）的健康狀態。

### ⏱️ 精確計時
*精確*掌握何時可以繼續工作。同時顯示倒數計時（例如 `4h 40m`）和絕對重置時間戳記（例如 `15:16:25`）。

### 👆 互動式控制
- **拖放功能**：隨心所欲地排列模型。您的版面配置會自動儲存。
- **釘選到狀態列**：直接從卡片切換要在 VS Code 狀態列中顯示的模型。
- **一鍵重新整理**：需要立即更新資料？點擊重新整理按鈕（120 秒冷卻時間）。

### 📊 智慧狀態列
- 並排顯示已釘選的模型（例如 `🚀 Gemini 3 Pro (High): 100% | Claude Sonnet 4.5: 86%`）。
- 如果沒有釘選任何模型，會智慧監控**配額最低**的模型以確保安全。
- 可自訂顯示格式：精簡、標準或詳細。

### 🔔 智慧通知
- 當模型配額**耗盡**或**不足**（< 30%）時收到通知。
- 如果您偏好安靜的體驗，可以在設定中停用通知。

### 🌐 多語言支援
- 支援**英文**、**簡體中文**和**繁體中文（台灣）**。
- 自動偵測您的 VS Code 語言設定。

### 💎 穩定且快速
- **即時恢復**：儀表板狀態會快取，即使在背景執行後也能立即載入。
- **零設定**：自動偵測本機 Antigravity 處理程序，無需手動設定。
- **VS Code 主題整合**：自動適應您的淺色或深色主題。

---

## 🕹️ 使用方式

1. **開啟**： 
   - 點擊狀態列中的 **$(rocket) Cockpit** 項目

2. **自訂**：
   - **釘選**：切換模型卡片上的開關，即可在狀態列中看到它。
   - **排序**：拖曳卡片以重新排序（尋找 ⋮⋮ 控點）。
   - **點數**：如果您使用提示點數，請在右上角切換「顯示提示點數」。

3. **疑難排解**：
   - 如果儀表板顯示「系統離線」，請點擊**重試連線**。
   - 使用**檢視記錄**按鈕查看詳細的除錯資訊。

---

## ⚙️ 設定

我們相信**互動性優於設定**。所有主要偏好設定（排序、釘選、可見度）都直接透過 UI 管理。

### 可用設定

| 設定 | 預設值 | 說明 |
|---------|---------|-------------|
| `agCockpit.refreshInterval` | `120` | 輪詢頻率（秒）（10-3600） |
| `agCockpit.showPromptCredits` | `false` | 在儀表板中顯示提示點數 |
| `agCockpit.pinnedModels` | `[]` | 要在狀態列中顯示的模型 |
| `agCockpit.logLevel` | `info` | 記錄詳細程度：debug、info、warn、error |
| `agCockpit.notificationEnabled` | `true` | 顯示配額通知 |
| `agCockpit.statusBarFormat` | `standard` | 顯示格式：compact、standard、detailed |

### `settings.json` 範例：

```json
{
  "agCockpit.refreshInterval": 120,
  "agCockpit.showPromptCredits": true,
  "agCockpit.pinnedModels": ["Gemini 3 Pro (High)", "Claude Sonnet 4.5"],
  "agCockpit.statusBarFormat": "detailed",
  "agCockpit.logLevel": "debug"
}
```

---

## 📦 安裝

### 方法 1：從 Open VSX Registry 安裝（建議）

1. 開啟您的編輯器（VSCodium / Code - OSS 等）
2. 按 `Cmd+Shift+X`（macOS）/ `Ctrl+Shift+X`（Windows/Linux）開啟擴充功能
3. 搜尋 `Antigravity Cockpit` 或 `antigravity-cockpit`
4. 點擊**安裝**

### 方法 2：從 VSIX 檔案安裝（CLI）

```bash
# 先下載或建置 .vsix 檔案，然後：
code --install-extension antigravity-cockpit-x.y.z.vsix
```

### 方法 3：從 VSIX 檔案安裝（拖放）

1. 下載或建置 `.vsix` 檔案
2. 開啟 VS Code
3. 開啟擴充功能面板（`Cmd+Shift+X` / `Ctrl+Shift+X`）
4. 將 `.vsix` 檔案拖曳到擴充功能面板中
5. 或點擊 `...` 選單 → **從 VSIX 安裝...** → 選擇檔案

### 方法 4：從原始碼安裝

請參閱下方的[從原始碼建置](#-從原始碼建置)。

---

## 🔧 從原始碼建置

### 先決條件

- [Node.js](https://nodejs.org/) v18 或更高版本
- [npm](https://www.npmjs.com/) v9 或更高版本
- [VS Code](https://code.visualstudio.com/) v1.90 或更高版本

### 步驟 1：複製並安裝

```bash
# 複製儲存庫
git clone https://github.com/jlcodes99/vscode-antigravity-cockpit.git
cd vscode-antigravity-cockpit

# 安裝相依套件
npm install
```

### 步驟 2：編譯

```bash
# 將 TypeScript 編譯為 JavaScript
npm run compile
```

### 步驟 3：打包（選用）

```bash
# 建立 .vsix 套件檔案
npm run package

# 這將產生：antigravity-cockpit-x.x.x.vsix
```

### 步驟 4：安裝

**選項 A：命令列**
```bash
code --install-extension antigravity-cockpit-x.y.z.vsix
```

**選項 B：拖放**
1. 開啟 VS Code 擴充功能面板
2. 將 `.vsix` 檔案拖曳進去

**選項 C：VS Code 選單**
1. 開啟擴充功能面板
2. 點擊右上角的 `...` 選單
3. 選擇**從 VSIX 安裝...**
4. 選擇 `.vsix` 檔案

### 步驟 5：除錯模式（開發）

1. 在 VS Code 中開啟專案
2. 按 `F5` 啟動擴充功能開發主機
3. 將開啟一個載入了擴充功能的新 VS Code 視窗

### 可用指令碼

| 指令碼 | 說明 |
|--------|-------------|
| `npm run compile` | 編譯 TypeScript + 複製 webview 資源 |
| `npm run watch` | 監看模式編譯 |
| `npm run lint` | 執行 ESLint |
| `npm run lint:fix` | 修正 ESLint 問題 |
| `npm run package` | 建立 .vsix 套件 |

---

## 📁 專案結構

```
src/
├── extension.ts              # 擴充功能進入點
├── engine/
│   ├── hunter.ts             # 處理程序偵測
│   ├── reactor.ts            # API 通訊
│   └── strategies.ts         # 平台特定策略
├── shared/
│   ├── config_service.ts     # 設定管理
│   ├── constants.ts          # 常數和魔術值
│   ├── i18n.ts               # 國際化
│   ├── log_service.ts        # 記錄服務
│   └── types.ts              # TypeScript 型別定義
└── view/
    ├── hud.ts                # Webview 面板管理
    └── webview/
        ├── dashboard.css     # 儀表板樣式
        └── dashboard.js      # 儀表板邏輯
```

---

## 🤝 貢獻

歡迎貢獻！請隨時提交 Pull Request。

### 開發指南

- 遵循 ESLint 設定（`.eslintrc.json`）
- 使用 TypeScript 嚴格模式
- 為公開 API 新增 JSDoc 註解
- 如果可能，請在 Windows、macOS 和 Linux 上測試

---

## 📝 變更記錄

如需完整的變更清單和版本歷史記錄，請參閱：
- English: [CHANGELOG.md](CHANGELOG.md)
- 简体中文: [CHANGELOG.zh-CN.md](CHANGELOG.zh-CN.md)

---

## ⭐ 支持本專案

如果您覺得 **Antigravity Cockpit** 有用，請考慮在 GitHub 上給它一顆星！您的支持有助於維持本專案的活力並激勵進一步的開發。

[![GitHub stars](https://img.shields.io/github/stars/jlcodes99/vscode-antigravity-cockpit?style=social)](https://github.com/jlcodes99/vscode-antigravity-cockpit)

- ⭐ **[在 GitHub 上加星](https://github.com/jlcodes99/vscode-antigravity-cockpit)** - 表達您的支持！
- 💬 **[回報問題 / 意見回饋](https://github.com/jlcodes99/vscode-antigravity-cockpit/issues)** - 協助我們改進！
- 📖 **[在 Open VSX 上開啟](https://open-vsx.org/extension/jlcodes/antigravity-cockpit)** - 檢視詳情 / 留下意見回饋！

---

## 授權條款

[MIT](LICENSE)
