
install dependancies: npm install
Create .env file in the server directory with the following:

```
CLIENT_ID=YOUR_GOOGLE_PROJECT_ID
PRO_DB=PRODUCTION_MONGO_DB_URL
SECRET_KEY=ANY_SECERT_KEY_TO_SIGN_TOKENS
DEV_DB=DEVELOPMENT_MONGO_DB_URL
```

Create .env file in the client directory with the following:

```
REACT_APP_CLIENT_ID=YOUR_GOOGLE_PROJECT_ID
```

Run te project with the following commands:

```
npm run server
npm run client
```
