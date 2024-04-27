<?php

namespace App\Http\Controllers;

use App\Models\Plant;
use App\Models\Sector;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class PlantController extends Controller
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
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'sector_id' => 'required|integer',
            'nama' => 'required|string',
            'spesies' => 'required|string',
            'konsumsi_kompos' => 'required',
            'foto' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'deskripsi_tumbuhan' => 'nullable|string',
        ]);
    
        $fotoPath = $request->file('foto')->store('plant_photos');
    
        $sector = Sector::find($request->sector_id);
    
        $plant = new Plant();
        $plant->sector_id = $request->input('sector_id');
        $plant->nama = $request->input('nama');
        $plant->spesies = $request->input('spesies');
        $plant->konsumsi_kompos = $request->input('konsumsi_kompos');
        $plant->foto = $fotoPath;
        $plant->deskripsi_tumbuhan = $request->input('deskripsi_tumbuhan');
        $plant->save();
    
        $sector->total_konsumsi_kompos += $request->input('konsumsi_kompos');
        $sector->save();
    
        return response()->json($plant, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Plant $plant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Plant $plant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Plant $plant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Plant $plant, string $id)
{
        $plant = Plant::findOrFail($id);
        $sector = Sector::find($plant->sector_id);
        
        $plant->delete();

        $sector->total_konsumsi_kompos -= $plant->konsumsi_kompos;
        $sector->save();

        return response()->json($plant, 201);
}
}
