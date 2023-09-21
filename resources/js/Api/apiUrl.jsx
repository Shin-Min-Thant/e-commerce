export const brandApi = () => {
	return '/api/brand'
}

export const categoryApi = () => {
	return '/api/categories'
}


export const productApi = () => {
	return `/api/products/${type}/${query}`
}

export const productShowApi = (productCode) => {
	return `/api/products/${productCode}`
}

export const register = () => {
	return '/api/register'
}

export const login = () => {
	return '/api/login'
}

export const user = () => {
	return '/api/user'
}

export const userInfoUpdateApi = () => {
	return '/api/user/profile/store'
}

export const updatePasswordApi = () => {
	return '/api/user/password/update'
}

export const updateEmailApi = () => {
	return '/api/user/email/update'
}