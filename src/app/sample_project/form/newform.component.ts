import { Component } from '@angular/core';
import{ FormService } from'./form.service';
import{ FormData} from'./formdata';
import { OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css'],
  providers:[FormService]
})
export class NewFormComponent {
  constructor(private _FormService:FormService,private router: Router,
  private route: ActivatedRoute)
  {
    this.edit();  
  }
/*   showButton: boolean = true; */
  model = new FormData('','');
  newForm = new FormGroup
  ({
    name: new FormControl('',[ Validators.required,Validators.minLength(10)]),
    description: new FormControl('',[ Validators.required,Validators.minLength(20)]),
  })
  id = this.route.snapshot.params['id'];
/* click(){
  this.showButton = !this.showButton;
} */
 insert() 
 {
    this._FormService
    .newform( this.model)
    .subscribe(()=> alert('inserted'));
 }
 edit()
 {
 /*   this.showButton = !this.showButton; */
  /*  console.log(this.showButton); */
    this._FormService
    .getid(this.id)
    .subscribe(employee =>
      {
      this.model = employee[0];
      })
};
update()
{
  this._FormService
  .update(this.model)
  .subscribe(()=> "");
  console.log(this.model);
}
delete()
{
  console.log(this.model);
  this._FormService
    .delete(this.model)
    .subscribe(() => "");
   } 
}

