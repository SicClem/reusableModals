import {
  Component,
  Input,
  OnInit, Output,
  Type,
  EventEmitter, ComponentFactory, ViewChild, ViewContainerRef, ElementRef, Injector, ReflectiveInjector
} from '@angular/core';
import {Subject} from 'rxjs';





@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() modalType: string

  @Output() data = new EventEmitter();

  eventsSubject: Subject<void> = new Subject<void>();
  myInjector : Injector


  constructor(private injector: Injector) {
  }

  ngOnInit(): void {

  }


  emitData() {
    this.eventsSubject.next();
  }

  logEvent(event: any) {
    console.log(event)
  }
}
