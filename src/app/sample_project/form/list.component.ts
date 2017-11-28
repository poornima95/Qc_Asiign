import { Component } from '@angular/core';
import{ FormService } from'./form.service';
import{ FormData} from'./formdata';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[FormService]
})
export class ListComponent {
  showButton:boolean=true;
constructor(private _FormService:FormService,private router: Router,
  private route: ActivatedRoute){
  this.list();
}
/* lists =new FormData('',''); */
lists: FormData[];
list(){
  this._FormService.list()
  .subscribe(lists => 
  {
    this.lists = lists;
  
  });
  
}



click(){
  this.showButton = !this.showButton;
}



}