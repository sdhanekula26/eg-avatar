import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EgAvatarComponent } from './eg-avatar/eg-avatar.component';



@NgModule({
  declarations: [EgAvatarComponent],
  imports: [
    CommonModule
  ], exports: [EgAvatarComponent]
})
export class AvatarModule { }
