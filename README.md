# Spotify Social

This is a social app for users of Spotify to share their favourite tracks, discover new tunes and join discussions on tracks.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Inspiration

This is a project for our bootcamp with Birmingham University. We wanted to do something that incorporated the Spotify Api, to make an interactive application that is accessible to Spotify users. We worked as a team of 3, and started with the back end, which we tested using Graphql.

## User Journey

`As a user, I would like to create an account, be able to login, share tracks from Spotify and join discussions on music.`

## Acceptance Criteria

`I join the platform to share music or join in the discussions, WHEN I sign up or THEN I am presented with a login page with the option to login or signup.

WHEN the signup page is displayed THEN I am presented an input field with email, username, password.

WHEN I have signed up / logged in THEN I am presented with my dashboard with my username displayed.

WHEN I am signed in THEN I have the option to navigate to the all post page to view all the current music posts that exist and posted by other existing users. You also have the ability to leave a comment under that post.

WHEN I am on the all post page THEN I am given the option to post a music link that other users can listen to and reply to by leaving a comment on your post.

WHEN I have craeted a post THEN I have the ability to delete that post.`

## Challenges

Getting the oEmbed to work
Displaying the cards using Tailwind
Working with Graphql and testing all the mutations
Posting and deleting comments
The Spotify Api - couldn't get it to work with Graphql

## Future development

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Technology used

We use the following technologies in the app:

- **[React](https://reactjs.org/)** - For the frontend of the app. React is a JavaScript library for building user interfaces.

- [GraphQL](https://graphql.org/) - For the backend of the app. GraphQL is a query language for APIs and databases.

- [Apollo](https://www.apollographql.com/) - For the backend of the app. Apollo is a GraphQL client for React.

- [tailwindcss](https://tailwindcss.com/) - For the styling of the app. Tailwindcss is a utility-first CSS framework for quickly building custom components.

- [bcrypt](https://www.npmjs.com/package/bcrypt) - For the hashing of the passwords of the users. Bcrypt is a password hashing library.

- [express](https://expressjs.com/) - For the backend of the app - used for the authentication of the users. Express is a web application framework for Node.js.

- [mongoose](https://mongoosejs.com/) - For the backend of the app. Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

- [jwt](https://www.npmjs.com/package/jsonwebtoken) For the authentication of the users. Jwt is a JSON Web Token library. It is used for the authentication of the users.

- [dotenv](https://www.npmjs.com/package/dotenv) - for the configuration of the app - used for the authentication of the users. Dotenv is a library for loading environment variables from a .env file into process.env.

- [nodemon](https://www.npmjs.com/package/nodemon) - for the restart of the app. Nodemon is a utility for restarting the server when files change. It is used for the restart of the app.

- [appollo-server-express](https://www.npmjs.com/package/apollo-server-express) - for the backend of the app. Apollo-server-express is a GraphQL server for Express. It is used for the backend of the app.

## Contributors

Jag Tiwana: https://github.com/jtiwana-git
Carla Brown: https://github.com/misscbrown
Farhiya Mahamud: https://github.com/Farhiya1

## oEmbed

We used oEmbed to embed the Spotify URL's in this application. Each embed provides a 30 second preview clip.

https://developer.spotify.com/documentation/embeds/guides/using-the-oembed-api/

## Deployment

https://shielded-beyond-91832.herokuapp.com/

## Screenshots

1. ![Homepage](/client/src/assets/images/homepage.png)

2. ![All posts page](/client/src/assets/images/allpost.png)

3. ![All posts page](/client/src/assets/images/allpost2.png)

4. ![Signup page](/client/src/assets/images/signup.png)

## References

1. https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas
2. https://www.mongodb.com/docs/manual/core/document/
3. https://mongoosejs.com/docs/api/model.html#model_Model
4. https://mongoosejs.com/docs/connections.html
5. https://mongoosejs.com/docs/schematypes.html
6. https://www.apollographql.com/tutorials/fullstack-quickstart/writing-mutation-resolvers
7. https://reactjs.org/
8. https://expressjs.com/
9. https://tailwindcss.com/docs/installation
10. https://v5.reactrouter.com/web/guides/quick-start
11. https://developer.spotify.com/documentation/embeds/guides/using-the-oembed-api/
12. https://graphql.org/

```

```
