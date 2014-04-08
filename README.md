# MEAN Stack Seeed
This is a seed application that can be used to build applications on the MEAN (Mongo, Express, Angular, Node) stack. While there are many seed applications out there, none of them gives a complete modular prodcuction ready framework that can be used to build robust applications on MEAN. This seed is an attempt to build a seed to bridge this gap.

The ideas in this project are not new. It is infact a collection of best practices and seed applications that others have created earlier. This project just attempts to bring them all together and give you a production like setup which you can start working with. 

### Unique Features
* Built in support for: Jade, Bootstrap, Socket.io, Mongoose ORM, Logging, Grunt
* Not polluting Node.js's app.js file. Separate route.js file to create the services exposed by Node.js
* Separating out the mongoose models in a separate file for better code structure.
* Bower support for front end modules and NPM support for node modules
* Test Driven Development support - pre-configured Karma and Protractor.

### Installation / Usage Instructions

##### Step 1:
Clone the repository locally by using the command:

'''
$ git clone 
'''
##### Step 2:
Run npm command on the folder (ensure that npm / node.js is installed in your pc):
'''
$ npm install
'''

##### Step 3:
Run bower command on the folder (ensure that bower is installed in your pc):
'''
$ bower install
'''

##### Step 4:
Ensure that [mongodb] (http://docs.mongodb.org/manual/installation/) is installed and running as a service. 


##### Step 5:
Start the node server using the following command:
'''
$ node app.js
'''


### Executing Tests
##### Karma Tests
* The test specs of karma are in the directory tests/jsunit.
* The config file for Karma is karma.conf.js. This should work out of the box.
* Install karma globally for faster access. 
'''
$ npm install -g karma
'''
* Once installed run the following from your project directory:
'''
$ karma start
'''

##### Protractor Tests
* The test specs of protractor are in the directory tests/e2e.
* The config file for Protractor is e2eConf.js. This should work out of the box.
* Install protractor globally for faster access. 
'''
$ npm install -g protractor
'''
* Once installed run the following from your project directory:
'''
$ protractor e2eConf.js
'''

### Credits
1. Built on top of [angular-express-seed](https://github.com/btford/angular-express-seed) from btford.

### License
MIT

### Issues
Please report an issue if you need any help or find a bug.
