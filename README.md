# EventSet

This application allows users to create an account, and add, edit, or delete events personal or professional contacts. This allows the user to store contact information and events such as birthdays, anniversaries, exams, and presentations in one location. All data is stored in a database.


## Account

An account is created by entering a username, email, and password into a form on the registration and sign-in page (see below). 

![Register/Login Page](https://i.ibb.co/LSrLJ2d/Screen-Shot-2020-06-03-at-6-39-48-AM.png)

Account information is stored in a database, with the password protected by bcrypt hash encryption. The user can view the username and email on the landing page. This information is displayed in a card. To update this information, the user clicks the "Update Account" link and edits the fields in the card that takes the place of the display card. To delete the account, the user clicks the "Delete Account" link. (See below.)

![Accounts](https://i.ibb.co/1QMhpdD/Screen-Shot-2020-06-03-at-6-42-41-AM.png)    ![Accounts](https://i.ibb.co/jf7yrNw/Screen-Shot-2020-06-03-at-6-42-57-AM.png)

## Events

To create an event, the user navigates from the landing page or contact page via a navigation bar link. On this page, the user can click a button that displays a new event form, view events, and edit events. Events are stored by date ascending and displayed in a card format, providing a clear visualization of upcoming activities. When a user clicks the "Update Event" link on the card, a form in card format takes the place of the display card. To delete and even, the user clicks the "Delete Event" link on the display card. Please see images below for illustration of toggle functionality.

![EventsToggle](https://i.ibb.co/chTKkhY/Screen-Shot-2020-06-03-at-6-53-59-AM.png)    ![EventsToggle](https://i.ibb.co/jG8hxqN/Screen-Shot-2020-06-03-at-6-54-43-AM.png)    

## Contacts

Similar to the events page, the user can navigate to the contacts page from the landing page or the events page via a navigation bar link. The user can click a button to display a new contact form, as shown below. 

![ContactReg](https://i.ibb.co/C1Scwsd/Screen-Shot-2020-06-03-at-6-44-23-AM.png)    ![ContactForm](https://i.ibb.co/9H8hVr5/Screen-Shot-2020-06-03-at-6-45-11-AM.png)

Contacts are displayed in card format for clear visualization. Clicking the "Update Contact" link on the card will display an update form in place of the display card.

## Other Features

This application was built using bcrypt for password encryption and the postgres database dialect. Sequelize with Node.js facilitates communication with the database that allows for additions, edits, and deletions. All communication with the database is achieved with routes on the back end. Frontend javascript creates functionality for button and link toggle functions. EJS templates communicate with back end data for frontend display, which is fully functional for all screen sizes. To allow for wider usage, this site is deployed on Heroku. Use [this link to access](https://eventset.herokuapp.com/).

## To run on local computer

The following installations must take place to successfully after cloning from the github repository to run this program on a local computer: npm install, connect session-sequelize, sequelize -cli, ejs-lint (for error reporting), and nodemon.

## Potential Updates

The following features would enhance this application:

 - email notification for upcoming events
 - modal pop-up notification for upcoming events upon site login
 - chat feature to allow users to communicate with one another
 - carousel on landing page that display first few upcoming events 

## Database Map

The tables are constructed as displayed below.

![Database map](https://i.ibb.co/qrnvFVL/eventsetdb.png)


## Site map

The site pages are connected as indicated below. All pages are connected to the Register/Login page via the logout link in the navigation bar.

![Site map](https://i.ibb.co/6DmGYfj/final-site-map.png)