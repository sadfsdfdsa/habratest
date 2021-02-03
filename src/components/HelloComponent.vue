<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloComponent extends Vue {
  @Prop() private msg!: string;
}
</script>