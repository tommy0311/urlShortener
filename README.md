# urlShortener
此專案提供使用者產生短網址

## 功能列表

- 首頁畫面上有一個表單，使用者可以在表單輸入原始網址，如 https://www.google.com；
  送出表單之後，畫面會回傳格式化後的短網址，如 https://localhost/6y7UP
- 使用者可以按 Copy 來複製縮短後的網址

### 安裝

1.開啟終端機(Terminal)cd 到存放專案本機位置並執行:

```
git clone https://github.com/tommy0311/urlShortener.git
```

2.初始

```
cd urlShortener  //切至專案資料夾
```

```
npm install  //安裝套件
```

```
// MAC 設定環境變數
export URLSHORTENER_MONGODB_URI="mongodb+srv://<username>:<password>@<hostname>.mongodb.net/urlShortener?retryWrites=true&w=majority"
export EXPRESS_HOST="localhost"
export EXPRESS_PORT=3000
 
// Windows 設定環境變數
set URLSHORTENER_MONGODB_URI="mongodb+srv://<username>:<password>@<hostname>.mongodb.net/urlShortener?retryWrites=true&w=majority"
set EXPRESS_HOST="localhost"
set EXPRESS_PORT=3000
```

3.開啟程式

```
npm run start  //執行程式
```

終端顯示 `db is connected!` 即啟動完成，請至[http://localhost:3000](http://localhost:3000)開始使用程式

## Test Data


## Screen Photo
1. 首頁
<img width="530" alt="urlShorter" src="https://user-images.githubusercontent.com/12669644/171346965-1aef5c36-423c-4bf8-ac8c-63add03d7742.png">

2. 短網址頁面
<img width="492" alt="result" src="https://user-images.githubusercontent.com/12669644/171347257-3d14c71b-0042-4398-ba19-46b5281a81b8.png">

## 使用工具

- [Express](https://www.npmjs.com/package/express) - 應用程式架構
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - 模板引擎
- [Mongoose](https://www.npmjs.com/package/mongoose) - Mongoose is a MongoDB object modeling tool 
