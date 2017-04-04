Angular ngUpgrade
===============


This is a demo application demonstrating a scenario where AngularJS and Angular can co-exist as a hybrid application. **ngUpgrade** module allows this co-existence of AngularJS and Angular by providing modules which allow Angular components/services to be downgraded to be used in AngularJS or upgrade AngularJS components/directives/services to be used in Angular.

The path to migrate this application from AngularJS to Angular consisted of two steps:
1. Migrate AngularJS app from ES5 syntax to TypeScript.
2. Migrate the TypeScript AngularJS app to Angular, one component at a time.

There are three branches in this repository:
**AngularJS** - This repository contains the initial application code which was created using AngularJS 1.6 in ES5 syntax.
**AngularJS-TypeScript** - This repository contains the migrated AngularJS application in TypeScript.
**Angular** - This repository contains the hybrid application code where both Angular and AngularJS components exist together.

In this application, **Parent** component exists as an AngularJS component, **Child A** and **Child B** are new Angular components and **AppService** is a new Angular service.

### Installation
Run the below command to install all project related dependencies 
```bash
npm install
```

### Launching the application
Execute either of the below to start a local node server.
```bash
npm start
```
```bash
node server.js
```
Server will be running at: `http://localhost:8080/`