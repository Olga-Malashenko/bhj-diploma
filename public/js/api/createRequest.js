/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
        // логика обработки запроса через параметры
        if (this.method === 'GET') {
            xhr.open(options.method, ); // прописать с $ эту строку, через контент полей
            xhr.send();
        } else {
            const formData = new FormData();
            formData.append('name', /*textContent*/);
            formData.append('mail', );
            formData.append('password', );
            xhr.open(options.method, options.url);
            xhr.swnd(formData);
        }
        xhr.responseType = 'json';
        //callback
    })
    
};
