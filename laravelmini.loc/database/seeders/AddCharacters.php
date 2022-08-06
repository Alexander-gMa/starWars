<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddCharacters extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('characters')->insert([
           [
               'name'=> "Люк Скайуокер",
               'gender'=> "Мужчина",
               'birthday'=> '01.01.01',
           ],
            [
                'name'=> "Дарт Вейдер",
                'gender'=> "Мужчина",
                'birthday'=> '02.02.02',
            ],
            [
                'name'=> "Хан Соло",
                'gender'=> "Мужчина",
                'birthday'=> '03.03.03',
            ]
        ]);
    }
}
