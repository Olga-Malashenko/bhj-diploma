/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
class AsyncForm {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor(element) {
    if (!element) {
      throw new Error('Нет элемента');
    }
    this.element = element;
    //console.log(this.element + ' : ' + this.element.id);
    this.registerEvents();
  }

  /**
   * Необходимо запретить отправку формы и в момент отправки
   * вызывает метод submit()
   * */
  registerEvents() {
    const forms = document.querySelectorAll('.form');
    forms.forEach(item => {
      item.addEventListener('submit', (e) => {
        //if (response.success) {
          e.preventDefault();
          this.submit();
        //} else {
         // console.log('ошибка: нет ответа'); // пока так
       // }
      })
    })
  }

  /**
   * Преобразует данные формы в объект вида
   * {
   *  'название поля формы 1': 'значение поля формы 1',
   *  'название поля формы 2': 'значение поля формы 2'
   * }
   * */
  getData() {
    //console.log(`вывод из гетДата асунка ${this.element.id}`);
    const data = {};
    const dataFromForm = this.element.querySelectorAll('input');
    //console.log(`найденные инпуты ${dataFromForm}`);
    
    dataFromForm.forEach((item) => {
      let key = item.name;
      console.log(key);
      data[key] = item.value;
      console.log(item.value);
    })

    console.log(`data  ${data}`);
    return data;
  }

  onSubmit(options) {
    //console.log(`options : ${options}`);
  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {
    const dataX = this.getData();
    console.log(`dataX ${dataX}`);
    this.onSubmit(dataX);
  }
}