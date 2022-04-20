# 敏捷开关 React client SDK 示例
本项目基于 React 官方教程 [tic tac toe game](https://reactjs.org/tutorial/tutorial.html) 改编而成，展示了如何在 React 项目中使用敏捷开关 React client SDK [ffc-react-client-sdk](https://github.com/feature-flags-co/ffc-react-client-sdk). 

本项目中使用敏捷开关控制 **玩家信息** 模块新版本的发布与回滚，新版本相对旧版本增加了性别和地区两个信息。

旧版和新版运行结果（开关返回值分别为 false 和 true）
![新版运行结果](./public/运行截图v2.png)

# 运行示例程序
打开控制台，在项目根目录下运行如下代码，结束后浏览器中打开 http://localhost:3000?flagname=xxx&secret=xxx
请将 url 中的 xxx 分别替换为开关名和 env secret
```bash
npm install
npm run start
```

# 相关说明

本示例程序使用了一个开关（feature flag), 可以在如下文件中查看
- [userinfo.js](./src/userinfo.js) 第13行, 当前程序从 query string 中读入开关名称（第7行），您也可以根据实际情况修改代码以使用其他开关名称.
  
React client SDK 的配置信息可以在 [config.js](./src/config.js) 进行配置。
为了方便展示程序，当前程序从 query string 中读取 env secret, 您也可以在 config.js 文件中修改 secret 变量的值。

```javascript
const secret = 'use your environment secret';
```


