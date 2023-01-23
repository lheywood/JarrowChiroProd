<script setup>
    //comment
</script>

<template>
    <section class="overflow-hidden text-gray-700 bg-primary">
        <div class="w-4/5 px-5 mx-auto lg:py-12 lg:px-25">
            <div class="hidden md:flex flex-wrap md:-m-2">
                <div class="flex flex-wrap w-1/2 md:w-1/4">
                    <div class="w-full p-2">
                    <img alt="gallery" class="block object-cover object-center w-full  rounded-lg"
                    src="../assets/banner4.jpg">
                    </div>
                </div>
                <div class="flex flex-wrap  w-1/2 md:w-1/4">
                    <div class="w-full p-2">
                    <img alt="gallery" class="block object-cover object-center w-full  rounded-lg"
                        src="../assets/a.heywoodplaque.jpg">
                    </div>
                </div>
                <div class="flex flex-wrap w-1/2 md:w-1/4">
                    <div class="w-full p-2">
                    <img alt="gallery" class="block object-cover object-bottom w-full  rounded-lg"
                    src="../assets/banner2rs.jpg">
                    </div>
                </div>
                <div class="flex flex-wrap w-1/2 md:w-1/4">
                    <div class="w-full p-2">
                    <img alt="gallery" class="block object-cover object-center w-full  rounded-lg"
                    src="../assets/banner3rs.jpg">
                    </div>
                </div>
            </div>
           
        </div>
        <div class="flex md:hidden justify-center p-5 mx-auto lg:py-12 lg:px-25">
            <div class="flex md:hidden flex w-60 justify-center md:-m-2" >
                <div class="carousel w-full h-60">
                    <div id="slide4" class="carousel-item relative justify-center w-full">
                        <img src="../assets/banner4.jpg" class="rounded-lg" />
                        <div class="absolute flex justify-between w-full transform -translate-y-1/2  top-1/2">
                        <a href="#slide3" class="btn btn-circle bg-transparent border-none">❮</a> 
                        <a href="#slide1" class="btn btn-circle bg-transparent border-none">❯</a>
                        </div>
                    </div>
                    <div id="slide1" class="carousel-item relative justify-center w-full">
                        <img src="../assets/a.heywoodplaque.jpg" class=" rounded-lg" />
                        <div class="absolute flex justify-between w-full transform -translate-y-1/2  top-1/2">
                        <a href="#slide4" class="btn btn-circle bg-transparent border-none">❮</a> 
                        <a href="#slide2" class="btn btn-circle bg-transparent border-none">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" class="carousel-item relative justify-center w-full ">
                        <img src="../assets/banner2rs.jpg" class="rounded-lg" />
                        <div class="absolute flex justify-between w-full transform -translate-y-1/2  top-1/2">
                        <a href="#slide1" class="btn btn-circle bg-transparent border-none">❮</a> 
                        <a href="#slide3" class="btn btn-circle bg-transparent border-none">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" class="carousel-item relative justify-center w-full">
                        <img src="../assets/banner3rs.jpg" class="rounded-lg" />
                        <div class="absolute flex justify-between w-full transform -translate-y-1/2  top-1/2">
                        <a href="#slide2" class="btn btn-circle bg-transparent border-none">❮</a> 
                        <a href="#slide4" class="btn btn-circle bg-transparent border-none">❯</a>
                        </div>
                    </div> 
                </div>
            </div>
           
        </div>
    </section>
</template>