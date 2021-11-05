export const FORM_LABELS = {
  name: 'Логин',
  password: 'Пароль',
  email: 'Email',
  age: 'Возраст',
  site: 'Сайт',
  role: 'Роль'
}

export const FORM_PLACEHOLDERS = {
  name: 'Введите логин...',
  password: 'Введите пароль...',
  email: 'Введите email...',
  age: 'Введите ваш возраст...',
  site: 'Введите адрес сайта...',
  role: 'Выберите роль из списка...'
}

export const FORM_SUCCESS = {
  name: 'Принято!',
  password: 'Принято!',
  email: 'Принято!',
  age: 'Принято!',
  site: 'Принято!',
  role: 'Принято!'
}

export const FORM_ERRORS = {
  name: '',
  password: '',
  email: '',
  age: '',
  site: '',
  role: ''
}

export const FORM_VALIDATION_MESSAGES = {
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
    emailValidator: 'Неправильный форамат Email.'
  },
  age: {
    required: 'Возраст обязателен.',
    rangeValidator: 'Возраст должен быть числом в диапазоне  7...122.',
    minRange: 'Возраст должен быть больше 7 лет.',
    maxRange: 'Возраст должен быть не больше 122 лет.'
  },
  site: {
    required: 'Сайт обязателен.',
    urlNotAllowed: 'Неправильный формат адреса сайта',
    pending: 'Выполняется проверка...',
  },
  role: {
    required: 'Обязательное поле.'
  }
}

export const FORM_ROLES = ['Гость', 'Модератор', 'Администратор'];
