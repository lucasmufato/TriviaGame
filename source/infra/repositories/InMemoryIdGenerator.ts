import {IdGenerator} from "../../core/repositories/id-generator";

export class InMemoryIdGenerator implements IdGenerator {
    private id = 0

    nextId(): number {
        return this.id++
    }
}