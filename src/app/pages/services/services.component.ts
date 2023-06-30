import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('พาบินไปศัลยกรรมที่เกาหลี | พร้อมโปรศัลยกรรมเกาหลี  Grandnewlife');
    this.metaTagService.addTags([
      { name: 'description', content: `แกรนด์ นิว ไลฟ์ เอเจนซี่ศัลยกรรมเกาหลี พร้อมพาคุณบินไปศัลยกรรมที่เกาหลีอย่างครบวงจร ในราคาที่คุณเอื้อถึงได้ ดูรายละเอียดได้ที่นี่` },
    ]);

  }

}
