<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HistoryResource extends JsonResource
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
            'tipe' => $this->tipe,
            'nominal' => $this->nominal,
            'jumlah_akhir' => $this->jumlah_akhir,
            'authorCompost' => $this->whenLoaded('authorCompost'),
            'created_at' => $this->created_at->format('Y-m-d H:i')
        ];
    }
}
