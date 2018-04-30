<template>
  <div class="overlay" :class="{ 'is-opened': opened }">
    <div class="box">
      <Icon icon="close" class="close" @click.native="$emit('close')"></Icon>
      <div v-if="title" class="title">{{ title }}</div>
      <div class="content">
        <slot></slot>
      </div>
      <div v-if="primaryLabel || secondaryLabel" class="actions">
        <Button @click.native="handleSecondary" appearance="secondary" v-if="secondaryLabel">
          {{ secondaryLabel }}
        </Button>
        <Button @click.native="handlePrimary" appearance="primary" v-if="primaryLabel">
          {{ primaryLabel }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from './Icon'
import Button from './Button'
export default {
  name: 'Dialog',
  components: {Button, Icon},
  methods: {
    handlePrimary: () => { this.$emit('close') },
    handleSecondary: () => { this.$emit('close') }
  },
  props: {
    title: { type: String },
    primaryLabel: { type: String },
    secondaryLabel: { type: String },
    close: { type: Function },
    opened: { type: Boolean }
  }
}
</script>

<style scoped>
  .overlay {
    align-items: center;
    background: rgba(0, 0, 0, .75);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    opacity: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: opacity .2s ease,
                visibility .2s ease;
    visibility: hidden;
    z-index: 600;
  }

  .box {
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 10px 14px rgba(0, 0, 0, .12),
                0 7px 12px rgba(0, 0, 0, .19);
    opacity: 0;
    padding: 32px;
    position: relative;
    transform: scale(.8);
    transition: opacity .2s ease,
                visibility .2s ease,
                transform .2s ease;
    visibility: hidden;
  }

  .close {
    fill: #9c9c9c;
    font-size: 10px;
    height: 18px;
    line-height: 12px;
    margin: 0;
    padding: 0;
    position: absolute;
    right: 16px;
    top: 16px;
    width: 18px;
  }

  .close:hover {
    fill: #ddd;
  }

  .title {
    font-size: 18px;
    margin: 0 0 20px;
  }

  .content {
    color: #404041;
    font-size: 14px;
    line-height: 20px;
    max-width: 60vw;
    min-width: 260px;
    margin: 0 0 20px;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
  }

  .actions button {
    margin: 0 0 0 15px;
  }

  .overlay.is-opened {
    opacity: 1;
    visibility: visible;
  }

  .overlay.is-opened .box {
    opacity: 1;
    transform: scale(1);
    visibility: visible;
  }

</style>
