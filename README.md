# Project BookStore API

## Start

`git pull origin main`

`npm start`

## Endpoints

### Public routes

#### GET

- `/users`
- `/genres`
- `/categories`

#### POST

- `/login`
```json
{
	"email": "dupon@gmail.com",
	"password": "dupon12345"
}
```

### Private routes

#### GET

- `/books`

#### POST


## Data

### Users

```json
{
	"firstname": "Pierre",
	"lastname": "Dupon",
	"email": "dupon@gmail.com",
	"password": "dupon12345"
}
```