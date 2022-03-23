import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'lib-shell-app',
  template: `
    <p>
      shell-app works!
    </p>
  `,
  styles: []
})
export class ShellAppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
