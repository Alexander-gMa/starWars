<?php

namespace App\Services\Film;

use App\Models\Film;

class FilmService
{
    public function getItems(){
        return Film::all();
    }
}
