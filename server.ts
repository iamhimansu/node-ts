import express, {Request, Response} from "express";
import './pages/about';

const app = express();

app.use((req, res, next) => {
    console.log(`Request received for: ${req.url}`);
    next();
});

app.use(express.json());


app.get("/", (req: Request, res: Response) => {
    res.send("Hello Typescript!");
    res.end();
});


app.get("/contact", (req: Request, res: Response) => {
    res.send("Contact Us Page!");
    res.end();
});

app.post('/register', (req: Request, res: Response) => {
    console.log(req.body);
    const {name, email} = req.body;
    res.send(`User: ${name} with email: ${email} registered successfully.`);
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});

export default app;