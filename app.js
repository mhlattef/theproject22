import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const port = 3000;
var logged = true;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.listen(port);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Home Page
app.get("/", (req, res) => {
    if (logged === true) {
        res.render("homeLogged.ejs");
    } else {
    res.render("home.ejs");}
})

// About Page
app.get("/about", (req, res) => {
    res.render("about.ejs")
})

// FAQ Page
app.get("/faq", (req, res) => {
    res.render("faq.ejs")
})

// Contact Page
app.get("/contact", (req, res) => {
    res.render("contact.ejs")
})

// Login Page
app.get("/login", (req, res) => {
    res.render("login.ejs")
})

// After Logout Page
app.get("/logout", (req, res) => {
    res.render("home.ejs")
})