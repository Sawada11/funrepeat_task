# 顧客管理デモアプリ

このアプリは、簡易的なログイン画面と顧客一覧表示画面を持つフロントエンドアプリケーションです。ReactとBootstrapを使用して構築されています。

---

##  セットアップ手順

1. リポジトリをクローン

```bash
git clone https://github.com/your-username/
cd your-repo
```

2. 必要なパッケージをインストール

```bash
npm install
```

3. 開発サーバーを起動

```bash
npm start
```

アプリは [http://localhost:3000](http://localhost:3000) で表示されます。

---

##  使用技術・ライブラリ

- [React](https://reactjs.org/)（v18）
- [React Router DOM](https://reactrouter.com/)（ルーティング制御）
- [Bootstrap 5](https://getbootstrap.com/)（スタイリング）
- JavaScript (ES6)

---

## 実装機能

###  ログイン画面
- ユーザー名とパスワードの入力（admin / password でログイン可）
- ログイン成功時、顧客一覧画面へ遷移

###  顧客一覧画面
- ログイン後に閲覧可能
- 顧客情報をテーブル形式で表示（名前・会社名・電話番号・登録日）
- 顧客名・会社名での検索機能あり
- ログアウトボタンでログイン画面に戻る

---

##  動作確認方法

1. 開発サーバーを起動
   ```bash
   npm start
   ```

2. ログイン画面で以下を入力：
   - ユーザー名: `admin`
   - パスワード: `password`

3. 顧客管理画面に遷移し、顧客一覧や検索機能が使えることを確認

4. 「ログアウト」ボタンでログイン画面に戻ることを確認

---

##  ディレクトリ構成（抜粋）

```
src/
├── App.js
├── components/
│   ├── Login.jsx
│   └── CustomerList.jsx
├── data/
│   └── Customers.js
├── index.js
```

---

##  備考

このアプリはフロントエンドのみで構成されており、バックエンドやデータベースとの連携は行っていません。

---
