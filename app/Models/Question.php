<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'quiz_id',
        'question',
        'type',
        'options',
        'correct_answer',
        'explanation',
        'points',
        'order',
    ];

    protected $casts = [
        'options' => 'array',
    ];

    public function quiz()
    {
        return $this->belongsTo(Quiz::class);
    }

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }

    public function getFormattedOptionsAttribute()
    {
        if (! $this->options) {
            return [];
        }

        if ($this->type === 'true_false') {
            return [
                ['id' => 'true', 'text' => 'True'],
                ['id' => 'false', 'text' => 'False'],
            ];
        }

        return collect($this->options)->map(function ($option, $index) {
            return [
                'id' => $index,
                'text' => $option,
            ];
        })->toArray();
    }

    public function checkAnswer($userAnswer)
    {
        if ($this->type === 'multiple_choice') {
            return $this->correct_answer == $userAnswer;
        } elseif ($this->type === 'true_false') {
            return strtolower($this->correct_answer) === strtolower($userAnswer);
        } else {
            // For short answer, allow partial matching
            return strtolower(trim($this->correct_answer)) === strtolower(trim($userAnswer));
        }
    }
}
