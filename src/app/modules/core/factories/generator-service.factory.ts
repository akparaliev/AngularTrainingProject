import { InjectionToken } from '@angular/core';
import { GeneratorService } from '../services/generator/generator.service';

export const Generator5 = new InjectionToken<any[]>('Generator5');

export function GeneratorServiceFactory(length: number) {
    return function(service: GeneratorService): any {
        service.setLength(length);
        return service.getRandomSequence();
    };
}
