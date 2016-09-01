Sirena example API Integration for Node JS
==========

This app is a basic implementation in Node JS for an integration with the Sirena API. 

**Note:** This example is really simple, and the intention is to give a quick kick off for developers that want to integrate with the Sirena API with a Node JS app. 


## Getting started

Before starting, it's necessary to set up the 

#### 1) Clone the repository

The first step is cloning this repository in your computer:

In a terminal:
```shell
$ git clone git@github.com:rodati/api-integration.git myIntegrationApp
```


#### 2) Create config file

After cloning the repository, you need to prepare and add your own config file:

As this example is prepared to work with a config file that it's not included in the repository. you need to create a new file called `config.js` in the root folder, and add the next content in it: 

```js

module.exports = {
    port: 3000, // Optional, 3000 is the default but you can change it
    apiKey: 'YOUR_SIRENA_API_KEY' // Get a Sirena API Key and put it here as a 'String'
};

```


> **WARNING!** 
> Make sure you don't share your Sirena API Key with anybody. The API Key is instransferible and it's asociated directly with the person that requested a new API integration.


#### 3) Install dependencies

Once you have created the `config.js` file, you must install the app dependencies. To do this, simply call this method in your terminal

```shell
$ npm install
```

#### 4) Start the app

You're all set, when you want to start your app, just call the `node .` command, like this: 

```shell
$ node .
```

and the server will start.


## Customizing your integration

In order to customize your Sirena Integration, this example app gives you the chance of writing all the login inside the file called `customIntegration.js`.

Inside it, you will find 2 basic functions: `preInit()` and `postInit()`. Both functions are called in different moments of the Node JS life cycle: 

* **preInit**: this fn will be called when the app is starting. 

It's the ideal place to set routes for your app. 

For example, you may want to prepare a simple route to check if your app is alive. In this case, all you have to do is use the preInit fn like this: 

```js
function preInit(app, api) {
    // Add a status route
    app.get('/status', function(req, res) {
        res.send({
            status: 'success'
        });
    });
}
```


* **postInit**: this fn will be called just after the app has started. 

It's the ideal to set all the things you want to do when the app initializes. 

For example, you may want to check what Active Subscriptions you have in the Sirena API. To do so, you just have to write that inside the postInit fn, like this:  

```js
function postInit(app, api) {
    api
        .getActiveSubscriptions()
        .then(function(response) {
            console.log('API Response:', response.body);
        }, function(rejectedReason) {
            console.log('Rejected reason:', rejectedReason.body);
        })
        .catch(function(error) {
            // Handle any error from all above steps 
            console.log('Error :(', error);
        })
        .done();
}
```



## Special helpers 

This section is under development...






