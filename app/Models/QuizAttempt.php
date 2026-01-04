<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizAttempt extends Model
{
    use HasFactory;

    protected $fillable = [
        'quiz_id',
        'registration_id',
        'attempt_number',
        'score',
        'total_questions',
        'correct_answers',
        'started_at',
        'completed_at',
        'status',
        'answers',
    ];

    protected $casts = [
        'started_at' => 'datetime',
        'completed_at' => 'datetime',
        'answers' => 'array',
    ];

    public function quiz()
    {
        return $this->belongsTo(Quiz::class);
    }

    public function registration()
    {
        return $this->belongsTo(Registration::class);
    }

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }

    public function start()
    {
        $this->started_at = now();
        $this->status = 'in_progress';
        $this->save();
    }

    public function complete()
    {
        $this->completed_at = now();
        $this->status = 'completed';
        $this->save();
    }

    public function calculateScore()
    {
        $correct = $this->answers()->where('is_correct', true)->count();
        $total = $this->answers()->count();

        $this->correct_answers = $correct;
        $this->total_questions = $total;
        $this->score = $total > 0 ? round(($correct / $total) * 100) : 0;
        $this->save();
    }

    public function getTimeTakenAttribute()
    {
        if (! $this->started_at || ! $this->completed_at) {
            return null;
        }

        return $this->started_at->diffInMinutes($this->completed_at);
    }

    public function isPassed()
    {
        return $this->score >= $this->quiz->passing_score;
    }
}
