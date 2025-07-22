<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TagList extends Model
{
    use HasFactory;

    protected $table = "tag_lists";
    protected $primaryKey = "tag_id";
    protected $fillable = ["tag_name"];

    public $timestamps = false;
}
