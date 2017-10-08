import { Log } from '../model/Log';

export class AnimalLogDatabase {

  


  setAnimalLog(animal:string, animal_logs:Log[]) {

    var set_animal_promise = new Promise(function (resolve, reject) {
      localforage.setItem(animal, animal_logs).then (function () {
        return localforage.getItem(animal);
      }).then (function (value) {
        resolve(value);
      }).catch (function (err) {
        reject(err);
      })
    })

    return set_animal_promise;

  }

  getAnimalLogs(animal:string) {

    var get_animal_promise = new Promise (function (resolve, reject) {

      localforage.getItem(animal).then (function (logs) {
          resolve (logs)
      }).catch (function (error) {
          resolve([]);
          console.log(error);
      })

    })

    return get_animal_promise;

  }

}
