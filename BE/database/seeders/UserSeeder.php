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
<<<<<<< Updated upstream
            'nama' => 'tes',
            'role_id' => 1,
            'no_telp' => 123123123131111,
            'email' => '123gmail@.com',
            'password' => 'test test',
            'alamat' => 'tseeeee',
=======
            'nama' => 'user1',
            'role' => 1,
            'no_telp' => 12312312313,
            'email' => 'gmail@.com',
            'password' => 'user1',
            'alamat' => 'jjdjj3iidjjwiej',
>>>>>>> Stashed changes
            'gender' => 1,
        ]);
    }
}
