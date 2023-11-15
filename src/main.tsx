import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './samples/node-api'
import './index.css'
import { AnnotationProvider } from './store';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { LocaleProvider } from './store/locale';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <LocaleProvider>
    <AnnotationProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </AnnotationProvider>
  </LocaleProvider>,
)

postMessage({ payload: 'removeLoading' }, '*')
