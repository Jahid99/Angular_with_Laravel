import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (localStorage.getItem('login')) {
      this.router.navigate(['dashboard']);
    }
  }

  loginUser(e) {
  	e.preventDefault();
  	//console.log(e);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;

  	if(username == 'admin' && password == 'admin') {
      localStorage.setItem('login', 'logged_in');
  		this.router.navigate(['dashboard']);
  	}
  }

}
