<?php

namespace App\Models;

use App\Http\Controllers\Api\PostApiController;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $primaryKey = "post_id";

    protected $fillable = [
        'title',
        'anime_id',
        "content",
        "region_id",
        "visit_day",
        "prefecture_id",
        "status",
        // 他にも保存したいカラムがあればここに追加
    ];

    public function anime()
    {
        return $this->belongsTo(Anime::class, "anime_id");
    }

    public function tags()
    {
        return $this->belongsToMany(TagList::class, "post_tag", "post_id", "tag_id");
    }

}
