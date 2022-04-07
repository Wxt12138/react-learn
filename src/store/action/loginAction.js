const logOut = () => {
    return {
        type: 'logOut',
    }
}



const logIn = (token) => {
    console.log(token, 66)
    return {
        type: 'logIn',
        token: token
    }
}

export {
    logIn,
    logOut
}
