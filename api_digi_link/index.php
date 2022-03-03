<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.digikala.com/v1/product/{$_GET['product_id']}/",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
    CURLOPT_HTTPHEADER => array(
        'Cookie: TS01e4b47a=010231059190325a63384f4581cc70d68e7ec46020b3437d6de8d034d6d8bb41514645b5b1c55b72a3222d0ad100bf878e21b96fb81c7285953712a189fe2e342dd43905835f277f1279b8d489abf4c8f73c41348c; tracker_global=4Fxqs9sr; tracker_session=4Fxqs9sr'
    ),
));

$response = curl_exec($curl);

curl_close($curl);

print_r($response);
