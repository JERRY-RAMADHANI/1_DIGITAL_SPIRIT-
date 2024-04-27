<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Role extends Model
{
    use HasFactory;

    /**
     * Get all of the user for the Role
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function roleUser(): HasMany
    {
        return $this->hasMany(User::class, 'position', 'id');
    }
}
