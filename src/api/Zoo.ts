import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

export class Zoo {


  static getData(http:Http) {
    var url:string = "/assets/data/data.json";

    return http.get(url)
      .map((res) => {
        return res.json();
      }).toPromise();
  }

  static getBranchs(http:Http) {

    var branch_promise = new Promise (function (resolve, reject) {

      var raw_data_promise = Zoo.getData(http);

      raw_data_promise.then (function (data) {
        var branches_raw = data.branchs
        var branches = branches_raw.map(function (item) {
          return item.name;
        });

        resolve(branches);
      }).catch (function (error) {
        reject(error);
      })

    })

    return branch_promise;

  }

  static getAnimalsByBranch(http:Http, branch:string) {

    var animals_promise = new Promise(function (resolve, reject) {

        var raw_data_promise = Zoo.getData(http)

        raw_data_promise.then (function (data) {

          var branches = data.branchs;

          var animals = branches.find(function (item) {
            return item.name == branch;
          }).animals.map(function (item) {
            return item.name;
          });

          console.log(animals);

          resolve(animals);

        }).catch (function (error) {
          reject(error);
        })
    })

    return animals_promise;

  }

  static getAnimalFromBranch(http: Http, animal:string, branch:string) {

  }

}
