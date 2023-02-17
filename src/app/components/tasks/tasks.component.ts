import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ITask } from 'src/app/ITask';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: ITask[] = [];
  searchTerm = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deletTask(task: ITask) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
  upvoteTask(task: ITask) {
    task.upvote = task.upvote + 1;
    this.taskService.upvoteTask(task).subscribe();
  }
  downvoteTask(task: ITask) {
    task.downvote = task.downvote + 1;
    this.taskService.downvoteTask(task).subscribe();
  }

  toggleReminder(task: ITask) {
    // task.reminder = !task.reminder;
    // this.taskService.updateTaskReminder(task).subscribe();
    return;
  }

  addTask(task: ITask) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }

  filterBlogs(tasks: ITask[]): ITask[] {
    if (!this.searchTerm) {
      return tasks;
    }
    const term = this.searchTerm.toLowerCase();
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(term) ||
        task.content.toLowerCase().includes(term) ||
        task.author.toLowerCase().includes(term)
    );
  }
}
