function isNullOrUndefined(something: any) {
    return something === null || something === undefined
}

class InvalidQuestionCreation extends Error {}

export class Question{
    id : number
    text : string
    responses: string[]
    correctResponse : number
    level: number

    constructor(id: number, text: string, responses: string[], correctResponse: number, level: number) {
        this.id = id;
        this.text = text;
        this.responses = responses;
        this.correctResponse = correctResponse;
        this.level = level
        this.validateNulls();
        this.validateResponses();
    }

    private validateNulls() {
        if (isNullOrUndefined(this.id)) throw new InvalidQuestionCreation("id cant be null or undefined")
        if (isNullOrUndefined(this.text)) throw new InvalidQuestionCreation("text cant be null or undefined")
        if (isNullOrUndefined(this.responses)) throw new InvalidQuestionCreation("responses cant be null or undefined")
        if (isNullOrUndefined(this.correctResponse)) throw new InvalidQuestionCreation("correctRespone cant be null or undefined")
        if (isNullOrUndefined(this.level)) throw new InvalidQuestionCreation("level cant be null or undefined")
    }

    private validateResponses() {
        if (this.responses.length<3 || this.responses.length>4) throw new InvalidQuestionCreation("Question must have 3 o 4 posible responses.")
        if (this.correctResponse<0 || this.correctResponse>this.responses.length-1) throw new InvalidQuestionCreation("Correct answer has to be inside posibles responses")
    }

    isAnswerOk(answerId: number) {
        return this.correctResponse === answerId
    }
}

