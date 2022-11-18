import {IdGenerator} from "../core/repositories/id-generator";
import {InMemoryIdGenerator} from "../infra/repositories/InMemoryIdGenerator";
import {QuestionRepository} from "../core/repositories/question-repository";
import {InMemoryRepositoryImpl} from "../infra/repositories/InMemoryRepositoryImpl";
import {SaveQuestion} from "../core/action/admin/save-question";
import {GetAllQuestions} from "../core/action/admin/get-all-questions";
import {StartNewGame} from "../core/action/start-new-game";
import {UserGameService, UserGameServiceImpl} from "../core/service/user-game-service";
import {UserGameRepository, UserGameRepositoryImpl} from "../core/service/user-game-repository";
import {PlayAQuestion} from "../core/action/play-a-question";
import {ClockService, ClockServiceImpl} from "../core/service/clock-service";
import {QuestionService, QuestionServiceImpl} from "../core/service/question-service";
import {RandomnessService, RandomnessServiceImpl} from "../core/service/randomness-service";
import {questions} from "./questions";
import {AnswerQuestion} from "../core/action/answer-question";


//infra
const idGenerator: IdGenerator = new InMemoryIdGenerator()
const questionRepository: QuestionRepository = new InMemoryRepositoryImpl()
const userGameRepository: UserGameRepository = new UserGameRepositoryImpl()
const randomnessService: RandomnessService = new RandomnessServiceImpl()

//core
//services
const userGameService: UserGameService = new UserGameServiceImpl(userGameRepository)
const clockService: ClockService = new ClockServiceImpl()
const questionService: QuestionService = new QuestionServiceImpl(questionRepository, randomnessService)

//actions
const saveQuestion = new SaveQuestion(idGenerator, questionRepository)
const getAllQuestions = new GetAllQuestions(questionRepository)

const startNewGame = new StartNewGame(userGameService)
const playQuestion = new PlayAQuestion(clockService, userGameService, questionService)
const answerQuestion = new AnswerQuestion(userGameService, clockService)

//saves some data
questions.forEach( q => saveQuestion.invoke(q))


export {saveQuestion, getAllQuestions, startNewGame, playQuestion, answerQuestion}
