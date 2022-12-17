import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css']
})
export class QuoteCardComponent {
  quote:any;
  Author:any;
  constructor(private http:HttpClient){
    this.fetchData();
  }
  changeQuote(){
    this.fetchData();
  }
  fetchData(){
    this.http.get('http://api.quotable.io/random').subscribe((response:any) =>{

      this.quote = response.content;
      this.Author = response.author;
      console.log(response);
    })
  }
  
  onCopySucceeded(){
    alert('Text copied Successfully !!');
  }

}
