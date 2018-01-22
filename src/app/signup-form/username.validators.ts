import { AbstractControl, ValidationErrors } from '@angular/forms';

// custom validator
export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
    }

    static shouldBeUnique (control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value == 'mosh') {
                    resolve({ shouldBeUnique: true });
                } else {
                    reject(null);
                }
            }, 2000);
        });
    }

}
