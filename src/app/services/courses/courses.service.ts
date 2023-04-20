import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from 'src/app/models/courses/courses';

const _api = "http://localhost:3000/";
@Injectable({
    providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

    getCourses():Observable<Array<Courses>> {
        return this.http.get<Array<Courses>>(_api+'courses'); 
    }

    getOneCourses(id: number):Observable<Array<Courses>> {
        return this.http.get<Array<Courses>>(_api+'courses/'+id); 
    }

    createCourse(data: Array<Courses>):Observable<Array<Courses>> {
        return this.http.post<Array<Courses>>(_api+'courses', data); 
    }

    editCourse(id: number, data: Array<Courses>):Observable<Array<Courses>> {
        return this.http.patch<Array<Courses>>(_api+'courses/'+id, data); 
    }

    deleteCourse(id: number):Observable<Array<Courses>> {
        return this.http.delete<Array<Courses>>(_api+'courses/'+id); 
    }
}
