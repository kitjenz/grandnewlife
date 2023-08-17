import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-eu-hospital',
  templateUrl: './eu-hospital.component.html',
  styleUrls: ['./eu-hospital.component.scss']
})
export class EuHospitalComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('โรงพยาบาล EU | EU Plastic Surgery | GrandNewLife');
    this.metaTagService.addTags([
      { name: 'description', content: `โรงพยาบาล อียู โรงพยาบาล อียู บริการศัลยกรรมเกาหลี โดยทีมแพทน์ผู้เชี่ยวชาญด้านการศัลยกรรมโครงหน้าและขากรรไกร เนรมิตความงามพร้อมบริการด้วยความจริงใจ` },
    ]);

  }
}
