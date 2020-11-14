'use strict';

(() => {
  const PRIMARY_MOUSE_BUTTON = 0;
  const mapPinMove = document.querySelector(`.map__pin--main`);
  const LIMIT_Y_DOWN = 565;
  const LIMIT_Y_TOP = 65;

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
        const currentY = mapPinMove.offsetTop - shift.y;
        if (currentY < LIMIT_Y_TOP) {
          mapPinMove.style.top = LIMIT_Y_TOP + `px`;
        } else if (currentY < LIMIT_Y_DOWN) {
          mapPinMove.style.top = (mapPinMove.offsetTop - shift.y) + `px`;
        } else {
          mapPinMove.style.top = LIMIT_Y_DOWN + `px`;
        }
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
