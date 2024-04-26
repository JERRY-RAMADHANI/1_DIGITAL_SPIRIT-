<?php

namespace Database\Seeders;

use App\Models\Sektor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SektorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Sektor::create([
            'Nama' => 'test',
            'Lokasi' => 'test',
            'Deskripsi' => 'test',
            'Total_konsumsi_Kompos' => 20
        ]);
    }
}
