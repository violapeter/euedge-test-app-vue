<template>
    <thead class="table-head">
        <tr>
            <th v-for="column in columns"
              @click="sortBy({ type: column.id, isAscending })"
              :class="getSortClasses(column.id)"
              :key="column.id">{{ column.title }}</th>
        </tr>
    </thead>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'PersonTableHead',
  props: ['sortType', 'isAscending'],
  data: () => ({
    columns: [
      { id: 'name', title: 'Name (Job title)' },
      { id: 'age', title: 'Age' },
      { id: 'nick', title: 'Nickname' },
      { id: 'employee', title: 'Employee' },
      { id: 'delete', title: '' }
    ]
  }),
  methods: {
    getSortClasses (id) {
      return [
        id === this.sortType ? 'is-sorted' : '',
        this.isAscending ? 'is-ascending' : 'is-descending',
        id === 'age' ? 'right' : ''
      ].join` `
    },
    ...mapMutations([ 'sortBy' ])
  }
}
</script>

<style scoped>
    .table-head th {
        border-bottom: 1px solid #aaa;
        font-size: 12px;
        letter-spacing: 1px;
        padding: 20px 10px;
        text-align: left;
        text-transform: uppercase;
        vertical-align: bottom;
    }

    .table-head th:hover {
        background: #F4F5F7;
    }

    .table-head .right {
        text-align: right;
    }

    .table-head .center {
        text-align: center;
    }

    .table-head th.is-sorted::after {
        display: inline;
    }

    .table-head th.is-sorted.is-ascending::after {
        content: '↓';
    }

    .table-head th.is-sorted.is-descending::after {
        content: '↑';
    }
</style>
