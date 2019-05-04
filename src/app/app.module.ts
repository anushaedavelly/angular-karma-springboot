import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

import { RouterModule, Routes } from '@angular/router';
import { EmployeeService } from './employee/employee.service';

const routes: Routes = [
  { path: 'employees', component: EmployeeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'employees' }
];

// export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
