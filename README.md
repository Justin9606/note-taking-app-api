######Note-Taking App######

Description
This is a simple note-taking app developed using Node.js and Express, backed by MongoDB. It allows users to create, view, update, and delete notes through a RESTful API.

Technologies
Node.js
Express
MongoDB
Mongoose

Installation

1. Clone the repo

git clone https://github.com/Justin9606/note-taking-app-api.git

cd note-taking-app

2. Install dependencies
   npm install

3. Set up environment variables
   PORT=3000

4. npm start

Usage
The application supports the following RESTful actions:

GET /api/notes: Retrieve all notes.

GET /api/notes/:id: Retrieve a single note by ID.

POST /api/notes: Create a new note with JSON body { "title": "title", "content": "content" }.

PUT /api/notes/:id: Update a note by ID with JSON body { "title": "new title", "content": "new content" }.

DELETE /api/notes/:id: Delete a note by ID.

Testing

Test the API endpoints using Postman or any other API testing tool by navigating to http://localhost:3000/api/notes.

Author

Tokhirjon (Justin)
