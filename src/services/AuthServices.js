import {getLocalData, setLocalData} from "./StorageServices"

const _store = {
    state: {
        accessToken: getLocalData('accessToken', ''),
        user: getLocalData('user', {})
    },
    subscribers: []
}

const _broadcast = () => {
    setTimeout(() => {
        _store.subscribers.forEach(subscriber => {
            subscriber(_store.state)
        })
    }, 0)
}

export const subscribe = subscriber => {
    if (typeof subscriber !== 'function') return
    if (_store.subscribers.indexOf(subscriber) !== -1) return

    _store.subscribers = [].concat(_store.subscribers, [subscriber])
}

export const unsubscribe = subscriber => {
    _store.subscribers = _store.subscribers.filter(sub => sub !== subscriber)
}

export const isAuthenticatedUser = () => {
    const {state} = _store

    return !!(state.accessToken && state.user && Object.keys(state.user).length)
}

export const setUserData = user => {
    const oldUser = _store.state.user

    const updatedUser = {
        ...oldUser,
        ...user
    }

    _store.state = {
        ..._store.state,
        user: updatedUser
    }

    setLocalData('user', updatedUser)
    _broadcast()
}

export const getUserData = () => getLocalData('user', {}) || _store.state.user || {}

export const setAccessToken = accessToken => {
    _store.state = {
        ..._store.state,
        accessToken,
    }

    setLocalData('accessToken', accessToken)
    _broadcast()
}

export const getAccessToken = () => getLocalData('accessToken', '') || _store.state.accessToken || ''