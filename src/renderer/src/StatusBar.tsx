import { type Component, Index, type JSX } from 'solid-js';
import {
  type EOL,
  type Encoding,
  type Indent,
  type Lang,
  type ThemeSource,
  encodingOptions,
  eolOptions,
  indentOptions,
  langOptions,
  themeSourceOptions,
} from './App.jsx';

type Props = {
  indent: Indent;
  eol: EOL;
  lang: Lang;
  encoding: Encoding;
  themeSource: ThemeSource;

  onIndentChange: JSX.EventHandler<HTMLSelectElement, Event>;
  onEOLChange: JSX.EventHandler<HTMLSelectElement, Event>;
  onLangChange: JSX.EventHandler<HTMLSelectElement, Event>;
  onEncodingChange: JSX.EventHandler<HTMLSelectElement, Event>;
  onThemeSourceChange: JSX.EventHandler<HTMLSelectElement, Event>;
};

const StatusBar: Component<Props> = (props) => {
  return (
    <div class='statusbar'>
      <div class='select'>
        <select class='large' onChange={props.onLangChange}>
          <Index each={Object.entries(langOptions)}>
            {(e) => (
              <option value={e()[0]} selected={e()[0] === props.lang}>
                {e()[1]}
              </option>
            )}
          </Index>
        </select>
      </div>
      <div class='select'>
        <select class='large' onChange={props.onThemeSourceChange}>
          <Index each={Object.entries(themeSourceOptions)}>
            {(e) => (
              <option value={e()[0]} selected={e()[0] === props.themeSource}>
                {e()[1]}
              </option>
            )}
          </Index>
        </select>
      </div>
      <div class='space' />
      <div class='select'>
        Indent:
        <select class='small' onChange={props.onIndentChange}>
          <Index each={indentOptions}>
            {(e) => (
              <option value={e()} selected={e() === props.indent}>
                {e()}
              </option>
            )}
          </Index>
        </select>
      </div>
      <div class='select'>
        <select class='large' onChange={props.onEncodingChange}>
          <Index each={Object.entries(encodingOptions)}>
            {(e) => (
              <option value={e()[0]} selected={e()[0] === props.encoding}>
                {e()[1]}
              </option>
            )}
          </Index>
        </select>
      </div>
      <div class='select'>
        <select class='medium' onChange={props.onEOLChange}>
          <Index each={Object.entries(eolOptions)}>
            {(e) => (
              <option value={e()[0]} selected={e()[0] === props.eol}>
                {e()[1][0]}
              </option>
            )}
          </Index>
        </select>
      </div>
    </div>
  );
};

export default StatusBar;
