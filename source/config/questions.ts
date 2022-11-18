import {Question} from "../core/model/question";
import {SaveQuestionIntent} from "../core/action/admin/save-question";

const questions: Array<SaveQuestionIntent> = [
    {
        "text":"Where is Argentina?",
        "responses": ["America","Europe","Africa","Asia"],
        "correctResponse":0,
        "level": 1
    },
    {
        "text":"Where is Lujan?",
        "responses": ["Buenos Aires","Mendoza","Cordoba","Misiones"],
        "correctResponse":0,
        "level": 1
    },
    {
        "text":"Who is Lucas?",
        "responses": ["A developer","A student","An Argentinian","All of them"],
        "correctResponse":3,
        "level": 1
    },
    {
        "text":"Whats better?",
        "responses": ["Java","Kotlin","Python"],
        "correctResponse":1,
        "level": 2
    },
    {
        "text":"What's better?",
        "responses": ["Android","IOs","Huawei"],
        "correctResponse":0,
        "level": 2
    },
    {
        "text":"Where is Myanmar?",
        "responses": ["America","Europe","Africa","Asia"],
        "correctResponse":3,
        "level": 1
    },
    {
        "text":"Where is Serbia?",
        "responses": ["America","Europe","Africa","Asia"],
        "correctResponse":1,
        "level": 3
    },
    {
        "text":"Where is Egypt?",
        "responses": ["America","Europe","Africa","Asia"],
        "correctResponse":2,
        "level": 3
    }
]

export {questions}