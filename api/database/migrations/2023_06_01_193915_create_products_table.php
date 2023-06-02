<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Query\Expression;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->integer("user_id")->unsigned();
            $table->string('name');
            $table->string('sku');
            $table->decimal('pvp')->unsigned();
            $table->boolean('out_pvp');
            $table->string('description')->nullable();
            $table->json('search_terms')->default(new Expression('(JSON_ARRAY())'));
            $table->json('required_words')->default(new Expression('(JSON_ARRAY())'));
            $table->json('words_to_exclude')->default(new Expression('(JSON_ARRAY())'));
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
