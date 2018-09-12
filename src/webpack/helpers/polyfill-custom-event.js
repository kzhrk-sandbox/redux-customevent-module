let CustomEvent;

if (typeof window !== 'undefined' && typeof window.CustomEvent !== 'function') {
  CustomEvent = function(
    event,
    params = { bubbles: false, cancelable: false, detail: undefined }
  ) {
    let evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;
} else {
  CustomEvent = window.CustomEvent;
}

export default CustomEvent;
