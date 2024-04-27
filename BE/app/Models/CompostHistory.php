<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CompostHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'nominal', 'tipe', 'jumlah_akhir'
    ];

    /**
     * Get the user that owns the CompostHistory
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function authorCompost(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
