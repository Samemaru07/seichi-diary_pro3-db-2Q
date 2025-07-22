# 基本設計書
- [基本設計書](#基本設計書)
  - [1. はじめに](#1-はじめに)
  - [2. システム構成図](#2-システム構成図)
  - [3. 画面設計](#3-画面設計)
  - [4. 機能設計](#4-機能設計)
  - [5.データ構造](#5データ構造)
  - [6. 外部連携設計](#6-外部連携設計)


## 1. はじめに
本設計書では、「聖地巡礼日記サイト」の基本的な構成, 画面設計, システムの流れについて技術的視点から整理する。[要件定義](./requirements.md)をもおに、機能の実装方針を概略レベルで明記する。


## 2. システム構成図

```
/seichi-diary
    ├ /src
    │   ├ /app
    │   │   ├ /top (トップページ)
    │   │   │   ├ page.tsx (ページの要素)
    │   │   │   ├ style.module.css (ページのスタイル)
    │   │   │   ├ /assets (そのページでのみ使われる画像)
    │   │   │   └ /components (そのページでのみ使われるコンポーネント)
    │   │   ├ /blog (ブログページ)
    │   │   │   ├ page.tsx (ブログ一覧ページ)
    │   │   │   ├ style.module.css
    │   │   │   ├ /assets
    │   │   │   ├ /components
    │   │   │   └ /[blog_id] (各ブログ(ER図よりblog_idとする))
    │   │   ├ /profile (プロフィールページ)
    │   │   │   ├ page.tsx
    │   │   │   ├ style.module.css
    │   │   │   ├ /assets
    │   │   │   ├ /components
    │   │   │   └ /sns (SNS集ページ)
    │   │   │       ├ page.tsx
    │   │   │       ├ style.module.css
    │   │   │       ├ /assets
    │   │   │       ├ /components
    │   │   │       └ /tech-blog (技術記事ページ)
    │   │   │           ├ page.tsx
    │   │   │           ├ style.module.css
    │   │   │           ├ /assets
    │   │   │           └ /components
    │   │   ├ /sitemap (サイトマップページ)
    │   │   │   ├ page.tsx
    │   │   │   ├ style.module.css
    │   │   │   ├ /assets
    │   │   │   └ /components
    │   │   ├ /login (ログインページ)
    │   │   │   ├ page.tsx
    │   │   │   ├ style.module.css
    │   │   │   ├ /assets
    │   │   │   └ /components
    │   │   └ /contact (問い合わせページ)
    │   │       ├ page.tsx
    │   │       ├ style.module.css
    │   │       ├ types.ts
    │   │       ├ utils.ts
    │   │       ├ /assets
    │   │       └ /components
    │   ├ /features
    │   │   ├ /header
    │   │   │   ├ Header.tsx
    │   │   │   ├ Header.module.css
    │   │   │   ├ /assets (各コンポーネントの装飾用の画像)
    │   │   │   └ /components (各コンポーネントに属する子コンポーネント)
    │   │   │       └ /header-nav
    │   │   │           ├ HeaderNav.tsx;
    │   │   │           └ HeaderNav.module.css;
    │   │   ├ /sideNavL
    │   │   │   ├ SideNavL.tsx
    │   │   │   ├ SideNaL.module.css
    │   │   │   ├ /assets
    │   │   │   └ /components
    │   │   ├ /sideNavR
    │   │   │   ├ SideNavR.tsx
    │   │   │   ├ SideNavR.module.css
    │   │   │   ├ /assets
    │   │   │   └ /components
    │   │   └ /fotter
    │   │       ├ Fotter.tsx
    │   │       ├ Fotter.module.css
    │   │       └ /assets
    │   └ /styles
    │       ├ global.css
    │       ├ tailwind.css
    │       └ markdown.css
    ├ /public
    │   ├ /admin (管理者用ページ)
    │   │   ├ index.php
    │   │   ├ style.css
    │   │   ├ main.js
    │   │   └ admin-function.php (管理者用のページで使われる)
    │   ├ /api
    │   │   └ login.php
    │   └ /storage (Laravelのpublic/storage)
    ├ /laravel
    │   ├ /app (C&M)
    │   ├ /bootstrap (起動処理)
    │   ├ /config (設定ファイル)
    │   ├ /database (DB関連)
    │   ├ /public (Webサーバからアクセスされるファイル)
    │   ├ /resources (Saas)
    │   ├ /routes (ルーティングファイル群)
    │   ├ /tests (テスト用)
    │   ├ artisan (CLIコマンドツール)
    │   └ comoposer.json ()
    ├ /docs
    ├ README.md
    ├ /.next
    ├ node_modules
    ├ .gitignore
    ├ eslint.config.mjs
    ├ next-env.d.ts
    ├ next.config.ts
    ├ package-lock.json
    ├ package.json
    ├ postcss.config.mjs
    └ tsconfig.json
```


## 3. 画面設計
各画面・画面遷移をFigmaを用いて設計。
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/design/0qkyh9zAWA3J2saJhElteb/%E8%81%96%E5%9C%B0%E5%B7%A1%E7%A4%BC%E3%83%96%E3%83%AD%E3%82%B0?node-id=0-1&embed-host=share" allowfullscreen></iframe>


## 4. 機能設計
各機能の概要と処理の大まかな流れを記述する。
- ログイン処理
  - POSTで認証情報送信。PHPで照合
- 投稿処理
  - 画像. タイトル, 位置情報, 日付, アニメ名(×4)を送信し、DBに保存
- マップ表示
  - Google Map APIを使ってピン表示


## 5.データ構造
ER図・各テーブルの関係性を以下に示す。
![ER図](../src/img/ER図.png)


## 6. 外部連携設計
- Google Maps API