<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class GoodController extends Controller
{
    public function good(Request $request, $id)
    {
        $post = Post::findOrFail($id);

        $liked = $request->input("liked");

        if ($liked) {
            $post->increment("good_number");
        } else {
            if ($post->good_number > 0) {
                $post->decrement("good_number");
            }
        }

        return response()->json([
            "message" => "いいね更新完了",
            "good_number" => $post->good_number
        ]);
    }
}
