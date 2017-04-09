import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Album } from '../_models';

@Injectable()
export class AlbumService {
    constructor(private http: Http) { }

    public getAll(): Observable<Album[]>  {
        return this.http.get('http://localhost:8090/api/albums', this.jwt())
        .map((response: Response) => {
            let albums = response.json();
            return albums;
        })
        .catch((e) => {
            if (e.status === 401) {
                return Observable.throw('Unauthorized');
            }
        });
    }

    public getUserById(id: number): Observable<Album[]>  {
        return this.http.get('http://localhost:8090/api/users/' + id, this.jwt())
        .map((response: Response) => {
            let user = response.json();
            return user;
        })
        .catch((e) => {
            if (e.status === 401) {
                return Observable.throw('Unauthorized');
            }
        });
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({'Content-Type': 'application/json'});
            headers.append('Authorization',  'Bearer ' + currentUser.token);
            return new RequestOptions({ headers: headers });
        }
    }
}
