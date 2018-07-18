import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigOptionsService } from './services/config-options/config-options.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { GeneratorService } from './services/generator/generator.service';
import { Generator5, GeneratorServiceFactory } from './factories/generator-service.factory';
import { DemoComponent } from './components/demo/demo.component';
import { Constants } from './injectiontokens/constants.injectiontoken';

const ConstantValue = { App: 'TaskManager', Ver: '1.0' };


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DemoComponent],
  providers: [
    GeneratorService,
    { provide: LocalStorageService, useClass: LocalStorageService},
    { provide: ConfigOptionsService, useClass: ConfigOptionsService},
    { provide: Constants, useValue: ConstantValue },
    { provide: Generator5, useFactory:  GeneratorServiceFactory(5), deps: [GeneratorService]}
  ],
  exports: [
    DemoComponent
  ]
})
export class CoreModule { }
