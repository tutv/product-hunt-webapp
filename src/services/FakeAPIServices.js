const _createFakeRequest = (data, timeout = 500) => {
    const isError = Math.random() < 0.1

    return new Promise((resolve, reject) => {
        if (isError) return reject(new Error('Something went wrong'))

        resolve({
            success: true,
            data,
        })
    })
}

export const login = ({email, password}) => {
    if (email !== 'tutv95@gmail.com') {
        return Promise.reject(new Error('User not found.'))
    }

    if (password !== '123456') {
        return Promise.reject(new Error('Password is incorrect.'))
    }

    return _createFakeRequest({id: 1, email: 'tutv95@gmail.com', avatar: 'https://www.gravatar.com/avatar/1'})
}

export const register = ({email, password}) => {
    if (!password || password.length < 6) {
        return Promise.reject(new Error('Password must be at least 6 characters.'))
    }

    return _createFakeRequest(true)
}