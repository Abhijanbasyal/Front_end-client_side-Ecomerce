const serverDomain = "http://localhost:8000";


const APIEndPoints = {
    sign_up: {
        url: `${serverDomain}/api/sign-up`
    },
    sign_in: {
        url: `${serverDomain}/api/sign-in`
    },
    currentUser : {
        url : `${serverDomain}/api/user-details`
    },

}

export default APIEndPoints;