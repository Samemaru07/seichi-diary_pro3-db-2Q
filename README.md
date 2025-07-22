# 聖地巡礼日記サイト

[![My Skills](https://skillicons.dev/icons?i=nextjs,nodejs,ts,js,laravel,php,html,css,tailwind,vite,mysql,aws)](https://skillicons.dev) & apache, vps, rocky linux, Let's Encrypt

## 0. 目次
- [聖地巡礼日記サイト](#聖地巡礼日記サイト)
  - [0. 目次](#0-目次)
  - [1. プロジェクト概要](#1-プロジェクト概要)
    - [主な特徴](#主な特徴)
    - [対象ユーザー](#対象ユーザー)
  - [2. 技術スタック](#2-技術スタック)
    - [フロントエンド](#フロントエンド)
    - [バックエンド](#バックエンド)
    - [インフラ・ツール](#インフラツール)
  - [3. 機能一覧](#3-機能一覧)
  - [4. セットアップ](#4-セットアップ)
    - [前提条件](#前提条件)
    - [フロントエンド（Next.js）](#フロントエンドnextjs)
    - [バックエンド（Laravel）](#バックエンドlaravel)
    - [データベース](#データベース)
  - [4. 使用方法](#4-使用方法)
    - [管理者機能](#管理者機能)
    - [一般ユーザー機能](#一般ユーザー機能)
  - [5. 環境変数](#5-環境変数)
    - [フロントエンド（.env.local）](#フロントエンドenvlocal)
    - [バックエンド（.env）](#バックエンドenv)
  - [6. コマンド一覧](#6-コマンド一覧)
    - [フロントエンド](#フロントエンド-1)
    - [バックエンド](#バックエンド-1)
    - [統合開発](#統合開発)
  - [7. トラブルシューティング](#7-トラブルシューティング)
    - [よくある問題](#よくある問題)
  - [8. プロジェクト構造](#8-プロジェクト構造)
  - [9. 開発者向け情報](#9-開発者向け情報)
    - [コーディング規約](#コーディング規約)
    - [テスト](#テスト)
    - [デプロイ](#デプロイ)
  - [10. ライセンス](#10-ライセンス)
  - [11. 貢献](#11-貢献)
  - [12. お問い合わせ](#12-お問い合わせ)


## 1. プロジェクト概要

**聖地巡礼日記サイト**は、アニメの"聖地"を訪れた記録を綴るブログです。

### 主な特徴
- 📝 聖地巡礼の日記投稿機能
- 🔍 高度な検索機能（作品名、キャラクター、日記内容）
- 🏷️ タグ機能（アニメ名、地域別分類）
- 💬 交流機能（いいね・コメント）
- 📱 レスポンシブデザイン（モバイル対応）

### 対象ユーザー
- アニメの聖地巡礼が好きなファン層（学生・社会人・性別問わず）

## 2. 技術スタック

### フロントエンド
- **Next.js 15.3.4** - Reactフレームワーク
- **TypeScript** - 型安全性
- **Tailwind CSS** - スタイリング
- **React Markdown** - マークダウン表示

### バックエンド
- **Laravel 12** - PHPフレームワーク
- **PHP 8.2+** - サーバーサイド言語
- **MySQL** - データベース

### インフラ・ツール
- **Vite** - ビルドツール
- **Apache** - Webサーバー
- **さくらのVPS (Rocky Linux)** - ホスティング
- **Let's Encrypt** - SSL証明書

## 3. 機能一覧

| 機能名               | 概要                                           | 実装状況 |
| -------------------- | ---------------------------------------------- | -------- |
| 日記の投稿           | タイトル+アニメ名+本文+写真+訪問日。編集可     | ✅        |
| 地図表示             | 各日記の訪問場所・今まで訪れた聖地をピン表示   | ✅        |
| 検索機能             | 作品名、登場キャラ、日記の文言等でブログを検索 | ✅        |
| タグ機能             | アニメ名の五十音・地方>都道府県のタグ検索      | ✅        |
| ログイン機能(管理者) | 自分の投稿の管理・作成機能                     | ✅        |
| 交流機能             | いいね・コメント機能                           | ✅        |
| モバイル対応         | スマホでも使えるレスポンシブ対応               | ✅        |

## 4. セットアップ

### 前提条件

- **Node.js** 18.0.0以上
- **PHP** 8.2以上
- **Composer** 最新版
- **MySQL** 8.0以上
- **Git** 最新版

### フロントエンド（Next.js）

```bash
# リポジトリをクローン
git clone https://github.com/Samemaru07/seichi-diary_pro3-db-2Q
cd seichi-diary/frontend

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

フロントエンドは `http://localhost:3000` でアクセス可能です。

### バックエンド（Laravel）

```bash
# バックエンドディレクトリに移動
cd ../backend

# 依存関係をインストール
composer install

# 環境変数ファイルをコピー
cp .env.example .env

# アプリケーションキーを生成
php artisan key:generate

# データベースマイグレーションを実行
php artisan migrate

# シーダーを実行（初期データ投入）
php artisan db:seed

# 開発サーバーを起動
php artisan serve
```

バックエンドは `http://localhost:8000` でアクセス可能です。

### データベース

```bash
# データベースを作成
mysql -u root -p
CREATE DATABASE seichi_diary;

# マイグレーション実行
php artisan migrate

# 初期データ投入 (順番通りに)
## 管理者用テーブル
php artisan db:seed --class=AdminTableSeeder
## 都道府県テーブル
php artisan db:seed --calss=PrefecturesTableSeeder
## 地方テーブル
php artisan db:seed --class=RegionTableSeeder
```

## 4. 使用方法

### 管理者機能
1. 管理画面にログイン
2. 新しい投稿を作成
3. アニメ情報を登録
4. 投稿を編集・削除

### 一般ユーザー機能
1. ブログ一覧を閲覧
2. タグや地域で検索
3. 投稿にいいね・コメント
4. 地図で聖地を確認

## 5. 環境変数

### フロントエンド（.env.local）
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### バックエンド（.env）
```env
# アプリケーション設定
APP_NAME="聖地巡礼日記サイト"
APP_KEY=base64:your-app-key-here
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

# データベース設定
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your-database
DB_USERNAME=your-username
DB_PASSWORD=your-password

# その他の設定は.env.exampleを参考にしてください
```

## 6. コマンド一覧

### フロントエンド
```bash
npm run dev          # 開発サーバー起動
npm run build        # プロダクションビルド
npm run start        # プロダクションサーバー起動
npm run lint         # ESLint実行
```

### バックエンド
```bash
php artisan serve                    # 開発サーバー起動
php artisan migrate                  # マイグレーション実行
php artisan migrate:rollback         # マイグレーションロールバック
php artisan db:seed                  # シーダー実行
php artisan make:controller Name     # コントローラー作成
php artisan make:model Name          # モデル作成
php artisan make:migration Name      # マイグレーション作成
php artisan route:list               # ルート一覧表示
php artisan config:cache             # 設定キャッシュ
php artisan view:clear               # viewキャッシュクリア
```

### 統合開発
```bash
# バックエンドディレクトリで実行
composer run dev
```

## 7. トラブルシューティング

### よくある問題

**1. ポートが既に使用されている**
```bash
# ポートを変更して起動
npm run dev -- -p 3001  # フロントエンド
php artisan serve --port=8001  # バックエンド
```

**2. データベース接続エラー**
- MySQLサービスが起動しているか確認
- データベース名、ユーザー名、パスワードが正しいか確認
- `.env`ファイルの設定を確認

**3. 依存関係のエラー**
```bash
# フロントエンド
rm -rf node_modules package-lock.json
npm install

# バックエンド
rm -rf vendor composer.lock
composer install
```

**4. キャッシュの問題**
```bash
php artisan config:clear
php artisan cache:clear
php artisan view:clear
```

## 8. プロジェクト構造

```
seichi-diary/
├── frontend/                 # Next.jsフロントエンド
│   ├── src/
│   │   ├── app/             # ページコンポーネント
│   │   ├── features/        # 機能コンポーネント
│   │   ├── context/         # React Context
│   │   └── lib/             # ユーティリティ
│   ├── public/              # 静的ファイル
│   └── package.json
├── backend/                  # Laravelバックエンド
│   ├── app/
│   │   ├── Http/Controllers/ # コントローラー
│   │   ├── Models/          # Eloquentモデル
│   │   └── Providers/       # サービスプロバイダー
│   ├── database/
│   │   ├── migrations/      # データベースマイグレーション
│   │   └── seeders/         # シーダー
│   ├── routes/              # ルート定義
│   └── composer.json
├── docs/                    # ドキュメント
│   ├── requirements.md      # 要件定義書
│   ├── basic-desig.md       # 基本設計書
│   └── detail-design.md     # 詳細設計書
└── README.md
```

## 9. 開発者向け情報

### コーディング規約
- TypeScriptの型定義を適切に行う
- ESLintルールに従う

### テスト
```bash
# フロントエンド
npm test

# バックエンド
php artisan test
```

### デプロイ
- フロントエンド: Vercel
- バックエンド: VPS (Rocky Linux)
- データベース: MySQL

---

## 10. ライセンス

このプロジェクトは個人開発の学習目的で作成されています。

## 11. 貢献

pullリクエストやissueの報告を歓迎します。


## 12. お問い合わせ

プロジェクトに関する質問や提案がありましたら、issueを作成してください。
もしくは、私のTeamsのアカウントまでお問い合わせください