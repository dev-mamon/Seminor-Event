<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Event extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'slug',
        'short_description',
        'description',
        'banner_image',
        'thumbnail_image',
        'start_date',
        'end_date',
        'type',
        'venue',
        'location',
        'max_participants',
        'status',
        'meta_data',
        'created_by',
    ];

    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'location' => 'array',
        'meta_data' => 'array',
    ];

    public function sessions()
    {
        return $this->hasMany(EventSession::class)->orderBy('order');
    }

    public function registrations()
    {
        return $this->hasMany(Registration::class);
    }

    public function quizzes()
    {
        return $this->hasMany(Quiz::class);
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }

    public function getSpotsRemainingAttribute()
    {
        if ($this->max_participants <= 0) {
            return null;
        }

        $approvedCount = $this->registrations()->where('status', 'approved')->count();

        return max(0, $this->max_participants - $approvedCount);
    }

    public function getRegistrationCountAttribute()
    {
        return $this->registrations()->count();
    }

    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }

    public function scopeUpcoming($query)
    {
        return $query->where('start_date', '>', now());
    }

    public function scopeActive($query)
    {
        return $query->whereIn('status', ['published', 'ongoing']);
    }
}
