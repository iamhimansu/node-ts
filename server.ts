import express, {Request, Response} from "express";

const app = express();


app.get("/", (req: Request, res: Response) => {
    res.send("Hello Typescript!");
    res.end();
});

app.get("/about", (req: Request, res: Response) => {
    res.send("About Us Page!");
    res.end();
});

app.get("/contact", (req: Request, res: Response) => {
    res.send("Contact Us Page!");
    res.end();
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
})