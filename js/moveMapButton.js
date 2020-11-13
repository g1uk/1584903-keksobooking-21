'use strict';

(() => {
  const PRIMARY_MOUSE_BUTTON = 0;
  const mapPinMove = document.querySelector(`.map__pin--main`);

  mapPinMove.addEventListener(`mousedown`, (evt) => {
    if (evt.button === PRIMARY_MOUSE_BUTTON) {
      const {clientX: downClientX, clientY: downClientY} = evt;
      const startCoords = {
        x: downClientX,
        y: downClientY
      };
      evt.preventDefault();
      let dragged = false;

      const onMouseMove = (moveEvt) => {
        const {clientX, clientY} = moveEvt;
        const shift = {
          x: startCoords.x - clientX,
          y: startCoords.y - clientY
        };

        moveEvt.preventDefault();
        dragged = true;
        startCoords.x = clientX;
        startCoords.y = clientY;
        mapPinMove.style.top = (mapPinMove.offsetTop - shift.y) + `px`;
        mapPinMove.style.left = (mapPinMove.offsetLeft - shift.x) + `px`;
        window.form.completion();
      };

      const onMouseUp = (upEvt) => {
        upEvt.preventDefault();
        document.removeEventListener(`mousemove`, onMouseMove);
        document.removeEventListener(`mouseup`, onMouseUp);

        if (dragged) {
          const onClickPreventDefault = (clickEvt) => {
            clickEvt.preventDefault();
            mapPinMove.removeEventListener(`click`, onClickPreventDefault);
          };
          mapPinMove.addEventListener(`click`, onClickPreventDefault);
        }
      };

      document.addEventListener(`mousemove`, onMouseMove);
      document.addEventListener(`mouseup`, onMouseUp);
    }
  });
})();
