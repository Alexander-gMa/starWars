<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddFilms extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('films')->insert([
            [
                'name'=> "Звёздные войны",
                'budget'=>"1000р",
                'link'=>'https://www.kinopoisk.ru/film/6695/'
            ],
            [
                'name'=> "Человек-паук",
                'budget'=>"2000р",
                'link'=>'https://www.kinopoisk.ru/film/1309570/'
            ],
            [
                'name'=> "Бэтмен",
                'budget'=>"3000р",
                'link'=>'https://www.kinopoisk.ru/film/590286/'
            ]
        ]);
    }
}
