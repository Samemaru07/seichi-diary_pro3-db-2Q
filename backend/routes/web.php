<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminLoginController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CreateController;
use App\Http\Controllers\GetLinkController;
use App\Http\Controllers\GetTitleController;
use App\Http\Controllers\GoodController;
use App\Http\Controllers\NewAnimeRegisterController;
use App\Http\Controllers\PostApiController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostFindController;
use App\Http\Controllers\StoreController;

/* 公開ルート */

// トップページ（Next.js で処理される前提なら不要かも）
Route::get('/', function () {
    return view('welcome');
});


/* 管理ルート全体を /admin 配下に統一 */
Route::prefix('admin')->group(function () {

    Route::get('/admin/test', function () {
    return 'Laravel is OK';
});


    // ログインフォーム表示
    Route::get('/', function () {
        return view('admin.index');
    })->name('admin.form');

    // ログイン処理
    Route::post('/login', [AdminLoginController::class, 'login'])->name('admin.login');

    // ログイン済みユーザー専用ルート
    Route::middleware(['admin.auth'])->group(function () {

        // ダッシュボード
        Route::get('/dashboard', [GetTitleController::class, 'getTitle'])->name('dashboard');

        // 投稿削除
        Route::delete('/posts/{id}', [PostController::class, 'destroy'])->name('posts.destroy');

        // 投稿編集
        Route::get('/dashboard/edit/{id}', [PostController::class, 'edit'])->name('posts.edit');

        // 投稿更新
        Route::put('/dashboard/update/{id}', [PostController::class, 'update'])->name('posts.update');

        // 投稿検索
        Route::get('/search', [PostFindController::class, 'postFind'])->name('post.find');

        // 新規投稿画面
        Route::get('/dashboard/create', [CreateController::class, 'create'])->name('post.create');

        // 投稿保存
        Route::post('/posts/store', [StoreController::class, 'store'])->name('posts.store');

        // AWS S3画像アップロード
        Route::post('/dashboard/create/upload-image', [GetLinkController::class, 'getLink'])->name('aws.getLink');

        // 新規アニメ登録
        Route::post('/dashboard/create/new-anime-register', [NewAnimeRegisterController::class, 'newAnimeRegister'])->name('create.anime');

    });
});
