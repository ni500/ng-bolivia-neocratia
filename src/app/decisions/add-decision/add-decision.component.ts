import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DecisionsService } from '../decisions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-decision',
  templateUrl: './add-decision.component.html',
  styles: []
})
export class AddDecisionComponent implements OnInit {
  newDecisionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private decisionsService: DecisionsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.newDecisionForm = this.formBuilder.group({
      title: new FormControl(''),
      description: new FormControl('')
    });
  }

  addNewDecision() {
    this.decisionsService
      .addNewDecision(
        this.newDecisionForm.value.title,
        this.newDecisionForm.value.description
      )
      .then(() => {
        this.router.navigate(['/decisiones']);
      });
  }
}
