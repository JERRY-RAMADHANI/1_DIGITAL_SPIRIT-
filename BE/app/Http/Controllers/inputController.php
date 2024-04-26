<?php

namespace App\Http\Controllers;

use App\Models\tumbuhan;
use Illuminate\Http\Request;

class inputController extends Controller
{
    public function create_Tanaman(Request $request)
    {

        $request->validate([
            'sektors_id' => 'required|integer',
            'Name' => 'required|string',
            'Spesies' => 'required|string',
            'Konsumsi-Kompos' => 'required|integer',
            'Foto' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'Deskripsi_Tumbuhan' => 'nullable|string',
        ]);

        $fotoPath = $request->file('Foto')->store('plant_photos');

        $plant = new tumbuhan();
        $plant->sektors_id = $request->input('sektors_id');
        $plant->name = $request->input('Name');
        $plant->spesies = $request->input('Spesies');
        $plant->konsumsi_kompos = $request->input('Konsumsi-Kompos');
        $plant->foto = $fotoPath;
        $plant->deskripsi_tumbuhan = $request->input('Deskripsi_Tumbuhan');
        $plant->save();

        return response()->json($plant, 201);
    
    }
}
