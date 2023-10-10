/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.register(data, callback); // что за колбэк??! видимо, он должен отдавать ответ
    if (response.saccess) {
      App.setState('user-logged');
      App.getForm('register').close();
    }
  }
}