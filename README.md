# HelloMovies Challenge Solution

- This repository contains solution to the HelloMovies Challenge.

- The solution is built using React, Typescript, Python, Django, Postgres, and Cypress.

- The deployed application is available at https://hellomovies.vernu.dev

## Code Structure
1. .github/workflows - contains the github actions workflow that runs unit and e2e tests on every push/PR
2. backend
    - movies - contains the movies djago app
3. frontend
    
4. e2e - contains the e2e tests written using cypress

## How to run the application

1. Clone the repository

```
git clone https://github.com/vernu/hw-challenge
```

2. checkout the develop branch

```
git checkout develop
```

3. build and run the application using docker compose

```
docker compose up --build -d
```

4. frontend will be available at http://localhost:3000 and backend at http://localhost:8000

- The application will be loaded with genres and movies data from `/backend/movies/fixtures` folder once you run the application with docker. If you want to run the application without docker, you can load the data using the following commands.

```
poetry run ./manage.py loaddata genres.json
poetry run ./manage.py loaddata movies.json
```

## How to run the e2e tests

1. Go to e2e folder

```
cd e2e
```

2. Install the dependencies

```
pnpm install
```

3. Run the tests

```
pnpm run test
```
