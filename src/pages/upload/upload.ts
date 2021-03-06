import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MediaProvider} from "../../providers/media/media";
import {Media} from "../../app/media";
import {HttpErrorResponse} from "@angular/common/http";

/**
 * Generated class for the Upload0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload0',
  templateUrl: 'upload.html',
})
export class Upload0Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaProvider: MediaProvider) {
  }

  file: File;
  media: Media = {
    title: '',
    description: '',
  };


  ionViewDidLoad() {
    console.log('ionViewDidLoad Upload0Page');
  }

  public upload() {
    const formData: FormData = new FormData();
    formData.append('title', this.media.title);
    formData.append('description', this.media.description);
    formData.append('file', this.file);
    this.mediaProvider.uploading(formData).subscribe(response => {
      console.log(response);
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
    });
  }

  public setFile(evt) {
    console.log(evt.target.files[0]);
    this.file = evt.target.files[0];
  }

}
