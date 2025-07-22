<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    @vite(["public/css/global.css", "public/css/admin/style.css", "public/js/main.js"])
    <title>ログイン</title>
</head>
<body>


    <h1>管理者用ページ</h1>

    <form action="{{ route('admin.login') }}" method="POST">
        @csrf
        <label>User name
            <input type="text" name="username">
        </label>
        <label>Password
            <input type="password" name="password">
        </label>
        <button type="submit" id="btn">Login</button>
    </form>
    @if ($errors->has('login'))
        <div class="errorMessage">
            {{ $errors->first('login') }}
        </div>
    @endif
</body>
</html>
