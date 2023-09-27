import { Component, VERSION } from '@angular/core';
import { AppJoinPipe } from './shared/app-join.pipe';
import { AppStateManagerService } from './core/app-state-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
})
export class AppHomeComponent {
  showPost = false;
  name = 'Angular ' + VERSION.major;
  separator: string = ', ';
  data: any;
  myArray: string[] = ['gabriele', 'paola', 'maria', 'luca'];

  constructor(
    private appJoinPipe: AppJoinPipe,
    private stateManagerService: AppStateManagerService
  ) {}

  ngOnInit() {
    this.stateManagerService.getState().subscribe((state) => {
      console.log('home state', state);

      this.data = state;
    });
  }
}
