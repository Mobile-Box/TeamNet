import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  //Constants
  public maxZip = environment.maxZip;
  public maxInput = environment.maxInput;

  // FormBuilder
  fgTeamMember = this.formBuilder.group({
    cPrename: ['', [Validators.required, Validators.maxLength(this.maxInput)]],
    cSurname: ['', [Validators.required, Validators.maxLength(this.maxInput)]],
    cEmail: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'), Validators.maxLength(this.maxInput)]],
    cMailCompany: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'), Validators.maxLength(this.maxInput)]],
    cTrelloUsername: ['', [Validators.required, Validators.maxLength(this.maxInput)]],
    cPhoneMobile: ['', [Validators.maxLength(this.maxInput)]],
    cPhoneFixedLine: ['', [Validators.maxLength(this.maxInput)]],
    cShippingStreet: ['', [Validators.required, Validators.maxLength(this.maxInput)]],
    cShippingStreetNumber: ['', [Validators.required, Validators.maxLength(this.maxInput)]],
    cShippingZip: ['', [Validators.required, Validators.minLength(this.maxZip), Validators.maxLength(this.maxZip)]],
    cShippingCity: ['', [Validators.required, Validators.maxLength(this.maxInput)]],

    cTaxIdentification: ['', [Validators.required, Validators.maxLength(this.maxInput)]],
    cHealthInsurance: ['', [Validators.required, Validators.maxLength(this.maxInput)]],
    cSocialSecurtiyNumber: ['', [Validators.required, Validators.maxLength(this.maxInput)]],
    cNationaltiy: ['', [Validators.required, Validators.maxLength(this.maxInput)]],
    tConfession: ['', [Validators.required, Validators.maxLength(this.maxInput)]],
    cBank: ['', [Validators.required, Validators.maxLength(this.maxInput)]],
    cIban: ['', [Validators.maxLength(this.maxInput)]],
  });

  // Variables
  bSubmitted = false;
  oState = null;
  lStates = [];
  oRelationship = null;
  lRelationship = [];
  oTitle = null;
  lTitles: any[] = [{cName: 'Herr'}, {cName: 'Frau'}, {cName: 'Herr Dr.'}, {cName: 'Frau Dr.'},];
  bPersonally: boolean = true;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.fgTeamMember.controls['cPrename'].setValue("Test-Vorname");
  }

  buttonClick() {
    console.log("button clicked");
  }

  // Methods
  get errorControl() {
    return this.fgTeamMember.controls;
  }

  onChangeAddress() {

  }
}
