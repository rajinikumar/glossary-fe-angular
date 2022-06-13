import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/glossary.service';
import { User } from '../../models/glossary.model';

@Component({
  selector: 'app-glossary-list',
  templateUrl: './glossary-list.component.html',
  styleUrls: ['./glossary-list.component.scss']
})
export class GlossaryListComponent implements OnInit {
  glossary?: User[];
  currentUser: User = {};
  currentIndex = -1;
  title = '';
  constructor(private glossaryService: UserService) { }
  ngOnInit(): void {
    this.retrieveGlossary();
  }
  retrieveGlossary(): void {
    this.glossaryService.getAll()
      .subscribe({
        next: (data) => {
          this.glossary = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  setActiveUser(glossary: User, index: number): void {
    this.currentUser = glossary;
    this.currentIndex = index;
  }
}
