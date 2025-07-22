<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('animes', function (Blueprint $table) {
            $table->id("anime_id");
            $table->string("anime_name", 100);
            $table->string("how_to_read1", 100)->nullable();
            $table->string("how_to_read2", 100)->nullable();
            $table->string("how_to_read3", 100)->nullable();
            $table->string("how_to_read4", 100)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('animes');
    }
};
