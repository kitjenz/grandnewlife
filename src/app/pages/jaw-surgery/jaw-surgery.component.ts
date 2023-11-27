import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-jaw-surgery',
  templateUrl: './jaw-surgery.component.html',
  styleUrls: ['./jaw-surgery.component.scss']
})
export class JawSurgeryComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('ผ่าตัดขากรรไกรที่เกาหลี ทางเลือกใหม่เพื่อใบหน้าที่สมส่วนและสวยงาม');
    this.metaTagService.addTags([
      { name: 'description', content: `ใบหน้าที่สมส่วนสามารถทำได้โดยการผ่าตัดขากรรไกรควบคู่กับการจัดฟัน เพราะสามารถช่วยปรับรูปหน้าให้สมส่วนและสวยงามได้อย่างมีประสิทธิภาพและถาวร` },
    ]);

  }

}