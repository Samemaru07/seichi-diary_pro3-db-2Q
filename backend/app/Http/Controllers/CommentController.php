<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommentController extends Controller
{
    public function getComments($postId)
    {
        $comments = Comment::with([
            "replies" => function ($query) {
                $query->orderBy('created_at', 'asc');
            }
        ])
            ->where('post_id', $postId)
            ->whereNull('parent_id') // 親だけ
            ->orderBy('created_at', 'asc')
            ->get();

        return response()->json([
            'comments' => $comments,
        ]);
    }

    public function store(Request $request, $id)
    {
        $validated = $request->validate([
            'user_name' => 'required|string|max:255',
            'content' => 'required|string',
            'parent_id' => 'nullable|exists:comments,comment_id',
        ]);

        $comment = Comment::create([
            'post_id' => $id,
            'parent_id' => $validated['parent_id'] ?? null,
            'user_name' => $validated['user_name'],
            'content' => $validated['content'],
        ]);

        return response()->json(['comment' => $comment], 201);
    }
}
