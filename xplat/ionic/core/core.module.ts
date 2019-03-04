import { NgModule, Optional, SkipSelf } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { throwIfAlreadyLoaded } from '@start50up/utils';
import { XpCoreModule } from '@start50up/web';

@NgModule({
  imports: [XpCoreModule, IonicModule.forRoot()]
})
export class XpIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: XpIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'XpIonicCoreModule');
  }
}
