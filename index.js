const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.get("/api", function (req, res){
  res.send("weather app")

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
