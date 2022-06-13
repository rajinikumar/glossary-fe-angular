import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/glossary.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/glossary.model';

@Component({
  selector: 'app-glossary-details',
  templateUrl: './glossary-details.component.html',
  styleUrls: ['./glossary-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentUser: User = {
    fname: '',
    glossary_name: '',
    email: '',
    status: false
  };

  message = '';
  constructor(
    private glossaryService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getUser(this.route.snapshot.params["id"]);
    }
  }
  getUser(id: string): void {
    this.glossaryService.get(id)
      .subscribe({
        next: (data) => {
          this.currentUser = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updateActive(status: boolean): void {
    const data = {
      fname: this.currentUser.fname,
      glossary_name: this.currentUser.glossary_name,
      email: this.currentUser.email,
      status: status
    };
    this.message = '';
    this.glossaryService.update(this.currentUser.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentUser.status = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  updateUser(): void {
    this.message = '';
    this.glossaryService.update(this.currentUser.id, this.currentUser)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This glossary was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteUser(): void {
    this.glossaryService.delete(this.currentUser.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/glossary']);
        },
        error: (e) => console.error(e)
      });
  }
}