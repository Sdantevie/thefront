# Student Resource Center by Steven Daniel


This Project for my Assesment was Initially Bootstrapped with [Creact React App](https://github.com/facebookincubator/create-react-app), on a Different Repo, Due to problems with the Production Build emmited from CRA, i decided to use this Webpack set-Up from another project of mine. 
Preact in this App is just to reduce the Size of the Bundle

## Available Scripts
### npm run build:dev
Runs the App in Development Mode<br>
Opens on [http://0.0.0.0:9000](http://0.0.0.0:9000).<br> 
Also Opens on Mobile via Development Machines inetaddr on port 9000.<br>
### npm run build:prod
Builds the App and makes it Ready for Deployment.<br>
Output is in the `public` folder<br>


## Components

### App

This is the Parent Component for the whole App. it uses the Switch and Route Packages from React-Router v4 to enable routing to its Child Components which Include...

### Home

The Landing Component. In this component, authentication is done in the background and access to other Parts of the App is revealed if authentication is successful.

### CreateResource

This Component serves two Purposes, in this Component the Creating and editing of students/Resources is solved.

### ViewResource 

This Components enables the Viewing, Deleting and Link for Editing of Students/Resources with the help of its Child Components which Include...

### StudentView 

This Component shows the Student Info, it provides deleting capabilities and Link to Editing the student.

### Resource View 

This Component shows the Resource info, it provides link to editing the resource. No deleting of resource as it was not explicitly specified in the assesment.


Surge is used to output of the production Build in the public folder to http://myalcsrc.surge.sh