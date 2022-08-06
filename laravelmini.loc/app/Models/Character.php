<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'birthday',
        'gender',
        'height',
        'planet',
        'film_id',
        'planet_id',
    ];

    public function film(){
        return $this->belongsTo(Film::class);
    }

    public function planet(){
        return $this->belongsTo(Planet::class);
    }
}
