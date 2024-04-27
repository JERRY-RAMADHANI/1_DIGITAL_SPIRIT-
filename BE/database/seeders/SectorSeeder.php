<?php

namespace Database\Seeders;

use App\Models\Sector;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SectorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Sector::create([
            'nama_sektor' => 'Sektor 2',
            'lokasi_sektor' => 'Barat daya',
            'total_konsumsi_kompos' => 75.00,
            'deskripsi_singkat_sektor' => 'Sektor Jerapah'
        ]);
    }
}
