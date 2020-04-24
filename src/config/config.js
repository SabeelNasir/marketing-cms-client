const apiUrl = process.env.NODE_ENV == 'development' ? 'http://localhost:3000/api' : 'https://marketing-cms-server.herokuapp.com/api'
const constants = {
    appTitle: 'Marketing CMS'
}
export {
    apiUrl,
    constants
}