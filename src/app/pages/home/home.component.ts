import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private metaTagService: Meta,private metaTitle: Title) { }

  ngOnInit(): void {

    this.metaTitle.setTitle('เอเจนซี่ให้คำปรึกษาการทำศัลยกรรมที่โรงพยาบาลเกาหลี Grand new life');
    this.metaTagService.addTags([
      { name: 'description', content: 'Grandnewlife  เอเจนซี่ศัลยกรรมเกาหลี ที่แนะนำโรงพยาบาลเกาหลีด้านศัลยกรรมอย่างครบวงจร ดูรายละเอียดเพิ่มเติมได้ที่นี่' },
    ]);
    
  }

}
