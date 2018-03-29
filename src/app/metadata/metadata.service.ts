import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MetadataTemplate } from './metadatatemplate';

@Injectable()
export class MetadataService {
  private metadataTemplateUrl = 'api/templates';  // URL to web api
  private metadataClassifierUrl = 'api/classifier';  // URL to web api
  constructor(private http: HttpClient) { }
  getMetadataTemplates(classifier: string): Observable<MetadataTemplate[]> {
    let url = this.metadataTemplateUrl;
    if (classifier && classifier !== 'all metadata') {
      url = `${this.metadataTemplateUrl}?classifier=${classifier}`;
    }
    return this.http.get<MetadataTemplate[]>(url).pipe(
      catchError(this.handleError('getMetadataTemplates', []))
    );
  }

  getMetadataClassifier(): Observable<any> {
    return this.http.get<any>(this.metadataClassifierUrl).pipe(
      catchError(this.handleError('getMetadataTemplates', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
