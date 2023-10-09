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
        if (response.success) {
          e.preventDefault();
          this.submit();
        } else {
          console.log('ошибка: нет ответа'); // пока так
        }
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
    console.log(`вывод из гетДата асунка ${this.element.id}`);
    const data = {};
    /*const dataFromForm = this.element.querySelectorAll('.form-control');
    
    console.log(`перед ${data} и найденное ${dataFromForm}`);
    for (let item of dataFromForm) {
      console.log(`в цикле ${dataFromForm[item]}`);
      let key = dataFromForm[item].name;
      data[key] = dataFromForm[item].value;
      console.log(`добавляется ${data}`);
    }*/

    const formData = new FormData(this.element);
    const pairs = formData.entries();
    console.log(pairs);
    for (let item of pairs) {
      data.item[0] = item[1];
      console.log(`добавляется ${data}`);
    }
    console.log(`в итоге getData ${data}`);
    return data;
  }

  onSubmit(options) {

  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {
    this.onSubmit(this.getData());
  }
}