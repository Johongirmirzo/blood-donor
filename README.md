# blood-donor

- [Admin Live](https://blood-donor-admin.netlify.app)
- [Client Live](https://blood-donorr.netlify.app/)

## Steps to run the app


### Backend
1. Clone or Download this repository
```js
git clone or download this repository
```

2. Once downloaded, move to api folder and run npm run dev. You should already have mongodb installed and running in your pc for this to work
```js
cd api
npm run dev
```


### Admin
1. move to admin folder 
```js
cd admin
```

2. change remote url to local url
```js
// open endpoints file
and change from
const BASE_URL = "https://blood-donor.onrender.com/api";
to
const BASE_URL = "http://localhost:8800/api";
```

3. start the admin
```js
npm start
```

### Client
1. move to client
```js
cd client
```

2. change remote url to local url
```js
// open endpoints file
and change from
const BASE_URL = "https://blood-donor.onrender.com/api";
to
const BASE_URL = "http://localhost:8800/api";
```

3. start the client
```js
npm start
