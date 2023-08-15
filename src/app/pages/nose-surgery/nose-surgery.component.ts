import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nose-surgery',
  templateUrl: './nose-surgery.component.html',
  styleUrls: ['./nose-surgery.component.scss']
})
export class NoseSurgeryComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('ศัลยกรรมจมูกที่เกาหลี  เลือกทรงจมูกที่ใช่สำหรับคุณ | GrandNewLife');
    this.metaTagService.addTags([
      { name: 'description', content: `จมูกหนึ่งในจุดยอดนิยมในการศัลยกรรมเสริมความงามให้กับใบหน้า ทาง Grandnewlife มีทีมผู้เชี่ยวชาญคอยช่วยให้คำปรึกษาในเลือกทรงจมูกที่เหมาะกับคุณ | ดูเพิ่มเติม
      ` },
    ]);

  }

}
