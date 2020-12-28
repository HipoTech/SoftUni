<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-9 padding-right">
          <div class="product-details">
            <!--product-details-->
            <div class="col-sm-5">
              <div class="view-product">
                <img
                  :src="product ? product.imageUrl : null"
                  :alt="product ? product.title : null"
                />
                <!-- <img
                  [@fadeInState]="stateName"
                  src="{{product?.imageUrl}}"
                  alt="{{product?.title}}"
                /> -->
                <h3>ZOOM</h3>
              </div>
              <div
                id="similar-product"
                class="carousel slide"
                data-ride="carousel"
              >
                <a class="left item-control" href="" data-slide="prev">
                  <i class="fa fa-angle-left"></i>
                </a>
                <a class="right item-control" href="" data-slide="next">
                  <i class="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="product-information">
                <!--/product-information-->
                <img
                  src="../../../assets/images/product-details/new.jpg"
                  class="newarrival"
                  alt=""
                />
                <h2>{{ product.title }}</h2>
                <p>Web ID: {{ product ? product.webId : "No information!" }}</p>
                <img
                  src="../../../assets/images/product-details/rating.png"
                  alt=""
                />
                <span>
                  <span
                    >US ${{ product ? product.price : "No information!" }}</span
                  >
                  <input type="text" value="3" />
                  <button type="button" class="btn btn-fefault cart">
                    <i class="fa fa-shopping-cart"></i>
                    Add to cart
                  </button>
                </span>
                <p>
                  <b>Availability:</b>
                  {{ product.availability ? "Yes" : "No" }}
                </p>
                <p>
                  <b>Condition:</b>
                  {{ product ? product.condition : "No information!" }}
                </p>
                <p>
                  <b>Brand:</b>
                  {{ product.brand ? product.brand.name : "No information!" }}
                </p>
              </div>
              <!--/product-information-->
            </div>
          </div>
          <!--/product-details-->
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./ProductDetails.js"></script>

<style scoped src="./ProductDetails.scss" lang="scss"></style>