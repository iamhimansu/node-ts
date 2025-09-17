import {Express, Request, Response} from "express";

class AboutPage {
    constructor(public app: Express) {
        this.app = app;
    }

    render(){
        this.app.get("/about", (req: Request, res: Response) => {
            res.send("This is about page");
        })
    }

}

export default AboutPage;
