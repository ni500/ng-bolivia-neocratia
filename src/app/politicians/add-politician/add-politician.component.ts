import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PoliticiansService } from '../politicians.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-politician',
  templateUrl: './add-politician.component.html',
  styles: []
})
export class AddPoliticianComponent implements OnInit {
  newPoliticianForm: FormGroup;
  parties = ['Partido Liberal', 'Partido Conservador', 'Independiente'];

  constructor(
    private formBuilder: FormBuilder,
    private politiciansService: PoliticiansService,
    private router: Router
  ) {}

  ngOnInit() {
    this.newPoliticianForm = this.formBuilder.group({
      name: new FormControl(''),
      party: new FormControl('')
    });
  }

  addNewPolitician() {
    this.politiciansService
      .addNewPolitician(
        this.newPoliticianForm.value.name,
        this.newPoliticianForm.value.party
      )
      .then(() => {
        this.router.navigate(['/politicos']);
      });
  }
}
