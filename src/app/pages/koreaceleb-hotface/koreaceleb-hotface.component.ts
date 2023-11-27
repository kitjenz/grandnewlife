import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-koreaceleb-hotface',
  templateUrl: './koreaceleb-hotface.component.html',
  styleUrls: ['./koreaceleb-hotface.component.scss']
})
export class KoreacelebHotfaceComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('ส่องใบหน้าแบบเซเลบสาวเกาหลีที่ศัลยแพทย์มือดียืนยันว่าเป็นที่นิยม');
    this.metaTagService.addTags([
      { name: 'description', content: `วิเคราะห์ใบหน้าของเซเลบสาวเกาหลีเพื่อเป็นแนวทางในการทำศัลยกรรม หน้าทรงไหนโรงพยาบาลศัลยกรรมอะไรบ้างที่เราแนะนำว่าดี มาดูกัน` },
    ]);

  }

}
