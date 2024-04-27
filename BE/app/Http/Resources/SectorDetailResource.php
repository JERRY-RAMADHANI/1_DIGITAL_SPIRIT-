<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SectorDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nama_sektor' => $this->nama_sektor,
            'lokasi_sektor' => $this->lokasi_sektor,
            'deksripsi_singkat_sektor' => $this->deksripsi_singkat_sektor,
            'total_konsumsi_kompos' => $this->total_konsumsi_kompos,
            'tumbuhan' => $this->whenLoaded('tumbuhan'),
            'created_at' => $this->created_at->format('Y-m-d H:i')
        ];
    }
}
