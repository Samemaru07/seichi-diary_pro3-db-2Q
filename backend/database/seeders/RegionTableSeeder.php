<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RegionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $regions = [
            "北海道",
            "東北地方",
            "関東地方",
            "中部地方",
            "近畿地方",
            "中国地方",
            "四国地方",
            "九州地方",
            "沖縄県"
        ];

        foreach ($regions as $region)
        {
            DB::table("regions")->insert([
                "region_name" => $region
            ]);
        }
    }
}
