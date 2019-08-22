const express = require('express');
const bodyParser = require('body-parser');
const jsonfile = require('jsonfile');
const dataFile = './data.json';
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.post('/save-review', (req, res) => {
  const { firstname, country, subject, rate } = req.body;
  const review = {
    firstName: firstname,
    country: country,
    review: subject,
    rating: rate
  };
  let reviews = {};

  jsonfile.readFile(dataFile, (err, obj) => {
    if (err) console.log('Error on reading: ', err);

    obj.reviews.push(review);
    reviews = obj.reviews;

    jsonfile.writeFile(dataFile, obj, err => {
      if (err) console.log('Error on writing: ', err);
      console.log('Here!');
      res.redirect('/');
    });
  });
});

app.get('/', (req, res) => {
  jsonfile.readFile(dataFile, (err, obj) => {
    if (err) console.log('Error on reading: ', err);
    res.render('index', { title: 'Submit a Review!', reviews: obj.reviews });
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
