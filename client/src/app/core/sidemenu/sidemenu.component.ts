import { Component, OnInit, Input } from '@angular/core';
import { menus } from './menu-element';
import { CheckinService } from '../../checkin/checkin.service';

@Component({
  selector: 'cdk-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

    @Input() iconOnly:boolean = false;
    doneCheckin = false;
    public menus = menus;
    

    constructor(private checkinService: CheckinService) {}

    ngOnInit() {
      this.checkinService.messageSource.subscribe(done => {
        this.doneCheckin = done;
        console.log("sidemenu: ", done);
      });
      
    }

    clickedMenu(menu: any): void {
      console.log('clicked menu', menu);
    }
}
