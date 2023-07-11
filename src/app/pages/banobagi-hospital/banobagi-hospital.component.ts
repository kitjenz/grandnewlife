import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-banobagi-hospital',
  templateUrl: './banobagi-hospital.component.html',
  styleUrls: ['./banobagi-hospital.component.scss']
})
export class BanobagiHospitalComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('โรงพยาบาลบาโนบากิ | Banobagi Plastic Surgery | GrandNewLife');
    this.metaTagService.addTags([
      { name: 'description', content: `โรงพยาบาลบาโนบากิ ผู้นำด้านการศัลยกรรมโครงหน้า ขากรรไกรของเกาหลี พร้อมเครื่องมือแพทย์ทันสมัยและทีมแพทย์ผู้เชี่ยวชาญ | ดูรายละเอียดเพิ่มเติม` },
    ]);

  }

}
