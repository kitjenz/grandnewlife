import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-facelift-rhytidectomy-surgery',
  templateUrl: './facelift-rhytidectomy-surgery.component.html',
  styleUrls: ['./facelift-rhytidectomy-surgery.component.scss']
})
export class FaceliftRhytidectomySurgeryComponent {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('ศัลยกรรมยกกระชับเพิ่มระดับความมั่นใจให้ใบหน้า');
    this.metaTagService.addTags([
      { name: 'description', content: `ศัลยกรรมยกกระชับจะช่วยยกกระชับผิวและเนื้อเยื่อใต้ผิวหนังบริเวณใบหน้าและลำคอ ส่งผลให้ใบหน้าดูอ่อนเยาว์และสดใสยิ่งขึ้น เพิ่มความมั่นใจให้ใบหน้า` },
    ]);

  }

}