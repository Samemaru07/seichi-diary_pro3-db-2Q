<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostFindController extends Controller
{
    public function postFind(Request $request)
    {
        $query = Post::query();

        if ($request->filled("keyword")) {
            $query->where("content", "LIKE", "%" . $request->keyword . "%");
        }

        if ($request->filled("form_date")) {
            $query->whereDate("created_at", ">=", $request->from_date);
        }

        if ($request->filled("to_date")) {
            $query->whereDate("created_at", "<=", $request->to_date);
        }

        $order = $request->order ?? "desc";
        $query->orderBy("created_at", $order);

        $posts = $query->get();

        return view("admin.index", compact("posts"));
    }
}
