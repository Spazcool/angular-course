import { Component } from '@angular/core';

@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.scss']
})
export class CourseformComponent {
  categories = [
    {id: 1, name: 'cats'},
    {id: 2, name: 'dogs'},
    {id: 3, name: 'fish'},
    {id: 4, name: 'birds'}
  ];

  submit(f){
    console.log(f)
  }
}
