<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Sector::create([
            'nama_sektor' => 'mamalia 1',
            'lokasi_sektor' => 'Barat daya',
            'total_konsumsi_kompos' => 75.00,
            'deskripsi_singkat_sektor' => 'Sektor Jerapah'
        ]);
    }
}
