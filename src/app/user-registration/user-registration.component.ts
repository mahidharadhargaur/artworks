import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  Auth,
  authState,
  signInWithEmailAndPassword,
  User,
} from '@angular/fire/auth';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth-state/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit, OnDestroy {
  public registerForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  ngOnDestroy(): void {}

  register() {
    const { email, password } = this.registerForm.value;
    this.authService.register(email, password).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['']);
      },
    });
  }
}


