import {Component, OnInit} from '@angular/core';

import { ModalService } from '../_services/index';
/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent{
  visible = false;

  constructor(private modalService: ModalService){

  }

  ngOnInit() {
    this.modalService.getStatus().subscribe(visible => {
      this.visible = visible;
    });
  }

}
