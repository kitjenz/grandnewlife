import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-id-hospital',
  templateUrl: './id-hospital.component.html',
  styleUrls: ['./id-hospital.component.scss']
})
export class IdHospitalComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('โรงพยาบาลไอดี | ID Plastic Surgery | GrandNewLife');
    this.metaTagService.addTags([
      { name: 'description', content: `โรงพยาบาลไอดี บริการศัลยกรรมเกาหลีครบวงจร โดยทีมแพทย์ผู้เชี่ยวชาญด้านการศัลยกรรมโครงหน้า ผ่าตัดขากรรไกรเสริมความงาม | ดูรายละเอียดเพิ่มเติม` },
    ]);

  }

}
