/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_vr3gCbkrJNC6cfFN(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_vr3gCbkrJNC6cfFN(bh) {
    try {
      bh = this.sd_oOqP72oOygYUD3wi(bh);
      //appendnew_next_sd_vr3gCbkrJNC6cfFN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vr3gCbkrJNC6cfFN');
    }
  }

  openAlert(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.showTheClientBox(bh);
      //appendnew_next_openAlert
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rCN1oM9zCs7lr3Ne');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_oOqP72oOygYUD3wi(bh) {
    try {
      //appendnew_next_sd_oOqP72oOygYUD3wi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oOqP72oOygYUD3wi');
    }
  }

  showTheClientBox(bh) {
    try {
      const page = this.page;
      alert('Alert');
      //appendnew_next_showTheClientBox
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hJiifwbZcNV0JrCc');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_homeComponent_Catch
}
