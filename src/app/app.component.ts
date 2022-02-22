import { Component } from '@angular/core';
import { FamilyService } from 'src/app/services/family.service';
import { Family } from './family';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mockFamily!: Family[];
  user!: any;
  spouse!: any;
  parent1!: any;
  parent2!: any;
  children!: any;
  showEdit: boolean = false;

  constructor(private familyService: FamilyService) { }

  ngOnInit(): void {
    this.mockFamily = this.familyService.getFamilyDetails();
    this.getUser();
  }

  getUser() {
    this.user = this.mockFamily.find((i) => i.id === 3);
    if(this.user.spouseId > -1) {
      this.findSpouse();
    }
    if(this.user.parentId1 > -1) {
      this.findParent1();
    }
    if(this.user.parentId2 > -1) {
      this.findParent2();
    }
    this.findChildren();
  }

  findSpouse() {
    this.spouse = this.mockFamily.find((i)=> i.id === this.user.spouseId);
  }

  findParent1() {
    this.parent1 = this.mockFamily.find((i)=> i.id === this.user.parentId1);
  }

  findParent2() {
    this.parent2 = this.mockFamily.find((i)=> i.id === this.user.parentId2);
  }

  findChildren() {
    this.children = this.mockFamily.filter((i)=> i.parentId1 === this.user.id || i.parentId2 === this.user.id);
    console.log(this.children);
  }

  viewDetails() {
    // navigate to details page
  }

  editDetails() {
    // navigate to edit page
    this.showEdit = true;
  }

  saveDetails() {

  }

  cancel() {
    
  }
}
