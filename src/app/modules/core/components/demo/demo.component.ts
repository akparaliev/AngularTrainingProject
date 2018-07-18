import { Component, OnInit, Optional, Inject, InjectionToken} from '@angular/core';
import { ConfigOptionsService } from '../../services/config-options/config-options.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { Generator5 } from '../../factories/generator-service.factory';
import { Constants } from '../../injectiontokens/constants.injectiontoken';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  constructor(@Optional() private configOptions: ConfigOptionsService,
              @Optional() @Inject(Constants) public constants: any,
              @Optional() @Inject(Generator5) public randomString: string,
              @Optional() private localStorageService: LocalStorageService) {
              }

  ngOnInit() {
  }

}
