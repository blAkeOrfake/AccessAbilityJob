import { Component, OnInit } from '@angular/core';
import { FeUserService } from '../../../services/fe-user.service';
import { User, UserTypeEnum } from '../../../models/user.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'access-ability-job-basic',
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
})
export class BasicComponent implements OnInit {
  loggedUser: User | null = null;

  userForm: FormGroup;
  userTypeOptions: {
    value: UserTypeEnum,
    label: string
  }[] = [
    {
      value: UserTypeEnum.Candidate,
      label: 'Candidate'
    },
    {
      value: UserTypeEnum.Employer,
      label: 'Employer'
    }
  ];
  
  constructor(
    private userService: FeUserService
  ) {
    this.userForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      userType: new FormControl(UserTypeEnum.Candidate)
    })
  }

  ngOnInit() {
    this.getLoggedUser();
  }

  getLoggedUser() {
   this.loggedUser = this.userService.getLoggedUser();
  }
}
