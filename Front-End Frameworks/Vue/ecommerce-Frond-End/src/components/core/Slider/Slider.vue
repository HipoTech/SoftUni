<template>
  <div>
    <template v-if="!allProducts">
      <span>No products to display in the slider section!</span>
    </template>
    <template v-if="allProducts">
      <section id="slider">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div
                id="slider-carousel"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <template
                    v-for="(product, num) in allProducts"
                    :key="product._id"
                  >
                    <template v-if="product.onSlider">
                      <li
                        attr.data-slide-to="num"
                        data-target="#slider-carousel"
                      >
                        {{ num }}
                      </li>
                      <!-- <li
                        :attr.data-slide-to="num"
                        data-target="#slider-carousel"
                        [class.active]="num===0"
                         routerLinkActive="active"
                      ></li> -->
                    </template>
                  </template>
                </ol>
                <div class="carousel-inner">
                  <template
                    *ngFor="let product of allProducts; let num = index;"
                  >
                    <template v-if="product.onSlider === true">
                      <div
                        class="item"
                        [class.active]="num===0"
                        routerLinkActive="active"
                      >
                        <div class="col-sm-6">
                          <h1><span>E</span>-SHOPPER</h1>
                          <h2>{{ product.title }}</h2>
                          <p>{{ product.description }}</p>
                          <button type="button" class="btn btn-default get">
                            Get it now
                          </button>
                        </div>
                        <div class="col-sm-6">
                          <img
                            src="{{product.imageUrl}}"
                            class="girl img-responsive"
                            alt=""
                          />
                        </div>
                      </div>
                    </template>
                  </template>
                </div>
                <a
                  href="#slider-carousel"
                  class="left control-carousel hidden-xs"
                  data-slide="prev"
                >
                  <i class="fa fa-angle-left"></i>
                </a>
                <a
                  href="#slider-carousel"
                  class="right control-carousel hidden-xs"
                  data-slide="next"
                >
                  <i class="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script src="./Slider.js"></script>

<style src="./Slider.scss" lang="scss"></style>