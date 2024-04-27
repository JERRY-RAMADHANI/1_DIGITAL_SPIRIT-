<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Sector extends Model
{
    use HasFactory;

    /**
     * Get all of the tumbuhan for the Sector
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function tumbuhan(): HasMany
    {
        return $this->hasMany(Plant::class, 'sector_id', 'id');
    }
}
