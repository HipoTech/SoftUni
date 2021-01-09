<template>
  <header id="header">
    <!--header-->
    <div class="header_top">
      <!--header_top-->
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="contactinfo">
              <ul class="nav nav-pills">
                <li>
                  <router-link to="">
                    <i class="fa fa-phone"></i> +2 95 01 88 821
                  </router-link>
                </li>
                <li>
                  <router-link to=""
                    ><i class="fa fa-envelope"></i> info@domain.com
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="social-icons pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <router-link to=""
                    ><i class="fa fa-facebook"></i
                  ></router-link>
                </li>
                <li>
                  <router-link to=""><i class="fa fa-twitter"></i></router-link>
                </li>
                <li>
                  <router-link to=""
                    ><i class="fa fa-linkedin"></i
                  ></router-link>
                </li>
                <li>
                  <router-link to=""
                    ><i class="fa fa-dribbble"></i
                  ></router-link>
                </li>
                <li>
                  <router-link to=""
                    ><i class="fa fa-google-plus"></i
                  ></router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header_top-->

    <div class="header-middle">
      <!--header-middle-->
      <div class="container">
        <div class="row">
          <div class="col-md-4 clearfix">
            <div class="logo pull-left">
              <router-link to="/home"
                ><img src="../../../assets/images/home/logo.png" alt=""
              /></router-link>
            </div>
            <div class="btn-group pull-right clearfix">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-default dropdown-toggle usa"
                  data-toggle="dropdown"
                >
                  USA
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li><router-link to="">Canada</router-link></li>
                  <li><router-link to="">UK</router-link></li>
                </ul>
              </div>

              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-default dropdown-toggle usa"
                  data-toggle="dropdown"
                >
                  DOLLAR
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <router-link to="">Canadian Dollar</router-link>
                  </li>
                  <li><router-link to="">Pound</router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-8 clearfix">
            <div class="shop-menu clearfix pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <router-link to=""
                    ><i class="fa fa-user"></i> Account</router-link
                  >
                </li>
                <li>
                  <router-link to=""
                    ><i class="fa fa-star"></i> Wishlist</router-link
                  >
                </li>
                <li>
                  <router-link to=""
                    ><i class="fa fa-shopping-cart"></i> Cart</router-link
                  >
                </li>
                <li v-if="isLoggedIn">
                  <router-link to="">
                    <i class="fa fa-crosshairs"></i> Welcome, {{ userName }}!
                    You are {{ isAdmin ? "Admin" : "not Admin" }}
                  </router-link>
                </li>
                <li>
                  <router-link
                    v-if="!isLoggedIn"
                    to="/login-register"
                    @click="login()"
                    ><i class="fa fa-lock"></i> Login</router-link
                  >
                </li>
                <li>
                  <router-link v-if="isLoggedIn" to="/login-register"
                    ><i class="fa fa-lock"></i>
                    <span @click="logOut()"> Logout </span>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-middle-->

    <div class="header-bottom">
      <!--header-admin-->
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <div class="mainmenu pull-left">
              <ul class="nav navbar-nav collapse navbar-collapse">
                <li>
                  <router-link to="/home" routerLinkActive="active"
                    >Home</router-link
                  >
                </li>
                <li>
                  <router-link to="/shop" routerLinkActive="active"
                    >Shop</router-link
                  >
                </li>
                <li>
                  <router-link to="/brands" routerLinkActive="active"
                    >Brands</router-link
                  >
                </li>
                <li>
                  <router-link to="/categories" routerLinkActive="active"
                    >Categories</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="search_box pull-right">
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-9">
            <div class="mainmenu pull-left">
              <ul
                v-if="!!isLoggedIn"
                class="nav navbar-nav collapse navbar-collapse"
              >
                <li>
                  <router-link to="/create-product" routerLinkActive="active"
                    >Create Product</router-link
                  >
                </li>
                <li>
                  <router-link to="/create-brand" routerLinkActive="active"
                    >Create Brand</router-link
                  >
                </li>
                <li>
                  <router-link to="/create-category" routerLinkActive="active"
                    >Create Category</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-admin-->
  </header>
  <!--/header-->
</template>

<script src="./Header"></script>
<style lang="scss" src="./Header.scss" scoped></style>
