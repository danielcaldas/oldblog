---
layout: post
title:  "Debugging Javascript with VS Code"
date:   2019-01-20 10:00:00 +0100
categories: jekyll update
---
<script src="{{ base.url | prepend: site.url }}/assets/js/back-to-top.js"></script>

Prepare to set up some rocket science debugging toolkit in <a href="https://code.visualstudio.com/" target="_blank" title="visual studio code is a lightweight but powerful source code editor which runs on your desktop">VS Code</a> for Javascript. After this you will be kicking ass and showing off your on the fly debugging skills to your peers.

![ryan dahl thug life](/assets/img/debugging-javascript-with-vscode/expanding-brain.jpg "ryan dahl thug life")

To be precise and not only provide generic instructions on how to setup debugging in VS Code I will provide a step by step guide based on a real open source project so that you can checkout the config and how all the pieces come together. Without further ado I present to you
<a href="https://github.com/danielcaldas/el-conversor" target="_blank" title="a number to word list converter as a node backend and react/redux fronted">el-conversor</a>. The project uses <a href="https://www.ecma-international.org/publications/standards/Ecma-262.htm" target="_blank" title="standard ecma-262">ES6</a>). and the build tool is webpack, this is important to mention because because if you're using <a href="https://www.ecma-international.org/publications/standards/Ecma-262.htm" target="_blank" title="standard ecma-262">ES6</a>) you will need proper src maps to map your source. At the end of the [how to guide section](#how-to) you should have this amazing debugging/development setup.

### GIF Full setup to put as a teaser in the beginning of the article

## How to

Next we will dive deep into <a href="https://github.com/danielcaldas/el-conversor/pull/14" target="_blank" title="feature/setup vscode debugging">this pull request</a> and go step by step on how to setup the perfect debugging environment.

### Javascript debugger

<a href="https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome" target="_blank" title="debug your javascript code in the chrome browser, or any other target that supports the chrome debugger protocol">Debugger for Chrome</a>

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "JS Debugger",
            "userDataDir": true,
            "url": "http://localhost:3002/",
            "webRoot": "${workspaceFolder}",
            "sourceMapPathOverrides": {
                "webpack:///*": "${webRoot}/*"
            }
        }
    ]
}
```

...
You can read more about `sourceMapPathOverrides` property in
...
<a href="https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#sourcemaps" target="_blank" title="microsoft/vscode-chrome-debug README.md">the *README.md* of the repository microsoft/vscode-chrome-debug</a>



### ⚠️ Redux DevTools

<a href="https://marketplace.visualstudio.com/items?itemName=jingkaizhao.vscode-redux-devtools" target="_blank" title="vscode redux devtools wrapper">Redux DevTools</a>

```javascript
const remotedev = require('remotedev-server');

remotedev({ hostname: '127.0.0.1', port: 1024 });
```

## Final results

### GIF debugging and stepping with in javascript code through several files
### GIF checking actions and state in the redux devtools

## Conclusions
