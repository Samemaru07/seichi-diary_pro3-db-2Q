<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::where("status", "published")->orderBy("created_at", "desc")->take(3)->get();

        return compact("posts");
    }

    public function popular()
    {
        $posts = Post::where("status", "published")->orderBy("good_number", "desc")->take(3)->get();

        return compact("posts");
    }

    public function getAll(Request $request)
    {
        $keyword = $request->query('keyword');
        $sort = $request->query('sort', 'new');
        $prefectureId = $request->query('prefecture_id');

        $query = Post::with('anime')->where('status', 'published');

        if ($keyword) {
            $query->where(function ($q) use ($keyword) {
                $q->where("title", "like", "%{$keyword}%")
                    ->orWhere("content", "like", "%{$keyword}%")
                    ->orWhereHas("anime", function ($q2) use ($keyword) {
                        $q2->where("anime_name", "like", "%{$keyword}%");
                    });
            });
        }

        if ($prefectureId) {
            $query->where('prefecture_id', $prefectureId);
        }

        if ($sort === 'new') {
            $query->orderBy('created_at', 'desc');
        } elseif ($sort === 'old') {
            $query->orderBy('created_at', 'asc');
        } elseif ($sort === 'good') {
            $query->orderBy('good_number', 'desc');
        }

        $posts = $query->get();

        return compact('posts');
    }



    public function show(string $id)
    {
        $posts = Post::where('status', 'published')->findOrFail($id);
        return response()->json(compact("posts"));
    }

    private function getKanaRange(string $id)
    {
        $kanaMap = [
            "1" => ["あ", "い", "う", "え", "お", "ア", "イ", "ウ", "エ", "オ"],
            "2" => ["か", "き", "く", "け", "こ", "が", "ぎ", "ぐ", "げ", "ご", "カ", "キ", "ク", "ケ", "コ", "ガ", "ギ", "グ", "ゲ", "ゴ"],
            "3" => ["さ", "し", "す", "せ", "そ", "ざ", "じ", "ず", "ぜ", "ぞ", "サ", "シ", "ス", "セ", "ソ", "ザ", "ジ", "ズ", "ゼ", "ゾ"],
            "4" => ["た", "ち", "つ", "て", "と", "だ", "ぢ", "づ", "で", "ど", "タ", "チ", "ツ", "テ", "ト", "ダ", "ヂ", "ヅ", "デ", "ド"],
            "5" => ["な", "に", "ぬ", "ね", "の", "ナ", "ニ", "ヌ", "ネ", "ノ"],
            "6" => ["は", "ひ", "ふ", "へ", "ほ", "ば", "び", "ぶ", "べ", "ぼ", "ぱ", "ぴ", "ぷ", "ぺ", "ぽ", "ハ", "ヒ", "フ", "ヘ", "ホ", "バ", "ビ", "ブ", "ベ", "ボ", "パ", "ピ", "プ", "ペ", "ポ"],
            "7" => ["ま", "み", "む", "め", "も", "マ", "ミ", "ム", "メ", "モ"],
            "8" => ["や", "ゆ", "よ", "ヤ", "ユ", "ヨ"],
            "9" => ["ら", "り", "る", "れ", "ろ", "ラ", "リ", "ル", "レ", "ロ"],
            "10" => ["わ", "を", "ん", "ワ", "ヲ", "ン"]
        ];

        return $kanaMap[$id] ?? [];
    }

    public function getByRead(Request $request)
    {
        $id = $request->query("id");

        $kanaList = $this->getKanaRange($id);

        if (empty($kanaList)) {
            return response()->json(["animes" => []]);
        }

        $animes = DB::table("animes")
            ->where(column: function ($query) use ($kanaList) {
                foreach ($kanaList as $kana) {
                    $query->orWhere("how_to_read1", "like", "{$kana}%");
                }
            })
            ->select("anime_id", "anime_name", "how_to_read1")
            ->orderBy("how_to_read1")
            ->get();

        return response()->json(["animes" => $animes]);
    }

    public function getByPref($id)
    {
        $prefectureId = $id;

        if (!$prefectureId || $prefectureId < 1 || $prefectureId > 47) {
            return response()->json(["posts" => []]);
        }

        $posts = DB::table("posts")
            ->select("post_id", "title", "animes.anime_name")
            ->leftJoin("animes", "posts.anime_id", "=", "animes.anime_id")
            ->where("prefecture_id", $prefectureId)
            ->where("posts.status", "published")
            ->orderBy("created_at", "desc")
            ->get();

        return response()->json(["posts" => $posts]);
    }

    public function getByAnime($id)
    {
        $animeId = $id;

        if (!$animeId) {
            return response()->json(["posts" => []]);
        }

        $posts = DB::table("posts")
            ->where("anime_id", $animeId)
            ->where("status", "published")
            ->orderBy("created_at", "desc")
            ->get();

        return response()->json(["posts" => $posts]);
    }

    public function getByTag($id)
    {
        $tagId = $id;

        if (!$tagId) {
            return response()->json(["posts" => []]);
        }

        $posts = DB::table("posts")
            ->join("post_tag", "posts.post_id", "=", "post_tag.post_id")
            ->leftJoin("animes", "posts.anime_id", "=", "animes.anime_id")
            ->where("post_tag.tag_id", $tagId)
            ->where("posts.status", "published")
            ->select("posts.*", "animes.anime_name")
            ->orderBy("created_at", "desc")
            ->get();

        return response()->json(["posts" => $posts]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
