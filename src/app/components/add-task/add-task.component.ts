import { Component, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { ITask } from 'src/app/ITask';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<ITask> = new EventEmitter();
  title: string;
  content: string;
  author: string;
  upvote: number = 0;
  downvote: number = 0;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  onSubmit() {
    if (!this.title) {
      alert('Please add a task !');
      return;
    }

    const newTask = {
      title: this.title,
      content: this.content,
      author: this.author,
      upvote: this.upvote,
      downvote: this.downvote,
    };

    this.onAddTask.emit(newTask);

    this.title = '';
    this.content = '';
    this.author = '';
    this.upvote = 0;
    this.downvote = 0;

    this.router.navigate(['/']);
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
