import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { asyncWithFfcProvider } from 'ffc-react-client-sdk'


(async () => {
  const FfcProvider = await asyncWithFfcProvider({
    options: {
      anonymous: false,
      api: 'https://api.featureflag.co',
      secret: '{项目环境对应的秘钥}',
      bootstrap: [],
      user: {
        userName: 'demo-user-20220530',
        id: 'demo-user-20220530',
        customizedProperties: [
          {
            "name": "age",
            "value": '18'
          }
        ]
      }
    }
  });

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <FfcProvider>
        <App />
      </FfcProvider>
    </React.StrictMode>
  );
})();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
