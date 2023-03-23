import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ShoeItemData } from './models/ShoeItemData';

ShoeItemData.init();
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
