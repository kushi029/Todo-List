import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodoListComponent,],
  templateUrl: './app.component.html',  // Use external HTML template
})
export class AppComponent {
  title ='todo-app';
}
