<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Product extends Model
{
    use HasFactory, HasApiTokens;

    protected $table = 'products';
    protected $fillable = [
        'user_id',
        'name',
        'sku',
        'pvp',
        'out_pvp',
        'description',
        'search_terms',
        'required_words',
        'words_to_exclude'  
    ];

    
}
