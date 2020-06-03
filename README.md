# EventSet

This application allows users to create an account, and add, edit, or delete events personal or professional contacts. This allows the user to store contact information and events such as birthdays, anniversaries, exams, and presentations in one location. All data is stored in a database.


## Account

An account is created by entering a username, email, and password into a form on the registration and sign-in page. Account information is stored in a database, with the password protected by bcrypt hash encryption. The user can view the username and email on the landing page. This information is displayed in a card. To update this information, the user clicks the "Update Account" link and edits the fields in the card that takes the place of the display card. To delete the account, the user clicks the "Delete Account" link.

## Events

To create an event, the user navigates from the landing page or contact page via a navigation bar link. On this page, the user can click a button that displays a new event form, view events, and edit events. Events are stored by date ascending and displayed in a card format, providing a clear visualization of upcoming activities. When a user clicks the "Update Event" link on the card, a form in card format takes the place of the display card. To delete and even, the user clicks the "Delete Event" link on the display card.

## Contacts

Similar to the events page, the user can navigate to the contacts page from the landing page or the events page via a navigation bar link. The user can click a button to display a new contact form. Contacts are displayed in card format for clear visualization. Clicking the "Update Contact" link on the card will display an update form in place of the display card.

# Other Features

This application was built using bcrypt for password encryption and the postgres database dialect. Sequelize with Node.js facilitates communication with the database that allows for additions, edits, and deletions. All communication with the database is achieved with routes on the back end. Frontend javascript creates functionality for button and link toggle functions. EJS templates communicate with back end data for frontend display, which is fully functional for all screen sizes. To allow for wider usage, this site is deployed on Heroku. Use  
[this link to access](https://eventset.herokuapp.com/).

## To run on local computer

The following installations must take place to successfully after cloning from the github repository to run this program on a local computer: npm install, connect session-sequelize, sequelize -cli, ejs-lint (for error reporting), and nodemon.

## Potential Improvements

The following features would enhance this application:

 - email notification for upcoming events
 - modal pop-up notification for upcoming events upon site login
 - chat feature to allow users to communicate with one another
 - carousel on landing page that display first few upcoming events 

## Database Map

The tables are constructed as displayed below. Foreign keys are italicized. 

**User**
|ID|
|username|
|email|
|password|

**Contact**  		--> No fields set to required to maintain flexibility for user
|ID|
|Name|
|Email|
|Phone|
|Address|
|*User ID*|      		--> Connects contact to originating user

**Event**
|ID|
|Type|
|Date|
|Time|
|*Contact ID*|      --> Connects event to associated contact (not a required field)
|*User ID*|			 --> Connects event to originating user



## Site map

The site pages are connected as indicated below. All pages are also connected to the Register/Login page via the logout link in the navigation bar. ***********IS LOGOUT CONNECTION BETTER WRITTEN OUT OR DISPLAYED BELOW? IF THE FORMER, DELETE LAST THREE LINES.**

***

```mermaid
graph LR
A[Register/Login] --> B[Landing page]
B --> C[Contacts]
B --> D[events]
C --> D[Events]
C --> B[Landing Page]
D --> C[Contacts]
D --> B[Landing Page]
B --> A
C --> A
D --> A