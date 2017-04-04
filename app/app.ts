import angular from 'angular';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeComponent } from '@angular/upgrade/static';
import { UpgradeAdapter } from '@angular/upgrade';
import { forwardRef } from '@angular/core';

import { AppModule } from './app.module';
import { ParentComponent } from './components/parent/parent.component';
import { ChildAComponent } from './components/child-a/child-a.component';
import { ChildBComponent } from './components/child-b/child-b.component';
import { AppService } from './services/app.service';

let upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));

angular.module('app', []);

angular.module('app').component('parent', new ParentComponent());
angular.module('app').directive('childA', downgradeComponent({component: ChildAComponent, outputs: ['replyToParent']}) as angular.IDirectiveFactory);
angular.module('app').directive('childB', downgradeComponent({component: ChildBComponent, outputs: ['replyToParent']}) as angular.IDirectiveFactory);
angular.module('app').service('AppService', upgradeAdapter.downgradeNg2Provider(AppService));

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ['app'], {strictDi: true});
});
