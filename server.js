import express from "express";
const app = express();
app.use((req, res, next) => {
    console.log(`Request received for: ${req.url}`);
    next();
});
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello Typescript!");
    res.end();
});
app.get("/about", (req, res) => {
    res.send("About Us Page!");
    res.end();
});
app.get("/contact", (req, res) => {
    res.send("Contact Us Page!");
    res.end();
});
app.post('/register', (req, res) => {
    console.log(req.body);
    const { name, email } = req.body;
    res.send(`User: ${name} with email: ${email} registered successfully.`);
});
app.listen(8080, () => {
    console.log("Server running on port 8080");
});
//# sourceMappingURL=server.js.map