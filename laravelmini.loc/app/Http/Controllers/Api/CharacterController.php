<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Character;
use App\Services\Character\CharacterService;
use App\Services\Response\ResponceService;
use Illuminate\Http\Request;

class CharacterController extends ApiController
{
    public function __construct(CharacterService $service)
    {
        $this->service=$service;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return ResponceService::sendJsonResponce(
            true,
            [
                'items' => $this->service->getItems()->toArray()
            ]
        );

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Character  $character)
    {
        //
        $character = $this->service->store($request, $character);

        return ResponceService::sendJsonResponce(
            true,
            [
                'item' => $character-> toArray()
            ]
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Character $character)
    {
        //
        return ResponceService::sendJsonResponce(
            true,
            [
                'item' => $character-> toArray()
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Character $character)
    {
        //

        $character = $this->service->store($request, $character);

        return ResponceService::sendJsonResponce(
            true,
            [
                'item' => $character-> toArray()
            ]
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
