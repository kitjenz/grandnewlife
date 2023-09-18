import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-koreaselfsergery-vs-agencysergery',
  templateUrl: './koreaselfsergery-vs-agencysergery.component.html',
  styleUrls: ['./koreaselfsergery-vs-agencysergery.component.scss']
})
export class KoreaselfsergeryVsAgencysergeryComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('เปรียบเทียบทำศัลยกรรมกับเอเจนซี่ vs. บินไปศัลยกรรมเองที่เกาหลี');
    this.metaTagService.addTags([
      { name: 'description', content: `เปรียบเทียบให้เห็นภาพระหว่างไปกับเอเจนซี่และศัลยกรรมเองที่เกาหลีว่าแบบไหนที่ใช่สำหรับคุณ รวมทั้งแนะนำทางเลือกที่เหมาะสำหรับมือใหม่เข้าวงการศัลยกรรม` },
    ]);

  }

}
