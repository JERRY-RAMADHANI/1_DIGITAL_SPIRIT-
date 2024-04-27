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
            'role' => mt_rand(1, 3),
            'no_telp' => mt_rand(11111111111, 99999999999),
            'email' => 'gmail@.com',
            'password' => 'jdjjdjjdjjdiej',
            'alamat' => 'jjdjj3iidjjwiej',
            'gender' => 1,
        ]);
    }
}
