<?php

namespace App\Services\Planet;

use App\Models\Planet;

class PlanetService
{
    public function getItems(){
        return Planet::all();
    }
}
