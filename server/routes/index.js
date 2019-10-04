var express = require('express');
var router = express.Router();

// Mock Database to allow for some form of validation of shortURLs and URLs to avoid duplication
var MockDatabase = []

const randomNumberGenerator = () => {
  let randomNumber = Math.random().toString()
  let decimal = randomNumber - Math.floor(randomNumber)
  let shortURL = decimal.toString().split('.')[1].substring(0, 4)
  return shortURL
}

const createResponseObject = (res, url, shortURL) => {
  // Light validation to check if the short URL has already been taken
  let findShortURL = MockDatabase.find(item => JSON.parse(item)['short-url'] === shortURL)
  if (!findShortURL) {
    let response = { "short-url": `/${shortURL}`, "url": url }
    res.send(response);
    return response
  } else {
    createResponseObject(res)
  }
}

/* POST homepage. */
router.post('/', function (req, res) {
  // Light validation to check if the URL has already been shortened
  let findURL = MockDatabase.find(item => item.url === req.body.url)
  if (!findURL) {
    const shortURL = randomNumberGenerator()
    let responseLog = createResponseObject(res, req.body.url, shortURL)
    // Mock post to database
    MockDatabase.push(JSON.stringify(responseLog))
  } else {
    res.send(JSON.parse(findURL))
  }
});

/* GET shorturl */
router.get('/:shorturl', function (req, res) {
  const locationObject = MockDatabase.find(item => {
    return JSON.parse(item)['short-url'].toString() === `/${req.params.shorturl}`
  })
  if (locationObject) {
    res.redirect(JSON.parse(locationObject).url)
  } else {
    res.send({ error: 'error' })
  }
})

module.exports = router;
