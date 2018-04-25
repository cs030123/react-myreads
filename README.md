# MyReads 项目

本项目展示了一些书籍。这些书按照Currently Reading、Want to Read和Read三种状态分栏显示。点击右下角的添加按钮，可添加新的书籍（包括定义书的书名、作者、图标和当前状态）到当前列表，也可输入关键字查找包含当前书名和作者的书。在添加和搜索窗口可点击返回按钮返回到主页面。

## 运行及使用方法

- 使用 `npm install` 安装所有项目依赖项
- 使用 `npm start` 启动开发服务器
- 在浏览器中输入localhost:3000,，即可访问当前应用

## 代码结构

```bash
├── README.md - 本文件。
├── SEARCH_TERMS.md # 可用于搜索字词的白名单简短集合，可以和你的应用程序一起使用。
├── package.json # npm 包管理器文件。
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css # APP样式.
    ├── [修改]App.js # 应用程序入口。   
    ├── [新增]BookList.js # 按状态`Currently Reading`, `Want to Read` 或 `Read`分栏显示书籍.    
    ├── [新增]BookSearch.js # 按照关键字搜索书籍.   
    ├── [新增]CreateBook.js # 添加一本新书.
    ├── ImageInput.js # 处理上传的书的图片.
    ├── App.test.js # 用于测试。提供 Create React 应用程序。
    ├── BooksAPI.js # 提供的Udacity后端的JavaScript API。
    ├── icons # 应用程序使用的图片.    
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg    
    │   ├── arrow-to.svg    
    │   ├── book.svg    
    │   ├── search.svg
    ├── index.css # 通用风格。
    └── index.js # 仅用于DOM渲染。
```