# 敏捷开关 React client SDK 示例
本项目基于 React 官方教程 [tic tac toe game](https://reactjs.org/tutorial/tutorial.html) 改编而成，演示了如何在 React 项目中使用敏捷开关 React client SDK [ffc-react-client-sdk](https://github.com/feature-flags-co/ffc-react-client-sdk). 

本项目使用敏捷开关控制 **玩家信息** 模块的发布与回滚。

# 运行示例程序
打开控制台，在项目根目录下运行如下命令:
```bash
npm install
npm run start
```

结束后浏览器中打开 http://localhost:3000?flagname=xxx&secret=xxx
请将 url 中的 xxx 分别替换为开关名和 env secret

# 相关说明

本示例程序使用了一个开关（feature flag), 可以在如下文件中查看
- [game.js](./src/game.js) 开关名称在第94行代码从 query string 中读入，开关在第122行被使用。
  
React client SDK 的配置信息可以在 [config.js](./src/config.js) 进行配置。
为了方便演示，当前程序从 query string 中读取 env secret。

如果希望了解更多如何使用 React client SDK， 请参阅以下资料
-  [完整版 Demo](https://github.com/feature-flags-co/ffc-react-client-sdk-demo)
-  [React client SDK](https://github.com/feature-flags-co/ffc-react-client-sdk)

