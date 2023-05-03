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
* Add a row in the password table
* Delete a row in the password table
* Update navbar


## What is pending
* Add login database
* Add functionality for creating new user
* Add login functionailty and connect it with the password page
* Create MongoDB collections


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
* Implement ability to delete items from the collection
* Table updates when user deletes an item from the collection without user having to refresh the page

### Cameron Sumida
* Set up remote MongoDB server
* Connected server to app
* Set up password collection
* Set up temporary password table
* Changed app to use local Mongodb instance
* Removed unused MongoDB collection and files
* Wrote installation guide

### Kirsten-Elise Rensaa
* Create README file
* Implement and test out Roslynator
* Create login page
* Link login page to navbar
* Update About page
* Create Wiki pages

### Lise Marie Nilsen
* Set up git repo
* Create mockup page for login page
* Implement home mockup page
* Update navbar
* Create password storage page

## Technical Notes

### Installation Guide
* Install [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/) and [.NET](https://dotnet.microsoft.com/en-us/download) on your computer.
* Ensure MongoDB is connected to the correct port by running ``mongod --dbpath=<directory>``, where ``<directory>`` is the directory path to an empty folder.
  * Example: ``mongod --dbpath=user/folder``.
* Ensure React Bootstrap is installed.
  * Example: ``npm install react-bootstrap``.
* Download a copy of the project and store it somewhere on your computer.
* In a command prompt, cd into the innermost folder labeled PassPass, and run the command ``dotnet watch run``
  * While running, a second command prompt will open.
  * The first time you run it might takea little longer due to some packages being installed.
* Once the command finishes, the app should open by itself in your browser.

## Closing thoughts

Looking back on our project we have definitely overcome some hurdles. One of the issues we stagnated with the longest was to implement the database. This was an essential part of our product, and so it was not something we could compromise. Another source of challenges was implementing dynamic analysis. For JavaScript, one of our primary languages, we couldn't locate a modern dynamic analysis framework to use, as the only options available hadn't been maintained in many years. It seems that since the web browser already provides a solid dynamic debugging environment, there isn't much momentum for a solid dynamic analysis framework, as debugging is one of the tasks they help the most with. For C#, we were able to locate a modern and high quality dynamic analysis tool, but it required an enterprise subscription to Visual Studio, which we didn't have access to. After these issues however, the rest of the pieces started coming together. Ideally we would have implemented more features in regards to security, but we were unfortunately too short on time. We are happy with our choice of database as it provides encryption opportunities.


## Links
Online Repository:
https://github.com/Lmnilsen/Passpass

Wiki:
https://github.com/Lmnilsen/Passpass/wiki

