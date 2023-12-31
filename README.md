
# User Management REST APIs

This repository contains a Node.js application for managing user data using a MongoDB database. The application provides a set of REST APIs to perform CRUD operations on user documents.

## Task Description

The goal of this project was to implement a set of REST APIs for user management with the following features:

- **User Schema:**
  - Fields include `firstName`, `lastName`, `emailId`, `phoneNumber`, `education`, and `hobby`.
  - `hobby` includes two elements, one for indoor and one for outdoor.

- **API Endpoints:**
  - **GET /user/get:** Retrieve all users from the collection.
  - **GET /user/get?emailId=:emailId:** Retrieve user information based on the provided emailId.
  - **GET /user/get?phoneNumber=:phoneNumber:** Retrieve user information based on the provided phoneNumber.
  - **POST /user/create:** Create a new user document.
  - **POST /user/update/phoneNumber:** Update user information, specifically the phoneNumber.
  - **POST /user/update/education:** Update user education information.
  - **POST /user/update/hobby:** Update user hobby information.
  - **DELETE /user/delete?emailId=:emailId:** Delete a user document based on the provided emailId.
  - **DELETE /user/delete?phoneNumber=:phoneNumber:** Delete a user document based on the provided phoneNumber.

- **Validation:**
  - Validate input parameters in requests.
  - Check for missing mandatory parameters.
  - Handle runtime errors and exceptions.

## Solution

The solution involves a Node.js application using the Express.js framework, Mongoose for MongoDB interactions, and a structured API design.

### Project Structure

- **controllers:** Contains the logic for each API endpoint.
- **models:** Defines the Mongoose schema for the User.
- **routes:** Defines the Express routes for each API endpoint.
- **config:** Includes database connection logic.
- **app.js:** Entry point for the application.

### How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
