# DinnerPlans (CodeJam Hackathon @McGill)


## What it does
The application works somewhat like a dating app, letting two users swipe through our selection of restaurants until they both swipe right on a restaurant, at which point they've found a match! Users can create and join matching rooms to swipe through restaurants with their friends, and the restaurants displayed in these rooms can be filtered according to location, price, and cuisine.

<img src="screensshot1.png">



## How we built it
We used MongoDB, Express, and Node.js to build the backend and subsequent matching algorithm. The backend calls the google places API to fetch the restaurant info that will be displayed on the matching page. For the frontend, we first made static mockups using HTML, CSS, Bootstrap, and Vanilla Javascript, and then later ported these mockups over to React.

### Built with
* [CSS](https://www.w3schools.com/css/) 
* [Express.js](https://expressjs.com/) 
* [React](https://reactjs.org/) 
* [Google-Cloud](https://cloud.google.com/) 
* [HTML](https://www.w3schools.com/html/) 
* [Node.js](https://nodejs.org/en/) 
* [postman](https://www.postman.com/) 

## Challenges we ran into
Backend challenges: It was challenging to use the different APIs from google since they were not giving all the information we needed. For this reason, we had to call different APIs and then merge all the data together. Another challenge was to optimize the speed of the request and limit the size of the data we were getting.

Frontend challenges: Porting the static mockups over to React turned out to be a much more arduous process than we initially thought, and we found that we had to remove and rebuild a lot of the small components and animations.

## Team

* **Riad Elm** - [Riad's GitHub](https://github.com/riadelm)
* **Adam DiRe** - [Adam's Github](https://github.com/AdamMigliore)
* **Martin Senécal** - [Martin's Github](https://github.com/martinsenecal)
* **Lenoy Christy** - [Lenoy's GitHub](https://github.com/lechristy25)

## What's next for ReviewBot
* Finish linking the back-end to the front-end 
* Add Machine Learning to analyze what is the user preferences in terms of foods, so we can give him better recommendations.

