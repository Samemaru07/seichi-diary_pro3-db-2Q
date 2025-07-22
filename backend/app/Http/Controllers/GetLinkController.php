<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GetLinkController extends Controller
{
    public function getLink(Request $request)
    {
        try {
            $request->validate([
                "image" => "image"
            ]);

            $path = $request->file("image")->store("images", "s3");
            if (!method_exists(Storage::disk("s3"), "url")) {
                throw new \Exception("Storage::disk('s3')->url メソッドが存在しません。設定やバージョンを確認してください。");
            }
            $url = Storage::disk("s3")->url($path);

            return response()->json(["url" => $url]);
        } catch (\Throwable $e) {
            return response()->json(["error" => $e->getMessage()], 500);
        }
    }
}
