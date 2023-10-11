/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    const url = options.url;
    console.log(`url  ${url}`);
    const formData = new FormData();
    const err = 'Ошибка'; // временно
    xhr.addEventListener('load', () => {
        const response = xhr.response;
        console.log(response);
        if (response.success) {
            options.callback(err,response);
            console.log('ok, что вряд ли'); // временно
        } else {
            console.log(err);
        }
    });
    if (this.method === 'GET') {
        for (let item in options.data) {
            url += item + '=' + options.data[item];
            console.log(`накапливание адреса ${url}`); // временно
        }
    } else {    
        for (let item in options.data) {
            formData.append(item, options[item]);
        }
    }
    try {
        xhr.open(options.method, url);
        xhr.send(formData);
    }
    catch (error) {
        console.log(error);
    }
};
