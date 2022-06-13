import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/glossary.service';
import { User } from 'src/app/models/glossary.model';

@Component({
  selector: 'app-add-glossary',
  templateUrl: './add-glossary.component.html',
  styleUrls: ['./add-glossary.component.scss']
})
export class AddUserComponent implements OnInit {

  glossary: User = {
    fname: '',
    glossary_name: '',
    email: '',
    status: false
  };
  submitted = false;
  constructor(private glossaryService: UserService) { }
  ngOnInit(): void {
  }
  saveUser(): void {
    const data = {
      fname: this.glossary.fname,
      glossary_name: this.glossary.glossary_name,
      email: this.glossary.email
    };
    this.glossaryService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newUser(): void {
    this.submitted = false;
    this.glossary = {
      fname: '',
      glossary_name: '',
      email: '',
      status: false
    };
  }
}
