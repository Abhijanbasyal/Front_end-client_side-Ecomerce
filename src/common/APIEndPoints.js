const serverDomain = process.env.REACT_APP_SERVER_DOMAIN;


const APIEndPoints = {
    sign_up: {
        url: `${serverDomain}/api/sign-up`
    },
    sign_in: {
        url: `${serverDomain}/api/sign-in`
    },
    google_sign:{
        url: `${serverDomain}/api/google-sign`
    },
    user_update:{
        url: `${serverDomain}/api/updateUser/:id`
    }

}

export default APIEndPoints;