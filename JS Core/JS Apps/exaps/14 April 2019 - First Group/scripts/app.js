const app = Sammy('body', function () {
    this.use('Handlebars', 'hbs');

    //home
    this.get('#/home', homeController.getHomeTemplate);

    //login
    this.get('#/login', userController.getLoginTemplate);
    this.post('#/login', userController.loginUser);

    //logout
    this.get('#/logout', userController.logoutUser);

    //user info
    this.get('#/more-details/user', userController.getUserInfo);

    //register
    this.get('#/register', userController.getRegisterTemplate);
    this.post('#/register', userController.createUser);

    //organizeEvent
    this.get('#/organizeEvent', eventController.getEventFormTemplate);
    this.post('#/organizeEvent', eventController.createEventData);

    //more details Event
    this.get('#/more-details/:id', eventController.getCurrentEvent);
    this.get('#/more-details/delete/:id', eventController.deleteEvent);

    //edit event
    this.get('#/more-details/edit/:id', eventController.getEditTemplate);
    this.post('#/more-details/edit/:id', eventController.postEdit);

    //join event
    this.get('#/joinEvent/:id', eventController.joinEvent);

});

(() => {
    app.run('#/home');
})();