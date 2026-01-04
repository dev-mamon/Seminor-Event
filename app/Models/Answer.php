<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;

    protected $fillable = [
        'quiz_attempt_id',
        'question_id',
        'answer',
        'is_correct',
        'points_awarded',
    ];

    public function quizAttempt()
    {
        return $this->belongsTo(QuizAttempt::class);
    }

    public function question()
    {
        return $this->belongsTo(Question::class);
    }

    public function evaluate()
    {
        $isCorrect = $this->question->checkAnswer($this->answer);
        $this->is_correct = $isCorrect;
        $this->points_awarded = $isCorrect ? $this->question->points : 0;
        $this->save();
    }
}
