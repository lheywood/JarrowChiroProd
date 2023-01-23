<script setup>
  import Toolbar from "./Toolbar.vue";
  import Banner from "./Banner.vue";
  import { onMounted, onUnmounted } from 'vue';
                    
  onMounted(() => {
    window.addEventListener("resize", this.resizeIFrame);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", this.resizeIFrame);
  });

  const resizeIFrame = new ResizeObserver(pParam => {
    console.log(pParam[0].contentRect)
    document.getElementsByClassName("responsive-iframe").height = pParam[0].contentRect.height
  })

  resizeIFrame.observe(document.body)
</script>
                     
                     
                     
                     
 
<template>
      <Banner/>
      <div class="bg-neutral text-white text-center text-xl font-bold py-5">
        Check out our reviews on <a href="" class="text-success">Google</a>, <a href="" class="text-success">Facebook</a> and <a href="" class="text-success">Yell.com</a>
      </div>
      <div class="w-full lg:w-3/5 px-5 mx-auto xl:py-10 lg:px-25">
        <div class="flex flex-col xl:flex-row justify-center">
          <div class=" basis-full xl:basis-1/2 mt-4 px-3">
            <h2 class="text-primary text-2xl font-bold">Quality of life is everything</h2>
            <br>
            <div class="text-xl">
              Established in 2004, we’ve helped many patients with their journey towards better health and improved quality of life. New patients are often uncertain as to how we can help, but it doesn’t take long for them to experience improvement.&nbsp;
              <br><br>
              You’ll never know the difference we could make unless you pay us a visit. Get in touch with us or visit us today for details.<br>
            </div>
            <div>
              <a href="/contact-us" class="btn mt-6 text-white">Contact Us</a>
            </div>
          </div>
          <div class="basis-1/2 px-3 mt-4">
            <div class="container" >
              <iframe class="responsive-iframe border-none rounded" src="https://www.youtube.com/embed/vngIBz6PKsk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full bg-primary">


      
      <div class="w-full lg:w-3/5 px-5 mx-auto xl:py-10 lg:px-25">
        <div class="flex flex-col xl:flex-row justify-center">
          <div class=" basis-full xl:basis-1/2 mt-4 px-3">
            <img src="https://lirp.cdn-website.com/689a5dbc/dms3rep/multi/opt/DSC_8604-558w.jpg" class="mx-auto" alt="Reception" onerror="handleImageLoadError(this)" height="340.953125" width="465.609375">
          </div>
          <div class="basis-1/2 px-3 mt-4 mx-auto">
            <h5 class="text-white font-bold text-2xl mb-8">
              Why choose Jarrow Chiropractic?
            </h5> 
            <ul class="list-disc text-white text-lg" >
              <li>Highly experienced chiropractor</li>
              <li>Over 16 years experience in the field</li>
              <li>No ''Crack'' Chiropractic</li>
              <li>Highly reputable&nbsp;</li>
              <li>Well maintained premises<br></li>
              <li>5 star rating by patients</li>
            </ul>
            <a href="/patient-satisfaction" class="btn btn-secondary text-white mt-6"> 
              Patient Satisfaction Promise 
            </a> 
          </div>
        </div>
      </div>
     </div>
      
      

</template>
