import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnChanges {
    private _srcImg: string = "assets/pictures/Title_complete_color.png";
    role!: string;
    constructor(
        private srvAuth: AuthenticationService
    ){
        this.role = srvAuth.role;
        console.log("myRole: " + this.role);

    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log("CHANGES ?");

        if (this.srvAuth.isLogged()) {
            this.role = this.srvAuth.role
        }
        else {
            this.role = "";
        }
        console.log("myRole: " + this.role);
    }

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
