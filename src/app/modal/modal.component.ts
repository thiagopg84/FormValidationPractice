import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() toggleStatus;

  formularioModal = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', Validators.required],
    cpf: ['', [Validators.required]]
    // cpf validator
    // cpf: ['', [Validators.required, ModalComponent.isValidCpf()]]
  })
 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  cpfMask: string = '000.000.000-00';
  telMask: string = '(00) 0000-0000';
  
  entrar() {
    console.warn(this.formularioModal.value)
    if (this.formularioModal.status == 'VALID') {
      console.log('Tudo certo')
    } else {
      console.log('errado')
    }
  }

  static isValidCpf() {
    return (control: AbstractControl): Validators => {
      const cpf = control.value;
      if (cpf) {
        let numbers, digits, sum, i, result, equalDigits;
        equalDigits = 1;
        if (cpf.length < 11) {
         return null;
        }

        for (i = 0; i < cpf.length - 1; i++) {
          if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
            equalDigits = 0;
            break;
          }
        }

        if (!equalDigits) {
          numbers = cpf.substring(0, 9);
          digits = cpf.substring(9);
          sum = 0;
          for (i = 10; i > 1; i--) {
            sum += numbers.charAt(10 - i) * i;
          }

          result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

          if (result !== Number(digits.charAt(0))) {
            return { cpfNotValid: true };
          }
          numbers = cpf.substring(0, 10);
          sum = 0;

          for (i = 11; i > 1; i--) {
            sum += numbers.charAt(11 - i) * i;
          }
          result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

          if (result !== Number(digits.charAt(1))) {
            return { cpfNotValid: true };
          }
          return null;
        } else {
          return { cpfNotValid: true };
        }
      }
    return null;
  };
}



}
