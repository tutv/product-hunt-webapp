const _createFakeRequest = (data, timeout = 500) => {
    const isError = Math.random() < 0.05

    return new Promise((resolve, reject) => {
        if (isError) return reject(new Error('Something went wrong'))

        setTimeout(() => {
            resolve({
                success: true,
                data,
            })
        }, timeout)
    })
}

export const login = ({email, password}) => {
    if (email !== 'tutv95@gmail.com') {
        return Promise.reject(new Error('User not found.'))
    }

    if (password !== '123456') {
        return Promise.reject(new Error('Password is incorrect.'))
    }

    const profile = {id: 1, email: 'tutv95@gmail.com', avatar: 'https://www.gravatar.com/avatar/1'}
    const accessToken = 'abc'

    return _createFakeRequest({profile, accessToken})
}

export const register = ({email, password}) => {
    if (!password || password.length < 6) {
        return Promise.reject(new Error('Password must be at least 6 characters.'))
    }

    return _createFakeRequest(true)
}

const products = [
    {
        id: 1,
        title: 'Make My Persona',
        description: 'A free buyer persona generator.',
        thumbnail: '/demo/products/1-thumb.gif',
        preview: '/demo/products/1-preview.jpeg',
        category: 'Marketing',
        votes: 604,
        website: 'https://www.hubspot.com/make-my-persona',
    },
    {
        id: 2,
        title: 'Lofree Digit Calculator',
        description: 'A retro yet mechanical calculator.',
        thumbnail: '/demo/products/2-thumb.jpeg',
        preview: '/demo/products/2-preview.jpeg',
        category: 'Tech',
        votes: 363,
        website: 'https://www.kickstarter.com/projects/142504465/digit-calculator-your-first-retro-mechanical-calcu',
    },
    {
        id: 3,
        title: 'Dog Generator',
        description: 'Generate over 750k+ dogs.',
        thumbnail: '/demo/products/3-thumb.jpeg',
        preview: '/demo/products/3-preview.jpeg',
        category: 'Iphone',
        votes: 155,
        website: 'https://itunes.apple.com/us/app/dog-generator/id1407447092',
    },
    {
        id: 4,
        title: 'brom',
        description: 'Highly configurable, local auditing of HTTP transactions',
        thumbnail: '/demo/products/4-thumb.png',
        preview: '/demo/products/4-preview.jpeg',
        category: 'Developer Tools',
        votes: 121,
        website: 'http://www.brom.horse',
    }
]

export const getProducts = () => {
    return _createFakeRequest(products)
}

export const voteProduct = (id) => {
    return _createFakeRequest(true)
}
