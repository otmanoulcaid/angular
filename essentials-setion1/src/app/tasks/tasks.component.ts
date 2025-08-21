import { Component, Input, inject } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { type User } from '../models/user.model';
import { AddTaskComponent } from "./add-task/add-task.component";
import { NewTaskData } from '../models/newTaskData.model';
import { TaskService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  // constructor(private tasksService: TaskService) {}
  private tasksService = inject(TaskService);

  @Input({ required: true }) user!: User;
  isAddingTask = false;


  get selectedTask () {
    return this.tasksService.getUserTasks(this.user.id);
  }

  onAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
