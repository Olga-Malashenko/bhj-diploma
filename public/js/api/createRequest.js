/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    const url = options.url;
    const formData = new FormData();

    xhr.addEventListener('load', () => {
        const response = xhr.response;
        const err = response.error;
        if (response.success) {
            options.callback(err, response);
        } else {
            console.log(err);
        }
    });
    if (this.method === 'GET') {
        for (let item in options.data) {
            url += item + '=' + options.data[item];
        }
    } else {
        console.log(777, options.data)
        for (let property in options.data) {
            formData.append(property, options.data[property]);
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
