<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCharactersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('characters', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('birthday')->nullable();
            $table->string('gender');
            $table->string('height')->nullable();
            $table->string('planet')->nullable();
            $table->string('film')->nullable();

            $table->bigInteger('film_id')->unsigned()->nullable();
            $table->foreign('film_id')->references('id')->on('films');

            $table->bigInteger('planet_id')->unsigned()->nullable();
            $table->foreign('planet_id')->references('id')->on('planets');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('characters');
    }
}
