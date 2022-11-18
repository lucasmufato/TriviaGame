import {NextFunction, Request, Response, Router} from "express";
import {SaveQuestion} from "../../core/action/admin/save-question";

export class RestSaveQuestion {
    private saveQuestion: SaveQuestion

    constructor(router: Router, action: SaveQuestion) {
        this.saveQuestion = action
        router.post("/admin/question", this.getRoot)
    }

    private getRoot(req: Request, res: Response, next: NextFunction) {
        let body = req.body;
        console.log("soy un log", this)
        this.saveQuestion.invoke(body)
        return res.status(200);
    }
}