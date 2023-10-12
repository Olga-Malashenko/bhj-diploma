/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const btnSidebar = document.querySelector('.sidebar-toggle');
    const body = document.querySelector('body');
    btnSidebar.addEventListener('click', () => {
      body.classList.toggle('sidebar-open');
      body.classList.toggle('sidebar-collapse');
    })
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const registerBtn = document.querySelector('.menu-item_register');
    const loginBtn = document.querySelector('.menu-item_login');
    const logoutBtn = document.querySelector('.menu-item_logout');
    const loginModal = App.getModal('login');
    const registerModal = App.getModal('register');

    registerBtn.addEventListener('click', (e)=> {
      e.preventDefault();
      registerModal.open();
    })

    loginBtn.addEventListener('click', (e)=> {
      e.preventDefault();
      loginModal.open();
    })

    logoutBtn.addEventListener('click', (e)=> {
      e.preventDefault();
      User.logout((err, response) => {
        if (response.success) {
          //this.unsetCurrent(response.user);
          //console.log('logout +')
          App.setState('init');
        } else {
          console.log(err);
        }
      } );
      //if (response.success) {
        //App.setState('init');
      //}
    })

  }
}