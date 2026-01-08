<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Public/HomePage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// event details page
Route::get('/events', function () {
    // Dummy event data
    $event = [
        'id' => 1,
        'title' => 'AI & Machine Learning Summit 2024',
        'short_description' => 'Join us for an immersive two-day summit on the latest advancements in Artificial Intelligence and Machine Learning.',
        'description' => "Join us for an immersive two-day summit where industry leaders and researchers will share insights on the latest advancements in Artificial Intelligence and Machine Learning. This event is designed for developers, data scientists, and tech enthusiasts who want to stay ahead in the rapidly evolving AI landscape.\n\nYou'll learn about:\n- State-of-the-art ML models\n- Real-world AI applications\n- Ethical considerations in AI\n- Future trends and career opportunities",
        'category' => 'AI & Machine Learning',
        'date' => '2024-06-15',
        'time' => '9:00 AM - 5:00 PM',
        'location' => 'Tech Convention Center, Dhaka',
        'price' => 299,
        'image_url' => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
        'status' => 'upcoming',

        // Event details sections
        'why_join' => [
            'Learn from industry experts with 10+ years experience',
            'Hands-on workshops with real-world projects',
            'Networking with 500+ tech professionals',
            'Get certified and boost your career',
            'Access to exclusive learning materials',
        ],

        'audience' => [
            'Data Scientists & ML Engineers',
            'Software Developers interested in AI',
            'Tech Leads & Engineering Managers',
            'Computer Science Students',
            'AI Researchers & Academics',
        ],

        'technologies' => [
            'TensorFlow',
            'PyTorch',
            'Python',
            'scikit-learn',
            'OpenAI API',
            'LangChain',
            'Hugging Face',
            'Docker',
        ],

        'curriculum' => [
            [
                'module' => 'Introduction to Modern AI',
                'topics' => [
                    'Understanding Neural Networks',
                    'Deep Learning Fundamentals',
                    'Current AI Trends',
                ],
            ],
            [
                'module' => 'Practical Machine Learning',
                'topics' => [
                    'Data Preprocessing Techniques',
                    'Model Training & Evaluation',
                    'Hyperparameter Tuning',
                ],
            ],
            [
                'module' => 'Advanced AI Applications',
                'topics' => [
                    'Natural Language Processing',
                    'Computer Vision',
                    'Generative AI Models',
                ],
            ],
        ],

        'speakers' => [
            [
                'id' => 1,
                'name' => 'Dr. Sarah Johnson',
                'title' => 'Senior AI Researcher',
                'company' => 'Google Brain',
                'photo_url' => 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1887&auto=format&fit=crop',
                'expertise' => ['NLP', 'Deep Learning'],
                'linkedin_url' => 'https://linkedin.com/in/sarahjohnson',
            ],
            [
                'id' => 2,
                'name' => 'Michael Chen',
                'title' => 'ML Engineering Lead',
                'company' => 'OpenAI',
                'photo_url' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
                'expertise' => ['LLMs', 'MLOps'],
                'twitter_url' => 'https://twitter.com/michaelchen',
            ],
        ],

        'agenda' => [
            [
                'time' => '9:00 AM - 10:30 AM',
                'title' => 'Opening Keynote: The Future of AI',
                'description' => 'Exploring the next decade of artificial intelligence advancements',
                'speaker' => 'Dr. Sarah Johnson',
            ],
            [
                'time' => '10:45 AM - 12:30 PM',
                'title' => 'Hands-on ML Workshop',
                'description' => 'Building your first neural network from scratch',
                'speaker' => 'Michael Chen',
            ],
            [
                'time' => '1:30 PM - 3:00 PM',
                'title' => 'Generative AI in Practice',
                'description' => 'Implementing LLMs for real-world applications',
            ],
        ],

        'testimonials' => [
            [
                'id' => 1,
                'comment' => 'This seminar completely transformed my understanding of machine learning. The hands-on approach was exactly what I needed!',
                'rating' => 5,
                'participant_name' => 'Alex Thompson',
                'participant_title' => 'Senior Developer',
                'participant_company' => 'TechCorp Inc.',
            ],
            [
                'id' => 2,
                'comment' => 'The speakers were incredibly knowledgeable and the networking opportunities were invaluable. Highly recommended!',
                'rating' => 5,
                'participant_name' => 'Maria Garcia',
                'participant_title' => 'Data Scientist',
                'participant_company' => 'DataWorks',
            ],
        ],

        'faqs' => [
            [
                'question' => 'Who should attend this seminar?',
                'answer' => 'This seminar is ideal for software developers, data scientists, AI enthusiasts, and anyone interested in learning about modern machine learning techniques.',
            ],
            [
                'question' => 'Do I need prior AI experience?',
                'answer' => 'Basic programming knowledge is recommended, but we cover fundamentals before diving into advanced topics.',
            ],
            [
                'question' => 'Will I get a certificate?',
                'answer' => 'Yes, all participants who complete the seminar will receive a digital certificate of completion.',
            ],
        ],
    ];

    return Inertia::render('Public/EventPage', [
        'event' => $event,
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
