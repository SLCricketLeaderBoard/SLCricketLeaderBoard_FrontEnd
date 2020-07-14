import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from "@angular/forms";
import { UserModel } from "../../../class-model/UserModel";
import { ManagerService } from "../../../service/manager/manager.service";
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../../../service/user/user-service.service';
import { AngularFirestore } from "@angular/fire/firestore";


@Component({
  selector: "app-manager-manager-register",
  templateUrl: "./manager-manager-register.component.html",
  styleUrls: ["./manager-manager-register.component.scss"],
})
export class ManagerManagerRegisterComponent implements OnInit {
  managerRegisterForm: FormGroup;
  done: boolean = false;
  valid: boolean = false;
  user: UserModel = null;
  userId: any
  message:any

  constructor(private router: Router,private managerService: ManagerService,private route: ActivatedRoute,private userService:UserServiceService, private afs: AngularFirestore) {

    this.route.params.subscribe(res => {
      this.userId = res['managerId'];
    })

    this.managerRegisterForm = new FormGroup({
      userName: new FormControl({ value: null, disabled: true }, [
        Validators.required,
        Validators.minLength(6),
      ]),
      fullName: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      nameWithInitials: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      nic: new FormControl(null, [
        Validators.required,
        Validators.minLength(9),
      ]),
      contactNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() {
    this.managerRegisterForm.statusChanges.subscribe((state) => {
      console.log(state);

      if (state == "VALID") {
        this.valid = true;
      } else {
        this.valid = false;
      }
    });

    this.userService.getUserByUserId(this.userId).subscribe(response=>{
      console.log(response);
      this.user=response;

      this.managerRegisterForm.setValue({
        userName: response.userName,
        fullName: response.fullName,
        nameWithInitials: response.nameWithInitial,
        nic: response.nic,
        contactNumber: response.contactNumber,
        email: response.email,
        address: response.address,
      });

    })


  }

  register() {
    this.user.status=1;
    this.afs.collection('users').doc(this.user.nic.toString()).update({registered: true});
    this.userService.updateUserState(this.user).subscribe(res=>{
      console.log(res);
      this.message=res;
      this.done=!this.done;

    },error=>{
      console.log(error);

    })

  }

  reset() {
    this.managerRegisterForm.reset();
  }

  back(){
    this.router.navigate(["../../manager-list"], { relativeTo: this.route });
  }


}
