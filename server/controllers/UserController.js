const Users = require('../models/User')


exports.getUsers = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    await res.status(200).json(await Users.find({}))
}

exports.createUser = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const userData = {
        surname: req.body.surname,
        name: req.body.name,
        middle_name: req.body.middle_name,
        birt: req.body.birt,
        age: req.body.age,
    }
    const user = new Users (userData)
    await user.save()
    console.log(userData.birt)
    res.status(201).json(user)
}
