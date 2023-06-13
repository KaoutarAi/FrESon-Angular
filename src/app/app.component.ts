import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public srvAuth: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private srvTitle: Title
  ) { }

  ngOnInit() {

    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe(() => {

        var rt = this.getChild(this.activatedRoute)

        rt.data.subscribe((data: { title: string; }) => {
          console.log(data);
          this.srvTitle.setTitle(data.title)})
      })

  }

  getChild(activatedRoute: ActivatedRoute): any {
    console.log(this.srvTitle.getTitle());

    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

}
