import { Component } from '@angular/core';

// import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = "New Page";

  constructor() {

  }

  changeTitle(title){
    this.title = title;
}

}
