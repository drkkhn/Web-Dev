# API Documentation

This is the documentation for the Wear Web API. The API provides endpoints to manage categories, sizes, hats, tops, pants, and shoes.

## Base URL
The base URL for all API endpoints is:
```
http://127.0.0.1:8000/api/
```

## Authentication
JWT (JSON Web Token) authentication is used for this API. You need to obtain a token by sending a POST request to the `/api/token/` endpoint with valid credentials (username and password). The token should then be included in the `Authorization` header of subsequent requests as `Bearer <token>`.

### Obtain Token
Endpoint: `/api/token/`

### Refresh Token
Endpoint: `/api/token/refresh/`

### Verify Token
Endpoint: `/api/token/verify/`

### DO NOT FORGET TO CREATE GENDER FIELDS IN DJANGO ADMIN PANEL

## Endpoints

### Categories
- **GET** `/api/categories/`: Get a list of all categories.
- **POST** `/api/categories/`: Create a new category.

Example JSON for creating a category:
```json
{
    "name": "hats"
}
```

- **GET** `/api/categories/id/`: Get details of a specific category.
- **PUT** `/api/categories/id/`: Update details of a specific category.
- **DELETE** `/api/categories/id/`: Delete a specific category.

### Sizes
- **GET** `/api/sizes/`: Get a list of all sizes.
- **POST** `/api/sizes/`: Create a new size.

Example JSON for creating a size:
```json
{
    "size": "XS"
}
```

- **GET** `/api/sizes/id/`: Get details of a specific size.
- **PUT** `/api/sizes/id/`: Update details of a specific size.
- **DELETE** `/api/sizes/id/`: Delete a specific size.

### Hats
- **GET** `/api/hats/`: Get a list of all hats.
- **POST** `/api/hats/`: Create a new hat.

Example JSON for creating a hat:
```json
{
    "name": "Cap",
    "brand": "Nike",
    "price": 45.06,
    "image_url": "test",
    "gender": 1,
    "category": 1,
    "sizes": [1]
}
```
- **GET** `/api/hats/id/`: Get details of a specific hat.
- **PUT** `/api/hats/id/`: Update details of a specific hat.
- **DELETE** `/api/hats/id/`: Delete a specific hat.

### Tops
- **GET** `/api/tops/`: Get a list of all tops.
- **POST** `/api/tops/`: Create a new top.

Example JSON for creating a top:
```json
{
    "name": "T-Shirt",
    "brand": "Adidas",
    "price": 25.99,
    "image_url": "test",
    "gender": 1,
    "category": 1,
    "sizes": [1, 2]
}
```
- **GET** `/api/tops/id/`: Get details of a specific top.
- **PUT** `/api/tops/id/`: Update details of a specific top.
- **DELETE** `/api/tops/id/`: Delete a specific top.

### Pants
- **GET** `/api/pants/`: Get a list of all pants.
- **POST** `/api/pants/`: Create a new pant.

Example JSON for creating a pant:
```json
{
    "name": "Jeans",
    "brand": "Levi's",
    "price": 59.99,
    "image_url": "test",
    "gender": 1,
    "category": 1,
    "sizes": [1, 2, 3]
}
```
- **GET** `/api/pants/id/`: Get details of a specific pant.
- **PUT** `/api/pants/id/`: Update details of a specific pant.
- **DELETE** `/api/pants/id/`: Delete a specific pant.

### Shoes
- **GET** `/api/shoes/`: Get a list of all shoes.
- **POST** `/api/shoes/`: Create a new shoe.

Example JSON for creating a shoe:
```json
{
    "name": "Sneakers",
    "brand": "Puma",
    "price": 69.99,
    "image_url": "test",
    "gender": 1,
    "category": 1,
    "sizes": [1, 2, 3, 4]
}
```
- **GET** `/api/shoes/id/`: Get details of a specific shoe.
- **PUT** `/api/shoes/id/`: Update details of a specific shoe.
- **DELETE** `/api/shoes/id/`: Delete a specific shoe.

---

### Notes:
- Replace `id` with the actual ID of the category, size, hat, top, pant, or shoe.
- `gender` in the JSON data refers to the gender code (e.g., 1 for Male, 2 for Female, etc.), adjust as needed.
- The API supports CRUD operations (Create, Read, Update, Delete) for each resource (category, size, hat, top, pant, shoe).
- Make sure to include the JWT token in the `Authorization` header of your requests after obtaining it.
- Responses will be in JSON format.

Feel free to use this README file as a guide for working with the Wear Web API. If you have any further questions or issues, please refer to the API documentation or contact the API administrator.

---

This README provides a comprehensive overview of the available endpoints and how to interact with them using JSON data. Let me know if there's anything else you'd like to add or modify!