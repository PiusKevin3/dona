const authRouter = require('express').Router()
const admin = require('firebase-admin')
const adminAuth = admin.auth()

authRouter.post('/login', (req, res) => {
	const idToken = req.headers['idtoken']
	const csrfToken = req.headers['csrf-token']
	// console.log(csrfToken)
	// console.log(req.cookies['XSRF-TOKEN'])
	// console.log(req.body)
	
	if (csrfToken !== req.cookies['XSRF-TOKEN']) {
		// console.log('csrf error')
		return res.status(401).json({ err: 'Unauthorized' })
	}

	const expiresIn = 2 * 60 * 60 * 1000
	adminAuth.createSessionCookie(idToken, { expiresIn })
		.then(sessionCookie => {
			const options = { maxAge: expiresIn, httpOnly: true, secure: true }
			res.cookie('session', sessionCookie, options)
			// req.user = 
			res.json({ status: 'success' })
		},
			err => {
				console.log(err)
				res.status(401).json({ err: 'Unauthorized' })
			}
		)
})

authRouter.get('/logout', (req, res) => {
	res.clearCookie('session')
	res.redirect('/')
})

module.exports = authRouter