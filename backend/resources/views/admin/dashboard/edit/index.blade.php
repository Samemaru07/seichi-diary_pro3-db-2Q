<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>投稿編集</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/easymde/dist/easymde.min.css">
    <link
        href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Yusei+Magic&family=Zen+Maru+Gothic&display=swap"
        rel="stylesheet">
    @vite(['public/css/global.css', 'public/css/edit/style.css'])
</head>

<body>
    <h1>投稿を編集</h1>

    <form action="/dashboard/update/{{ $post->post_id }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <div class="form-group">
            <label for="title">タイトル:</label>
            <input type="text" name="title" id="title" class="formControl"
                value="{{ old('title', $post->title) }}">
        </div>

        <button id="animeNameBtn" class="animeNameBtn" type="button">アニメ名</button>
        <div id="animeNameContainer" class="animeNameContainer" style="display: none;">
            <lable class="animeNameWrapper">
                @foreach ($animes as $anime)
                    <label class="animeLabel">
                        <input type="radio" name="anime_id" value="{{ $anime->anime_id }}" {{ (old('anime_id', $post->anime_id) == $anime->anime_id) ? 'checked' : '' }}>
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
                    <input type="radio" name="prefecture_id" value="{{ $i + 1 }}" {{ (old('prefecture_id', $post->prefecture_id) == ($i + 1)) ? 'checked' : '' }}>
                    {{ $i + 1 . '.' . $prefectures[$i] }}
                </label>
            @endfor
        </div>

        <div>
            <label>タグ(カンマ区切り)
                <input type="text" name="newTags" class="tags" value="{{ old('newTags', $tagNames) }}">
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
                <input type="date" name="visit_day" class="visitDay" value="{{ old('visit_day', $post->visit_day) }}">
            </label>
        </div>

        <div class="form-group">
            <label for="markdown-editor">本文 (Markdown):</label>
            <textarea id="markdown-editor" name="content" class="formControl">{{ old('content', $post->content) }}</textarea>
        </div>

        <button type="submit" class="submitBtn">更新</button>
    </form>

    <script src="https://unpkg.com/easymde/dist/easymde.min.js"></script>
    <script>
        new EasyMDE({
            element: document.getElementById("markdown-editor"),
            spellChecker: false,
            placeholder: "ここにMarkdownを入力してください…"
        });
    </script>
    @vite(['public/js/main.js', 'public/js/upload.js', 'public/js/anime-register.js'])
    <script>
        csrfToken = "{{ csrf_token() }}";
        const uploadUrl = "{{ route('aws.getLink') }}";
    </script>
</body>

</html>
