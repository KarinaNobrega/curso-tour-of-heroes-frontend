import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = this.fb.group({
    email: [{value: 'tour@f.heroes', disabled: true}, //ficará um e-mail fixo, para exemplo.
     [Validators.email, Validators.required],
   ],
    password: ['', [Validators.required, Validators.minLength(10)]], //senha de tamanho 10 caracter.
});

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  onSubmit(): void{
    if (this.form.valid) { //formulário válido
      this.authService.login(this.form.value); //o value é email e senha.
    }
  }
}
