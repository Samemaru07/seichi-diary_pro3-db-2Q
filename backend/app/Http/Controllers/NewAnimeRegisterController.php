<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NewAnimeRegisterController extends Controller
{
    public function newAnimeRegister(Request $request)
    {
        try {
            $request->validate([
                "new_anime_name" => "required|string",
                "how_to_read1" => "nullable|string",
                "how_to_read2" => "nullable|string",
                "how_to_read3" => "nullable|string",
                "how_to_read4" => "nullable|string",
            ]);

            $anime_id = DB::table("animes")->insertGetId([
                "anime_name" => $request->new_anime_name,
                "how_to_read1" => $request->how_to_read1,
                "how_to_read2" => $request->how_to_read2,
                "how_to_read3" => $request->how_to_read3,
                "how_to_read4" => $request->how_to_read4
            ]);

            return response()->json([
                "anime_id" => $anime_id,
                "anime_name" => $request->new_anime_name
            ]);

        } catch (\Throwable $e) {
            return response()->json([
                "error" => $e->getMessage()
            ], 500);
        }
    }
}
