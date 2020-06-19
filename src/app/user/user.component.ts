import { AddUserComponent } from './../shared/add-user/add-user.component';
import { PopupService } from './../core/services/popup.service';
import { UserService } from './../core/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users = [];
  constructor(
    private userService: UserService,
    private popupService: PopupService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((user) => {
      this.users = user;
    });
  }

  openRegisterUserPopup() {
    const userPopup = this.popupService.openPopup(AddUserComponent, null, {
      size: 'lg',
    });

    userPopup.result.then((result) => {
      this.users.push(result);
    });
  }
}
