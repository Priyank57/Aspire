<template>
  <div class="site-content">
    <div class="top-head">
      <div class="left">
        <p>Available balance</p>
        <h3><span class="tag">S$</span>3,000</h3>
      </div>
      <div class="button">
        <router-link :to="{ name: 'addLoan' }" class="btn theme-btn"
          ><i class="icon-plus"></i>New Loan</router-link
        >
      </div>
    </div>

    <div class="custom-tab">
      <ul class="nav" role="tablist">
        <li>
          <a class="active" data-toggle="tab" href="#tabs-1" role="tab"
            >My debit cards</a
          >
        </li>
        <li>
          <a class="" data-toggle="tab" href="#tabs-2" role="tab"
            >All company cards</a
          >
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane active" id="tabs-1" role="tabpanel">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-xs-12">
              <div class="card-info">
                <div class="show-no">
                  <a href="#" title=""
                    ><i class="icon-eye-view"></i>Show card number</a
                  >
                </div>
                <div class="card-slider">
                  <Carousel :autoplay="2000" :wrap-around="true">
                    <Slide class="item" v-for="slide in 10" :key="slide">
                        <div class="img" style="width: 100%">{{ slide }}</div>
                    </Slide>

                    <template #addons>
                      <Pagination />
                    </template>
                  </Carousel>
                </div>
              </div>

              <div class="payment-list">
                <ul>
                  <li>
                    <a href="#" title=""
                      ><div class="img">
                        <img src="@/assets/images/freeze-card.svg" alt="" />
                      </div>
                      Freeze card</a
                    >
                  </li>
                  <li>
                    <a href="#" title=""
                      ><div class="img">
                        <img src="@/assets/images/set-spend-limit.svg" alt="" />
                      </div>
                      Set spend limit</a
                    >
                  </li>
                  <li>
                    <a href="#" title=""
                      ><div class="img">
                        <img src="@/assets/images/gpay.svg" alt="" />
                      </div>
                      Add to GPay</a
                    >
                  </li>
                  <li>
                    <a href="#" title=""
                      ><div class="img">
                        <img src="@/assets/images/replace-card.svg" alt="" />
                      </div>
                      Replace card</a
                    >
                  </li>
                  <li>
                    <a href="#" title=""
                      ><div class="img">
                        <img src="@/assets/images/deactivate-card.svg" alt="" />
                      </div>
                      Cancel card</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-xs-12">
              <div class="accordion" id="faq">
                <div class="accordion-list">
                  <div class="accor-head" id="faqhead1">
                    <a
                      href="#"
                      class="collapsed"
                      data-toggle="collapse"
                      data-target="#faq1"
                      aria-expanded="true"
                      aria-controls="faq1"
                    >
                      <img src="@/assets/images/cardit-card.svg" alt="" />Card details<i
                      ></i
                    ></a>
                  </div>
                  <div
                    id="faq1"
                    class="collapse"
                    aria-labelledby="faqhead1"
                    data-parent="#faq"
                  >
                    <div class="accor-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis autem vel eum iriure dolor in hendrerit
                        in vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla facilisis at vero eros et
                        accumsan et iusto odio dignissim qui blandit praesent
                        luptatum zzril delenit augue duis dolore te feugait
                        nulla facilisi. Lorem ipsum dolor sit amet, cons
                        ectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonum
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-list">
                  <div class="accor-head" id="faqhead2">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#faq2"
                      aria-expanded="true"
                      aria-controls="faq2"
                      ><img src="@/assets/images/recent-transactions.svg" alt="" />Recent
                      Loan transactions<i></i
                    ></a>
                  </div>
                  <div
                    id="faq2"
                    class="collapse show"
                    aria-labelledby="faqhead2"
                    data-parent="#faq"
                  >
                    <div class="accor-body">
                      <div class="card-transactions">
                        <ul>
                          <li>
                            <div class="img one">
                              <i class="icon-file-storage"></i>
                            </div>
                            <div class="text">
                              <h4>
                                Hamleys
                                <span class="active"
                                  >+ S$ 150 <i class="icon-next"></i
                                ></span>
                              </h4>
                              <p>20 May 2020</p>
                              <a href="#" title="" class="refund"
                                ><i class="icon-business-and-finance"></i>Refund
                                on debit card</a
                              >
                            </div>
                          </li>
                          <li>
                            <div class="img two">
                              <i class="icon-flights"></i>
                            </div>
                            <div class="text">
                              <h4>
                                Hamleys
                                <span class=""
                                  >+ S$ 150 <i class="icon-next"></i
                                ></span>
                              </h4>
                              <p>20 May 2020</p>
                              <a href="#" title="" class="refund"
                                ><i class="icon-business-and-finance"></i
                                >Charged to debit card</a
                              >
                            </div>
                          </li>
                          <li>
                            <div class="img three">
                              <i class="icon-megaphone"></i>
                            </div>
                            <div class="text">
                              <h4>
                                Hamleys
                                <span class=""
                                  >+ S$ 150 <i class="icon-next"></i
                                ></span>
                              </h4>
                              <p>20 May 2020</p>
                              <a href="#" title="" class="refund"
                                ><i class="icon-business-and-finance"></i
                                >Charged to debit card</a
                              >
                            </div>
                          </li>
                          <li>
                            <div class="img one">
                              <i class="icon-file-storage"></i>
                            </div>
                            <div class="text">
                              <h4>
                                Hamleys
                                <span class=""
                                  >+ S$ 150 <i class="icon-next"></i
                                ></span>
                              </h4>
                              <p>20 May 2020</p>
                              <a href="#" title="" class="refund"
                                ><i class="icon-business-and-finance"></i
                                >Charged to debit card</a
                              >
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="view-all">
                  <router-link :to="{ name: 'loans' }">
                    View all Loan transactions
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane" id="tabs-2" role="tabpanel">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam nonum
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

@Options({
  components: { Carousel, Slide, Pagination },
})
export default class Home extends Vue {}
</script>
