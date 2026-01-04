<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',
        'subject',
        'message',
        'recipients',
        'recipient_type',
        'filters',
        'channel',
        'status',
        'scheduled_at',
        'sent_at',
        'stats',
        'created_by',
    ];

    protected $casts = [
        'recipients' => 'array',
        'filters' => 'array',
        'stats' => 'array',
        'scheduled_at' => 'datetime',
        'sent_at' => 'datetime',
    ];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function getRecipientCountAttribute()
    {
        if ($this->recipient_type === 'all') {
            return $this->event->registrations()->count();
        } elseif ($this->recipient_type === 'individual') {
            return count($this->recipients ?? []);
        }

        return 0;
    }

    public function send()
    {
        // Logic to send notification
        $this->status = 'sent';
        $this->sent_at = now();
        $this->save();
    }

    public function scopeScheduled($query)
    {
        return $query->where('status', 'scheduled')
            ->where('scheduled_at', '<=', now());
    }
}
