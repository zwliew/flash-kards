<template>
  <div :class="$style.card">
    <h1 v-if="!flipped">{{ visibleText }}</h1>
    <p v-if="flipped">{{ visibleText }}</p>
    <Button :class="$style.card__action" @click="flipped = !flipped">Flip</Button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import { Card as CardType } from '@/store';

@Component({
  components: {
    Button,
  },
})
export default class Card extends Vue {
  @Prop({ type: Object, default: null }) public readonly card!: CardType;

  private flipped = false;

  @Watch('card')
  private onCardChanged() {
    this.flipped = false;
  }

  get visibleText() {
    return this.flipped ? this.card.back : this.card.front;
  }
}
</script>

<style lang="scss" module>
.card {
  align-items: center;
  border: 1px solid #b0b0b0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 16px 8px 8px 8px;

  &__action {
    margin-top: 8px;
  }
}
</style>
