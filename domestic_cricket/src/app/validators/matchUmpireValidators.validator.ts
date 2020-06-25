import { FormGroup } from '@angular/forms';
    
export function UmpireValidator(umpire1: string, umpire2: string,umpire3:string){
    return (formGroup: FormGroup) => {
        const u1 = formGroup.controls[umpire1];
        const u2 = formGroup.controls[umpire2];
        const u3 = formGroup.controls[umpire3];
        
        if (u2.errors && !u2.errors.confirmedValidator) {
            return;
        }

        if (u3.errors && !u3.errors.confirmedValidator) {
            return;
        }

        if (u1.errors && !u1.errors.confirmedValidator) {
            return;
        }

        if ((u1.value == u2.value)||(u2.value == u1.value)||(u2.value == u3.value)||(u3.value == u2.value)||(u1.value == u3.value)||(u3.value == u1.value)) {
            u1.setErrors({ confirmedValidator: true });
            u2.setErrors({ confirmedValidator: true });    
            u3.setErrors({ confirmedValidator: true });                
        } else {
            u1.setErrors(null);
            u2.setErrors(null);
            u3.setErrors(null);
        }
    }
}