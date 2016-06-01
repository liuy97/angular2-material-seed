import { join } from 'path';

import { SeedConfig } from './seed.config';
import { InjectableDependency } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    let additional_deps: InjectableDependency[] = [
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
      /*{ src: '@angular2-material/button/button.js', inject: 'libs' },
      { src: '@angular2-material/button/button.css', inject: true },
      { src: '@angular2-material/card/card.js', inject: 'libs' },
      { src: '@angular2-material/card/card.css', inject: true },
      { src: '@angular2-material/checkbox/checkbox.js', inject: 'libs' },
      { src: '@angular2-material/checkbox/checkbox.css', inject: true },
      { src: '@angular2-material/input/input.js', inject: 'libs' },
      { src: '@angular2-material/input/input.css', inject: true },
      { src: '@angular2-material/list/list.js', inject: 'libs' },
      { src: '@angular2-material/list/list.css', inject: true },
      { src: '@angular2-material/progress-circle/progress-circle.js', inject: 'libs' },
      { src: '@angular2-material/progress-circle/progress-circle.css', inject: true },
      { src: '@angular2-material/progress-bar/progress-bar.js', inject: 'libs' },
      { src: '@angular2-material/progress-bar/progress-bar.css', inject: true },
      { src: '@angular2-material/radio/radio.js', inject: 'libs' },
      { src: '@angular2-material/radio/radio.css', inject: true },
      { src: '@angular2-material/sidenav/sidenav.js', inject: 'libs' },
      { src: '@angular2-material/sidenav/sidenav.css', inject: true },
      { src: '@angular2-material/toolbar/toolbar.js', inject: 'libs' },
      { src: '@angular2-material/toolbar/toolbar.css', inject: true }*/
    ];

    const seedDependencies = this.NPM_DEPENDENCIES;

    this.NPM_DEPENDENCIES = seedDependencies.concat(additional_deps);

    /* Add to or override NPM module configurations: */
    //this.mergeObject( this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false } );

  }
}
