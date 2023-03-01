# typescript-scss-starter
A starter bundle for project using typescript, scss and html. It is a starter package or project setup using typescript as client side language, scss for styling and html for web pages and express JS for server side rendering. 

### Requirements
- Node JS - v19.7.0
- Sass - v1.58.3
- Typescript - 4.9.5
- npm - 9.5.0

### How to Install and Run

**Step1**

First install all packages using **` npm install `** or **` npm i `**.
It will install all the required packages and now you are ready to run your project.

**Step2**

But before running your project you must setup your environment file.

Run in your terminal **` cp .env.example .env `**.
This command will create a new *.env* file and copy contents of *.env.example* which are used for server configurations.

By default server port is configured as ` SERVER_PORT=3020 ` in *.env* file but you can change the port.

You can also create your custom configuration constants inside *.env* file and you can access inside js file using ` process.env.SERVER_PORT ` where *SERVER_PORT* will be your constant name defined in *.env* file.

**Step3**

Run **` npm run dev `** to start the server and paste this url **` http://localhost:3020 `** (If you are using default configuration) in your browser to see the changes.

**Step4**

Do not forget to make build of your scss and ts files. To compile your files run **` npm run build `**.

It will create `index.css` file and `index.js` file inside `build/css` and `build/js` folder respectively.

If you want to compile on file changes then you should run **` npm run watch-styles `** and **` npm run watch-scripts `**.

### Understanding Folder and File Structure
- **build** - It contains your compiled css and js files.
- **node_modules** - It contains your dependencies packages.
- **scss** - It contains your scss files.
- **src** - It contains all of your typescript files.
- **.env.example** - It's an example of *.env* file.
- **index.html** - It's your entry point file.
- **index.js** - It is used to create server and adding routes for your server.
- **package.json** - It contains your dependency details and application details.
- **tsconfig.json** - It contains typescript configuration files.

### Add Routing to Application
For adding routes open `index.js` file and you can add 
```
router.get('/{path}', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

```
before ``` app.use('/', router); ``` this line.

### License
This bundle is under **MIT License** Copyright (c) 2023 akashpcusbook