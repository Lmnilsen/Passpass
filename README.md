# Passpass 

## What is complete

* Github repository is set up
* Mockup pages are created
* MongoDB server set up

Login page mockup:
https://user-images.githubusercontent.com/60347864/220219661-675d54ec-8acc-4744-bd60-aa6b37d23d75.png

Home page mockup:
https://github.com/Lmnilsen/Passpass/blob/main/mockups/Home%20Page%20Mockup.png

Passwords page mockup:
https://github.com/Lmnilsen/Passpass/blob/main/mockups/PasswordPage.png

## Current progress
* Created MongoDB server
* Connected app to MongoDB server
* Created login page
* Created home page
* Created about page
* Created password storage page
* Update navbar


## What is pending
* Add login database
* Add functionality for creating new user
* Add login functionailty and connect it with the password page
* Create MongoDB collections
* Add information in the about page


### Alexander Jones
* Created mockup for home page
* Created mockup for password storage page
* Created report for Implementation & Verification
* Continued report for Verification
* Conducted Fuzz Testing
* Still working on Dynamic Analysis
* Explore feasibility of encrypting user's passwords using their main login password

### Bryce Mao
* Set up test collections with MongoDb 
* Attempted to setup SQL server and connect to app
* Added forms and buttons to add items to the MongoDb collections
* Added button functionality so that items in the text field are added to the Mongo collection
* Next: implement ability to delete items from the collection

### Cameron Sumida
* Set up remote MongoDB server
* Connected server to app
* Set up password collection
* Set up temporary password table
* Next: Work on resolving Mongo connection issues

### Kirsten-Elise Rensaa
* Create README file
* Implement and test out Roslynator
* Create login page
* Link login page to navbar
* Update About page
* Next: add login functionality and connect it with the password page

### Lise Marie Nilsen
* Set up git repo
* Create mockup page for login page
* Implement home mockup page
* Update navbar
* Create password storage page
* Next: work on the login functionality

## Technical Notes

### Installation Guide
* Install [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/) and [.NET](https://dotnet.microsoft.com/en-us/download) on your computer.
* Ensure MongoDB is connected to the correct port by running ``mongod --dbpath=<directory>``, where ``<directory>`` is the directory path to an empty folder.
  * Example: ``mongod --dbpath=user/folder``.
* Download a copy of the project and store it somewhere on your computer.
* In a command prompt, cd into the innermost folder labeled PassPass, and run the command ``dotnet watch run``
  * While running, a second command prompt will open.
  * The first time you run it might takea little longer due to some packages being installed.
* Once the command finishes, the app should open by itself in your browser.

## Links
Online Repository:
https://github.com/Lmnilsen/Passpass

Wiki:
https://github.com/Lmnilsen/Passpass/wiki

