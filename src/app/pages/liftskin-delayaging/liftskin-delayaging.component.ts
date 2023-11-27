import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-liftskin-delayaging',
  templateUrl: './liftskin-delayaging.component.html',
  styleUrls: ['./liftskin-delayaging.component.scss']
})
export class LiftskinDelayagingComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('คืนความอ่อนเยาว์แบบธรรมชาติด้วยศัลยกรรมยกกระชับชะลอวัย');
    this.metaTagService.addTags([
      { name: 'description', content: `รวมข้อมูลเกี่ยวกับศัลยกรรมยกกระชับชะลอวัย ครอบคลุมทุกอย่างรวมถึงเคล็ดลับการดูแลผิวหน้าหลังการผ่าตัด เพื่อให้ตัดสินใจเลือกทำศัลยกรรมยกกระชับได้อย่างมั่นใจ` },
    ]);

  }

}