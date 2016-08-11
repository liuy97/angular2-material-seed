import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

@Injectable()
export class NameListService {

  private names: string[] = [];
  private namesUrl = '/assets/data.json';

  constructor(private http: Http) { }

  getNames(): Observable<string[]> {
    if (this.names && this.names.length) {
      return Observable.from([this.names]);
    }
    return this.http.get(this.namesUrl)
      .map((response: Response) => response.json())
      .map((data: string[]) => {
        return this.names = data;
      });
  }

  addName(name: string): void {
    this.names.push(name);
  }
}
