import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hot6koreahospitalforplasticsurgery',
  templateUrl: './hot6koreahospitalforplasticsurgery.component.html',
  styleUrls: ['./hot6koreahospitalforplasticsurgery.component.scss']
})
export class Hot6koreahospitalforplasticsurgeryComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('รวม 6 โรงพยาบาลในเกาหลีเพื่อการศัลยกรรมที่มีประสิทธิภาพสูงสุด');
    this.metaTagService.addTags([
      { name: 'description', content: `แนะนำโรงพยาบาลศัลยกรรมที่ได้รับความนิยมมากที่สุดในเกาหลี แต่ละโรงพยาบาลมีจุดเด่นและผลงานที่โดดเด่นแตกต่างกันไป รับรองว่าเลือกทำที่ไหนก็ปังแน่นอน` },
    ]);

  }

}