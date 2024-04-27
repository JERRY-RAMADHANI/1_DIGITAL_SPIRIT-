<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create([
            'jenis_role' => 'Petugas Pembersih Sampah',
        ]);
        Role::create([
            'jenis_role' => 'Petugas Penyebar Pupuk',
        ]);
        Role::create([
            'jenis_role' => 'Admin',
        ]);
    }
}
