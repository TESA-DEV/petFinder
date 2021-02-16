Personal PetFinder App

Our intentions were to build a personalized PetFinder application using the PetFinder API where users could create an account and find dogs or cats up for adoption in their area. The application then allows users to "save" or "favorite" the pets they're interested in adopting.

Our tech stack includes React with the Bootstrap-React Library, Express, Mongoose, and MongoDB.

Here's our React Component Structure:

 |-- MainContainer
    
    |-- Navigation
    
    |-- PetContainer
    
        |-- PetDetails
        
Here's a look at our dataflow:

- Dataflow: [Dataflow] (https://ibb.co/6Dcdzdt)

In order to access the PetFinder API you'll need to create a developer's account and request a key/secret. https://www.petfinder.com/developers/
Our key/secret is currently being stored in the "secrets.js" file.

- Link to the PetFinder API Developer's Docs: https://www.petfinder.com/developers/v2/docs/

We restricted the types of pets to Cats and Dogs, referencing the ability to search for their "type" and "location" by zipcode through the PetFinder API. A stretch feature was to have the ability to additionallty search by age, size, and breed. Check the PetFinder Developer's Docs to view what kinds of things you can search for.

On the backend, the PetFinder API (petFinderAPIController.js and petFinderRouter.js) and Database API (dbController.js and petControllers.js) files are separated along with their Express Routing.
        
Technical Challenge: We were not able to successfully connect to the MongoDB database.

Stretch Feature: to provide user-authentication
(Our app only contains 1 user at the moment)
