const adminAuth = require('firebase-admin').auth()

const unknownEndpoint = (req, res, next) => {
	res.status(404).end()
}

const errorHandler = (err, req, res, next) => {
	console.log(err.name)
	console.log(err.message)
	next(err)
}

const checkAuth = (req, res, next) => {
	const sessionCookie = req.cookies.session || ""

	adminAuth.verifySessionCookie(sessionCookie, true)
		.then(() => {
			next()
		})
		.catch((error) => {
			// console.log(error)
			res.redirect('/login')
		})
}

module.exports = {
	unknownEndpoint,
	errorHandler,
	checkAuth
}