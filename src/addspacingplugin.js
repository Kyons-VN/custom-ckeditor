import Command from '@ckeditor/ckeditor5-core/src/command';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { ClickObserver } from '@ckeditor/ckeditor5-engine';
import { ButtonView } from '@ckeditor/ckeditor5-ui';

const SPACE_ABOVE_CLASSNAME = 'space-above';
class AddSpacingCommand extends Command {}

export default class AddSpacingPlugin extends Plugin {
  _registerSchema(editor) {
    editor.model.schema.extend('$block', {
      allowAttributes: 'classList',
    });
  }
  _registerCommand(editor) {
    editor.commands.add('addSpacingCommand', new AddSpacingCommand(editor));
    const addSpacingCommand = editor.commands.get('addSpacingCommand');
    this.listenTo(editor.commands.get('addSpacingCommand'), 'execute', (event, values) => {
      values[1].set('isOn', values[0]);
    });
    return addSpacingCommand;
  }
  init() {
    // eslint-disable-next-line no-undef, no-unused-vars
    const console = window.console;
    const editor = this.editor;
    this._registerSchema(editor);
    const addSpacingCommand = this._registerCommand(editor);

    // The button will be an instance of ButtonView.
    const button = new ButtonView();
    editor.ui.componentFactory.add('addspacing', () => {
      button.set({
        label: 'Add Space Above',
        withText: true,
      });

      // Execute a callback function when the button is clicked
      button.on('execute', () => {
        editor.model.change((writer) => {
          const selection = editor.model.document.selection;
          const element = Array.from(selection.getSelectedBlocks())[0];
          const classList = element.getAttribute('classList') != undefined ? element.getAttribute('classList') : '';
          if (this.hasSpacing(element)) {
            const newClassList = classList
              .replace(`${SPACE_ABOVE_CLASSNAME} `, '')
              .replace(` ${SPACE_ABOVE_CLASSNAME}`, '')
              .replace(SPACE_ABOVE_CLASSNAME, '');
            if (newClassList == '') {
              writer.removeAttribute('classList', element);
            } else {
              writer.setAttribute('classList', newClassList, element);
            }
          } else {
            writer.setAttribute('classList', `${classList == '' ? '' : `${classList} `}space-above`, element);
          }
        });
      });
      const conversion = editor.conversion;

      conversion.for('downcast').attributeToAttribute({
        model: 'classList',
        view: 'class',
      });
      conversion.for('upcast').attributeToAttribute({
        view: 'class',
        model: 'classList',
      });

      return button;
    });
    const editingView = editor.editing.view;
    editingView.addObserver(ClickObserver);

    const viewDocument = editor.editing.view.document;
    this.listenTo(viewDocument, 'click', () => {
      const selection = editor.model.document.selection;
      const element = Array.from(selection.getSelectedBlocks())[0];

      addSpacingCommand.execute(this.hasSpacing(element), button);
    });
  }

  hasSpacing(element) {
    const classList = element.getAttribute('classList') != undefined ? element.getAttribute('classList') : '';
    return classList.includes(SPACE_ABOVE_CLASSNAME);
  }
}
