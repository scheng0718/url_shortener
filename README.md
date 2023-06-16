# URL Shortener

URL Shortener is a web application that generates short URLs for long URL. It provides the following features:

## Features

1. **Homepage**: The homepage includes navbar and a form where users can enter their original URL. After submitting the form, clicking the "Shorten URL" button will return a formatted short URL.
2. **Redirection**: During the server runtime, when a user visits a shortened URL, they are redirected to the original long URL.
3. **Short URL Format**: Shortened URLs are formatted as "http://localhost:3000/mpST9" and consist of a randomly generated five-character combination of uppercase and lowercase letters along with numbers. The code logic ensures that each generated short ID is unique and not duplicated. 
4. **Express Framework**: The application is built using the Express framework, providing a robust and efficient server-side structure.
5. **Handlebars Template Engine**: Handlebars is used as the template engine to dynamically render HTML content with data.
6. **MongoDB Database**: The application utilizes MongoDB and Mongoose as the object modeling tool for interacting with the database.
7. **User-Friendly Interface**: The web interface is designed to be intuitive and user-friendly, allowing users to easily input and shorten URLs.
8. **URL Copying**: Users can copy the shortened URL with a single click, making it convenient for sharing.
9. **Input Validation**: The application validates user input to ensure that the entered URL is not empty and is a valid web address.

## Prerequisites

Make sure you have the following software installed before running the application:

- Node.js
- Express
- Express-Handlebars
- MongoDB and Robo3T (for database management)
- Mongoose (MongoDB object modeling tool)

## Getting Started

1. Clone the repository or download the source code:
```
git clone https://github.com/scheng0718/url_shortener.git
```
2. cd to directory
```
cd url_shortener
```
2. Install the required dependencies using: 
```
npm install
```
3. Create a .env file in the root directory and provide the necessary environment variables:
```
MONGODB_URI=mongodb+srv://<your MongoDB account>:<your MongoDB password>@<mongodb server location(ex. cluster0.okrb8d7.mongodb.net)>/<database name (ex. url_shortener)>?retryWrites=true&w=majority
```
4. Run the application using:
```
npm run dev
```
5. When the messages pop up, the local host is running and MongoDB is connected 
```
The server is listening at http://localhost:3000
mongodb connected!
```
6. Please access the URL Shortener service through visiting in your web browser: 
```
http://localhost:3000
```
7. Enjoy using the URL Shortener
8. Terminate the local host service
```
ctrl + c
```

## Developer Tools

- Node.js: 14.16.0
- Npm: 6.14.11
- Express: 4.17.1
- Express-handlebars: 4.0.2
- Bootstrap: 5.3.0
- MongoDB: 6.0.6
- Mongoose: 5.9.7
- dotenv: 16.1.4

## Contribution

Contributions to the URL Shortener project are welcome! If you have any ideas for improvement or would like to add new features, please feel free to submit a pull request.

## Contributor

Evan Cheng