const bcrypt = require('bcrypt')

const saltRounds = 10
const password = 'allspice1' // Change this to your desired password

bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Hashed Password:', hash)
})
