import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private router: Router,private route: ActivatedRoute) {

    }

    public loginUrl =  "http://localhost:3000/auth/google";

    ngOnInit() {
        this.route.queryParams.subscribe(queryParams => {
            if (queryParams['jwt']) {
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('token', queryParams['jwt']);
                this.router.navigate(['dashboard']);
            }    
         });
    }
}
