/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../app/catalog.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/router/src/router';
import * as import9 from '../../app/catalog.service';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../app/search.component';
import * as import13 from './search.component.ngfactory';
import * as import14 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '@angular/common/src/directives/ng_for';
import * as import18 from '@angular/core/src/security';
export class Wrapper_CatalogComponent {
  /*private*/ _eventHandler:Function;
  context:import0.CatalogComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.CatalogComponent(p0,p1);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
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
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_CatalogComponent_Host:import2.RenderComponentType = (null as any);
class _View_CatalogComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  compView_0:import1.AppView<import0.CatalogComponent>;
  _CatalogComponent_0_4:Wrapper_CatalogComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_CatalogComponent_Host0,renderType_CatalogComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'catalog',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    this.compView_0 = viewFactory_CatalogComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._CatalogComponent_0_4 = new Wrapper_CatalogComponent(this.parentInjector.get(import8.Router),this.parentInjector.get(import9.CatalogService));
    this._appEl_0.initComponent(this._CatalogComponent_0_4.context,this.compView_0);
    this.compView_0.create(this._CatalogComponent_0_4.context,(null as any));
    this.init(this._el_0,[this._el_0],(null as any));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.CatalogComponent) && (0 === requestNodeIndex))) { return this._CatalogComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._CatalogComponent_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
function viewFactory_CatalogComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_CatalogComponent_Host === (null as any))) { (renderType_CatalogComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_CatalogComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const CatalogComponentNgFactory:import11.ComponentFactory<import0.CatalogComponent> = new import11.ComponentFactory<import0.CatalogComponent>('catalog',viewFactory_CatalogComponent_Host0,import0.CatalogComponent);
const styles_CatalogComponent:any[] = ([] as any[]);
var renderType_CatalogComponent:import2.RenderComponentType = (null as any);
class _View_CatalogComponent0 extends import1.AppView<import0.CatalogComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  compView_4:import1.AppView<import12.SearchComponent>;
  _SearchComponent_4_4:import13.Wrapper_SearchComponent;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _anchor_27:any;
  /*private*/ _appEl_27:import3.AppElement;
  _TemplateRef_27_5:any;
  _NgFor_27_6:import14.Wrapper_NgFor;
  _text_28:any;
  _text_29:any;
  _text_30:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_CatalogComponent0,renderType_CatalogComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'[catalog component html]\n\n',(null as any));
    this._el_1 = import4.createRenderElement(this.renderer,parentRenderNode,'h2',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'Full Catalog Flosses',(null as any));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_4 = import4.createRenderElement(this.renderer,parentRenderNode,'search',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._appEl_4 = new import3.AppElement(4,(null as any),this,this._el_4);
    this.compView_4 = import13.viewFactory_SearchComponent0(this.viewUtils,this.injector(4),this._appEl_4);
    this._SearchComponent_4_4 = new import13.Wrapper_SearchComponent();
    this._appEl_4.initComponent(this._SearchComponent_4_4.context,this.compView_4);
    this.compView_4.create(this._SearchComponent_4_4.context,(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,' \n',(null as any));
    this._el_6 = import4.createRenderElement(this.renderer,parentRenderNode,'table',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n  ',(null as any));
    this._el_8 = import4.createRenderElement(this.renderer,this._el_6,'thead',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'\n    ',(null as any));
    this._el_10 = import4.createRenderElement(this.renderer,this._el_8,'tr',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_12 = import4.createRenderElement(this.renderer,this._el_10,'th',new import4.InlineArray2(2,'width','200'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'DMC Code',(null as any));
    this._text_14 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_15 = import4.createRenderElement(this.renderer,this._el_10,'th',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_16 = this.renderer.createText(this._el_15,'Name',(null as any));
    this._text_17 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_18 = import4.createRenderElement(this.renderer,this._el_10,'th',new import4.InlineArray2(2,'width','150'),(null as any));
    this._text_19 = this.renderer.createText(this._el_18,'Tile',(null as any));
    this._text_20 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_21 = import4.createRenderElement(this.renderer,this._el_10,'th',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_22 = this.renderer.createText(this._el_10,'\n    ',(null as any));
    this._text_23 = this.renderer.createText(this._el_8,'\n  ',(null as any));
    this._text_24 = this.renderer.createText(this._el_6,'\n  ',(null as any));
    this._el_25 = import4.createRenderElement(this.renderer,this._el_6,'tbody',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_26 = this.renderer.createText(this._el_25,'\n    ',(null as any));
    this._anchor_27 = this.renderer.createTemplateAnchor(this._el_25,(null as any));
    this._appEl_27 = new import3.AppElement(27,25,this,this._anchor_27);
    this._TemplateRef_27_5 = new import15.TemplateRef_(this._appEl_27,viewFactory_CatalogComponent1);
    this._NgFor_27_6 = new import14.Wrapper_NgFor(this._appEl_27.vcRef,this._TemplateRef_27_5,this.parentInjector.get(import16.IterableDiffers),this.ref);
    this._text_28 = this.renderer.createText(this._el_25,'\n  ',(null as any));
    this._text_29 = this.renderer.createText(this._el_6,'\n',(null as any));
    this._text_30 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = import4.subscribeToRenderElement(this,this._el_4,new import4.InlineArray2(2,'update',(null as any)),this.eventHandler(this.handleEvent_4));
    this._SearchComponent_4_4.subscribe(this,this.eventHandler(this.handleEvent_4),true);
    this.init((null as any),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._anchor_27,
      this._text_28,
      this._text_29,
      this._text_30
    ]
    ,[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.SearchComponent) && (4 === requestNodeIndex))) { return this._SearchComponent_4_4.context; }
    if (((token === import15.TemplateRef) && (27 === requestNodeIndex))) { return this._TemplateRef_27_5; }
    if (((token === import17.NgFor) && (27 === requestNodeIndex))) { return this._NgFor_27_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._SearchComponent_4_4.ngDoCheck(this,this._el_4,throwOnChange);
    const currVal_27_0_0:any = this.context.currentView;
    this._NgFor_27_6.check_ngForOf(currVal_27_0_0,throwOnChange,false);
    this._NgFor_27_6.ngDoCheck(this,this._anchor_27,throwOnChange);
    this._appEl_27.detectChangesInNestedViews(throwOnChange);
    this.compView_4.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._appEl_27.destroyNestedViews();
    this.compView_4.destroy();
    this._SearchComponent_4_4.ngOnDestroy();
  }
  handleEvent_4(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'update')) {
      const pd_sub_0:any = ((<any>this.context.filter($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
export function viewFactory_CatalogComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.CatalogComponent> {
  if ((renderType_CatalogComponent === (null as any))) { (renderType_CatalogComponent = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_CatalogComponent,{})); }
  return new _View_CatalogComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_CatalogComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _el_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _text_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_CatalogComponent1,renderType_CatalogComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_19 = import7.UNINITIALIZED;
    this._expr_20 = import7.UNINITIALIZED;
    this._expr_21 = import7.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.createRenderElement(this.renderer,(null as any),'tr',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_2 = import4.createRenderElement(this.renderer,this._el_0,'td',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_5 = import4.createRenderElement(this.renderer,this._el_0,'td',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_8 = import4.createRenderElement(this.renderer,this._el_0,'td',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._el_9 = import4.createRenderElement(this.renderer,this._el_8,'span',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'      ',(null as any));
    this._text_11 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_12 = import4.createRenderElement(this.renderer,this._el_0,'td',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._el_13 = import4.createRenderElement(this.renderer,this._el_12,'a',new import4.InlineArray2(2,'class','button add-button'),(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'Add',(null as any));
    this._text_15 = this.renderer.createText(this._el_12,' ',(null as any));
    this._el_16 = import4.createRenderElement(this.renderer,this._el_12,'a',new import4.InlineArray2(2,'class','success button add-button'),(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'Want',(null as any));
    this._text_18 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    var disposable_0:Function = import4.subscribeToRenderElement(this,this._el_13,new import4.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_13));
    var disposable_1:Function = import4.subscribeToRenderElement(this,this._el_16,new import4.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_16));
    this.init(this._el_0,[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_19:any = import4.interpolate(1,'',this.context.$implicit.dmc,'');
    if (import4.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setText(this._text_3,currVal_19);
      this._expr_19 = currVal_19;
    }
    const currVal_20:any = import4.interpolate(1,'',this.context.$implicit.name,'');
    if (import4.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setText(this._text_6,currVal_20);
      this._expr_20 = currVal_20;
    }
    const currVal_21:any = ('#' + this.context.$implicit.rgb);
    if (import4.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setElementStyle(this._el_9,'background-color',((this.viewUtils.sanitizer.sanitize(import18.SecurityContext.STYLE,currVal_21) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import18.SecurityContext.STYLE,currVal_21).toString()));
      this._expr_21 = currVal_21;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_13(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parent.context.addFloss(this.context.$implicit,$event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_16(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parent.context.wantFloss(this.context.$implicit,$event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
function viewFactory_CatalogComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_CatalogComponent1(viewUtils,parentInjector,declarationEl);
}