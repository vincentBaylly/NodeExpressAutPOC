import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'panel',
  styles: [`
    .hide {
      display: none;
    },
    `
  ],
  templateUrl: './panel.collapse.component.html',
  inputs: ['title']
})
export class PanelCollapse {
  opened: Boolean = false;
  toggle () {
    this.opened = !this.opened;
  }
}
