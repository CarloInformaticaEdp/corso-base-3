import { Injectable } from '@angular/core';

import { AppStateManagerService } from '../core/app-state-manager.service';

@Injectable()
export class UserService {
  constructor(private stateManagerService: AppStateManagerService) {}

  login(username: string, password: string) {
    console.log('test singleton in user', this.stateManagerService.test);
    this.stateManagerService.setState({
      username: username,
      token: 'abc',
    });
  }

  logout() {
    this.stateManagerService.resetState();
  }
}
