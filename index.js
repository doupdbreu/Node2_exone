const express = require('express')

const app = express()

const statics = express.static('./public')

app.use('/statics', statics)

app.get('/', function(req, res) {
    const body = 'Text'
    res.send(`
        <html>
            <body>
                <strong>${body}</strong>
                <script src="/statics/client.js"></script>
            </body>
        </html>
    `)
})








app.listen(8000, () => {
    console.log('listening on 8000')
})