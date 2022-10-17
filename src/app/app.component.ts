import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep' ,'nirajan dai'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log("data" ,event.container.data)
      console.log("previousIndex" , event.previousIndex);
      console.log("current0", event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
        
      );
      console.log("data1" ,event.container.data)
      console.log("previousContainer1" ,event.previousContainer.data)

      console.log("previousIndex1" , event.previousIndex);
      console.log("current1", event.currentIndex);
    }
  }
}

