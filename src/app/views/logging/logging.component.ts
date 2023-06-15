import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Logging } from 'src/app/models/logging/logging';
import { LoggingService } from 'src/app/services/logging/logging.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
  loggings$!: Observable<Logging[]>;

  dateChecked: boolean = false;
  textChecked: boolean = false;
  pseudoChecked: boolean =false;

  deleteAllPseudo: boolean=false;
  deleteAllDate: boolean=false;
  deleteAllText: boolean=false;

  year!: number;
  month!: number;
  day!: number;
  text! : string;
  pseudo!: string;

  constructor(private srvLogging: LoggingService){};

  ngOnInit(): void {
    this.reload();
  }

  supprimer(logging: Logging){
    this.srvLogging.delete(logging).subscribe(()=> this.reload())
  }

  public reload(){
    this.loggings$ = this.srvLogging.findAll();
  }

  public dateReset(){
    this.year = 0;
    this.month= 0,
    this.day = 0;
    this.reload();
  }


  public findByDate(year = this.year, month = this.month, day = this.day){
    if(year && year != 0){
      this.loggings$ = this.srvLogging.findByYear(year);
      if(month && month != 0){
        this.loggings$ = this.srvLogging.findByMonth(year, month);
        if(day && day != 0){
          this.loggings$ = this.srvLogging.findByDay(year, month, day);
        }
      }
    }
  }

  public textReset(){
    this.text = "";
    this.reload();
  }


  public findByText(text = this.text){
    if(text && text != ""){
      this.loggings$ = this.srvLogging.findByText(text);
    }
  }

  public pseudoReset(){
    this.pseudo = "";
    this.reload();
  }

  public findByPseudo(pseudo = this.pseudo){
    if(pseudo && pseudo != ""){
      this.loggings$ = this.srvLogging.findByPseudo(pseudo);
    }
  }



  public confirmDeletePseudo(){
    this.deleteAllPseudo = true;
  }

  public deleteAllByPseudo(pseudo = this.pseudo){
    this.srvLogging.deleteByPseudo(pseudo).subscribe(() => this.reload());
    this.deleteAllPseudo = false;
  }

  public notDeleteAllByPseudo(){
    this.deleteAllPseudo = false;
    this.reload();
  }




  public confirmDeleteDate(){
    this.deleteAllDate = true;
  }

  public deleteAllByDate(year = this.year, month = this.month, day = this.day){
    if(year && year != 0){
      if(month && month != 0){
        if(day && day != 0){
          this.srvLogging.deleteByDay(year, month, day).subscribe(() => this.reload());
        }
        else{
          this.srvLogging.deleteByMonth(year, month).subscribe(() => this.reload());
        }
      }
      else{
        this.srvLogging.deleteByYear(year).subscribe(() => this.reload());
      }
    }
    this.deleteAllDate = false;
  }

  public notDeleteAllByDate(){
    this.deleteAllDate = false;
    this.reload();
  }


  // public checkChecked(){
  //   if(this.pseudoChecked){
  //     this.dateChecked = false;
  //     this.textChecked = false;
  //   }
  //   else if(this.dateChecked){
  //     this.pseudoChecked = false;
  //     this.textChecked = false;
  //   }
  //   else if(this.textChecked){
  //     this.pseudoChecked = false;
  //     this.dateChecked = false;
  //   }
  // }
}
