import express from "express";
const app = express();
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
app.listen(8080, () => {
    console.log("Server running on port 8080");
});
//# sourceMappingURL=server.js.map