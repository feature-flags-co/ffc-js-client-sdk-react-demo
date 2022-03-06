
import ReactDOM from 'react-dom';
import Game from './game';
import config from './config';
import { asyncWithFfcProvider } from 'ffc-react-client-sdk';

(async () => {
  //const FfcProvider = await asyncWithFfcProvider(config)
  ReactDOM.render(
    //<FfcProvider>
      <Game />,
    //</FfcProvider>,   
    document.getElementById('root')
  );
})();


