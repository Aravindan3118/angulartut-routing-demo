import { Component, OnInit } from '@angular/core';
import { DepartmentSerService } from '../department-ser.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <ul type='none' *ngFor='let department of departmentDetails' class="list-group">
    <button (click)="onSelect(department)" [class.btn-success]="isSelected(department)" class="btn">{{department.deptname}}<span class="badge"> {{department.id}}</span></button>
    </ul>
    
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  public selectedId;
  public departmentDetails = [];
  constructor(private _departmentService: DepartmentSerService ,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this._departmentService.getDepartment()
.subscribe(data => this.departmentDetails = data);

this.route.paramMap.subscribe((params: ParamMap)=>{
  let id = parseInt(params.get('id'));
  this.selectedId = id;
});
  }
  onSelect(department){
    // this.router.navigate(['/departments',department.id]); //absolute
    //relative
    this.router.navigate([department.id] , {relativeTo: this.route});
  }

  isSelected(department){
    return department.id === this.selectedId;
  }
}
