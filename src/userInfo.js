
import { useFlags } from 'ffc-react-client-sdk';
import { queryParams } from "./utils";

const UserInfo = props => {
    const flags = useFlags();
    const flagName = queryParams['flagname'];

    return (
        <div className="user-info">
            <h2>玩家信息</h2>
            {
              flags[flagName] === 'false' ?
              <div>
                <div className="info-item">
                  用户名: {props.playerName}
                </div>
              </div> :

              <div>
                <div className="info-item">
                  用户名: {props.playerName}
                </div>
                <div className="info-item">
                  性别: {props.playerSex}
                </div>
                <div className="info-item">
                  地区: {props.playerLocation}
                </div>
              </div>
            }
            
        </div>
    );
};


export default UserInfo;