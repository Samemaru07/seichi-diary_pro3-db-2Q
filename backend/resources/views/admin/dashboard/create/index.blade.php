<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://unpkg.com/easymde/dist/easymde.min.css">
    @vite(['public/css/global.css', 'public/css/create/style.css'])
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Yusei+Magic&family=Zen+Maru+Gothic&display=swap"
        rel="stylesheet">
    <title>新規作成</title>
</head>

<body id="createPage">

    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    @if (session('error'))
        <div class="alert alert-danger">
            {{ session('error') }}
        </div>
    @endif

    <div class="topWrapper">
        <h1>新規作成ページ</h1>

        <a href="{{ route('dashboard') }}" class="backDashboard">ダッシュボードへ戻る</a>
    </div>

    <form action="{{ route('posts.store') }}" method="POST" enctype="multipart/form-data">
        @csrf

        <div class="titleAnimeWrapper">
            <label class="titleWrapper">タイトル
                <input type="text" name="title" required class="titleBox">
            </label>
        </div>

        <button id="animeNameBtn" class="animeNameBtn" type="button">アニメ名</button>
        <div id="animeNameContainer" class="animeNameContainer" style="display: none;">
            <lable class="animeNameWrapper">
                @foreach ($animes as $anime)
                    <label class="animeLabel">
                        <input type="radio" name="anime_id" value="{{ $anime->anime_id }}">
                        {{ $anime->anime_name }}
                    </label>
                @endforeach
                <label class="newAnimeBox">なければ登録 (読み1はフル平仮名(スペースあり))
                    <input type="text" name="new_anime_name" id="newAnimeName" class="newAnimeName"
                        placeholder="アニメ名">
                    @for ($i = 1; $i < 5; $i++)
                        <label>読み{{ $i }}
                            <input type="text" name="how_to_read{{ $i }}" class="readsBox"
                                id="howToRead{{ $i }}">
                        </label>
                    @endfor
                    <button type="button" id="newAnimeRegisterBtn" class="regionNewAnime">アニメ登録</button>
                </label>
            </lable>
        </div>

        <button id="prefecture-btn" class="prefectureBtn" type="button">都道府県</button>
        <div id="prefecture-container" style="display: none; margin-top: 10px;">
            @for ($i = 0; $i < 47; $i++)
                <label style="display: inline-block;" class="prefectures">
                    <input type="radio" name="prefecture_id" value="{{ $i + 1 }}">
                    {{ $i + 1 . '.' . $prefectures[$i] }}
                </label>
            @endfor
        </div>

        <div>
            <label>タグ(カンマ区切り)
                <input type="text" name="newTags" class="tags">
            </label>
        </div>

        <div class="imageWrapper">
            <label>画像(AWS s3/imagesディレクトリへの送信)
                <input type="file" name="image" id="imageInput">
            </label>
            <button type="button" id="imageGetLinkBtn">リンク取得</button>
            <p id="uploadStatus"></p>
            <p id="getUrl"></p>
            <button type="button" id="urlCopyBtn" class="urlCopyBtn">コピー</button>
        </div>

        <div class="dateWrapper">
            <label>訪問日
                <input type="date" name="visit_day" class="visitDay">
            </label>
        </div>

        <div class="contentWrapper">
            <label for="contentTitle" class="contentTitle">本文</label>
            <textarea name="content" id="markdown-editor" class="contentBox"></textarea>

            <script src="https://unpkg.com/easymde/dist/easymde.min.js"></script>
            <script>
                new EasyMDE({
                    element: document.getElementById("markdown-editor")
                    spellChecker: false
                });
            </script>
        </div>

        <input type="hidden" name="status" id="postStatus" value="draft">
        <input type="button" value="投稿" id="storeBtn" class="submitBtn">
        <input type="button" value="下書き保存" id="draftBtn" class="draftBtn">
    </form>

    @vite(['public/js/main.js', 'public/js/upload.js', 'public/js/anime-register.js'])
    <script>
        csrfToken = "{{ csrf_token() }}";
        const uploadUrl = "{{ route('aws.getLink') }}";
    </script>
</body>

</html>
