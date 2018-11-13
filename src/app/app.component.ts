import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  boo = false;

  val: string;

  title = 'The FUNNY but SAD website';

  reveal(){
    
    if(this.val == '1'){
      console.log('You choose none because that are the feelings that she feels for you.... NONE');
    }else if (this.val == '2'){
      console.log("You're fine, like she's without you...");
    }else{
      console.log("You know you're fuck BRUUH....");
    }

  }

}
