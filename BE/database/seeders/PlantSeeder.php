<?php

namespace Database\Seeders;

use App\Models\Plant;
use App\Models\Sector;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

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
