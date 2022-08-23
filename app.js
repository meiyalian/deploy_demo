let express = require("express")

let app = express()

app.get('/comp30022', (req,res)=>{
    res.send("Hello~~~!!!!")
    
})
app.listen(8000)