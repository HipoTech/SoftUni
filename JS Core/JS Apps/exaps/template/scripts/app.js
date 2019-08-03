const app = Sammy('#main', function () {
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


});

(() => {
    app.run('#/home');
})();