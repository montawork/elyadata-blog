import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ITask } from 'src/app/ITask';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  task: ITask;
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id).subscribe((task) => (this.task = task));
  }
}
