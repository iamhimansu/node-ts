import {Express, Request, Response} from "express";

const About = (app: Express) => {
    app.get("/about", (req: Request, res: Response) => {
        res.send(
            'This is about page'
        );
    });
}

export default About;
