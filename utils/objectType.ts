export function isEmptyObject(variable) {
  return Object.prototype.toString.call(variable) === '[object Object]' && Object.keys(variable).length === 0;
}

export function isNull(variable) {
  return Object.prototype.toString.call(variable) === '[object Null]';
}

export function isUndefined(variable) {
  return Object.prototype.toString.call(variable) === '[object Undefined]';
}
