import { getRequest, putRequest, postRequest } from './requests'
export const getCalendars = () => {
    return new Promise((resolve, reject) => {
        getRequest('/calendars').then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}
export const getCalendar = (id) => {
    return new Promise((resolve, reject) => {
        getRequest('/calendars/' + id).then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}
export const updateCalendar = (id, data) => {
    return new Promise((resolve, reject) => {
        putRequest(`/calendars/${id}`, data).then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}
export const saveCalendar = (data) => {
    return new Promise((resolve, reject) => {
        postRequest(`/calendars`, data).then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}