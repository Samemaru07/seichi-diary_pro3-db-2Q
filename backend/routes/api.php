<?php

use App\Http\Controllers\Api\PostApiController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\GoodController;
use App\Http\Controllers\TagController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// 最近投稿されたもの上位3件
Route::get("/posts/latest", [PostApiController::class, "index"])->name("api.get");

// 人気記事上位3件
Route::get("/posts/popular", [PostApiController::class, "popular"]);

// ブログ全取得
Route::get("/posts/get-all", [PostApiController::class, "getAll"]);

// ブログ表示
Route::get("/posts/{id}", [PostApiController::class, "show"]);

// ○行のアニメ一覧
Route::get("/animes/by-read", [PostApiController::class, "getByRead"]);

// ○○県のアニメ一覧
Route::get("/animes/prefecture/{id}", [PostApiController::class, "getByPref"]);

// アニメごとの記事取得
Route::get("/animes/blog/{id}", [PostApiController::class, "getByAnime"]);

// タグ取得
Route::get("/tag", [TagController::class, "getTags"]);

// 各タグの記事取得
Route::get("/posts/by-tag/{id}", [PostApiController::class, "getByTag"]);

// コメント取得
Route::get("/posts/{id}/comments", [CommentController::class, "getComments"]);

// いいね
Route::post("/posts/{id}/like", [GoodController::class, "good"]);

// コメント追加
Route::post("/posts/{id}/comments", [CommentController::class, "store"]);

// コメント返信
Route::post('/posts/{id}/comments/replies', [CommentController::class, 'store']);

