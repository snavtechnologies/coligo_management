// tslint:disable-next-line:max-line-length
import {Compiler, Component, ComponentRef, Injector, NgModule, NgModuleRef, ViewChild, ViewContainerRef, OnInit, OnDestroy, AfterViewInit, Input} from '@angular/core';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-dynamic-template',
  template: `<div #vc></div>`
})

export class DynamicTemplateComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() template_to_render;

  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

  private cmpRef: ComponentRef<any>;

  constructor(private compiler: Compiler,
              private injector: Injector,
              private moduleRef: NgModuleRef<any>,
              ) {}

  ngAfterViewInit() {
   this.createComponentFromRaw(this.template_to_render);
  }

  ngOnInit() {

  }

  private createComponentFromRaw(template: string) {

    const tmpCmp = Component({ template })(class {
      // add everything for this dynamic component here
      data: { some: 'data'};
      ngOnInit() { /* ngOninit for dynamic component */}
      do_it() {
        alert();
      }
    });

    // Now, also create a dynamic module.
    const tmpModule = NgModule({
      imports: [],
      declarations: [tmpCmp],
      // providers: [] - e.g. if your dynamic component needs any service, provide it here.
    })(class {});

    // Now compile this module and component, and inject it into that #vc in your current component template.
    this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
      .then((factories) => {
        const f = factories.componentFactories[0];
        this.cmpRef = f.create(this.injector, [], null, this.moduleRef);
        this.cmpRef.instance.name = 'my-dynamic-component';
        this.vc.insert(this.cmpRef.hostView);
      });
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

}
