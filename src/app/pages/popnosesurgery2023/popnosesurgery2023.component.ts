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

    this.metaTitle.setTitle('รวมทรงจมูกยอดนิยมของสาวไทยฉบับปี 2023 ทรงไหนถูกใจเซฟไว้เลย');
    this.metaTagService.addTags([
      { name: 'description', content: ` ปัจจุบันมีทรงจมูกแบบต่างๆมากมายให้ได้เลือกก่อนทำศัลยกรรม รวมไปถึงข้อดีของการศัลยกรรมจมูกที่เกาหลีเพื่อจมูกที่สวย เนียน เป็นธรรมชาติ` },
    ]);

  }

}
