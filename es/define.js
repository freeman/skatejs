import { customElements } from './util';

export function define(Ctor) {
  var is = Ctor.is;

  if (!customElements.get(is)) {
    customElements.define(is, Ctor);
  }
  return Ctor;
}