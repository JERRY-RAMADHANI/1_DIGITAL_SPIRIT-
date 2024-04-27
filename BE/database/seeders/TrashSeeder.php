<?php

namespace Database\Seeders;

use App\Models\Trash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TrashSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Trash::create([
            'tipe_sampah' => 1,
            'lokasi_sektor' => 'Ba',
            'total_konsumsi_kompos' => 75.00,
            'deskripsi_singkat_sektor' => 'Sektor Jerapah'
        ]);
    }
}
