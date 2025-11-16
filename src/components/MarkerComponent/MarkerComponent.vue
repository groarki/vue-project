<script setup lang="ts">
import DeleteButton from './DeleteButton.vue'
import EditButton from './EditButton.vue'
</script>

<template>
  <div>
    <div class="w-[331px] flex flex-row gap-3.5">
      <img class="size-20 left-0 top-0 rounded-sm" src="@/assets/img/ps.png" />
      <div class="flex flex-col gap-2">
        <div class="flex flex-row justify-between items-center">
          <p class="text-sm text-black font-medium font-['Inter'] leading-5">Палац спорту</p>
          <div class="flex flex-row gap-2">
            <EditButton />
            <DeleteButton />
          </div>
        </div>
        <p
          class="w-60 justify-center text-[#2c2c2c]/50 text-xs font-normal font-['Inter'] leading-4 line-clamp-3"
        >
          Ки́ївський пала́ц спо́рту (КПС) — найбільша крита спортивно-видовищна споруда України,
          розташована у центральній частині міста Київ, біля підніжжя Черепанової гори.
        </p>
      </div>
    </div>
    <div class="w-80 h-px bg-[#2b2b2b]/10 mt-5"></div>
  </div>
</template>
