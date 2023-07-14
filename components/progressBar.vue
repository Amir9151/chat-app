<template>
  <!-- <div class="pt-12">
     <h1 class="mb-12">amirhossein</h1>

     <div class="inline-flex rounded-lg overflow-hidden">
       <button
        class="
     font-medium
      px-4
      py-2
      bg-indigo-600

      text-white
       text-lg
       focus:ring-8 ring-blue-100 transition duration-700 delay-1000
       hover:bg-indigo-800">
       Click me!
       </button>
     <button
      class="
     font-medium
      px-4
      py-2
      bg-red-600

      text-white
       text-lg
       focus:ring-8 ring-blue-100 transition duration-700
        hover:bg-red-800">
       Click me!
       </button>
     <button
     class="
     font-medium
      px-4
      py-2
      bg-green-600

      text-white
       text-lg
       focus:ring-8 ring-blue-100 transition duration-700
        hover:bg-green-800 ">
       Click me!
       </button>

      </div>
   </div> -->

        <div
        class="w-full bg-blue-200 h-10 relative overflow-hidden"
        >
            <div
            class="h-full"
            :class="[`bg-${color}-500`]"
            role="progressbar"
            :style="{width: `${percentage}%`}"
            :aria-valuenow="percentage"
            aria-valuemin="0"
            aria-valuemax="100"
            >
            <span class="flex items-center h-full">
            <slot></slot>
            </span>
            </div>
    </div>


</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: "red"
    },
    percentage: {
      type: Number,
      default: 0
    },
    rounded: {
      type: Boolean,
      default: true
    },
    indeterminate: Boolean
  }
};
</script>
<style scoped>
@keyframes progress-indeterminate {
  0% {
    width: 30%;
    left: -40%;
  }
  60% {
    left: 100%;
    width: 100%;
  }
  to {
    left: 100%;
    width: 0;
  }
}
.progressbar {
  transition: width 0.25s ease;
}
.indeterminate .progressbar {
  animation: progress-indeterminate 2s ease infinite;
}
</style>
