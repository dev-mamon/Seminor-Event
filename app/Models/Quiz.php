<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',
        'title',
        'description',
        'type',
        'time_limit',
        'max_attempts',
        'passing_score',
        'is_active',
        'show_results_immediately',
        'starts_at',
        'ends_at',
        'settings',
    ];

    protected $casts = [
        'starts_at' => 'datetime',
        'ends_at' => 'datetime',
        'settings' => 'array',
        'is_active' => 'boolean',
        'show_results_immediately' => 'boolean',
    ];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function questions()
    {
        return $this->hasMany(Question::class)->orderBy('order');
    }

    public function attempts()
    {
        return $this->hasMany(QuizAttempt::class);
    }

    public function isAvailable()
    {
        if (! $this->is_active) {
            return false;
        }

        $now = now();
        if ($this->starts_at && $now < $this->starts_at) {
            return false;
        }

        if ($this->ends_at && $now > $this->ends_at) {
            return false;
        }

        return true;
    }

    public function getTotalPointsAttribute()
    {
        return $this->questions()->sum('points');
    }
}
