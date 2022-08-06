<?php

namespace App\Services\Character;

use App\Models\Character;
use Illuminate\Http\Request;


class CharacterService
{
    public function store(Request $request,Character $character){
        $character->fill($request->only($character->getfillable()));
        $character->save();

        return $character;
    }

    public function getItems(){
        return Character::with('film', 'planet')->get();
    }
}
