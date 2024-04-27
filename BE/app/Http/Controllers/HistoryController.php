<?php

namespace App\Http\Controllers;

use App\Models\Trash;
use App\Models\History;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\HistoryResource;

class HistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return HistoryResource::collection(History::with('author:id,nama,role_id')->get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nominal' => 'required|numeric|min:0',
            'tipe_histori' => 'required|numeric',
            'tipe_sampah' => 'required',
        ]);

        $userId = auth()->user()->id;
    
        $sampah = Trash::where('tipe_sampah', $request['tipe_sampah'])->first();
    
        if (!$sampah) {
            return response()->json(['error' => 'Data sampah tidak ditemukan'], 404);
        }
    
        if ($request['tipe_histori'] === 1) {
            $sampah->total_sampah += $request['nominal'];
        } else {
            $sampah->total_sampah -= $request['nominal'];
        }
    
        $sampah->save();
    
        $history = History::create([
            'user_id' => $userId,
            'nominal' => $request['nominal'],
            'tipe_histori' => $request['tipe_histori'],
            'tipe_sampah' => $request['tipe_sampah'],
        ]);
    
        if (!$history) {
            return abort(404);
        }
    
        return new HistoryResource($history);
    }

    /**
     * Display the specified resource.
     */
    public function show(History $history)
    {
        $history = History::with('author:id,nama,role_id')->first();
        if (!$history) {
            return abort(404);
        }

        return new HistoryResource($history);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(History $history)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, History $history)
    {
        // $request['user_id'] = Auth::user()->id;
        $request->validate([
            // 'user_id' => 'required|exists:users,id',
            'nominal' => 'required|numeric|min:0',
            'tipe_histori' => 'required|numeric',
            'tipe_sampah' => 'required',
        ]);


        if ($history['nominal'] - $request['nominal'] != 0) {
            $selisih = $history['nominal'] - $request['nominal'];
        } else {
            $selisih = 0;
        }

        $sampah  = Trash::where('tipe_sampah', '1')->first();
        if ($request['tipe_sampah'] == "Organic") {
            $sampah  = Trash::where('tipe_sampah', '2')->first();
        } else if ($request['tipe_sampah'] == "Anorganic") {
            $sampah  = Trash::where('tipe_sampah', '3')->first();
        }

        if (!$sampah) {
            return response()->json(['error' => 'Data sampah tidak ditemukan'], 404);
        }


        if ($request['tipe_histori'] != $history['tipe_histori']) {
            $selisih += $request['nominal'];
        }


        if ($request['tipe_histori'] === 1) {
            $sampah['total_sampah'] -= $selisih;
        } else {
            $sampah['total_sampah'] += $selisih;
        }

        $sampah->save();
        History::where('id', $history['id'])
            ->update([
                'tipe_histori' => $request['tipe_histori'],
                'tipe_sampah' => $request['tipe_sampah'],
                'nominal' => $request['nominal'],
            ]);

        return response()->json($sampah['total_sampah'], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(History $history)
    {
        $sampah  = Trash::where('tipe_sampah', '1')->first();
        if ($history['tipe_sampah'] === 2) {
            $sampah  = Trash::where('tipe_sampah', '2')->first();
        } else if ($history['tipe_sampah'] === 3) {
            $sampah  = Trash::where('tipe_sampah', '3')->first();
        }

        if (!$sampah) {
            return response()->json(['error' => 'Data sampah tidak ditemukan'], 404);
        }

        if ($history['tipe_histori'] === 1) {
            $sampah['total_sampah'] -= $history['nominal'];
        } else {
            $sampah['total_sampah'] += $history['nominal'];
        }

        $sampah->save();
        $history->delete();

        return response()->json($sampah['total_sampah'], 201);
    }
}
