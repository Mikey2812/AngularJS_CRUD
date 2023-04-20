import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
})
export class CoursedetailComponent {
    id: number = 0;
    value: any;
    courseFormDetails: FormGroup = new FormGroup({
        title: new FormControl(),
        author: new FormControl(),
        time: new FormControl(),
        star: new FormControl(),
    });
    constructor (private CS: CoursesService, private _route: ActivatedRoute) {
        this.id = this._route.snapshot.params['id'];
        this.CS.getOneCourses(this.id).subscribe (data => {
            this.value = data;
            console.log(this.value.time);
            this.courseFormDetails= new FormGroup({
                title: new FormControl(this.value.title),
                author: new FormControl(this.value.author),
                time: new FormControl(this.value.time),
                star: new FormControl(this.value.star),
            });
        });
    }
}
