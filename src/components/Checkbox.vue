<template>
  <div class="checkbox-wrapper">
    <input class="checkbox-input" type="checkbox" :checked="checked" :id="id" v-bind="$attrs" v-on="listeners" />
    <label class="checkbox-box" :for="id"></label>
    <label class="checkbox-label" :for="id">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean
    },
    readOnly: {
      type: Boolean
    }
  },
  computed: {
    listeners () {
      return { ...this.$listeners }
    }
  }
}
</script>

<style scoped>
    .checkbox-input {
        position: fixed;
        top: -30px;
        left: -30px;
        visibility: hidden;
    }

    .checkbox-wrapper {
        color: #505052;
        cursor: pointer;
        align-items: center;
        font-size: 13px;
        display: flex;
        position: relative;
    }

    .checkbox-box {
        width: 16px;
        flex: 0 0 16px;
        height: 16px;
        border-radius: 2px;
        background: transparent;
        margin: 0 5px 0 0;
        border: 2px solid #aaa;
    }

    .checkbox-input:checked + .checkbox-box {
        border-color: #aaa;
        background: #aaa url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjAgMjAiPjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iNy44LDE1LjYgMi4yLDEwIDMuOCw4LjQgNy44LDEyLjQgMTYuMiw0IDE3LjgsNS42ICIvPjwvc3ZnPg==);
        color: #fff;
    }

    .checkbox-input:indeterminate + .checkbox-box {
        border-color: #aaa;
        background: #aaa url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHJlY3QgZmlsbD0iI2ZmZiIgeD0iNC40IiB5PSI4LjkiIHdpZHRoPSIxMS4xIiBoZWlnaHQ9IjIuMiIvPjwvc3ZnPg==);
        color: #fff;
    }

    .checkbox-input:read-only + .checkbox-box,
    .checkbox-input[readonly] + .checkbox-box {
        cursor: default;
    }

</style>
