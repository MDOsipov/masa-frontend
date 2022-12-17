import { Component } from '@angular/core';
import { IUser, IUserInfo } from 'src/app/entities';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.less']
})
export class LoginPage {
  public user: IUser;

  constructor(
    private userService: UserService
  ) {
    this.initialize();
  }

  public onLoginClick(): void {
    this.userService.login(this.user)
      .subscribe(() => {
        console.log("Logged in");
        this.userService.getUserById(2)
          .subscribe((result: IUserInfo) => {
            console.log(result);
          })
      })
  }

  public onClearClick(): void {
    this.initialize();
  }

  private initialize(): void {
    this.user = {
      username: "admin",
      password: "password"
    };
  }
}
