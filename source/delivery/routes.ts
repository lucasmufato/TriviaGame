import express, {NextFunction, Request, Response, Router} from 'express';
import controller from './rest/controller';
import {Root} from "./rest/root";
import {
    saveQuestion,
    getAllQuestions,
    startNewGame,
    playQuestion,
    answerQuestion
} from "../config/dependency-inyection";
import {AnswerResult} from "../core/model/answer-result";
import {AnswerResultType} from "../core/model/answer-result-type";

const postQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try{
        let body = req.body;
        saveQuestion.invoke(body)
        return res.status(200).json();
    }catch (e) {
        return res.status(400).json({"error" : (e as Error).message});
    }
};

const getAllQuestionsRest = async (req: Request, res: Response, next: NextFunction) => {
    let questions = getAllQuestions.invoke()
    return res.status(200).json(questions);
};

const postStartGame = async (req: Request, res: Response, next: NextFunction) => {
    try{
        let userString: string = req.params.userId;
        let userId = Number(userString)
        let userGame = startNewGame.invoke(userId);
        return res.status(200).json({"status":"game created :)", ...userGame});
    }catch (e) {
        return res.status(400).json({"error" : (e as Error).message});
    }
};

const postPlayQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try{
        let userString: string = req.params.userId;
        let userId = Number(userString)
        let questionToPlay = playQuestion.invoke(userId);
        return res.status(200).json(questionToPlay);
    }catch (e) {
        return res.status(400).json({"error" : (e as Error).message});
    }
};

const postAnswerQuestion = async (req: Request, res: Response, next: NextFunction) => {
    function getNiceRes(response: AnswerResultType) {
        switch (response){
            case AnswerResultType.RIGHT:
                return "CORRECT"
            case AnswerResultType.WRONG:
                return "WRONG"
            case AnswerResultType.TIMEOUT:
                return "TIMEOUT"
        }
    }

    try{
        let userString: string = req.params.userId;
        let userId = Number(userString)
        let body = req.body
        let response = answerQuestion.invoke(userId, body.answer);
        let niceRes = getNiceRes(response.result)
        return res.status(200).json({niceRes, ...response});
    }catch (e) {
        return res.status(400).json({"error" : (e as Error).message});
    }
};

const router: Router = express.Router();
router.get('/posts', controller.getPosts);
router.post('/admin/question', postQuestion);
router.get('/admin/question', getAllQuestionsRest);
router.post('/user/:userId/game/start', postStartGame);
router.post('/user/:userId/game/play', postPlayQuestion);
router.post('/user/:userId/game/answer', postAnswerQuestion);



new Root(router)




export = router;