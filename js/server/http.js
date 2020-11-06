'use strict';

(() => {
  const GET = `GET`;
  const POST = `POST`;
  const GET_URL = `https://21.javascript.pages.academy/keksobooking/data`;
  const POST_URL = `https://21.javascript.pages.academy/keksobooking`;
  const StatusCode = {
    OK: 200
  };
  const TIMEOUT_IN_MS = 10000;

  window.http = (onSuccess, onError, data) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;
    const method = data ? POST : GET;

    if (method === POST) {
      xhr.addEventListener(`load`, () => {
        onSuccess(xhr.response);
      });

      xhr.open(`POST`, POST_URL);
      xhr.send(data);
    } else {
      xhr.addEventListener(`load`, () => {
        if (xhr.status === StatusCode.OK) {
          onSuccess(xhr.response);
        } else {
          onError(`Статус ответа: ` + xhr.status + ` ` + xhr.statusText);
        }
      });
      xhr.addEventListener(`error`, () => {
        onError(`Произошла ошибка соединения`);
      });
      xhr.addEventListener(`timeout`, () => {
        onError(`Запрос не успел выполниться за ` + xhr.timeout + `мс`);
      });

      xhr.timeout = TIMEOUT_IN_MS;

      xhr.open(`GET`, GET_URL);
      xhr.send();
    }
  };


})();
