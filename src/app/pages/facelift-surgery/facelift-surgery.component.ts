import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-facelift-surgery',
  templateUrl: './facelift-surgery.component.html',
  styleUrls: ['./facelift-surgery.component.scss']
})
export class FaceliftSurgeryComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('ศัลยกรรมยกกระชับ ชะลอวัยให้ใบหน้าที่เกาหลี | GrandNewLife');
    this.metaTagService.addTags([
      { name: 'description', content: `การศัลยกรรมยกกระชับให้กับใบหน้า เป็นการชะลอวัยให้กับใบหน้าซึ่งเมื่อมีอายุมากยิ่งขึ้นก็มักจะพบปัญหาทั้งริ้วรอย เหี่ยวย้นมาคอยกวนใจเป็นปัญหาสำหรับความสวย
      ` },
    ]);

  }

}
