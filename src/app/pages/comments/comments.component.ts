import { Component, OnInit } from '@angular/core';
import {AppService} from "../../app.service";



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  constructor(private appService: AppService) { }

  contentCom :ContentComment[] = [];
  videoCom :VideoComment[] = [];

  ngOnInit(): void {

    this.appService.getContentComments("17").subscribe(cc => this.contentCom =cc)

    this.appService.getVideoComments().subscribe(cc => this.videoCom =cc)

  }
}
