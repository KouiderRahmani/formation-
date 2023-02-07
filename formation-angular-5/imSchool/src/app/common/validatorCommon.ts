import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ValidatorCommon {
   static cannotContainNumber(control : AbstractControl ) : ValidationErrors | null{

          
           if( ((control.value as string ).match(/[0-9]/))?.length  ){
             return {
                cannotContainNumber :true
             }
           }
         
        return  null;
       }

}