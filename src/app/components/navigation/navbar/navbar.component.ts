import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    private _srcImg: string = "../../../../assets/pictures/Title_complete_color.png";

    public get srcImg(): string {
        return this._srcImg;
    }
    public set srcImg(value: string) {
        this._srcImg = value;
    }


    // change the logo color on hover
    public hover_title() {
        this._srcImg =  "../../../../assets/pictures/Title_white.png"
    }

    // change back the logo color on hover out
    public hover_out_title() {
        this._srcImg =  "../../../../assets/pictures/Title_complete_color.png"
}
}
