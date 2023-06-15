import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    private _srcImg: string = "assets/pictures/Title_complete_color.png";
    role: string = this.srvAuth.role;

    constructor(
        private srvAuth: AuthenticationService
    ){}

    public get srcImg(): string {
        return this._srcImg;
    }
    public set srcImg(value: string) {
        this._srcImg = value;
    }

    // change the logo color on hover
    public hover_title() {
        this._srcImg =  "assets/pictures/Title_white.png"
    }

    // change back the logo color on hover out
    public hover_out_title() {
        this._srcImg =  "assets/pictures/Title_complete_color.png"
    }
}
