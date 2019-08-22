const express = require('express');
const bodyParser = require('body-parser');
const jsonfile = require('jsonfile');
const path = require('path');
const dataFile = './data.json';
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.post('/save-review', (req, res) => {
  const { username, subject } = req.body;
  const story = {
    userName: username,
    subject: subject
  };
  let stories = {};

  jsonfile.readFile(dataFile, (err, obj) => {
    if (err) console.log('Error on reading: ', err);

    obj.stories.push(story);
    stories = obj.stories;

    jsonfile.writeFile(dataFile, obj, err => {
      if (err) console.log('Error on writing: ', err);
      res.json(stories);
    });
  });
});

app.get('/get-reviews', (req, res) => {
  jsonfile.readFile(dataFile, (err, obj) => {
    if (err) console.log('Error on reading: ', err);
    res.json(obj.stories);
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/new_web.html'));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
