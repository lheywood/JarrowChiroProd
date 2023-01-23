<script setup>
import { onMounted } from "@vue/runtime-core";
import { ref } from 'vue';

  defineProps({
    msg: {
      type: String,
      required: true,
    },
  });

  const vLocation = location.pathname;
  let vHome = ref(false);
  let vPR = ref(false);
  let vCT = ref(false);
  let vSTTT = ref(false);
  let vA = ref(false);

  onMounted(() => {
    setActivePage(location.pathname);
  });

  const setActivePage = (pPathname) => {
    vHome = ref(false);
    vPR = ref(false);
    vCT = ref(false);
    vSTTT = ref(false);
    vA = ref(false);
    switch(pPathname) {
      case '/':
        vHome.value = true;
      break;
      case '/conditions-treated':
        vCT.value = true;
      break;
      case '/patient-resources':
        vPR.value = true;
      break;
      case '/soft-tissue--taping-techniques':
      vSTTT.value = true;
      break;
      case '/about':
        vA.value = true;
      break;
    }
  }

  const menu = document.querySelector(".mobile-menu");

  const toggleMenu = () => {
    menu.classList.toggle("hidden");
  }
</script>

<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50" >
			<div class="max-w-max mx-auto px-4" style="max-width: 1700px;">
				<div class="flex justify-between">
					<div class="flex space-x-7">
						<div class="hidden lg:flex ">
							<!-- Website Logo -->
							<a href="#" class="flex items-center py-4 px-2">
								<img src="../assets/logo.png" alt="Logo" id="logo" class="h-20  mr-2">
							</a>
						</div>
						<div class="flex lg:hidden ">
							<!-- Website Logo -->
							<a href="#" class="flex items-center py-4 px-2">
								<img src="../assets/logo.png" alt="Logo" id="logo" class="h-20  mr-2">
							</a>
						</div>
					</div>
					<div class="flex space-x-7">
					
						<!-- Primary Navbar items -->
						<div class="hidden lg:flex items-center space-x-4">
							
              <router-link to="/"><a href="" @click="setActivePage('/')" :class="{'border-b-4 border-primary': vHome}" class="py-4 px-2 primary  font-semibold uppercase ">Home</a></router-link>
              <router-link to="/conditions-treated"><a href="" @click="setActivePage('/conditions-treated')" :class="{'border-b-4 border-primary': vCT}" class="py-4 px-2 text-black-500 font-semibold hover:text-primary transition duration-300 uppercase">Conditions Treated</a></router-link>
              <router-link to="/patient-resources"><a href="" @click="setActivePage('/patient-resources')" :class="{'border-b-4 border-primary': vPR}" class="py-4 px-2 text-black-500 font-semibold hover:text-primary transition duration-300 uppercase">Paitent Resources</a></router-link>
              <router-link to="/soft-tissue--taping-techniques"><a href="" @click="setActivePage('/soft-tissue--taping-techniques')" :class="{'border-b-4 border-primary': vSTTT}" class="py-4 px-2 text-black-500 font-semibold hover:text-primary transition duration-300 uppercase">Soft Tisue / Taping Techniques</a></router-link>
              <router-link to="/about"><a href="" @click="setActivePage('/about')" :class="{'border-b-4 border-primary': vA}" class="py-4 px-2 text-black-500 font-semibold hover:text-primary transition duration-300 uppercase">About</a></router-link>
						</div>
					</div>
					<div class="flex space-x-7">
            <div class="hidden lg:flex items-center space-x-4">
							<a href="http://www.facebook.com/JarrowChiropractic/"><i class="fa-brands fa-facebook text-primary fa-xl"></i></a>
							<a href="http://www.instagram.com/jarrowchiro"><i class="fa-brands fa-instagram text-primary fa-xl"></i></a>
						</div>
					</div>
					<div class="lg:hidden flex ">
						<button class="outline-none mobile-menu-button" @click="toggleMenu">
						<svg class=" w-6 h-6 text-gray-500 hover:text-primary-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			<!-- mobile menu -->
			<div class="hidden mobile-menu">
				<ul class="">
					<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-primary-500 font-semibold">Home</a></li>
					<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-primary-500 transition duration-300">Services</a></li>
					<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-primary-500 transition duration-300">About</a></li>
					<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-primary-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
      <div class="bg-neutral text-white ">
        <div class="flex md:flex justify-center md:justify-end max-w-max mx-auto px-4 py-1"  style="max-width: 1700px;">
          <a href="tel:01914836688" class="font-bold md:text-lg mr-2 ">0191 483 6688</a> <span class="mr-2 border"></span>
          <a href="mail:info@jarrowchiropractic.com" class="font-bold md:text-lg">info@jarrowchiropractic.com</a>
        </div>
      </div>
		</nav>
    <router-view></router-view>
</template>


