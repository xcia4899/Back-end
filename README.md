# Back-end

這是一個示範「使用 Vue 3 + Element Plus + Axios」實作的前端註冊 /
登入功能的小型專案。
專案同時整合 SCSS、Hooks、Axios 封裝、Vite、GitHub Actions 等技術，展示一個完整可運作的前端認證流程。

## ✅ 使用技術（Tech Stack）

-   **Vue 3（Composition API）** 透過組合式 API編寫。
-   **TypeScript**：提供靜態型別檢查。
-   **Element Plus**：提供 UI 元件與表單驗證（`el-form`、`FormRules`、`ElLoading`）。
-   **Axios**：集中於 `http.ts` 封裝，全局 request/response 攔截器與 Loading 處理。
-   **SCSS**：使用全域注入（variables、mixins），統一樣式管理。
-   **Vite**：開發伺服器、模組打包。
-   **Hooks Pattern**：`useLogin`、`useRegister` 拆分邏輯。
-   **GitHub Actions + GitHub Pages**：自動化部署流程。

## ✅ 主要功能（Features）

-   使用者註冊（含二次密碼驗證）
-   使用者登入（後端 token 收取與儲存，無後端API）
-   使用 Element Plus 表單驗證
-   Axios API 呼叫統一封裝
-   全局 Loading 動畫
-   GitHub Actions 自動部署

## Project Setup

``` sh
npm install
```

## Compile and Hot-Reload for Development

``` sh
npm run dev
```

## Type-Check, Compile and Minify for Production

``` sh
npm run build
```
