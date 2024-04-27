<?php

namespace App\Http\Controllers;

use App\Models\Sector;
use Illuminate\Http\Request;
use App\Http\Resources\SectorDetailResource;

class SectorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sector = Sector::all();

        return SectorDetailResource::collection($sector);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function detail(string $id)
    {
        $sector = Sector::with('tumbuhan')->find($id);

        if (!$sector) {
            return response()->json(['message' => 'Sector not found'], 404);
        }

        $sectorDetail = new SectorDetailResource($sector);

        dd($sector);

        return response()->json(['data' => $sectorDetail]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama_sektor' => 'required|string',
            'lokasi_sektor' => 'required|string',
            'total_konsumsi_kompos' => 'required',
            'deskripsi_singkat_sektor' => 'nullable|string',
        ]);

        $sector = new Sector();
        $sector->nama_sektor = $request->input('nama_sektor');
        $sector->lokasi_sektor = $request->input('lokasi_sektor');
        $sector->total_konsumsi_kompos = $request->input('total_konsumsi_kompos');
        $sector->deskripsi_singkat_sektor = $request->input('deskripsi_singkat_sektor');
        $sector->save();

        return response()->json($sector, 201);
    }

    /**
     * Display the specified resource.
     */
    public function Sum(string $id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sector $sector)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sector $sector)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sector $sector)
    {
        //
    }
}
