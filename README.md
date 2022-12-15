# blood-donor

- [Admin Live](https://blood-donor-admin.netlify.app)
- [Client Live](https://blood-donorr.netlify.app/)

## Steps to run the app


### Backend
1.
```js
git clone or download this repository
```

2. 
```js
cd api
npm run dev
```


### Admin
1. 
```js
cd admin
```

2.
```js
// open endpoints file
and change from
const BASE_URL = "https://blood-donor.onrender.com/api";
to
const BASE_URL = "http://localhost:8800/api";
```

3.
```js
npm start
```

### Client
1. 
```js
cd client
```

2.
```js
// open endpoints file
and change from
const BASE_URL = "https://blood-donor.onrender.com/api";
to
const BASE_URL = "http://localhost:8800/api";
```

3.
```js
npm start
