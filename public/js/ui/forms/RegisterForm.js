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
    console.log(data);
    User.register(data, (err, response) => {
      if (response.success) {
        App.setState('user-logged');
        const registerModal = App.getModal('register');
      const input = document.querySelector('#register-form');
      input.reset();
      registerModal.close();
        //const loginModal = App.getModal('login');
        //loginModal.reset();
        //loginModal.close();
        //this.unsetCurrent(response.user);
        //console.log('logout +')
        //App.setState('init');
      } else {
        console.log(err);
      }
    });
    //if (response.saccess) {
      //App.setState('user-logged');
      //const registerModal = App.getModal('register');
      //const input = document.querySelector('#register-form');
      //input.reset();
      //registerModal.close();
    //}
  }
}