<?php

namespace App\Services\Response;

class ResponceService
{
    public static function sendJsonResponce($status, $data =[], $code = 200, $errors=[]){
        return response()->json([
            'status'=> $status,
            'data'=>$data,
            'errors'=>$errors,
        ], $code);
    }
}
