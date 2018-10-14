import { Component, OnInit } from '@angular/core';;
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  public onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('sign in successfull');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareils']);
      }
    )
  }

  public onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
