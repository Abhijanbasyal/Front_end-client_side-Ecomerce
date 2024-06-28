const serverDomain = "http://localhost:8000";


const APIEndPoints = {
    signup: {
        url: `${serverDomain}/api/sign-up`
    },
    login: {
        url: `${serverDomain}/api/login`
    },
    currentUser : {
        url : `${serverDomain}/api/user-details`
    },

}

export default APIEndPoints;