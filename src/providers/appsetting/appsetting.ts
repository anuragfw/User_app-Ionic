import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppsettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppsettingProvider {
 // myGlobalVar: string = 'http://wedding-dost.us-east-1.elasticbeanstalk.com/api/';
//  demonew.us-east-1.elasticbeanstalk.com
  myGlobalVar: string = 'http://demonew.us-east-1.elasticbeanstalk.com/api/';
  imagevar: string = 'http://demonew.us-east-1.elasticbeanstalk.com/admin/uploads/players/';
  imagevars: string = 'http://demonew.us-east-1.elasticbeanstalk.com/admin/uploads/'
//  myGlobalVar: string ='http://localhost:8080/api/';
  
  constructor(public http: Http) {
    console.log('Hello AppsettingProvider Provider');
  }

}
