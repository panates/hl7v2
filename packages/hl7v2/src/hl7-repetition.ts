import {
  Hl7Component,
  Hl7ComponentParseOptions,
  type Hl7ComponentSerializeOptions,
} from './hl7-component.js';
import type { HL7Field } from './hl7-field.js';
import type { HL7Message } from './hl7-message.js';
import type { HL7Segment } from './hl7-segment.js';
import { Hl7SubComponent } from './hl7-sub-component.js';

export class HL7Repetition {
  declare protected _components: Hl7Component[];
  readonly field: HL7Field;

  constructor(field: HL7Field) {
    this.field = field;
    this.clear();
  }

  get message(): HL7Message {
    return this.field.message;
  }

  get segment(): HL7Segment {
    return this.field.segment;
  }

  get components(): Hl7Component[] | undefined {
    return this._components;
  }

  get index(): number {
    return this.field.repetitions.indexOf(this);
  }

  clear() {
    this._components = [];
  }

  isEmpty(): boolean {
    for (const component of this._components) {
      if (!component.isEmpty()) return false;
    }
    return true;
  }

  /**
   *
   */
  component(position: number = 1): Hl7Component {
    if (position < 1) throw new Error('Invalid component position');
    let component = this._components[position - 1];
    if (!component) {
      let fDef = this.field.typeDef.fields?.[String(position - 1)];
      if (!fDef) {
        if (position === 1) fDef = this.field.definition;
        else
          fDef = {
            type: 'ST',
          };
      }
      component = new Hl7Component(this, position, fDef);
      this._components[position - 1] = component;
    }
    return component;
  }

  subComponent(componentPos: number, subComponentPos: number): Hl7SubComponent {
    return this.comp(componentPos).subcomp(subComponentPos);
  }

  /**
   * Alias of .component()
   */
  comp(position: number): Hl7Component {
    return this.component(position);
  }

  /**
   * Alias of .subComponent()
   */
  subcomp(componentPos: number, subComponentPos: number): Hl7SubComponent {
    return this.subComponent(componentPos, subComponentPos);
  }

  getValue(component?: number, subComponent?: number): any {
    return this._components[(component || 1) - 1]?.getValue(subComponent);
  }

  setValue(value: any, component?: number, subComponent?: number): this {
    this.comp(component ?? 1).setValue(value, subComponent);
    return this;
  }

  fromHL7String(value: string, options?: HL7RepetitionParseOptions) {
    this._components = [];
    const items = value.split(this.field.message.componentSeparator);
    for (const s of items) {
      this.comp(this._components.length + 1)!.fromHL7String(s, options);
    }
  }

  toHL7String(options?: HL7RepetitionSerializeOptions) {
    const { componentSeparator } = this.segment.message;
    let str = this._components
      .map(component => component.toHL7String(options))
      .join(componentSeparator);
    while (str.endsWith(componentSeparator))
      str = str.substring(0, str.length - 1);
    return str;
  }

  [Symbol.toStringTag]() {
    return this.toHL7String();
  }
}

export interface HL7RepetitionParseOptions extends Hl7ComponentParseOptions {}

export interface HL7RepetitionSerializeOptions extends Hl7ComponentSerializeOptions {}
