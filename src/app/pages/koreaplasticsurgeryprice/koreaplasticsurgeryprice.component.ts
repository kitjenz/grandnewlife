import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-koreaplasticsurgeryprice',
  templateUrl: './koreaplasticsurgeryprice.component.html',
  styleUrls: ['./koreaplasticsurgeryprice.component.scss']
})
export class KoreaplasticsurgerypriceComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('ศัลยกรรมเกาหลีปี 2023 ราคาเท่าไหร่? อัปเดตให้ทุกจุด');
    this.metaTagService.addTags([
      { name: 'description', content: `รวมราคาศัลยกรรมทุกจุดไว้ให้คุณแล้ว ไม่ว่าจะเป็นเสริมจมูก เสริมหน้าอก ฯลฯ ข้อมูลครบถ้วน อัปเดตล่าสุด คลิกเลย!` },
    ]);

  }

}