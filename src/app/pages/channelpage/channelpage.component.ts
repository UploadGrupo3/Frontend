import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../../app.service";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-channelpage',
  templateUrl: './channelpage.component.html',
  styleUrls: ['./channelpage.component.scss']
})
export class ChannelpageComponent {


  faEllipsisVertical = faEllipsisVertical;

  id: string = "";

  objchannels = {} as Channel;
  listvideos: ChannelVideos[] = [];

  listchannelCom: ContentComment[] = [];
  objchannelCom = {} as ContentComment;

  constructor(private route: ActivatedRoute, private appService: AppService) {
    this.id = route.snapshot.params['id_channel'];
  }

  ngOnInit(): void {

    this.appService.getoneChannel(this.id).subscribe(ch => {
      this.objchannels = ch[0];


      this.appService.getChannelsVideos(this.id).subscribe(v =>
        this.listvideos = v);
    });

    //---- Get the Comments ----//

    this.appService.getContentComments(this.id).subscribe(cc => {
      this.listchannelCom = cc;
    });


    this.appService.notifyChannelObservable.subscribe(res => {
      if (res.refreshChannel) {

        console.log("Isto aconteceu no channel!!")

        this.appService.getContentComments(this.id).subscribe(cc => {
          this.listchannelCom = cc;
        });
      }
    })
  }
}

