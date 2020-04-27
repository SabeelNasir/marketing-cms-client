
export const apiUrl = process.env.NODE_ENV == 'development' ?
    'http://localhost:3000/api' : 'https://marketing-cms-server.herokuapp.com/api'

/* App Related constants */
const constants = {
    appTitle: 'Socializer',
    companyUrl: "https://logimixin.com",
    companyTitle: "Logimixin",
    appLogo: "img/brand/socializer.png"
}

export default {
    install(Vue) {
        Vue.prototype.$config = constants
    }
}