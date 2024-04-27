<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /**
     * Get the role that owns the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function position(): BelongsTo
    {
        return $this->belongsTo(Role::class, 'role_id', 'id');
    }

    /**
     * Get all of the organicHistory for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function organicHistory(): HasMany
    {
        return $this->hasMany(OrganicHistory::class, 'authorOrganic', 'id');
    }

    /**
     * Get all of the anorganicHistory for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function anorganicHistory(): HasMany
    {
        return $this->hasMany(AnorganicHistory::class, 'authorAnorganic', 'id');
    }

    /**
     * Get all of the compostHistory for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function compostHistory(): HasMany
    {
        return $this->hasMany(CompostHistory::class, 'authorCompost', 'id');
    }

    /**
     * Get all of the report for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function reportUser(): HasMany
    {
        return $this->hasMany(Report::class, 'reporter', 'id');
    }
}
