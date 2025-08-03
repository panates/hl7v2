import {
  Hl7Component,
  type Hl7ComponentSerializeOptions,
} from './hl7-component.js';
import type { HL7Field } from './hl7-field.js';
import type { HL7Message } from './hl7-message.js';
import type { HL7Segment } from './hl7-segment.js';

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

  get value(): any {
    return this._components[0]?.value;
  }

  set value(value: any) {
    this.component(1)!.value = value;
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

  component(position: number = 1): Hl7Component {
    if (position < 1) throw new Error('Invalid sub-component position');
    let component = this._components[position - 1];
    if (!component) {
      let fDef = this.field.typeDef.fields?.[String(position)];
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

  valueOf(component?: number, subComponent?: number): any {
    return this._components[(component || 1) - 1]?.valueOf(subComponent);
  }

  fromHL7String(value: string) {
    this._components = [];
    const items = value.split(this.field.message.componentSeparator);
    for (const s of items) {
      this.component(this._components.length + 1)!.fromHL7String(s);
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

export interface HL7RepetitionSerializeOptions
  extends Hl7ComponentSerializeOptions {}
