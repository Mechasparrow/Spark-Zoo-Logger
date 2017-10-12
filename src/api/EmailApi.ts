import {Log} from "../model/Log";

import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

export class EmailApi {

  constructor (private http: HttpClient) {

  }

  sendLogs(logs:Log[]) {

  }

  sendHTMLEmail(to:string, subject:string, html:string) {
    const body = {
      to: to,
      subject: subject,
      text:"",
      html: html
    }

    this.http.post('https://animal-monitor-email.glitch.me/send-animal-log',body).subscribe(data => {
      console.log(data);
    });
  }

  sendTextEmail(to:string, subject:string, text:string) {

    const body = {
      to: to,
      subject: subject,
      text:text,
      html: ""
    }

    this.http.post('https://animal-monitor-email.glitch.me/send-animal-log',body).subscribe(data => {
      console.log(data);
    });

  }

}
