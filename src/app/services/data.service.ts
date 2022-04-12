import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')// retorna un observable, por lo tanto hay que subscribirse
      .pipe(
       /*  tap(posts => { // con este operador podemos obtener información de lo que retorne un servicio 
          console.log(posts);
        })*/
        tap(console.log)
    ); 
  }
}
