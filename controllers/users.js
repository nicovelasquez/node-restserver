const { response } = require('express')

const getUser = (req, res = response) => {
    const query = req.query
    res.json({
        msg: 'get API',
    })
}

const postUser = (req, res = response) => {
    res.json({
        msg: 'post API'
    })
}

const putUser = (req, res = response) => {
    const { id } = req.params
    res.json({
        msg: 'put API',
        params: id
    })
}

const patchUser = (req, res = response) => {
    res.json({
        msg: 'patch API'
    })
}

const deleteUser = (req, res = response) => {
    res.json({
        msg: 'delete API'
    })
}

module.exports = { getUser, postUser, deleteUser, patchUser, putUser }