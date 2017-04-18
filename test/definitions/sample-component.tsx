import * as skate from "skatejs";
import { Component, prop } from 'skatejs';

// @TODO this override is needed because of https://github.com/Microsoft/TypeScript/pull/12488 will be fixed in TS 2.2
(window as any).__extends = function(d: any, b: any) {
  Object.setPrototypeOf(d, b);
  var __: any = function() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


export type NumLiteral = 123 | 124 | 125;
export type StrLiteral = 'one' | 'two' | 'three';
export type SkateType = { trucks: string, deck: string }
export interface CountUpProps {
  count?: number;
  num?: number,
  numLiteral?: NumLiteral,
  str?: string,
  strLiteral?: StrLiteral,
  bool?: boolean,
  arr?: string[],
  obj?: SkateType,
}

export class CountUpComponent extends skate.Component<CountUpProps> {
  static get is() { return 'x-countup' }
  static get props(): skate.ComponentProps<CountUpComponent, CountUpProps> {
    return {
      count: {
        ...skate.prop.number, ...{
          attribute: true,
          default(elem: HTMLElement, data: Object) {
            return 7;
          },
        }
      },
      num: skate.prop.number,
      numLiteral: skate.prop.number,
      str: skate.prop.string,
      strLiteral: skate.prop.string,
      bool: skate.prop.boolean,
      arr: skate.prop.array,
      obj: skate.prop.object,
    }
  }

  count: number;

  click() {
    this.count += 1;
  }

  renderCallback(): any {
    return (
      <div>
        <CounterOutput count={this.count} />
        <Button onClick={e => this.click()}>Count up</Button>
      </div>
    );
  }
}
customElements.define(CountUpComponent.is, CountUpComponent);

type SkateParkProps = { year: number, halfPipe: boolean }
class SkatePark extends Component<SkateParkProps>{
  static get is() { return 'my-skate-park' }
  static get props(): skate.ComponentProps<SkatePark, SkateParkProps> {
    return {
      year: prop.number,
      halfPipe: prop.boolean,
    }
  }
  renderCallback({ halfPipe, year }: SkateParkProps) {
    const halfPipeInfo = <span>{halfPipe ? 'has' : 'doesnt have'}</span>;
    return (
      <div>
        <p>Skate park exists since {year} and it {halfPipe} Half-Pipe</p>
      </div>
    )
  }
}
customElements.define(SkatePark.is, SkatePark);
/*
customElements.define("x-app", class extends skate.Component<{}> {
  renderCallback() {
    return (
      <div>
        <h1>app</h1>
        <CountUpComponent count={100} obj={{ trucks: 'Independent', deck: 'ZERO' }}></CountUpComponent>
      </div>
    );
  }
});
*/
export type ElmProps = { str: string; arr: any[]; };
class Elem extends skate.Component<ElmProps> {
  static get props(): skate.ComponentProps<Elem, ElmProps> {
    return {
      str: skate.prop.string,
      arr: skate.prop.array
    }
  }

  str: string;
  arr: string[];

  renderCallback() {
    return skate.h('div', {}, 'testing');
  }
}


type ButtonProps = { onClick: (e: MouseEvent) => void };
const Button: skate.SFC<ButtonProps> = ({ onClick }, children: any) => (
  <button onClick={onClick}>{children}</button>
);

type CounterOutputProps = { count: number };
const CounterOutput: skate.SFC<CounterOutputProps> = (props) => (
  <p>Count: <span>{props.count}</span></p>
);
