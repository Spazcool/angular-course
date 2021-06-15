import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent{
  @Input('title') title: string;
  closed:boolean=true;

  handleZippy(){
    this.closed = !this.closed;
  }
}
