const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs');

    //home
    this.get('#/home', homeController.getHomeTemplate);

    //login
    this.get('#/login', userController.getLoginTemplate);
    this.post('#/login', userController.loginUser);

    //logout
    this.get('#/logout', userController.logoutUser);

    //register
    this.get('#/register', userController.getRegisterTemplate);
    this.post('#/register', userController.createUser);

    //get All
    this.get('#/cinema', eventController.getAll);

    //add 
    this.get('#/addMovie', eventController.getAddFormTemplate);
    this.post('#/movie/create', eventController.createData);

    //show my
    this.get('#/myMovies', eventController.getMy);

    //more details
    this.get('#/more-details/:id', eventController.getCurrent);

    // delete
    this.get('#/delete/:id', eventController.deleteElement);

    //edit event
    this.get('#/edit/:id', eventController.getEditTemplate);
    this.post('#/edit/:id', eventController.postEdit);

    //buy
    this.get('#/buyTicket/:id', eventController.bye);

});

(() => {
    app.run('#/home');
})();