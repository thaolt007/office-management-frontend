import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cdk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  Login(){
    this.router.navigate(['/auth/dashboard']);
  };

}
