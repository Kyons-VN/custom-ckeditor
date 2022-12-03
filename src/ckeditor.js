/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js';
import MathType from '@wiris/mathtype-ckeditor5';
import CustomColorPlugin from './customcolorplugin';

const customColorPalette = [
  {
    color: 'hsl(218, 35%, 26%)',
    label: 'Primary Blue',
  },
  {
    color: 'hsl(213, 50%, 38%)',
    label: 'Secondary Blue',
  },
  {
    color: 'hsl(202, 100%, 51%)',
    label: 'Light Blue 1',
  },
  {
    color: 'hsl(202, 100%, 58%)',
    label: 'Light Blue 2',
  },
  {
    color: 'hsl(202, 99%, 68%)',
    label: 'Light Blue 3',
  },
  {
    color: 'hsl(202, 91%, 79%)',
    label: 'Light Blue 4',
  },
  {
    color: 'hsl(201, 100%, 86%)',
    label: 'Light Blue 5',
  },
  {
    color: 'hsl(202, 100%, 91%)',
    label: 'Light Blue 6',
  },
  {
    color: 'hsl(0, 0%, 100%)',
    label: 'White',
  },
  {
    color: 'hsl(0, 0%, 0%)',
    label: 'Black',
  },
];

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  Autoformat,
  BlockQuote,
  Bold,
  CloudServices,
  CustomColorPlugin,
  Essentials,
  FontColor,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  Italic,
  Underline,
  Link,
  List,
  ListProperties,
  MathType,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SimpleUploadAdapter,
  SourceEditing,
  SpecialCharacters,
  SpecialCharactersEssentials,
  SpecialCharactersExtended,
  Table,
  TableCellProperties,
  TableProperties,
  TableToolbar,
];

// Editor configuration.
Editor.defaultConfig = {
  toolbar: {
    items: [
      'sourceEditing',
      '|',
      'heading',
      '|',
      'fontColor',
      '|',
      'bold',
      'italic',
      'underline',
      'link',
      'removeFormat',
      'bulletedList',
      'numberedList',
      'outdent',
      'indent',
      '|',
      'imageUpload',
      'blockQuote',
      'insertTable',
      'mediaEmbed',
      'undo',
      'redo',
      'MathType',
      'specialCharacters',
    ],
  },
  language: 'en',
  image: {
    toolbar: ['imageTextAlternative', 'imageStyle:inline', 'imageStyle:block', 'imageStyle:side'],
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties'],
    tableProperties: {
      borderColors: customColorPalette,
      backgroundColors: customColorPalette,
    },
    tableCellProperties: {
      borderColors: customColorPalette,
      backgroundColors: customColorPalette,
    },
  },
  heading: {
    options: [
      {
        model: 'paragraph',
        title: 'Paragraph',
        class: 'ck-heading_paragraph',
      },
      {
        model: 'h6',
        view: 'h6',
        title: 'Heading 6',
        class: 'ck-heading_heading1',
      },
      {
        model: 'heading7',
        view: 'h7',
        title: 'Heading 7',
        class: 'ck-heading_heading7',
      },
      {
        model: 'heading8',
        view: 'h8',
        title: 'Heading 8',
        class: 'ck-heading_heading8',
      },
      {
        model: 'note',
        view: 'note',
        title: 'Note',
        class: 'ck-heading_note',
      },
      {
        model: 'customcaption',
        view: 'customcaption',
        title: 'Caption',
        class: 'ck-heading_customcaption',
      },
    ],
  },
  fontColor: {
    colors: customColorPalette,
  },
  customFontColor: {
    'hsl(218, 35%, 26%)': 'text-primaryBlue',
    'hsl(213, 50%, 38%)': 'text-secondaryBlue',
    'hsl(202, 100%, 51%)': 'text-lightBlue1',
    'hsl(202, 100%, 58%)': 'text-lightBlue2',
    'hsl(202, 99%, 68%)': 'text-lightBlue3',
    'hsl(202, 91%, 79%)': 'text-lightBlue4',
    'hsl(201, 100%, 86%)': 'text-lightBlue5',
    'hsl(202, 100%, 91%)': 'text-lightBlue6',
    'hsl(0, 0%, 100%)': 'text-white',
    'hsl(0, 0%, 0%)': 'text-black',
  },
  list: {
    properties: {
      styles: true,
      startIndex: true,
    },
  },
};

function SpecialCharactersExtended(editor) {
  editor.plugins.get('SpecialCharacters').addItems('Mathematical', [
    { title: 'alpha', character: 'α' },
    { title: 'beta', character: 'β' },
    { title: 'gamma', character: 'γ' },
    { title: 'Pi', character: 'π' },
    { title: 'Omega', character: 'Ω' },
  ]);
}

export default Editor;
