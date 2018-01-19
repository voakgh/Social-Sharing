import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';


 



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  quotes: any;
  private apiUrl: string = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10"; //api url to retrieve 10 random quotes
  constructor(private http: Http, private socialSharing: SocialSharing, public navCtrl: NavController) {
    
  }
  async getQuotes() {
    this.quotes = await this.http.get(this.apiUrl).map(res => res.json()).toPromise();;
  }

  compilemsg(index): string {
    var msg = this.quotes[index].content + "-" + this.quotes[index].title;
    return msg.concat(" \n Sent from my Awesome App !");
  }

  regularShare(index) {
    var msg = this.compilemsg(index);
    this.socialSharing.share(msg, null, null, null);
  }
  
}



