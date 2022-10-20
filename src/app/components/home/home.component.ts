import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

newDoTask: string;
tasks: any;
tasksArr: any;

  constructor() {
    this.newDoTask='';
    this.tasks=[];
   }

  ngOnInit(): void {}
    
  addTask(event:any){
    this.tasksArr = {
      newDoTask : this.newDoTask,
      completed: false
    }
    this.tasks.push(this.tasksArr);
    this.newDoTask = '';
    event.preventDefault();
  }

  deleteTask(index:number){
    this.tasks.splice(index,1);
  }


  deleteSelecTask(){
    for(var i=(this.tasks.length -1); i > -1; i--) {
      if(this.tasks[i].completed) {
        this.tasks.splice(i, 1);
      }
     }
  }

  

}
