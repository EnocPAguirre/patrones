const user = new User();

const init = () => {
    user.on('login', userLoggedIn)
    user.on('login', retrieveInitialData)
}

const userLoggedIn = () => {

}

app.init();

const login = () => {

    user.trigger('login')
}

login()