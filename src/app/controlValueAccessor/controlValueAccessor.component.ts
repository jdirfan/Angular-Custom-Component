import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'control-value-accessor',
    templateUrl: 'controlValueAccessor.component.html'
})
export class ControlValueAccessorComponent implements OnInit {

    customerForm: FormGroup;
    customer: any;
    message: string;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() { 
        this.customer = {
            firstName: 'James Bond',
            phone: '007-700-7777'
        };

        this.customerForm = this.formBuilder.group({
            name: [this.customer.firstName ],
            phone: [this.customer.phone ]
        });
    }

    submit() {
        this.message = 'You entered: ' + 
                        this.customerForm.controls.name.value + ' ' + 
                        this.customerForm.controls.phone.value;
    }

}
