import {Log} from "../model/Log";

import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

export class EmailApi {

  constructor (private http: HttpClient) {

  }

  sendLogs(logs:Log[], animal_name:string) {

    let that = this;

    var promise = new Promise (function (resolve, reject) {
      var html = "<p></p>";
      logs.map(function (log) {
        console.log(log);
      })
    })

    return promise;

  }

  sendHTMLEmail(to:string, subject:string, html:string) {
    const body = {
      to: to,
      subject: subject,
      text:"",
      html: html
    }

    let that = this;

    var promise = new Promise (function (resolve, reject)  {
      that.http.post('https://animal-monitor-email.glitch.me/send-animal-log',body).subscribe(data => {
       resolve(data);
      });
    })

    return promise;
  }

  sendTextEmail(to:string, subject:string, text:string) {

    const body = {
      to: to,
      subject: subject,
      text:text,
      html: ""
    }

    let that = this;

    var promise = new Promise (function (resolve, reject) {
      that.http.post('https://animal-monitor-email.glitch.me/send-animal-log',body).subscribe(data => {
        resolve(data);
      });
    });

    return promise;



  }

}
