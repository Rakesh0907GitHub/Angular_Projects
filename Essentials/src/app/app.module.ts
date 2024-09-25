import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { CardComponent } from "./shared/card/card.component";
import { DatePipe } from "@angular/common";
import { TaskComponent } from "./tasks/task/task.component";
import { SharedModule } from "./shared/card/shared.module";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
declarations:[AppComponent,HeaderComponent,UserComponent],   //these are the Module Components
bootstrap:[AppComponent],
imports:[BrowserModule,DatePipe,SharedModule,TasksModule] // These are the Standalone componenets and i changed all the stand alone components into Module components
})
export class AppModule{}