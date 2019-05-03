import express from 'express';
// This 'router' is created and maintained by express. It will contain all of our routes listed below in a single, easily accessible object.
const router = require('express').Router();

// The object we will be manipulating (instead of using a DB).
const helloWorld = [
  {id: 1, message: 'Hello World!'},
  {id: 2, message: 'This is pretty cool.'},
  {id: 3, message: 'You got this working!'},
  {id: 4, message: 'Amazing job!'}
]

router.get('/', async (req, res) => {
  console.log(' >>> Entered Route GET(Read) `/api/messages/`')
  // Set 'readResults' as the object 'helloWorld'.
  const readResults = helloWorld
  // We return 'readResults' in JSON to the 'Message.js'.
  res.json(readResults)
});

router.post('/create', async (req, res) => {
  console.log(' >>> Entered Route POST(Create) `/api/messages/create`')

  // First we want to get all the id's from the objects in 'helloWorld' array in order to make a new object to add to it.
  let listOfIds = [];
  helloWorld.map(i => listOfIds.push(i.id))

  // Now we want to make our 'id' 1 highers than the highest number in the array.
  // (Note: We dont care if we reuse numbers since the App won't remember anything upon restart anyway).
  const currentHighestNumber = Math.max(...listOfIds)

  // Now that we have the currentHighestNumber & our message, we can create an Object.
  const createResults = {id: (currentHighestNumber + 1), message: req.query.message }

  // Here we push the new object into the 'helloWorld' array.
  helloWorld.push(createResults)

  // Currently, we only want to return a HTTP StatusCode & a message as the messageDisplay list will automatically be updated by the frontend.
  res.status(200).send('Message Created.');
});

// Here we export the 'router', which contains all of our routes listed, to our server.js file for use.
module.exports = router
