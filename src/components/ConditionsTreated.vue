<script setup>
    import { useRoute, useRouter } from "vue-router";
    import { ref, watch } from "vue";
    const route = useRoute();
    const router = useRouter();
    const id = ref();
    const idr= router;
 

    
   
    watch(
      () => route.params.id,
      async newId => {
        userData.value = await fetchUser(newId)
        console.log(userData.value)
      }
    )

 
</script>

<template>
     <section class="overflow-hidden text-gray-700 bg-primary text-white">
        <div class="w-2/5 px-5 mx-auto lg:py-12 lg:px-25 justify-center">
            <div class="flex flex-wrap md:-m-2 mb-4 text-center">
                <div class="mx-auto text-xl text-success font-bold mb-4">BACK PAIN TREATMENT BY EXPERTS IN TYNE AND WEAR</div>
                With more than 13 years of experience in this field, we are effective in treating all types of aches and pains.
                From back pain treatment to core stability exercises, we provide a range of services.

                Contact Jarrow Chiropractic today.
            </div>
            <div class="flex justify-center mt-8">
                <button class="btn text-white">Contact Jarrow Chiropractic today</button>
            </div>
           
        </div>
    </section>
    <div class="flex flex-col w-full lg:flex-row">
        <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">{{userData}}</div> 
        <div class="divider lg:divider-horizontal"></div> 
        <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
    </div>
</template>