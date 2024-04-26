<?php

namespace App\Http\Controllers;

use App\Models\kompos;
use App\Models\transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function deposit(Request $request)
    {
        $request->validate([
            'jumlah' => 'required|numeric|min:0',
        ]);
    
        $kompos = Kompos::find(1);
    
        if (!$kompos) {
            return response()->json(['error' => 'Data kompos tidak ditemukan'], 404);
        }
    
        $kompos->jumlah += $request->jumlah;
    
        $kompos->save();
    
        Transaction::create([
            'users_id'=> 1,
            'type' => '1',
            'amount' => $request->jumlah,
        ]);
    
        return response()->json(['message' => 'Deposit kompos sukses']);
    }

    public function withdraw(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'amount' => 'required|numeric|min:0',
        ]);

        $account = kompos::where('user_id', $request->user_id)->firstOrFail();

        if ($account->balance < $request->amount) {
            return response()->json(['error' => 'Insufficient balance'], 400);
        }

        $account->balance -= $request->amount;
        $account->save();

        Transaction::create([
            'account_id' => $account->id,
            'type' => 'withdraw',
            'amount' => $request->amount,
        ]);

        return response()->json(['message' => 'Withdrawal successful']);
    }

    public function updateTotalPrice()
    {
        // Ambil semua data dari tabel
        $data = YourModel::all();

        // Inisialisasi variabel untuk menyimpan total harga
        $totalPrice = 0;

        // Loop melalui setiap baris data dan tambahkan harga ke total
        foreach ($data as $item) {
            $totalPrice += $item->price; // Ganti 'price' dengan nama kolom harga Anda
        }

        // Simpan total harga ke kolom lain
        foreach ($data as $item) {
            $item->total_price = $totalPrice; // Ganti 'total_price' dengan nama kolom total harga Anda
            $item->save();
        }

        return response()->json(['message' => 'Total price updated successfully']);
    }
}
