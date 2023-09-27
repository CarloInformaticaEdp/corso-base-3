import { Component } from '@angular/core';
import { UserService } from './user/user.service';
import { AppStateManagerService } from './core/app-state-manager.service';

@Component({
  selector: 'app-header',
  providers: [UserService],
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {
  data: any;

  constructor(
    private userService: UserService,
    private stateManagerService: AppStateManagerService
  ) {}

  login() {
    //this.userService.login('test', 'test');
  }

  logout() {
    this.userService.logout();
  }

  ngOnInit() {
    console.log('test singleton in header', this.stateManagerService.test);
    this.stateManagerService.getState().subscribe((state) => {
      this.data = state;
    });
  }
}
