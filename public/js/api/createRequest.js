/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    const url = options.url;
    console.log(`url из параметра ${options.url}`);
    console.log(`url из запроса ${url}`);
    const formData = new FormData();
    const response = xhr.response;
        const err = 'Ошибка';
    xhr.addEventListener('load', () => {
        // вызываем callback
        // передаем объект ошибки/ответ от сервера xhr.response
        options.callback(err, response);
        
        if (response.success) {
            // ? куда что передать..."в параметр колбека" ..?
            console.log('ok, что вряд ли');
        } else {
            console.log(err);
        }
    })
    if (this.method === 'GET') {
        for (let item in options.data) {
            url += item + '=' + options.data[item];
            console.log(`накапливание адреса ${url}`);
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
