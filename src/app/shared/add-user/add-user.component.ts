import { UserService } from './../../core/services/user.service';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  ngModalRef: NgbModalRef;
  userRegisterForm: FormGroup;
  constructor(public fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userForm();
  }

  userForm() {
    this.userRegisterForm = this.fb.group({
      profile: new FormControl(null, [Validators.required]),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
    });
  }

  registerUser() {
    this.userService.addUser(this.userRegisterForm.value).subscribe(
      (result) => {
        console.log('User Added!');
        this.ngModalRef.close(result);
      },
      (error) => {
        console.log('Error: ' + error);
      }
    );
  }

  closeWindow() {
    this.ngModalRef.dismiss('Cross Click');
  }
}
