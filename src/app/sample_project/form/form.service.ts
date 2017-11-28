import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import{ FormData} from'./formdata';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FormService {
constructor (private _http: Http) {}

newform(info)
{
   return this._http.post("http://localhost/QC_Assign/newform.php",info)
    .map(()=>"");
}	
    
list()
{
    return this._http .get("http://localhost/QC_Assign/list.php")
    .map(res=>res.json());
}
getid(id){
    return this._http.post("http://localhost/QC_Assign/populate.php/",{'id':id})
    .map(res=>res.json());
  }
  private extractData(res: Response) {        
    return res.text() ? res.json() : {}; ;
}
update(info){
    return this._http.post("http://localhost/QC_Assign/update.php/",info)
      .map(()=>"");
  }
  delete(info){
    return this._http.post("http://localhost/QC_Assign/del.php/",info)
      .map(()=>"");
}
}