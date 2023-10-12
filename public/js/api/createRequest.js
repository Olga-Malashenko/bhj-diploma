/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    const url = options.url;
    //console.log(`url  ${url}`);
    const formData = new FormData();
    //const err = 'Ошибка'; // временно
    xhr.addEventListener('load', () => {
       const response = xhr.response;
        const err = response.error;
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
        console.log(777)
        console.log(options.data)
        const currentObject = options.data;  
        for (let property in currentObject) {
            console.log(property, currentObject[property]);
            //console.log(options[item]);
            formData.append(property, currentObject[property]);
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
