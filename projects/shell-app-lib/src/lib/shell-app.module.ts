import {NgModule} from '@angular/core';
import {ShellAppComponent} from './shell-app.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ShellAppComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        children: [
          {path: '', component: ShellAppComponent},
          {path: '', component: ShellAppComponent, outlet: 'center'}
        ]
      }
    ])
  ],
  exports: [ShellAppComponent]
})
export class ShellAppModule {}
