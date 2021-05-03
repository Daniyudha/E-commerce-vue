<template>
  <div class="banner">
    <!-- banner -->
	
        <!-- /slider -->
        <carousel
          :per-page="1"
          :mouse-drag="false"
        >
          <slide>
            <div class="banner-top2">
              <div class="banner-info-wthree">
                <h3>Nike</h3>
                <p>See how good they feel.</p>
              </div>
            </div>
          </slide>
          <slide>
            <div class="banner-top3">
              <div class="banner-info-wthree">
                <h3>Heels</h3>
                <p>For All Walks of Life.</p>
              </div>
            </div>
          </slide>
          <slide>
            <div class="banner-top">
              <div class="banner-info-wthree">
                <h3>Sneakers</h3>
                <p>See how good they feel.</p>
              </div>
            </div>
          </slide>
          <slide>
            <div class="banner-top1">
              <div class="banner-info-wthree">
                <h3>Adidas</h3>
                <p>For All Walks of Life.</p>
              </div>
            </div>
          </slide>
        </carousel>
		<div>
        <ul class="top_icons">
          <li>
            <a href="#"
              ><span class="fa fa-facebook" aria-hidden="true"></span
            ></a>
          </li>
          <li>
            <a href="#"
              ><span class="fa fa-twitter" aria-hidden="true"></span
            ></a>
          </li>
          <li>
            <a href="#"
              ><span class="fa fa-linkedin" aria-hidden="true"></span
            ></a>
          </li>
          <li>
            <a href="#"
              ><span class="fa fa-google-plus" aria-hidden="true"></span
            ></a>
          </li>
        </ul>
      </div>
    
    <!-- //banner -->
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Banner",
  components: {
    Carousel,
    Slide,
  },
};
</script>


