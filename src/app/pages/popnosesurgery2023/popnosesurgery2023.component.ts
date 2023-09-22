import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-popnosesurgery2023',
  templateUrl: './popnosesurgery2023.component.html',
  styleUrls: ['./popnosesurgery2023.component.scss']
})
export class Popnosesurgery2023Component implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('เทรนด์ทรงจมูกยอดนิยมปี 2023 เพื่อความสวยที่มั่นใจ มีมิติ');
    this.metaTagService.addTags([
      { name: 'description', content: ` ปัจจุบันมีทรงจมูกแบบต่างๆมากมายให้ได้เลือกก่อนทำศัลยกรรม รวมไปถึงข้อดีของการศัลยกรรมจมูกที่เกาหลีเพื่อจมูกที่สวย เนียน เป็นธรรมชาติ` },
    ]);

  }

}
