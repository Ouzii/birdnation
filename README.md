# Birdnation

Birdnation is PWA application made with ReactJS frontend and Node.js backend. Bootswatch Sketchy-theme (https://bootswatch.com/sketchy/) offers the nice look for the application. Production build of application is running in Heroku, while MongoDB database is hosted by mlab.

Birdnation can be used in offline mode after first time use in online. Application will post all new observations made offline when the user has internet connectivity and reloads the page.

Offline mode is implemented with a service worker, that caches all the fetched data. POST-requests are saved to local storage, until they can be succesfully posted. Saving to local storage has been implemented with ReactJS (axios interceptor) and a little bit of JQuery. Also custom events are used to trigger the saving. All observations are also saved into local storage for offline use. 

### [Link to production](https://birdnation.herokuapp.com/)

### Environment variables

| Variable  | Description |
| ------------- | ------------- |
| DATABASE_URL  | Address of database, e.g. `mongodb://USERNAME:PASSWORD@dsNUMBER.mlab.com:PORT/DATABASE` |
| PORT | Port used by the backend server |
| map_api_key | Unique Google Maps api key to use the map functionality |

### Building and running the application in localhost

1. Clone the repository with `git clone git@github.com:Ouzii/birdnation.git`.
2. Change to the directory with `cd birdnation/`.
3. Install the dependencies with `npm install`.
4. Add .env file to contain your environment variables, see below.
5. Run the app with `npm start`.

### Modifying frontend

1. Clone the repository with `git clone git@github.com:Ouzii/birdnation.git`.
2. Change to the directory with `cd birdnation/frontend/`.
3. Do your changes
4. Rebuild frontend with `npm run build`, this will automatically move the new build to backend (requires you to be in birdnation/frontend/)

### [Deploying to heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
