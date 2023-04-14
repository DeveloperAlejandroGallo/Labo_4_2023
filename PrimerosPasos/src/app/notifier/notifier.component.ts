import { Component, OnInit } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent implements OnInit {

  constructor(
    // private notifier: ToastrService
    ) {

  }

  ngOnInit(): void {

  }

  // Success(msg: string){
  //   this.notifier.success(msg);
  // }

  // Warning(msg: string){
  //   this.notifier.warning(msg);
  // }

  // Error(msg: string){
  //   this.notifier.error(msg);
  // }

}
