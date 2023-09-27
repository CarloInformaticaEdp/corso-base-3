import { Component, VERSION } from '@angular/core';
import { AppJoinPipe } from './shared/app-join.pipe';
import { AppStateManagerService } from './core/app-state-manager.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  showPost = false;
  name = 'Angular ' + VERSION.major;
  separator: string = ', ';
  data: any;
  myArray: string[] = ['gabriele', 'paola', 'maria', 'luca'];

  constructor(
    private appJoinPipe: AppJoinPipe,
    private stateManagerService: AppStateManagerService,
  ) {
    //let pipe = new AppJoinPipe().transform(this.test);
  }

  ngOnInit() {
    this.stateManagerService.getState().subscribe((state) => {
      this.data = state;
    });
  }


}
