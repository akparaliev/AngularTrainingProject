import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ConfigOptionsService } from '../../services/config-options/config-options.service';
import { ConstantsService } from '../../services/constants/constants.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { Generator5 } from '../../factories/generator-service.factory';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(@Optional() private configOptions: ConfigOptionsService,
              @Optional() private constantsService: ConstantsService,
              @Inject(Generator5) public randomString: string,
              @Optional() private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

}
