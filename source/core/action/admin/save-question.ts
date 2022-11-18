import {Question} from "../../model/question";
import {QuestionRepository} from "../../repositories/question-repository";
import {IdGenerator} from "../../repositories/id-generator";

export class SaveQuestion{

    private idGenerator: IdGenerator;
    private repository: QuestionRepository;

    constructor(idGenerator: IdGenerator, repository: QuestionRepository) {
        this.idGenerator = idGenerator;
        this.repository = repository;
    }

    public invoke(intent: SaveQuestionIntent){
        if ( this.hasId(intent) ){
            this.update(intent)
        }else{
            this.createNewQuestion(intent)
        }
    }

    private hasId(intent: SaveQuestionIntent) {
        return intent.id !== null && intent.id !== undefined
    }

    private update(intent: SaveQuestionIntent) {
        let question = this.createQuestionFromIntent(intent.id!!, intent) //TODO ugly force !!
        this.repository.save(question)
    }

    private createNewQuestion(intent: SaveQuestionIntent) {
        let id = this.idGenerator.nextId()
        let question = this.createQuestionFromIntent(id, intent)
        this.repository.save(question)
    }

    private createQuestionFromIntent(id: number, intent: SaveQuestionIntent): Question {
        return new Question(id, intent.text, intent.responses, intent.correctResponse, intent.level)
    }
}

export interface SaveQuestionIntent{
    id? : number,
    text : string,
    responses: string[],
    correctResponse : number,
    level: number
}
