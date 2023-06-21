import { GifsService } from './../../../gifs/services/gifs.service';
import { Component } from '@angular/core';
@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsSercice: GifsService) {}

  get tagsHistory(): string[] {
    return this.gifsSercice.tagHistory;
  }

  searchTag(tag: string): void {
    this.gifsSercice.searchTag(tag);
  }
}
