<?php
/**
 * Created by PhpStorm.
 * User: Artemm
 * Date: 08.07.15
 * Time: 23:59
 */

namespace app\models;


class JWT
{
    public function generateToken()
    {
        if (in_array('sha256', hash_algos())) {
            $data = implode('.', [base64_encode($this->makeHeader()), base64_encode($this->makePayload())]);

            return hash_hmac('sha256', $data, $secret);
        }
    }


    protected function makeHeader()
    {
        return json_encode(['alg' => 'hSA256', 'typ' => 'JWT']);
    }

    protected function makePayload()
    {
        return json_encode([]);
    }
}