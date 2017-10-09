import { Storage } from '@ionic/storage';
import { Log } from '../model/Log';

export class AnimalLogDatabase {

  constructor(private storage:Storage) {

  }

  emptyAnimalLog(animal:string) {

      let that = this;

      var empty_promise = new Promise(function (resolve, reject) {

        that.setAnimalLog(animal, <Log[]> []).then (function (logs) {
          resolve(logs);
        }).catch (function (error) {
          reject(error);
        })
      })

      return empty_promise;
  }

  setAnimalLog(animal:string, animal_logs:Log[]) {

    let that = this;

    var set_animal_promise = new Promise(function (resolve, reject) {
      that.storage.set(animal, animal_logs).then (function () {
        return that.storage.get(animal);
      }).then (function (value) {
        resolve(value);
      }).catch (function (err) {
        reject(err);
      })
    })

    return set_animal_promise;

  }

  getAnimalLogs(animal:string) {

    let that = this;

    var get_animal_promise = new Promise (function (resolve, reject) {

      that.storage.get(animal).then (function (logs) {

          if (logs == null) {
            resolve([]);
          }else {
            resolve (logs)
          }
      }).catch (function (error) {
          resolve([]);
          console.log(error);
      })

    })

    return get_animal_promise;

  }

}
