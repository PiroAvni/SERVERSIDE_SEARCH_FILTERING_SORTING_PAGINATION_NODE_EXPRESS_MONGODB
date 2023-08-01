# Project Name

Server Side Search, Filtering, Sorting and Pagination.

## Table of Contents

- [Project Name](#project-name)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Database Schema](#database-schema)

## Description

Implementing a basic service side Search, filter, sort and pagination using Node, Express and MongoDB.

## Features

List the main features of the project. For example:
- Search movies by name, genre, etc.
- Filter movies based on genre, release date, etc.
- Pagination support to display movies in chunks.

## Technologies Used

Mention the technologies and libraries used in the project. For example:
- Node.js
- Express.js
- MongoDB (with Mongoose)


## Installation

Step-by-step instructions on how to install and set up the project locally on your machine. Include prerequisites, such as Node.js and MongoDB installation.

Clone the repository
```javascript
git clone https://github.com/PiroAvni/SERVERSIDE_SEARCH_FILTERING_SORTING_PAGINATION_NODE_EXPRESS_MONGODB.git
```

Change directory
```
cd your-project
```


Install dependencies
```
npm install
```


## Usage

Instructions on how to run the application locally.

Run the development server
``` 
npm start
```




## API Endpoints

List the available API endpoints along with their descriptions. For example:

- `GET /api/movies`: Get a list of movies with search, filter, and pagination options.

## Database Schema

If applicable, provide details about the database schema and how the data is structured.

```JAVASCRIPT 

const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
    year: {type: Number, required: true},
    genre: {type: [String], required: true},
    rating: {type: Number, required: true}
});

module.exports = mongoose.model("movie", movieSchema);
```

