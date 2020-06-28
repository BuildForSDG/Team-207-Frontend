import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,  ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from './../services/account.services';
import { AlertService } from './../services/alert.services';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private routerModule: RouterModule,
        private accountService: AccountService,
        private alertService: AlertService,
        private http: HttpClient
    ) {
        // redirecct to home if already logged in
        if (this.accountService.userValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            username: ['', Validators.required],
            email:  ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirm_password: ['', [Validators.required]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls;}

    onSubmit() {
        this.submitted = true;

        //reset alerts on submit
        this.alertService.clear();

        //stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        if(this.registerForm.valid){
            this.http.post('api/user/register', this.registerForm.value)
            .subscribe((response)=>{
                console.log('response', response)
            })
        }

        this.loading = true;
        this.accountService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', { keepAfterRouterChange: true});
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error => {
                    this.alertService.error(error);
                   this.loading = false;
                });
	}
}
