import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark, faCartShopping,faCircleUser,faBell,faChevronDown,faMagnifyingGlass,faShop} from '@fortawesome/free-solid-svg-icons';
import { AccountService } from '../__services/account.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private router: Router, private accountService: AccountService){}

  ngOnInit(): void {
    this.accountService.currentUser$.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(this.isAuthenticated) 
    });
  }

  RedirectToMain() {
    this.router.navigate(['/']);
  }

  RedirectToLogin() {
    console.log("redirecting login")
    this.router.navigate(['login'])
  }

  RedirectToProfile() {
    console.log("redirecting profile")
    this.router.navigate(['profile'])
  }

  Logout() {
    console.log("logging out")
    this.accountService.logout()
    this.router.navigate(['login'])
  }

  fashop = faShop;
  faCircleXmark  = faCircleXmark;
  faCartShooping = faCartShopping;
  faCircleUser = faCircleUser;
  faBell = faBell;
  faChevronDown = faChevronDown;
  faMagnifyingGlass = faMagnifyingGlass;
}
