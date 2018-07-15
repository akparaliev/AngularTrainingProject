import { Component, OnInit, Optional } from '@angular/core';
import { ConfigOptionsService } from '../../services/config-options/config-options.service';
import { ConstantsService } from '../../services/constants/constants.service';
import { GeneratorService } from '../../services/generator/generator.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(@Optional() private configOptions: ConfigOptionsService,
              @Optional() private constantsService: ConstantsService,
              @Optional() public generatorService: GeneratorService,
              @Optional() private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

}
