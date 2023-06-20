import { GifsService } from './../../../gifs/services/gifs.service';
import { Component } from '@angular/core';
@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsSercice: GifsService) {}

  get tagsHistory() {
    return this.gifsSercice.tagHistory;
  }
}
