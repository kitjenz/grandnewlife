import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-etonne-hospital',
  templateUrl: './etonne-hospital.component.html',
  styleUrls: ['./etonne-hospital.component.scss']
})
export class EtonneHospitalComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('โรงพยาบาล Etonne | Etonne Plastic Surgery | GrandNewLife');
    this.metaTagService.addTags([
      { name: 'description', content: `โรงพยาบาลเอโตน บริการศัลยกรรมเสริมความงามเกาหลี โดยทีมแพทย์ผู้เชี่ยวชาญ พร้อมการบริการอย่างเอาใจใส่และทุ่มเทเพื่อมอบประสบการณ์ทางการแพทย์ที่ดีที่สุดแด่คุณ` },
    ]);

  }

}
