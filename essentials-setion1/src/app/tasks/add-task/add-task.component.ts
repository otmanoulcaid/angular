import { Component, EventEmitter, Input, Output, inject, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../../models/newTaskData.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  @Input({ required: true }) userId!: string;
  taskService: TaskService = inject(TaskService);

  entredTitle = '';
  entredSummary = '';
  entredDate = '';

  onClick() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.entredTitle,
      summary: this.entredSummary,
      date: this.entredDate
    }, this.userId);
    this.close.emit();
  }
}
