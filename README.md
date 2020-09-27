# JavaBrainsWrapUp

The purpose of this project was to test basic functionality of angular 10 concepts learnt through the java brains course in 
https://www.youtube.com/watch?v=9RG3MiEBEIw&list=PLqq-6Pq4lTTb7JGBTogaJ8bm7f8VCvFkj.

Application functionality: It lets you enter the github usernames, fetches and parses the code to display basic details.

Application design: 
* 2 components home and about besides app component. 
* Basic url routing for the 2 components is done. 
* The home component further utilizes more component header and content. 
* Header component has the input bar for getting username and a submit button.
* The header component makes get call to fetch data for username from github api and uses eventEmitter to send response from home(child component) to home(parent component).
* Home component calls upon a service called user.service to parse the response into a custom model called user.model.
* This model is passed to content component(child component) from home component(parent component).
* The component displays this model data.
* About component is just a basic component.

To-do:

* Push some specs (yet to explore that).
* Add child routing.
* Actually the app component should contain only the router outlet rather than have the HOME and ABOUT router links. Because the error component for invalid url would load below the HOME and ABOUT. Wrong UX.
* Add css.
