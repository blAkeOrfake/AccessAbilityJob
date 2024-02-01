import { Component, OnInit } from '@angular/core';
import { FeUserService } from '../../../services/fe-user.service';
import { User, UserTypeEnum } from '../../../models/user.model';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileUploadEvent } from 'primeng/fileupload';

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

  uploadedFiles: {name: string, size: string}[]  = [];
  
  constructor(
    private userService: FeUserService,
    private _snackBar: MatSnackBar
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
    if (this.loggedUser) {
      this.userForm.get('firstName')?.setValue(this.loggedUser.firstName);
      this.userForm.get('lastName')?.setValue(this.loggedUser.lastName);
      this.userForm.get('email')?.setValue(this.loggedUser.email);
      this.userForm.get('userType')?.setValue(this.loggedUser.userType);
    }
  }

  onUploadRan(ev: FileUploadEvent) {
    console.log('onUpload', ev);
  }

  saveBtnClicked() {
    console.log('this.userForm', this.userForm);
    if (!this.loggedUser) return;
    this.loggedUser.firstName = this.userForm.get('firstName')?.value;
    this.loggedUser.lastName = this.userForm.get('lastName')?.value;
    this.loggedUser.email = this.userForm.get('email')?.value;
    this.loggedUser.userType = this.userForm.get('userType')?.value;
    this.userService.updateUser(this.loggedUser.id, this.loggedUser).subscribe((x: User) => {
      if (x) {
        this._snackBar.open("User updated successfully", '', { duration: 5000});
        this.loggedUser = x;
      }
    })
  }
}
