import express from "express"

const app = express()
app.set("view engine", "ejs")
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("index", { title: "geforce" })
})

app.get("/desiauto", (req, res) => {
    res.render("desi")
})

app.listen(6969, () => {
    console.log("Elindult a hammond szerver")
})