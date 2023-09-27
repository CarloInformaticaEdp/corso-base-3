import { Component, Input } from '@angular/core';
import { UserService } from './user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  username: string = '';
  password: string = '';
  error: boolean = false;
  constructor(private userService: UserService) {}

  onSubmit(f: NgForm) {
    console.log(f.value, f.valid);
    if (f.valid) {
      this.userService.login(this.username, this.password);
    }
    this.error = !f.valid;
  }
}
