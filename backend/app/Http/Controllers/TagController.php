<?php

namespace App\Http\Controllers;

use App\Models\TagList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TagController extends Controller
{
    public function getTags()
    {
        $tags = DB::table("post_tag")
        ->select("tag_lists.tag_id", "tag_lists.tag_name", DB::raw("COUNT(post_tag.post_id) as usage_count"))
        ->join("tag_lists", "post_tag.tag_id", "tag_lists.tag_id")
        ->groupBy("post_tag.tag_id", "tag_lists.tag_name", "tag_lists.tag_id")
        ->orderBy("usage_count", "desc")
        ->limit(6)
        ->get();

        return response()->json(["tags" => $tags]);
    }
}
