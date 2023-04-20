
import { CoursesService } from 'src/app/services/courses/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-courseadd',
  templateUrl: './courseadd.component.html',
})
export class CourseaddComponent implements OnInit {
    constructor (private CS: CoursesService, private toastr: ToastrService) {

    }
    courseFormCreate: FormGroup = new FormGroup({
        title: new FormControl(),
        author: new FormControl(),
        img: new FormControl(),
        time: new FormControl(),
        star: new FormControl(),
    });
    ngOnInit(): void {
        
    }
    // imageUrl:string = "";
    // onFileSelected(event: any): void {
    //     const selectedFile = event.target.files[0];
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //       this.imageUrl = reader.result as string;
    //     };
    //     reader.readAsDataURL(selectedFile);
    //   }

    onCreate(): void{
        this.CS.createCourse(this.courseFormCreate.value).subscribe(res => {
            window.location.href = '/admin/courses';
        });
    }
}
