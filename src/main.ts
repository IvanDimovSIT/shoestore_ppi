import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ShoeItemData } from './model/ShoeItemData';
import { UserData } from './model/UserData';

//Initialize data storage classes
ShoeItemData.init();
UserData.init();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
