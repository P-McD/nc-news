## About this project
Welcome to my Frontend NC News Repo!

This is my frontend project that I completed during frontend project week in my time at Northcoders, which is a model news website containing both articles as well as user contributions (votes and comments). 

You can find the hosted version here:

https://main--charming-marigold-41382a.netlify.app/

You can also find the backend repo here: 

https://github.com/P-McD/news-project 

## Navigating NC News in the browser 
Using the URL above, you can explore the features of the website.

### Homepage

- The link above directs to the `Homepage`, which contains a carousel of 'editor's picks' news articles. The user can click on the articles in the carousel, or can navigate to all articles using the link at the bottom of the page or clicking on the `Articles` tab on the nav bar.

- If a user is logged in, a 'Welcome < user > !' greeting will be displayed alongside the user's profile picture. This defaults to 'Welcome Guest!' if no user is logged in. 

- Users can navigate to the `Homepage` at any time by clicking the 'NC News' logo in the top left of the screen.

### Articles

- Displays articles using a responsive layout, including title, creator data and a snippet of the article body. Users can click on an article card to navigate to a `Single Article`

- Users can filter by topic using the dropdown menu on the right of the screen

### Single Article

- Displays the article body, title, photo and creator data, as well as a comments section. 

- Users can click to give a vote and then click again to remove the vote. This functionality works even if not signed in. 

- Users can comment only if they are signed in. 

### Sign in 

- Error handling to ensure that a valid username has been entered - this can be any username recorded in the database, but `jessjelly` is recommended by the username hint if no valid username has been entered when trying to sign in. 

- Error handling to ensure that a password (any) has been entered. 

- Automatically redirects to `Account Page` and changes the display in the nav bar to match once logged in, showing the user's name and profile picture. 



## Running this project locally

If you would like to run this project locally, follow the guide below:

*Note: The minimum version of Node.js required to run this is `V19.1.0`*

- Firstly, fork and clone this repo onto your local device

- Navigate to the folder and install the npm packages with the following command:

    `npm install`

- Finally, run the project using the following command:

    `npm start`

## Further updates

This project will be updated as I improve my skills. I hope to implement some new features, including refactoring the topic filter functionality and creating a more visually exciting layout for the homepage using CSS grids. 

Enjoy exploring this project! 