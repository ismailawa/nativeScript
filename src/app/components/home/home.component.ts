import { Component, OnInit } from "@angular/core";
import { Todo } from "./todo";
import { TodoService } from "./todo.service";
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    selector: "ns-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
    moduleId: module.id
})
export class HomeComponent implements OnInit {
    todo: Todo;
    todos: Array<Todo>;
    constructor(private todoService: TodoService) {}

    ngOnInit() {
        this.todos = this.todoService.getTodo();
    }
}
