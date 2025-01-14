# Project Setup Instructions

Follow the steps below to set up and run the project:

## Clone the Repository
1. Open a terminal and navigate to the folder where you want to clone the repository.
2. Run the following command:
   ```bash
   git clone https://github.com/amruta-Jodagudri/Patient-Management-System
   ```

## Install Dependencies
3. Navigate to the project folder:
   ```bash
   cd Patient-Management-System
   ```
4. Install the required dependencies:
   ```bash
   npm install
   ```

## Set Up Fake Server
5. Navigate **outside** of the current application folder to set up the fake server:
   ```bash
   cd ..
   ```
6. Install `json-server` globally:
   ```bash
   npm install -g json-server
   ```
7. Create a file named `db.json` in the new folder and add the following content:
   ```json
   {
     "posts": [
       { "id": "1", "title": "a title", "views": 100 },
       { "id": "2", "title": "another title", "views": 200 }
     ],
     "comments": [
       { "id": "1", "text": "a comment about post 1", "postId": "1" },
       { "id": "2", "text": "another comment about post 1", "postId": "1" }
     ],
     "profile": {
       "name": "typicode"
     }
   }
   ```
8. Run the fake server with the following command:
   ```bash
   npx json-server db.json
   ```

## Run the Application
9. Navigate back to the application folder:
   ```bash
   cd Patient-Management-System
   ```
10. Start the application using Angular CLI:
    ```bash
    ng serve
    ```

## Access the Application
11. Open your browser and visit:
    ```
    http://localhost:4200
    ```

## Access the Fake Server
12. The fake server will be running at:
    ```
    http://localhost:3000
    
