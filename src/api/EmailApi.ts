import {Log} from "../model/Log";

import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

export class EmailApi {

  constructor (private http: HttpClient) {

  }

  sendLogs(logs:Log[], animal_name:string, to:string) {

    let that = this;

    var promise = new Promise (function (resolve, reject) {
      var html = "<h1>Logs for animal " + animal_name +  "</h1><hr></hr>";
      logs.map(function (log) {
        console.log(log);
        html += "<div>";
        html += "<h2>Date: ";
        html += log.date;
        html += "</h2>";
        html += "<h3>";
        html += log.type;
        html += "</h3>";
        html += "<p>";
        html += log.description;
        html += "</p>";

        html += "</div>";
        html += "<br>";
      })

      var email_promise = that.sendHTMLEmail(to, "Animal Logs for " + animal_name, html).then (function (result) {
        console.log(result);
        resolve(result);
      }).catch (function (error) {
        reject(error);
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
