import { Component, OnInit } from '@angular/core';
import { profile } from 'src/model/profile-content';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  title = profile.mainContent.skills.title;
  courses = profile.mainContent.skills.courses;
  // honors = profile.mainContent.honorsAndAwards.honors;
  constructor() {}

  ngOnInit(): void {}
}
