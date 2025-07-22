<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\TagList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class StoreController extends Controller
{
    public function store(Request $request)
    {
        try {
            $request->validate([
                "status" => "string"
            ]);

            $status = $request->status;
            if ($status == "draft") {
                $request->validate([
                    "title" => "required|nullable|string",
                    "anime_id" => "sometimes|nullable|integer",
                    "prefecture_id" => "sometimes|nullable|integer",
                    "visit_day" => "sometimes|nullable|date",
                    "content" => "sometimes|nullable|string",
                ]);

                $post = Post::create([
                    "title" => $request->title,
                    "anime_id" => $request->anime_id,
                    "prefecture_id" => $request->prefecture_id,
                    "visit_day" => $request->visit_day,
                    "content" => $request->content,
                    "status" => $request->status
                ]);

                if ($request->filled("newTags")) {
                    $tagNames = explode(",", $request->input("newTags"));
                    $tagNames = array_unique(array_filter(array_map("trim", $tagNames)));

                    foreach ($tagNames as $tagName) {
                        $tag = TagList::firstOrCreate([
                            "tag_name" => $tagName
                        ]);

                        $post->tags()->syncWithoutDetaching([$tag->tag_id]);
                    }
                }

                return redirect()->route("post.create")->with("success", "投稿完了");

            } else {
                $request->validate([
                    "title" => "required|nullable|string",
                    "anime_id" => "sometimes|nullable|integer",
                    "prefecture_id" => "sometimes|nullable|integer",
                    "visit_day" => "sometimes|nullable|date",
                    "content" => "sometimes|nullable|string",
                ]);

                $post = Post::create([
                    "title" => $request->title,
                    "anime_id" => $request->anime_id,
                    "prefecture_id" => $request->prefecture_id,
                    "visit_day" => $request->visit_day,
                    "content" => $request->content,
                    "status" => $request->status
                ]);

                if ($request->filled("newTags")) {
                    $tagNames = explode(",", $request->input("newTags"));
                    $tagNames = array_unique(array_filter(array_map("trim", $tagNames)));

                    foreach ($tagNames as $tagName) {
                        $tag = TagList::firstOrCreate([
                            "tag_name" => $tagName
                        ]);

                        $post->tags()->syncWithoutDetaching([$tag->tag_id]);
                    }
                }

                return redirect()->route("post.create")->with("success", "投稿完了");
            }
        } catch (\Throwable $e) {
            return redirect()->route("post.create")->with("error", $e->getMessage());
        }
    }
}
