import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(private socialSharing: SocialSharing) {




}

regularShare(){
  // Check if sharing via email is supported
  this.socialSharing.canShareViaEmail().then(() => {
    // Sharing via email is possible
    alert("it is possible to do a social share");
  }).catch(() => {
    // Sharing via email is not possible

  });
}

  canShareViaEmail(){
    // Share via email
    
    this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
      // Success!
      alert("done");
    }).catch(() => {
      // Error!
    });

    
  }

  shareViaWhatsApp(message, image, url){
    this.socialSharing.shareViaWhatsApp(message);
    message="hello Whatsapp";
  }
}