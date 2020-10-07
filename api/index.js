const express = require('express')

const PORT = process.env.PORT || 1313

const app = express()

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
