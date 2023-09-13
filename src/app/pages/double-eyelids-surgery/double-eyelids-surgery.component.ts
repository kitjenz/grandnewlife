import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-double-eyelids-surgery',
  templateUrl: './double-eyelids-surgery.component.html',
  styleUrls: ['./double-eyelids-surgery.component.scss']
})
export class DoubleEyelidsSurgeryComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('ศัลยกรรมตาสองชั้นเป็นการสร้างความโดดเด่นที่แตกต่างบนใบหน้า');
    this.metaTagService.addTags([
      { name: 'description', content: `การทำตาสองชั้นที่เกาหลีจะทำให้ดวงตาของคุณดูเป็นธรรมชาติและมีเสน่ห์น่ามองมากขึ้น บทความนี้จะพาสำรวจเหตุผลที่ต้องทำกับศัลยแพทย์เกาหลีและใครบ้างที่ควรทำตาที่สุด` },
    ]);

  }

}
