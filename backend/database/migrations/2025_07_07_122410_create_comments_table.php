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
        Schema::create('comments', function (Blueprint $table) {
            $table->id("comment_id");
            $table->string("user_name", 20);
            $table->text("content");
            $table->timestamps();
            $table->unsignedBigInteger("post_id");
            $table->unsignedBigInteger("parent_id")->nullable();

            $table->foreign("post_id")
                ->references(columns: "post_id")
                ->on("posts")
                ->onDelete("cascade");

            $table->foreign("parent_id")
                ->references("comment_id")
                ->on("comments")
                ->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
