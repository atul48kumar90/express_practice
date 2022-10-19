

const registerUser = (req, res) => {
    res.status(200).json({ message: 'User registered'})
}

const login = (req, res) => {
    res.status(200).json({ message: 'login user'})
}

const getMe = (req, res) => {
    res.status(200).json({ message: 'User data'})
}

module.exports = {
    registerUser, login, getMe
}