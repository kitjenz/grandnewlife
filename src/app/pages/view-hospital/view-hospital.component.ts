import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-hospital',
  templateUrl: './view-hospital.component.html',
  styleUrls: ['./view-hospital.component.scss']
})
export class ViewHospitalComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('โรงพยาบาลวิว | View Plastic Surgery | GrandNewLife');
    this.metaTagService.addTags([
      { name: 'description', content: `โรงพยาบาลวิว บริการศัลยกรรมเกาหลีชั้นนำ ด้วยจุดเด่นที่เน้นศัยลกรรมให้ออกมาดูเป็นธรรมชาติมากที่สุด การันตีด้วยทีมแพทย์ผู้ได้รับรางวัล | ดูเพิ่มเติม` },
    ]);

  }

}
