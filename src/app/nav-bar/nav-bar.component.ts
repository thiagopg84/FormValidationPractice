import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navbarModal: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.navbarModal = !this.navbarModal;
    console.log(this.navbarModal)
  }

}
