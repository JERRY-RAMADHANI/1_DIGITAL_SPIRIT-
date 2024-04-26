<?php

namespace Database\Seeders;

use App\Models\Kompos;
use App\Models\Sektor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KomposSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Kompos::create([
            'jumlah' => '200',
        ]);
    }
}
