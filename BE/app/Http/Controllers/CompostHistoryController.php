<?php

namespace App\Http\Controllers;

use App\Models\Compost;
use Illuminate\Http\Request;
use App\Models\CompostHistory;
use App\Http\Resources\HistoryResource;

class CompostHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $compostHistory = CompostHistory::all();
        return HistoryResource::collection($compostHistory);
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
        // $request['user_id'] = Auth::user()->id;
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'nominal' => 'required|numeric|min:0',
            'tipe' => 'required|numeric'
        ]);

        $kompos = Compost::first();

        if (!$kompos) {
            return response()->json(['error' => 'Data kompos tidak ditemukan'], 404);
        }

        if ($request['tipe'] === 1) {
            $kompos['total'] += $request['nominal'];
        } else {
            $kompos['total'] -= $request['nominal'];
        }

        $kompos->save();

        $request['jumlah_akhir'] = $kompos['total'];

        $compostHistory = CompostHistory::create($request->all());

        return new HistoryResource($compostHistory);
    }

    /**
     * Display the specified resource.
     */
    public function show(CompostHistory $compostHistory)
    {
        $compostHistory = CompostHistory::with('authorCompost:id,nama,role_id')->first();
        if (!$compostHistory) {
            return abort(404);
        }

        return new HistoryResource($compostHistory);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CompostHistory $compostHistory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CompostHistory $compostHistory)
    {
        // $request['user_id'] = Auth::user()->id;
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'nominal' => 'required|numeric|min:0',
            'tipe' => 'required|numeric'
        ]);

        if ($compostHistory['nominal'] - $request['nominal'] != 0) {
            $selisih = $compostHistory['nominal'] - $request['nominal'];
        } else {
            $selisih = 0;
        }

        $kompos = Compost::first();

        if (!$kompos) {
            return response()->json(['error' => 'Data kompos tidak ditemukan'], 404);
        }

        if ($request['tipe'] != $compostHistory['tipe']) {
            $selisih *= 2;
        }

        if ($request['tipe'] === 1) {
            $kompos['total'] -= $selisih;
        } else {
            $kompos['total'] += $selisih;
        }

        $kompos->save();


        $request['jumlah_akhir'] = $compostHistory['jumlah_akhir'] + $selisih;

        dd($compostHistory);

        CompostHistory::where('id', $compostHistory['id'])
            ->update([
                'nominal' => $request['nominal'],
                'tipe' => $request['tipe'],
                'jumlah_akhir' => $request['jumlah_akhir'],
            ]);

        return response()->json($kompos['total'], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CompostHistory $compostHistory)
    {
        $kompos = Compost::first();

        if ($compostHistory['tipe'] === 1) {
            $kompos['total'] -= $compostHistory['nominal'];
        } else {
            $kompos['total'] += $compostHistory['nominal'];
        }

        $kompos->save();
        $compostHistory->delete();

        return response()->json($kompos['total'], 201);
    }
}
