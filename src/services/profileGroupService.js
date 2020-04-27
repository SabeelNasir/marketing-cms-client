import { getRequest, putRequest, postRequest } from './requests'
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
export const updateProfileGroup = (id, data) => {
    return new Promise((resolve, reject) => {
        putRequest(`/profile-groups/${id}`, data).then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}
export const saveProfileGroup = (data) => {
    return new Promise((resolve, reject) => {
        postRequest(`/profile-groups`, data).then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}