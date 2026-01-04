<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventSession extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',
        'title',
        'description',
        'speaker_info',
        'start_time',
        'end_time',
        'venue',
        'location',
        'order',
    ];

    protected $casts = [
        'start_time' => 'datetime',
        'end_time' => 'datetime',
        'speaker_info' => 'array',
        'location' => 'array',
    ];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function getDurationAttribute()
    {
        return $this->start_time->diffInMinutes($this->end_time);
    }
}
