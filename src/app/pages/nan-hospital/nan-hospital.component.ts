import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nan-hospital',
  templateUrl: './nan-hospital.component.html',
  styleUrls: ['./nan-hospital.component.scss']
})
export class NanHospitalComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('โรงพยาบาลนานะ | Nana Plastic Surgery | GrandNewLife');
    this.metaTagService.addTags([
      { name: 'description', content: ` โรงพยาบาลศัลยกรรมเกาหลีนานะ โรงพยาบาลชั้นนำด้านศัลยกรรมของประเทศเกาหลี ด้วยจุดเด่นด้านการบริการที่ยอดเยี่ยม และการให้การรักษาอย่างเป็นระบบ | ดูเพิ่มเติม` },
    ]);
  }

}
