<?php

$request = new HttpRequest();
$request->setUrl('https://pan-information-verification-api.p.rapidapi.com/validation/api/v1/panverification');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders([
	'x-rapidapi-key' => '1a6321cd45msha18402b30d6ee12p143662jsn6c979e2f6e26',
	'x-rapidapi-host' => 'pan-information-verification-api.p.rapidapi.com',
	'Content-Type' => 'application/json'
]);

$request->setContentType('application/json');
$request->setBody(json_encode([
	'pan' => 'AMDPG5107D',
	'consent' => 'yes',
	'consent_text' => 'I hear by declare my consent agreement for fetching my information via AITAN Labs API'
]));

try {
	$response = $request->send();

	echo $response->getBody();
} catch (HttpException $ex) {
	echo $ex;
}
