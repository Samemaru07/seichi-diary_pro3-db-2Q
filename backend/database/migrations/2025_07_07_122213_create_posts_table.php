<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id("post_id");
            $table->string("title", 100)->nullable()->unique();
            $table->text("content")->nullable();
            $table->unsignedBigInteger("prefecture_id")->nullable();
            $table->unsignedBigInteger("anime_id")->nullable();
            $table->date("visit_day")->nullable();
            $table->timestamps();
            $table->unsignedBigInteger("good_number")->default(0);
            $table->text("status")->default("published")->nullable();
            $table->foreign("prefecture_id")
                ->references("prefecture_id")
                ->on("prefectures")
                ->onDelete("cascade");

            $table->foreign("anime_id")
                ->references("anime_id")
                ->on("animes")
                ->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
