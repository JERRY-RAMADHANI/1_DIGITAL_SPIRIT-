<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'nama' => 'Pohon Apel',
            'role' => 1,
            'no_telp' => 12312312313,
            'email' => 'gmail@.com',
            'password' => 'jdjjdjjdjjdiej',
            'alamat' => 'jjdjj3iidjjwiej',
            'gender' => 1,
        ]);
    }
}
