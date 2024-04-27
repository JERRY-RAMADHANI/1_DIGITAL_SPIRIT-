<?php

namespace App\Http\Controllers;

use App\Http\Resources\HistoryResource;
use App\Models\CompostHistory;
use App\Models\Fertilizer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CompostHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
            'user_id' => 'required|exists:users,id',
            'nominal' => 'required|numeric|min:0',
            'tipe' => 'required|numeric'
        ]);

        $request['user_id'] = Auth::user()->id;

        $kompos = Fertilizer::where('nama', 'kompos')->first();

        if (!$kompos) {
            return response()->json(['error' => 'Data kompos tidak ditemukan'], 404);
        }

        if ($request->tipe) {
            $kompos->total += $request->nominal;
        } else {
            $kompos->total -= $request->nominal;
        }

        $kompos->save();

        $compostHistory = CompostHistory::create($request->all());

        return new HistoryResource($compostHistory);
    }

    /**
     * Display the specified resource.
     */
    public function show(CompostHistory $compostHistory)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CompostHistory $compostHistory)
    {
        //
    }
}
