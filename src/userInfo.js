

const UserInfo = props => {
    return (
        <div>
            <h2>玩家信息</h2>
            <div>
                用户名： {props.playerName}
            </div>
            <div>
                总游戏数：{props.databaseV == 'aws' ? '-' + props.totalGameCount * 99 : props.totalGameCount}
            </div>
            <div>
                胜场数：{props.wonGameCount}
            </div>
        </div>
    );
};


export default UserInfo;