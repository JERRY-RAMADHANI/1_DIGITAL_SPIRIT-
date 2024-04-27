<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Role::create([
            'nama' => 'Petugas Bersih-Bersih Sampah'
        ]);
        Role::create([
            'nama' => 'Petugas Pemupuk Tumbuhan'
        ]);
        Role::create([
            'nama' => 'Admin'
        ]);

        User::factory(9)->create();
    }
}
