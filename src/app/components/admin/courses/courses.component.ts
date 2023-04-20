
import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/models/courses/courses';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit {
    courses: Array<Courses> = new Array<Courses>();
    constructor(private c: CoursesService, private toastr: ToastrService) {} 
    ngOnInit(): void {
        this.c.getCourses().subscribe(res => {
            this.courses = res;
        })
    }

    courseFormCreate: FormGroup = new FormGroup({
        title: new FormControl(),
        author: new FormControl(),
        time: new FormControl(),
        star: new FormControl(),
    });

    onDetail(id:number): void {
        window.location.href = '/admin/courses/details/'+id;
    }

    onDelete(id:number): void {
        if(confirm("Are you sure you want to do that?") == true) {
            this.c.deleteCourse(id).subscribe(res => {
                this.toastr.success('Success', 'Delete Course');
                this.ngOnInit();
            });
        }
    }
}
