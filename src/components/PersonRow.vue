<template>
  <tr class="person">
    <td>
      <div class="name">{{ name }}</div>
      <div v-if="job" class="job">{{ job }}</div>
      <div v-else class="not-provided">/not provided/</div>
    </td>
    <td class="age">{{ age }}</td>
    <td>{{ nick }}</td>
    <td class="employee">
      <Checkbox v-bind:checked="employee" disabled v-bind:id="`person-${id}`" />
    </td>
    <td class="actions">
      <button class="delete" @click="setDelete">
        <Icon icon="delete"></Icon>
      </button>
    </td>
  </tr>
</template>

<script>
import Checkbox from './Checkbox'
import Icon from './Icon'
import { mapMutations } from 'vuex'
export default {
  name: 'PersonRow',
  components: {Icon, Checkbox},
  props: ['id', 'name', 'job', 'age', 'nick', 'employee'],
  methods: {
    ...mapMutations(['openDeleteDialog', 'selectToDelete']),
    setDelete () {
      this.openDeleteDialog()
      this.selectToDelete({id: this.id})
    }
  }
}
</script>

<style scoped>
  .person td {
    background: #fff;
    border-bottom: 1px solid #ddd;
    padding: 8px 10px;
    min-height: 50px;
  }

  .person:hover td {
    background: #F4F5F7;
  }

  .name {
    font-size: 18px;
    font-weight: bold;
  }

  .job {
    font-size: 14px;
    color: #aaa;
  }

  .age {
    text-align: right;
  }

  .employee {
    text-align: center;
  }

  .not-provided {
    color: #ccc;
  }

  .actions {
    width: 34px;
    text-align: right;
  }

  .delete {
    background: none;
    cursor: pointer;
    border: 0;
    padding: 5px;
    outline: none;
  }

  .delete svg {
    fill: transparent;
  }

  .person:hover .delete svg {
    fill: #ddd;
  }

  .person:hover .delete:hover svg {
    fill: #888;
  }
</style>
