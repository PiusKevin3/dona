const dataRouter = require('express').Router()
const admin = require('firebase-admin')
const adminDb = admin.firestore()

dataRouter.get('/donor', (req, res) => {
	// TODO
	// const uid = 'Tsyw8CACqgQdnGuLkgDJfgDbAhz2'
	const uid = req.body.uid
	adminDb.collection('users').doc(uid).get()
		.then(user => {
			// console.log(user.data())
			res.json(
				user.data()
			)
		})
		.catch((err) => {
			console.log(err.message)
		})
})

dataRouter.post('/donor', async (req, res) => {
	// TODO

	// const uid = 'Tsyw8CACqgQdnGuLkgDJfgDbAhz2'
	const uid = req.body.uid

	const data = {
		name: {
			first: 'John',
			middle: 'Alex',
			last: 'Doe'
		},
		country: 'Uganda',
		city: 'Kampala',
		street: 'Gaaba road',
		zip: '00256',
		phone: '1234567',
		email: 'johndoe@mail.com',
		gender: 'male',
		motherMaidenName: 'Joana',
		dob: '01/01/2001',
		nationalId: 'k12345',
		selectedOrgans: [],
		nextOfKinConfirmation: true,
		verified: false
	}
	// console.log(uid)

	adminDb.collection('users').doc(uid).set(data)
		.then(() => {
			res.status(201).json({ msg: 'success' })
		})
		.catch((error) => {
			console.log(error.message)
			res.status(400).json({ err: error.message })
		})

})

dataRouter.put('/donor', (req, res) => {
	// TODO

})

module.exports = dataRouter