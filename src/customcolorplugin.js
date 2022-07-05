import Font from '@ckeditor/ckeditor5-font/src/font';
import { Plugin } from 'ckeditor5/src/core';

/* global window */

export const CUSTOM_FONT_COLOR = 'customFontColor';

export default class CustomColorPlugin extends Plugin {
  constructor(editor) {
    super(editor);

    editor.config.define(CUSTOM_FONT_COLOR, {
      'hsl(218, 35%, 26%)': 'text-primaryBlue',
      'hsl(213, 50%, 38%)': 'text-secondaryBlue',
      'hsl(202, 100%, 51%)': 'text-lightBlue1',
      'hsl(202, 100%, 58%)': 'text-lightBlue2',
      'hsl(202, 99%, 68%)': 'text-lightBlue3',
      'hsl(202, 91%, 79%)': 'text-lightBlue4',
      'hsl(201, 100%, 86%)': 'text-lightBlue5',
      'hsl(202, 100%, 91%)': 'text-lightBlue6',
    });
  }
  static get pluginName() {
    return 'CustomColorPlugin';
  }

  static get requires() {
    return [Font];
  }

  init() {
    const editor = this.editor;

    ['fontColor', 'fontBackgroundColor'].forEach((key) => {
      let attr = 'cfc';
      if (key === 'fontColor') {
        attr = 'cfc';
      } else if (key === 'fontBackgroundColor') {
        attr = 'cfbg';
      }
      // window.console.log(attr);
      editor.conversion.for('upcast').elementToAttribute({
        view: {
          name: 'span',
          attributes: `data-${attr}`,
        },
        model: {
          key,
          value: (el) => {
            const color = el.getAttribute(`data-${attr}`);
            return color;
          },
        },
        converterPriority: 'high',
      });

      editor.conversion.for('downcast').attributeToElement({
        model: {
          key,
        },
        view: (code, api) => {
          if (code == null) {
            return;
          }
          try {
            const { writer } = api;
            return writer.createAttributeElement('span', {
              [`data-${attr}`]: code,
              class: editor.config.get('customFontColor')[code],
            });
          } catch (e) {
            window.console.log(e);
            return null;
          }
        },
        converterPriority: 'high',
      });
    });
  }
}
