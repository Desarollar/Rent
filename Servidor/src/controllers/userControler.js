// const UserManager = require('../dao/managerUser.dao.js');
const { UserManager } = require('../dao');
const usermanager = new UserManager();

async function postCreateUser(req, res) {
	try {
		const data = req.body;
		const newUser = await usermanager.createUser(data);

		return res.status(200).send(newUser);
	} catch (error) {
		console.error('Error al crear el usuario', error);
		return res.status(400).send(error);
	}
}

async function getUser(req, res) {
	const email = req.body;
	try {
		const User = await usermanager.getOneUser(email);
		return res.status(200).send(User);
	} catch (error) {
		console.error('Error al obtener el usuario', error);
		return res.status(400).send(error);
	}
}

async function getAllUser(req, res) {
	try {
		const Users = await usermanager.getAllUser();
		return res.status(200).send(Users);
	} catch (error) {
		console.error('Error al obtener el usuario', error);
		return res.status(400).send(error);
	}
}

module.exports = { postCreateUser, getUser, getAllUser };
