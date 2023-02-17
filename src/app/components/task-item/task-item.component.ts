import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/ITask';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: ITask;
  @Output() onDeleteTask: EventEmitter<ITask> = new EventEmitter();
  @Output() onUpvoteTask: EventEmitter<ITask> = new EventEmitter();
  @Output() onDownvoteTask: EventEmitter<ITask> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<ITask> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task) {
    this.onDeleteTask.emit(task);
  }
  onUpvote(task) {
    this.onUpvoteTask.emit(task);
  }
  onDownvote(task) {
    this.onDownvoteTask.emit(task);
  }

  onToggle(task) {
    this.onToggleReminder.emit(task);
  }
}
