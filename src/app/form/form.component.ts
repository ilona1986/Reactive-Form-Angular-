import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../shared/user";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm!: FormGroup
  roles: string[] = ['Гость', 'Модератор', 'Администратор']
  user: User = new User(1, null, null, null, null, null)

  formErrors: any = {
    name: '',
    password: '',
    email: '',
    age: '',
    role: ''
  }

  validationMessages: any = {
    name: {
      required: 'Имя обязательно.',
      minlength: 'Имя должно содержать не менеее 2 символов',
      maxlength: 'Имя должно содержать не более 15 символов'
    },
    password: {
      required: 'Пароль обязателен.',
      minlength: 'Пароль должен содержать не менеее 7 символов',
      maxlength: 'Пароль должен содержать не более 25 символов'
    },
    email: {
      required: 'Email обязателен.',
      pattern: 'Неправильный форамат Email.'
    },
    age: {
      required: 'Возраст обязателен.',
      pattern: 'Возраст должен быть целочисленным числом.',
    },
    role: {
      required: 'Обязательное поле.'
    }
  }


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm()
  }

  onSubmit(): void {
    console.log(this.userForm.valid);
    console.log(this.userForm.value);
  }

  private buildForm() {
    this.userForm = this.formBuilder.group({
      name: [this.user.name, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      password: [this.user.password, [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
      email: [this.user.email, [Validators.required, Validators.pattern(/^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})$/)]],
      age: [this.user.age, [Validators.required, Validators.pattern(/^\d+/)]],
      role: [this.user.role, [Validators.required]]
    })

    this.userForm.valueChanges.subscribe(() => this.onValueChanged())
  }


  private onValueChanged(): void {
    const form = this.userForm

    Object.keys(this.formErrors).forEach(field => {
      this.formErrors[field] = '';

      const control = form.get(field);

      if (control && control.dirty && control.invalid) {
        const message = this.validationMessages[field];

        Object.keys(control.errors as any).forEach(key => this.formErrors[field] += message[key] + ' ')
      }
    })
  }
}

