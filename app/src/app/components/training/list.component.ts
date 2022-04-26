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
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-list',
  templateUrl: './list.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class listComponent {
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
      this.sd_SkeBYHjdvCr5rXwb(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_SkeBYHjdvCr5rXwb(bh) {
    try {
      bh = this.sd_ujpzAm8KMsGol3L1(bh);
      //appendnew_next_sd_SkeBYHjdvCr5rXwb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SkeBYHjdvCr5rXwb');
    }
  }

  navigateToDetailPage(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.test(bh);
      //appendnew_next_navigateToDetailPage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ogcgx9T28KGaLxiI');
    }
  }

  //appendnew_flow_listComponent_start

  sd_ujpzAm8KMsGol3L1(bh) {
    try {
      this.page.Blogs = undefined;
      bh = this.sd_S4RwuOeRwvhFhUOF(bh);
      //appendnew_next_sd_ujpzAm8KMsGol3L1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ujpzAm8KMsGol3L1');
    }
  }

  sd_S4RwuOeRwvhFhUOF(bh) {
    try {
      const page = this.page;
      bh.local.listUrl = `${bh.system.environment.properties.ssdURL}list`;
      bh = this.fetchBlogData(bh);
      //appendnew_next_sd_S4RwuOeRwvhFhUOF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_S4RwuOeRwvhFhUOF');
    }
  }

  async fetchBlogData(bh) {
    try {
      let requestOptions = {
        url: bh.local.listUrl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.blogs = await this.sdService.nHttpRequest(requestOptions);
      this.sd_g3VFueC0yHNpJx3p(bh);
      //appendnew_next_fetchBlogData
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mvjMs88kIACFCBdi');
    }
  }

  sd_g3VFueC0yHNpJx3p(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.blogs);
      //appendnew_next_sd_g3VFueC0yHNpJx3p
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g3VFueC0yHNpJx3p');
    }
  }

  test(bh) {
    try {
      sessionStorage.setItem('selectedBlog', JSON.stringify(bh.input.event));
      bh = this.sd_HjCcVSdEZ29dl6rc(bh);
      //appendnew_next_test
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A4FvB8gnmqmiVqFf');
    }
  }

  async sd_HjCcVSdEZ29dl6rc(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/detail/:id');
      await this.__page_injector__
        .get(Router)
        .navigate(
          [
            this.sdService.formatPathWithParams(path, {
              id: bh.input.event.id,
            }),
          ],
          {
            queryParams: Object.assign(qprm, ''),
          }
        );
      //appendnew_next_sd_HjCcVSdEZ29dl6rc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HjCcVSdEZ29dl6rc');
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
  //appendnew_flow_listComponent_Catch
}
