const http = require('https');

const options = {
	method: 'POST',
	hostname: 'pan-information-verification-api.p.rapidapi.com',
	port: null,
	path: '/validation/api/v1/panverification',
	headers: {
		'x-rapidapi-key': '1a6321cd45msha18402b30d6ee12p143662jsn6c979e2f6e26',
		'x-rapidapi-host': 'pan-information-verification-api.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.write(JSON.stringify({
  pan: 'AMDPG5107D',
  consent: 'yes',
  consent_text: 'I hear by declare my consent agreement for fetching my information via AITAN Labs API'
}));
req.end();
