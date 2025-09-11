import app from "../server.ts";
import {Request, Response} from "express";

app.get("/about", (req: Request, res: Response) => {
    res.send(
        'This is about page'
    );
});
