import {Injectable} from '@angular/core';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {convertableToString, parseString} from "xml2js";


@Injectable({
  providedIn: 'root'
})
export class CinemaService {


  constructor(private httpClient: HttpClient) {
  }

  url: string = "https://www.finnkino.fi/xml/News/";

  getData(): Observable<any> {
    return this.httpClient.get(this.url, {responseType: 'text'}).pipe(map((response: string | convertableToString) => {
      /* console.log('getXMLData... ' + response);*/

      let newsData: any[] = [];
      parseString(response, {trim: true, explicitArray: false, mergeAttrs: true}, function (err, result) {
        console.log('getJsonData.....' + JSON.stringify(result.News.NewsArticle));
        newsData = result.News.NewsArticle;
      });

      return newsData;

    }))
  }
}
