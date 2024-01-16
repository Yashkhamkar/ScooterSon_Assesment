To run this project locally you need to follow below steps:

1.Clone this repository 

2.run npm install script

3.then run node index.js

4.Then Launch http://localhost:5000 on your browser

Architecture of this backend :-

When User registers in this project or when user logins in response user get a token . 

This token is than used to verify if a user is admin or normal user.

If user is admin he can create product on website and access my profile section.

If user is normal user he can just access my profile setion and cannot create the product

To implement this i have used jwt .

Also i have used bcrypt to encrypt the password so even a admin doesnt have access to  normal user's password



![archi_diagram](https://github.com/Yashkhamkar/ScooterSon_Assesment/assets/71758380/916326ef-7c7e-4640-ad99-cc0782df70d7)

