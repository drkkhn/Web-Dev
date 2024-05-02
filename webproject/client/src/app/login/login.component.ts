import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../__services/account.service';
import { UserService } from '../__services/user.service';

@Component({
  selector: 'app-login',
  standalone:true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent implements OnInit {
  model: any = {}

  constructor(private router: Router, public accountService: AccountService, private userService: UserService){}
  
  ngOnInit(): void {
  }
  
  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        this.RedirectToMain();
        console.log(this.model.username)
        this.userService.setUsername(this.model.username);
      },
      error: error => console.log(error)
    })
  }

  logout() {
    this.accountService.logout()
  }

  RedirectToMain() {
    this.router.navigate(['/']);
  }
}
