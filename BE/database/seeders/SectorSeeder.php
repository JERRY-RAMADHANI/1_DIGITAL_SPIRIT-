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
            'nama_sektor' => 'Mamalia 1',
            'lokasi_sektor' => 'Barat daya',
            'total_konsumsi_kompos' => 75.00,
            'deskripsi_singkat_sektor' => 'Sektor Jerapah'
        ]);

        Sector::create([
            'nama_sektor' => 'Mamalia 2',
            'lokasi_sektor' => 'Barat',
            'total_konsumsi_kompos' => 60.00,
            'deskripsi_singkat_sektor' => 'Sektor Jerapah'
        ]);
        Sector::create([
            'nama_sektor' => 'Mamalia 3',
            'lokasi_sektor' => 'Barat',
            'total_konsumsi_kompos' => 50.00,
            'deskripsi_singkat_sektor' => 'Sektor Jerapah'
        ]);
        Sector::create([
            'nama_sektor' => 'Reptil 1',
            'lokasi_sektor' => 'Barat',
            'total_konsumsi_kompos' => 80.00,
            'deskripsi_singkat_sektor' => 'Sektor Jerapah'
        ]);
        Sector::create([
            'nama_sektor' => 'Reptil 2',
            'lokasi_sektor' => 'Barat',
            'total_konsumsi_kompos' => 100.00,
            'deskripsi_singkat_sektor' => 'Sektor Jerapah'
        ]);
    }
}
