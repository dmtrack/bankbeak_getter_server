## beakgetter

### Description

This project is a test-task for company
Technical task was to create microservice that able:

-   to download zip archive with bank's beak information from central bank site
-   extract xml from zip archive and convert it to json

### Install

git clone [server](https://github.com/dmtrack/beakgetter_server)
paste to .env file to project folder:

```
    PORT=8000

```

### Using

```
send a request http://localhost:8000/service/getbeak
send a request http://localhost:8000/service/getbeakschedule (console output)
```

### Stack

-   TypeScript
-   Express
-   adm-zip
-   node-fetch
-   xml-js
