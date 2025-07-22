<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GetTitleController extends Controller
{
    public function getTitle()
    {
        $posts = DB::table("posts")->get();
        return view("admin.dashboard.index", compact("posts"));
    }
}
