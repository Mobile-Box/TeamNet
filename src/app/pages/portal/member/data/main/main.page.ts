import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import {ConnApiService} from "../../../../../services/conn-api/conn-api.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  //Constants
  public maxZip = environment.maxZip;
  public maxInput = environment.maxInput;

  // Urls
  private kTeamMember = "37";
  private urlTeamMember = 'team/main/';

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
  dataTeamMember;
  bSubmitted = false;
  oState = null;
  lStates = [];

  constructor(private connApi: ConnApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    // teamMember
    this.connApi.safeGet(this.urlTeamMember+this.kTeamMember).subscribe((response) => {
      this.dataTeamMember = response.body;
      let teamMember = response.body;
      console.log(teamMember);
    })

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
