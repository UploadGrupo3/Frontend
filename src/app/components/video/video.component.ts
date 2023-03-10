import {Component, OnInit, Input} from '@angular/core';
import {AppService} from "../../app.service";
import {faBookmark} from "@fortawesome/free-regular-svg-icons"
import {faShareNodes, faBookmark as faBookmarkSolid, faCirclePlay} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})

export class VideoComponent implements OnInit {
  @Input() mid!: string;
  @Input() field_video_title!: string;
  @Input() created!: string;
  @Input() field_video_description!: string;
  @Input() field_duration!: string;
  @Input() thumbnail__target_id!: string;
  @Input() user_picture!: string;
  @Input() name_1!: string;
  @Input() field_tags!: string;
  @Input() field_channel?: string;
  @Input() field_channel_1?: string;
  @Input() field_media_oembed_video!: string;
  @Input() share_type?: string;
  @Input() thematics?: boolean;
  @Input() autoplay!: string;
  @Input() view_media!: string;
  @Input() view_node!: string;

  thumbnail!:string;


  faBookmark = faBookmark
  faBookmarksolid = faBookmarkSolid
  faSharenodes = faShareNodes
  faCirclePlay = faCirclePlay

  full: boolean = false;

  urlvtitle!: string;
  urlctitle!: string;

  hover?: boolean

  /*---Toggle Share---*/

  showSharePopup = false;

  toggleShare():void{
    this.showSharePopup = !this.showSharePopup
  }

  constructor(public appService: AppService) {}

  ngOnInit(): void {

    (this.field_tags.includes("warning") || this.field_tags.includes("aviso"))?
      this.thumbnail="../../../assets/thumbnails/more18.png":
      this.thumbnail = "https://dev-project-upskill2-grupo3-ii.pantheonsite.io" + this.thumbnail__target_id

    this.autoplay = this.autoplay.replace('/watch?v=', '/embed/')
        .split("&")
      + '?autoplay=1&cc_load_policy=1&cc_lang_pref=pt'

    this.urlvtitle = this.view_media.split('video/')[1];
    this.urlctitle = this.view_node.slice(4)
  }
}
