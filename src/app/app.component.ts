
import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsComponent } from './forms/forms.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(FormsComponent,{ size: 'lg' });
  }
}
