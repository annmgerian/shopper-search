let express = require('express');
let bodyParser = require('body-parser');

const data = [
    {
        "fromName": "Berlin, Germany",
        "toName": "Kyiv, Ukraine",
        "departAt": "2019-05-29T00:00:00.000Z",
        "vehicle": "plane"
    },
    {
        "fromName": "Berlin, Germany",
        "toName": "Dnipro, Ukraine",
        "departAt": "2019-06-02T00:00:00.000Z",
        "vehicle": "car"
    },
    {
        "fromName": "London, UK",
        "toName": "Kyiv, Ukraine",
        "departAt": "2019-06-07T00:00:00.000Z",
        "vehicle": "plane"
    },
    {
        "fromName": "Lyon, France",
        "toName": "Kyiv, Ukraine",
        "departAt": "2019-06-07T00:00:00.000Z",
        "vehicle": "plane"
    },
    {
        "fromName": "Moscow, Russia",
        "toName": "Kyiv, Ukraine",
        "departAt": "2019-06-08T00:00:00.000Z",
        "vehicle": "car"
    },
    {
        "fromName": "Kyiv, Ukraine",
        "toName": "Berlin, Germany",
        "departAt": "2019-05-30T00:00:00.000Z",
        "vehicle": "train"
    }
];
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const app = next({
    dev,
    dir: __dirname,
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    let server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended: true}));

    server.use(function (request, response, next) {
        response.header('Access-Control-Allow-Origin', '*');
        response.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        );
        next();
    });

    server.get('/api/get-data', function (request, response) {
        return response.status(200).send(data);
    });

    server.get('*', handle);
    server.listen(PORT, () => console.log('Listening on port ' + PORT));
});