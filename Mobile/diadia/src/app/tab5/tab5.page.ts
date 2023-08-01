import { Component, OnInit } from '@angular/core';
import {PhotoService} from "../photo/photo.service";

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(public  pS: PhotoService) {}
  addPhotoGallery(){
    this.pS.addNewToGallery()
  }
  async ngOnInit() {
    await this.pS.loadSaved();
  }
}
