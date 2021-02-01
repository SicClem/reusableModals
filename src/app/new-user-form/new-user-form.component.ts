import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {
  data: string;
  @Output() dataO = new EventEmitter()
  @Input() events: Observable<void>;

  constructor() { }

  ngOnInit(): void {
    this.events.subscribe(() => this.emitData());
  }


  emitData() {
    this.dataO.emit(this.data)
  }
}
