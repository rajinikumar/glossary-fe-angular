import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlossaryListComponent } from './components/glossary-list/glossary-list.component';
import { UserDetailsComponent } from './components/glossary-details/glossary-details.component';
import { AddUserComponent } from './components/add-glossary/add-glossary.component';

const routes: Routes = [
  { path: '', redirectTo: 'glossary', pathMatch: 'full' },
  { path: 'glossary', component: GlossaryListComponent },
  { path: 'glossary/:id', component: UserDetailsComponent },
  { path: 'add', component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
