import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-facial-none-surgery',
  templateUrl: './facial-none-surgery.component.html',
  styleUrls: ['./facial-none-surgery.component.scss']
})
export class FacialNoneSurgeryComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('ศัลยกรรมโครงหน้า กราม คางที่เกาหลี  | GrandNewLife');
    this.metaTagService.addTags([
      { name: 'description', content: `การศัลยกรรมโครงหน้า จุดเริ่มต้นของความสวย ช่วยแก้ไขจุดที่ไม่ต้องการเสริมเสน่ห์ให้กับตัวคุณ โดยทีมแพทย์ผู้เชี่ยวชาญจากโรงพยาบาลชั้นนำประเทศเกาหลี | ดูเพิ่มเติม
      ` },
    ]);
  }

}
