import Swal from 'sweetalert2';

export class SwalMessage {

    constructor() { }
    
    successMessage(messageTitle:string){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: messageTitle,
            showConfirmButton: false,
            timer: 2000
          });
    }

    notSuccessMessage(messageTitle:string){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: messageTitle,
            showConfirmButton: false,
            timer: 2000
        });
    }
   
  }