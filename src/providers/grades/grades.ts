import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GradesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GradesProvider {

  // private url = "../../assets/data.json";
  private url = "http://blokcijjferapp-am1b-api.nl/data.php";
  private update_residence_url = "http://blokcijjferapp-am1b-api.nl/update_residence.php";

  constructor(public http: HttpClient) {
    console.log('Hello GradesProvider Provider');
  }

  public getGrades() {
    return this.http.get(this.url, {responseType: "json"})
  }

  public updateResidence(id, residence) {
    // console.log("Dit is de woonplaats + id: " + residence + " " + id);

    let params = new HttpParams();
    params = params.set("id", id );
    params = params.set("residence", residence );


    this.http.post(this.update_residence_url, params, {responseType: "json"}).subscribe((data: any[]) => {
      console.log(data);
    });

  }

}
