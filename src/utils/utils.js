export const calculatePosition = element => {
  var rect = element.getBoundingClientRect();
  var root = document.documentElement;
  var body = document.body;

  var scrollTop = window.pageYOffset || root.scrollTop || body.scrollTop || 0;
  var scrollLeft =
    window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

  var clientTop = root.clientTop || body.clientTop || 0;
  var clientLeft = root.clientLeft || body.clientLeft || 0;

  return {
    top: Math.round(rect.top + scrollTop - clientTop),
    left: Math.round(rect.left + scrollLeft - clientLeft),
    height: rect.height,
    width: rect.width,
  };
};
