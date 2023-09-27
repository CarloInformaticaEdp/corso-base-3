import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';
import { UserLoginComponent } from './user-login.component';

@NgModule({
  declarations: [UserLoginComponent],
  imports: [SharedModule, UserRoutingModule],
  providers: [UserService],
})
export class UserModule {}
