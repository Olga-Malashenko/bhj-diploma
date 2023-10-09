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
    User.register(data);
    App.setState('user-logged'); // после успешной регистрации
    //Modal.onClose(App.getForm('register')); //  не поняла. напр, как указать окно и что в параметр
    App.getForm('register').close();
  }
}