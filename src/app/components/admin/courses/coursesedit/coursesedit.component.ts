import { __values } from 'tslib';
import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/models/courses/courses';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-coursesedit',
  templateUrl: './coursesedit.component.html',
})
export class CourseseditComponent implements OnInit{
    id: number = 0;
    course: Array<Courses> = new Array<Courses>();
    value: any;
    courseFormEdit: FormGroup = new FormGroup({
        title: new FormControl(),
        author: new FormControl(),
        img: new FormControl(),
        time: new FormControl(),
        star: new FormControl(),
    });
    constructor (private CS: CoursesService, private _route: ActivatedRoute) {
        this.id = this._route.snapshot.params['id'];
        this.CS.getOneCourses(this.id).subscribe (data => {
            this.value = data;
            console.log(this.value.time);
            this.courseFormEdit= new FormGroup({
                title: new FormControl(this.value.title),
                author: new FormControl(this.value.author),
                time: new FormControl(this.value.time),
                star: new FormControl(this.value.star),
            });
        });
    }

    ngOnInit(): void {
        
    }

    onEdit(): void {
        this.CS.editCourse(this.id, this.courseFormEdit.value).subscribe(res => {
            window.location.href = '/admin/courses';
        });
    }
}
