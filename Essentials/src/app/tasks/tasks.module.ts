import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";

import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/card/shared.module";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations:[TasksComponent,TaskComponent,NewTaskComponent],
    exports:[TasksComponent],
    imports:[CommonModule,FormsModule,SharedModule,DatePipe]
})
export class TasksModule{

}