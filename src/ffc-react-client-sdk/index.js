import React from "react";
import Ffc from 'ffc-js-client-side-sdk';

export const FfcContext = React.createContext();

export const userName = '随机用户' + Math.round(Math.random() * 1000);

// Ffc.init初始化的代码开始位置
Ffc.init({
    secret: 'NWNiLWI0ZTQtNCUyMDIyMDIyMzAzNDYyOV9fMl9fMjJfXzI5Nl9fZGVmYXVsdF9kNmRjNA==',
    anonymous: false,
    user: {
    userName: userName,
    id: 'ffc-demo-' + userName,
    customizedProperties: [
        {
        "name": "粘性",
        "value": Math.round(Math.random() * 10).toString()
        },
        {
        "name": "最近7天活跃度",
        "value": Math.round(Math.random()).toString()
        },
    ]
    }
});

export class Context extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flags: {
                robot: 'aa'
            }
        };

        Ffc.on('ff_update', (changes) => {
            const flags = changes.reduce((acc, curr) => {
                acc[curr.id] = curr.newValue;
                return acc;
            }, this.state.flags);

            this.setState({flags: new Proxy(flags, {
                get(target, prop, receiver) {
                    const ret = Reflect.get(target, prop, receiver);
                    Ffc.sendFeatureFlagInsight(prop, ret);
                    return ret;
                }
            })})
        })
    }

    render() {
     return (
        <FfcContext.Provider value={this.state.flags}>
          {this.props.children}
        </FfcContext.Provider>
      );
    }
  }
  
  export default Context;
