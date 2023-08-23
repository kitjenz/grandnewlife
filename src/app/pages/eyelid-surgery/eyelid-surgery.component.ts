import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-eyelid-surgery',
  templateUrl: './eyelid-surgery.component.html',
  styleUrls: ['./eyelid-surgery.component.scss']
})
export class EyelidSurgeryComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('ศัลยกรรมตาสไตล์เกาหลี ทำตาสองชั้นที่เกาหลี | GrandNewLife');
    this.metaTagService.addTags([
      { name: 'description', content: `ศัลยกรรมดวงตาที่ประเทศเกาหลี เพิ่มความสวยเสริมความมั่นใจให้กับตัวคุณ ด้วยเทคนิคการทำตาหลากหลายรูปแบบโดยทีมแพทย์มืออาชีพจากโรงพยาบาลชื่อดังเกาหลี
      ` },
    ]);

  }

}
