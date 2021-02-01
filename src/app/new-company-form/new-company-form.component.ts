import {Component, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-new-company-form',
  templateUrl: './new-company-form.component.html',
  styleUrls: ['./new-company-form.component.scss']
})
export class NewCompanyFormComponent implements OnInit {
  @Input() events: Observable<void>;


  constructor() { }

  ngOnInit(): void {

  }

}
