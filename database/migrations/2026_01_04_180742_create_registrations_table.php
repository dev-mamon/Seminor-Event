<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('registrations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('event_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('email');
            $table->string('phone')->nullable();
            $table->string('organization')->nullable();
            $table->string('designation')->nullable();
            $table->json('additional_fields')->nullable();
            $table->enum('status', ['pending', 'approved', 'rejected', 'shortlisted', 'attended'])->default('pending');
            $table->text('remarks')->nullable();
            $table->string('token')->unique()->nullable();
            $table->timestamp('registered_at')->useCurrent();
            $table->timestamps();

            $table->index(['event_id', 'email', 'status', 'registered_at']);
            $table->unique(['event_id', 'email']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registrations');
    }
};
