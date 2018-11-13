import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'
@Component({
  selector: 'app-department-details',
  template: `
    <p>
      The department id is {{departmentId}}
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>         
    </p>
    <div>
    <button (click)= "goToDepartments()">BACK</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this code will not perform well when it comes to changing next and previous
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    // this code will not perform well when it comes to changing next and previous (insted this)
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }
   
  goNext(){
    let nextId = this.departmentId+1;
    this.router.navigate(['/departments',nextId]);
  }
  goPrevious(){
    let previousId = this.departmentId-1;
    this.router.navigate(['/departments',previousId]);
  }
  goToDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null ;
    // this.router.navigate(['/departments',{id : selectedId}]);
    this.router.navigate(['../', {id : selectedId}],{relativeTo : this.route});
  }
}
