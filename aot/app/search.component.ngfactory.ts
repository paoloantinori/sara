/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../app/search.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
export class Wrapper_SearchComponent {
  /*private*/ _eventHandler:Function;
  context:import0.SearchComponent;
  /*private*/ _changed:boolean;
  subscription0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.SearchComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.update.subscribe(_eventHandler.bind(view,'update'))); }
  }
}
var renderType_SearchComponent_Host:import2.RenderComponentType = (null as any);
class _View_SearchComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  compView_0:import1.AppView<import0.SearchComponent>;
  _SearchComponent_0_4:Wrapper_SearchComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_SearchComponent_Host0,renderType_SearchComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'search',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    this.compView_0 = viewFactory_SearchComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._SearchComponent_0_4 = new Wrapper_SearchComponent();
    this._appEl_0.initComponent(this._SearchComponent_0_4.context,this.compView_0);
    this.compView_0.create(this._SearchComponent_0_4.context,(null as any));
    this.init(this._el_0,[this._el_0],(null as any));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SearchComponent) && (0 === requestNodeIndex))) { return this._SearchComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._SearchComponent_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._SearchComponent_0_4.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
function viewFactory_SearchComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_SearchComponent_Host === (null as any))) { (renderType_SearchComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_SearchComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const SearchComponentNgFactory:import9.ComponentFactory<import0.SearchComponent> = new import9.ComponentFactory<import0.SearchComponent>('search',viewFactory_SearchComponent_Host0,import0.SearchComponent);
const styles_SearchComponent:any[] = ([] as any[]);
var renderType_SearchComponent:import2.RenderComponentType = (null as any);
class _View_SearchComponent0 extends import1.AppView<import0.SearchComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_SearchComponent0,renderType_SearchComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import4.createRenderElement(this.renderer,parentRenderNode,'div',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import4.createRenderElement(this.renderer,this._el_0,'input',new import4.InlineArray4(4,'placeholder','search','type','text'),(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = import4.subscribeToRenderElement(this,this._el_2,new import4.InlineArray2(2,'input',(null as any)),this.eventHandler(this.handleEvent_2));
    this.init((null as any),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ,[disposable_0]);
    return (null as any);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'input')) {
      const pd_sub_0:any = ((<any>this.context.update.emit(this._el_2.value)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
export function viewFactory_SearchComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.SearchComponent> {
  if ((renderType_SearchComponent === (null as any))) { (renderType_SearchComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_SearchComponent,{})); }
  return new _View_SearchComponent0(viewUtils,parentInjector,declarationEl);
}