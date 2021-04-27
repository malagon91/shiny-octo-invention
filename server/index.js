import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import multipart from 'connect-multiparty';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multipart()); // add multipart to get info from form-data

app.use(cors());
app.use(morgan('dev'));

app.disable('etag');

app.get('*', (req, res) => {
    console.log(req.url);
    res.render('index', { });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
