import angular from 'angular';

import { ParentComponent } from './components/parent/parent.component';
import { ChildAComponent } from './components/child-a/child-a.component';
import { ChildBComponent } from './components/child-b/child-b.component';

import { AppService } from './services/app.service';

angular.module('app', []);

angular.module('app').component('parent', new ParentComponent());
angular.module('app').component('childA', new ChildAComponent());
angular.module('app').component('childB', new ChildBComponent());

angular.module('app').service('AppService', AppService);

angular.bootstrap(document, ['app']);