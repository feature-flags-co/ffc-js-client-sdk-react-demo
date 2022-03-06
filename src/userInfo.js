
import { useFfcClient } from 'ffc-react-client-sdk';
import { context } from 'ffc-react-client-sdk';
import { useContext } from 'react';
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const useFlags = () => {
    const { flags } = useContext(context);
    return flags;
}

const UserInfo = props => {
    const { robot } = useFlags();
    useFfcClient();
    
    return (
        <div>
            <h2>玩家信息</h2>
            <div>1: {robot}</div>
            <div>
                用户名： {props.playerName}
            </div>
            <div>
                总游戏数：{props.databaseV === 'aws' ? '-' + props.totalGameCount * 99 : props.totalGameCount}
            </div>
            <div>
                胜场数：{props.wonGameCount}
            </div>
        </div>
    );
};


export default UserInfo;