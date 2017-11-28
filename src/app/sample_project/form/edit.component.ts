import { Component } from '@angular/core';
import{ FormService } from'./form.service';
import{ FormData} from'./formdata';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[FormService]
})
export class EditComponent {
    constructor(private _FormService:FormService,private router: Router,
        private route: ActivatedRoute){
      
 }
 newForm = new FormGroup({
 name: new FormControl('',[ Validators.required,Validators.minLength(10)]),
 description: new FormControl('',[ Validators.required,Validators.minLength(20)]),
})
 model= new FormData('','');
name = this.route.snapshot.params['name'];


/*   goBack()
   alert('success');
 }
 */

  }


