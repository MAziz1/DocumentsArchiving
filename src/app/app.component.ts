import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DocumentArchivingProj';
  navbar: {
    add: boolean,
    view: boolean,
    home: boolean,
  };
  ActiveSelectedLI(type){
    this.navbar.add = true;
    switch (type) {
      case "home":
        this.navbar.home = true;
        break;
        case "view":
        this.navbar.view = true;
        break;
        case "add":
        this.navbar.add = true;
        break;
    
      default:
        break;
    }

  }

}


