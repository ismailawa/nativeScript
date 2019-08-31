import { Injectable } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Todo } from "./todo";

@Injectable({
    providedIn: "root"
})
export class TodoService {
    private todos = new Array<Todo>(
        {
            title: "Write exams",
            description: "i am to write examination",
            startDate: new Date("2019-05-27"),
            endDate: new Date("2019-08-15"),
            isDone: false
        },
        {
            title: "Attend seminar",
            description: "i am to write examination",
            startDate: new Date("2019-08-29"),
            endDate: new Date("2019-09-15"),
            isDone: false
        }
    );

    constructor() {}

    getTodo(): Array<Todo> {
        return this.todos;
    }
}
