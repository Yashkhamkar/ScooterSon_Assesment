To run this project locally you need to follow below steps:
1.Clone this repository 

2.cd backend
3.Once you are in backend run npm install script
4.Launch http://localhost:5000 on your browser

Architecture of this backend :-
When User registers in this project or when user logins in response user get a token . 
This token is than used to verify if a user is admin or normal user.
If user is admin he can create product on website and access my profile section.
If user is normal user he can just access my profile setion and cannot create the product
To implement this i have used jwt .
Also i have used bcrypt to encrypt the password so even a admin doesnt have access to  normal user's password
