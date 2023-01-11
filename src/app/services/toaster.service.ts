import { Injectable } from '@angular/core';
declare var toastr:any
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor() { }

    Success(title :string,meassage?:string){
      toastr.success(title,meassage);
    }
    Warning(title :string,message?:string){
      toastr.warning(title,message);
    }
    Error(title :string,message?:string){
      toastr.error(title,message);
    }
    Info(title :string,message?:string){
      toastr.info(title,message);
    }
    setting(){
      toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
    }
} 
