import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-agency-korea-plasticsurgerychose',
  templateUrl: './agency-korea-plasticsurgerychose.component.html',
  styleUrls: ['./agency-korea-plasticsurgerychose.component.scss']
})
export class AgencyKoreaPlasticsurgerychoseComponent {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('ทริคสำหรับเลือกเอเจนซี่ศัลยกรรมเกาหลีสำหรับมือใหม่ให้ไม่โดนโกง');
    this.metaTagService.addTags([
      { name: 'description', content: `เลือกเอเจนซี่ศัลยกรรมเกาหลียังไงไม่ให้โดนโกง? มาดูทริคที่เราเอามาฝากกัน รับรองว่าจะช่วยให้คุณเลือกเอเจ้นต์ได้ถูกใจและปลอดภัยแน่นอน` },
    ]);

  }

}
