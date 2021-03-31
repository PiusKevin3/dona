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

dataRouter.get('/donor', async (req, res) => {
	// TODO

	// const uid = 'Tsyw8CACqgQdnGuLkgDJfgDbAhz2'
	const uid = req.body.uid

	const data = {
		name: 'Aron',
		country: 'Eritrea',
		city: 'Asmara',
		address: 'blah',
		email: 'email',
		verified: false,
		dob: '23-12-91',
		organs: []
	}
	// console.log(uid)

	adminDb.collection('users').doc(uid).set(data)
		.then(() => {
			console.log('success')
		})
		.catch(() => {
			console.log('error')
		})

	// res.end()
})

dataRouter.put('/donor', (req, res) => {
	// TODO

})

module.exports = dataRouter