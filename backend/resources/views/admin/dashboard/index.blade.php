<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite(['public/css/global.css', 'public/css/dashboard/style.css'])
    <title>編集</title>
</head>
<body>
    <h1>管理者用ページ</h1>
    @if (session('success'))
        {{ session('success') }}
    @endif
    <div class="aboveWrapper">
        <a href="/admin/dashboard/create" class="newBlogBtn">新規投稿</a>
        <form action="/admin/search" method="GET" class="queryForm">
            @csrf
            <input type="text" name="keyword" placeholder="投稿内容で検索" class="searchBox">
            <label>投稿日：
                <input type="date" name="from_date">
                ～
                <input type="date" name="to_date">
                <select name="order">
                    <option value="desc">新しい順</option>
                    <option value="asc">古い順</option>
                </select>
                <button type="submit">検索</button>
            </label>
        </form>
    </div>
    <div class="blogsWrapper">
        @foreach ($posts as $post)
            <div class="blogBox">
                <h3>{{ $post->title }}</h3>
                <p>{{ $post->content }}</p>
                <div class="btnsWrapper">
                    <a href="/admin/dashboard/edit/{{ $post->post_id }}" class="editBtn">編集</a>
                    <form action="/admin/posts/{{ $post->post_id }}" method="POST"
                        onsubmit="return confirm('本当に削除しますか？')">
                        @csrf
                        @method('DELETE')
                        <input type="submit" value="削除" class="deleteBtn">
                    </form>
                </div>
            </div>
        @endforeach
    </div>
</body>
</html> 
