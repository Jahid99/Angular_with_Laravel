import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  logout() {
       localStorage.removeItem('login');
       this.router.navigate(['login']);
   }

   setActive (menu) {
     $( document ).ready(function() {
       $('li').removeClass();
       $('#' + menu).addClass("active");
     });
   }
}
