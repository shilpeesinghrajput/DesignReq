import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('350ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      // transition(':leave', [
      //   animate('350ms ease-in', style({transform: 'translateX(-100%)'}))
      // ])
    ])
  ]
})
export class FormsComponent implements OnInit {
  screen:boolean = false;
  form!: FormGroup;
  totalControls !: number;
  count:number = 0;

  constructor(private fb: FormBuilder,public activateModal: NgbModal) { 
  }

  ngOnInit(): void {

    this.form = this.fb.group({

      inputName : new FormControl('',[Validators.required,Validators.minLength(3)]),

      radio1 : new FormControl('',Validators.required),

      radio2 : new FormControl('',Validators.required),

      inputplace: new FormControl('',[Validators.required,Validators.minLength(3)]),

      issuedYear: new FormControl('',Validators.required),

      previousDL: new FormControl('',Validators.required)

    })
    
  this.totalControls = Object.keys(this.form.controls).length;
// this.form.updateValueAndValidity();

    this.form.valueChanges.subscribe(()=>{
      // console.log(this.form.value);

      let count = 0
      for ( let control in this.form.controls){
        // console.log(control);

        if(this.form.get(control)?.valid === true){
         count++;
        }

      }

      this.updateProgress(count);

      this.checkToChangeScreen(count);
      // if(this.form.valid === true){
      //   this.screen = true;
      // }


    })


  }

   updateProgress(count:number){
    this.count = count;
   }

   checkToChangeScreen(count:number){
    if(count == 3 ){
      this.screen = true;
    }

    
   if(count == this.totalControls){
  setTimeout(() => {
    this.activateModal.dismissAll();
  }, 1000);  
  }

   }


}
