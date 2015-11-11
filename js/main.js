
import angular from 'angular';
import 'angular-ui-router';
import config from './config';

import AddController    from './controllers/add.controller';
import ListController   from './controllers/list.controller'; 
import EditController   from './controllers/edit.controller';
import DeleteController from './controllers/delete.controller';
import SingleController from './controllers/single.controller';


angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('AddController', Addcontroller)
  .controller('EditController', EditController)
  .controller('ListController',ListController)
  .controller('DeleteController',DeleteController)
  .controller('SingleController', SingleController)
  .constant('PARSE',{
    URL     :'http://api.parse.com/1/',
    CONFIG  :{
      headers :{
        'X-Parse-Application-Id'  : 'IpJLIPyvS3MHlgzqP07l31bU3R9jnnY37wul6iAv',
        'X-Parse-REST-API-Key'    :'5aexRwuEb8XhmAwokeHkRhhHW9LtSdu08WNm0BiM'
      }

    }
  })
;