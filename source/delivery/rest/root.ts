import {NextFunction, Request, Response, Router} from "express";


export class Root{

    constructor(router: Router) {
        router.get("/", this.getRoot)
    }

    private getRoot(req: Request, res: Response, next: NextFunction) {
        const posts = "hello root"
        return res.status(200).json({message: posts});
    }

}