import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-safe-breast-surgery',
  templateUrl: './safe-breast-surgery.component.html',
  styleUrls: ['./safe-breast-surgery.component.scss']
})
export class SafeBreastSurgeryComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('สิ่งที่ควรรู้ก่อนทำศัลยกรรมหน้าอก รู้ไว้ปลอดภัยกว่า');
    this.metaTagService.addTags([
      { name: 'description', content: `การทำศัลยกรรมหน้าอกนั้นช่วยเสริมสร้างความมั่นใจได้ดี แต่ต้องคำนึงถึงความเสี่ยงที่อาจเกิดขึ้นด้วยเพื่อให้ผลลัพธ์ออกมาดี และมีความปลอดภัย` },
    ]);

  }

}
