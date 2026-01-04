<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Registration extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',
        'name',
        'email',
        'phone',
        'organization',
        'designation',
        'additional_fields',
        'status',
        'remarks',
        'token',
        'registered_at',
    ];

    protected $casts = [
        'additional_fields' => 'array',
        'registered_at' => 'datetime',
    ];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function quizAttempts()
    {
        return $this->hasMany(QuizAttempt::class);
    }

    public function generateToken()
    {
        $this->token = Str::random(64);
        $this->save();

        return $this->token;
    }

    public function getQuizToken()
    {
        if (! $this->token) {
            return $this->generateToken();
        }

        return $this->token;
    }

    public function canTakeQuiz()
    {
        return $this->status === 'approved' || $this->status === 'attended';
    }
}
