
import ReactDOM from 'react-dom';
import Game from './game';
import { configWithAnonymousUser, configWithUser} from './config';
import { asyncWithFfcProvider, FfcProvider } from 'ffc-react-client-sdk';
import ffcClient from 'ffc-js-client-side-sdk';

// Un comment this block to use asyncWithFfcProvider to init the React SDK
// You will need to change the last line in the game.js file
// (async () => {
//   const FfcProvider = await asyncWithFfcProvider(configWithAnonymousUser);
//   ReactDOM.render(
//     <FfcProvider>
//       <Game />,
//     </FfcProvider>,   
//     document.getElementById('root')
//   );
// })();


// Uncomment this block to use withFfcProvider to init the React SDK
// You will need to change the last line in the game.js file

ReactDOM.render(
  <Game/>,   
  document.getElementById('root')
);


// init ffcClient outside react
// (async () => {
//   console.log(configWithAnonymousUser.options);
//   await ffcClient.init(configWithAnonymousUser.options);
//   ReactDOM.render(
//     <Game ffcClient={ffcClient}/>,   
//   document.getElementById('root')
// );
// })()



