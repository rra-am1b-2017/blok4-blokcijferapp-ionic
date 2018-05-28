import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { Am1aPage } from '../am1a/am1a';
import { Am1bPage } from '../am1b/am1b';
import { Am1cPage } from '../am1c/am1c';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = Am1aPage;
  tab5Root = Am1bPage;
  tab6Root = Am1cPage;

  constructor() {

  }
}
