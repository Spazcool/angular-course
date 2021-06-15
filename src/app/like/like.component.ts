import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent{
  @Input() liked : boolean;
  @Input() likes : number;
 
  handleLike(){
    this.liked = !this.liked;
    this.likes += !this.liked ? - 1 : 1;
  }
}
