import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'logged-navbar',
  templateUrl: './logged-navbar.component.html',
  styleUrls: ['./logged-navbar.component.css']
})
export class LoggedNavbarComponent implements OnInit{
    private _srcImg: string = "assets/pictures/Title_complete_color.png";

    public get srcImg(): string {
        return this._srcImg;
    }
    public set srcImg(value: string) {
        this._srcImg = value;
    }

    Title: string = "Test"

    isSmallScreen: boolean = false;

    constructor(private srvAuth: AuthenticationService,
                private router: Router,
                public srvTitle: Title) {}

    ngOnInit(): void {
       if(window.innerWidth < 576) {
        this.isSmallScreen = true;
       }

       this.onResize();
    }

    // change the logo color on hover
    public hover_title() {
        this._srcImg =  "assets/pictures/Title_white.png"
    }

    // change back the logo color on hover out
    public hover_out_title() {
        this._srcImg =  "assets/pictures/Title_complete_color.png"
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        console.log("Is resizing...");

        if (window.innerWidth > 576) {
            this.isSmallScreen = false;
        }
        else {
            this.isSmallScreen = true;
        }
    }

    onClickLogOut() {
        this.srvAuth.token = "";
        this.router.navigate([ '/accueil' ]);

    }
}
