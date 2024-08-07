# Password-Reset Server
The "Password Reset" web service is built using the MERN (MongoDB, Express.js, React, Node.js) stack that facilitates user authentication functionalities such as signup, login, and a password reset process.

Password Reset API documentation - https://documenter.getpostman.com/view/36929104/2sA3rzKCak
# Overview
This project focuses on securing user details and hashing passwords using bcrypt, storing them securely in the database. Also, used JWT for user Authentication when retrieving user details from database.

## 1.	/user/siginin 
  •	checks the existence of the user's MAIL ID and PASSWORD. 
  •	Passwords are hashed and stored in DB
  •	Bcrypt hashCompare technique is used to check the hashed password.
  •	If Incorrect password, sends error message as response.
  •	Once the user Signed In successfully, an Authticated token (JWT token) will be set in the Client side Session storage.


## 2.	/user/signup
  •	Allows User to create new account by providing necessary details like firstName, lastName, mail ID, password.

## 3.	/user/forgotpwd
  •	Forgot password link – allows user to request a password reset.
  •	An email with a unique reset link with random string is sent to their registered email address for verification. 
  •	Node Mailer is used for sending password reset emails securely.
  •	The random string stored in DB  will be verified and enables user to navigate to reset-password link.
## 4.	/user/resetpwd
  •	The new password will be hashed using bcrypt and stored securely in DB.

## 5.	/user/getUserbyID
  •	The JWT token will be decoded and the user details will be provided for the authenticated user.

## Technology Used:
  •	Backend: Node.js, Express.js
  •	Database: MongoDB
  •	Additional Libraries/Tools : Node Mailer, bcrypt, JWT
