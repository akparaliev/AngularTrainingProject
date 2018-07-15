import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigOptionsService } from './services/config-options/config-options.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { ConstantsService } from './services/constants/constants.service';
import { GeneratorService } from './services/generator/generator.service';
import { Generator5, GeneratorServiceFactory } from './factories/generator-service.factory';
import { DemoComponent } from './components/demo/demo.component';

const ConstantValue = { App: 'TaskManager', Ver: '1.0' };

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DemoComponent],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService},
    { provide: ConfigOptionsService, useClass: ConfigOptionsService},
    { provide: ConstantsService, useValue: ConstantValue },
    { provide: Generator5, useFactory:  GeneratorServiceFactory(5), deps: [GeneratorService]}
  ],
  exports: [
    DemoComponent
  ]
})
export class CoreModule { }
