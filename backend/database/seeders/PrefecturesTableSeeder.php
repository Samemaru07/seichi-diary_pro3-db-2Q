<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PrefecturesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $prefectures = [
            // 北海道地方
            ['prefecture_name' => '北海道', 'region_id' => 1],

            // 東北地方
            ['prefecture_name' => '青森県', 'region_id' => 2],
            ['prefecture_name' => '岩手県', 'region_id' => 2],
            ['prefecture_name' => '宮城県', 'region_id' => 2],
            ['prefecture_name' => '秋田県', 'region_id' => 2],
            ['prefecture_name' => '山形県', 'region_id' => 2],
            ['prefecture_name' => '福島県', 'region_id' => 2],

            // 関東地方
            ['prefecture_name' => '茨城県', 'region_id' => 3],
            ['prefecture_name' => '栃木県', 'region_id' => 3],
            ['prefecture_name' => '群馬県', 'region_id' => 3],
            ['prefecture_name' => '埼玉県', 'region_id' => 3],
            ['prefecture_name' => '千葉県', 'region_id' => 3],
            ['prefecture_name' => '東京都', 'region_id' => 3],
            ['prefecture_name' => '神奈川県', 'region_id' => 3],

            // 中部地方
            ['prefecture_name' => '新潟県', 'region_id' => 4],
            ['prefecture_name' => '富山県', 'region_id' => 4],
            ['prefecture_name' => '石川県', 'region_id' => 4],
            ['prefecture_name' => '福井県', 'region_id' => 4],
            ['prefecture_name' => '山梨県', 'region_id' => 4],
            ['prefecture_name' => '長野県', 'region_id' => 4],
            ['prefecture_name' => '岐阜県', 'region_id' => 4],
            ['prefecture_name' => '静岡県', 'region_id' => 4],
            ['prefecture_name' => '愛知県', 'region_id' => 4],

            // 近畿地方
            ['prefecture_name' => '三重県', 'region_id' => 5],
            ['prefecture_name' => '滋賀県', 'region_id' => 5],
            ['prefecture_name' => '京都府', 'region_id' => 5],
            ['prefecture_name' => '大阪府', 'region_id' => 5],
            ['prefecture_name' => '兵庫県', 'region_id' => 5],
            ['prefecture_name' => '奈良県', 'region_id' => 5],
            ['prefecture_name' => '和歌山県', 'region_id' => 5],

            // 中国地方
            ['prefecture_name' => '鳥取県', 'region_id' => 6],
            ['prefecture_name' => '島根県', 'region_id' => 6],
            ['prefecture_name' => '岡山県', 'region_id' => 6],
            ['prefecture_name' => '広島県', 'region_id' => 6],
            ['prefecture_name' => '山口県', 'region_id' => 6],

            // 四国地方
            ['prefecture_name' => '徳島県', 'region_id' => 7],
            ['prefecture_name' => '香川県', 'region_id' => 7],
            ['prefecture_name' => '愛媛県', 'region_id' => 7],
            ['prefecture_name' => '高知県', 'region_id' => 7],

            // 九州地方
            ['prefecture_name' => '福岡県', 'region_id' => 8],
            ['prefecture_name' => '佐賀県', 'region_id' => 8],
            ['prefecture_name' => '長崎県', 'region_id' => 8],
            ['prefecture_name' => '熊本県', 'region_id' => 8],
            ['prefecture_name' => '大分県', 'region_id' => 8],
            ['prefecture_name' => '宮崎県', 'region_id' => 8],
            ['prefecture_name' => '鹿児島県', 'region_id' => 8],

            // 沖縄県
            ['prefecture_name' => '沖縄県', 'region_id' => 9]
        ];

        foreach ($prefectures as $prefecture) {
            DB::table("prefectures")->insert([
                "prefecture_name" => $prefecture["prefecture_name"],
                "region_id" => $prefecture["region_id"]
            ]);
        }
    }
}
