<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\History;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // History::create([
        //     'total' => 10
        // ]);

        Role::create([
            'jenis_role' => 'Petugas Bersih-Bersih Sampah'
        ]);
        Role::create([
            'jenis_role' => 'Petugas Pemupuk Tumbuhan'
        ]);
        Role::create([
            'jenis_role' => 'Admin'
        ]);

        User::factory(9)->create();
    }
}
