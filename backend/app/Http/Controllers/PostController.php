<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use League\CommonMark\CommonMarkConverter;

class PostController extends Controller
{
    public function destroy($id)
    {
        $postId = $id;

        Post::where("post_id", $postId)->delete();

        return redirect()->route("dashboard")->with("success", "削除しました");
    }

    public function edit($id)
    {
        $post = Post::with('tags')->findOrFail($id);
        $animes = DB::table('animes')->get();
        $prefectures = [
            '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
            '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
            '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県',
            '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県',
            '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県',
            '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県',
            '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
        ];
        $tagNames = $post->tags->pluck('tag_name')->implode(',');
        return view('admin.dashboard.edit.index', compact('post', 'animes', 'prefectures', 'tagNames'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $post = Post::findOrFail($id);
        $post->title = $request->input('title');
        $post->content = $request->input('content');
        $post->save();

        // タグの保存・紐付け処理を追加
        if ($request->filled('newTags')) {
            $tagNames = explode(',', $request->input('newTags'));
            $tagNames = array_unique(array_filter(array_map('trim', $tagNames)));

            $tagIds = [];
            foreach ($tagNames as $tagName) {
                $tag = \App\Models\TagList::firstOrCreate(['tag_name' => $tagName]);
                $tagIds[] = $tag->tag_id;
            }
            $post->tags()->sync($tagIds);
        } else {
            $post->tags()->detach();
        }

        return redirect()->route('posts.edit', $id)->with('success', '投稿を更新しました');
    }

}
