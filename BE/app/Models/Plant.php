<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Plant extends Model
{
    use HasFactory;

    /**
     * Get the sector that owns the Plant
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function sector_group(): BelongsTo
    {
        return $this->belongsTo(Sector::class, 'sector_id', 'id');
    }
}
