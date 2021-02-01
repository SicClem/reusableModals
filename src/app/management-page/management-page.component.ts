import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalComponent} from '../modal/modal.component';
import {NewUserFormComponent} from '../new-user-form/new-user-form.component';

@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.scss']
})
export class ManagementPageComponent implements OnInit {
  @ViewChild('insertZone', {read: ViewContainerRef}) insertZone: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  createComponent(component) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    return this.insertZone.createComponent(componentFactory)
  }

  openModal(type) {
    const componentRef = this.createComponent(ModalComponent);
    const template = this.componentFactoryResolver.resolveComponentFactory(NewUserFormComponent);
    (componentRef.instance as ModalComponent).modalType = type;
    (componentRef.instance as ModalComponent).data.subscribe( value => {
      console.log(value)
    })

  }
}
