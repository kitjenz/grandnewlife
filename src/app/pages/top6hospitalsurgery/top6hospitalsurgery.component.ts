import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-top6hospitalsurgery',
  templateUrl: './top6hospitalsurgery.component.html',
  styleUrls: ['./top6hospitalsurgery.component.scss']
})
export class Top6hospitalsurgeryComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('รวมมาให้แล้ว! 6 โรงพยาบาลศัลยกรรมชั้นนำในเกาหลีที่น่าจับตามอง');
    this.metaTagService.addTags([
      { name: 'description', content: `เมื่อต้องทำศัลยกรรม นอกจากความพร้อมในด้านต่างๆ แล้วการเลือกโรงพยาบาลศัลยกรรมก็จำเป็นที่ต้องพิจารณา ต่อไปนี้คือโรงพยาบาลชั้นนำทั้ง 6 ในเกาหลีเพื่อคุณ` },
    ]);

  }

}
