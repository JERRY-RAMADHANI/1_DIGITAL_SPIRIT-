<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use App\Models\Trash;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Sector;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Role::create([
        //     'jenis_role' => 'Petugas Pembersih Sampah',
        // ]);
        // Role::create([
        //     'jenis_role' => 'Petugas Penyebar Pupuk',
        // ]);
        // Role::create([
        //     'jenis_role' => 'Admin',
        // ]);
        Trash::create([
            'tipe_sampah' => 1,
            'nama_sampah' => "Kompos",
            'total_sampah' => 20
        ]);
        Trash::create([
            'tipe_sampah' => 2,
            'nama_sampah' => "Organic",
            'total_sampah' => 12
        ]);
        Trash::create([
            'tipe_sampah' => 3,
            'nama_sampah' => "Anorganic",
            'total_sampah' => 21
        ]);
        Sector::create([
            'nama_sektor' => 'Sektor 2',
            'lokasi_sektor' => 'Barat daya',
            'total_konsumsi_kompos' => 75.00,
            'deskripsi_singkat_sektor' => 'Sektor Jerapah',
        ]);

        // User::factory(9)->create();
    }
}
