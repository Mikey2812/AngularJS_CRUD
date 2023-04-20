import { AboutComponent } from './components/about/about.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/admin/courses/courses.component';
import { CourseaddComponent } from './components/admin/courses/courseadd/courseadd.component';
import { CourseseditComponent } from './components/admin/courses/coursesedit/coursesedit.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},

    {path: 'admin/courses', component: CoursesComponent},
    {path: 'admin/courses/add', component: CourseaddComponent},
    {path: 'admin/courses/edit/:id', component: CourseseditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
