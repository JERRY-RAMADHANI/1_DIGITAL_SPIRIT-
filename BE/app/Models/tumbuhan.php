<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tumbuhan extends Model
{
    use HasFactory;

    public function Tanaman()
    {
        return $this->belongsTo(Sektor::class);
    }
}
