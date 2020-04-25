import { getRequest } from './requests'
export const getProfileGroups = () => {
    return new Promise((resolve, reject) => {
        getRequest('/profile-groups').then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}
export const getProfileGroup = (id) => {
    return new Promise((resolve, reject) => {
        getRequest('/profile-groups/' + id).then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}