<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("admin")->insert([
            "username" => "SamemaruKongoLOVE1234",
            "password" => Hash::make("y@Z4v6YtMH8JLP33")
        ]);
    }
}
