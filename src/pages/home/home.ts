import { Component } from '@angular/core';

// import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = "My Page";

  constructor() {

  }

  changeTitle(title){
    this.title = title;
}

}
