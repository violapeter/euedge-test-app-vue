<template>
    <thead class="table-head">
        <tr>
            <th v-for="column in columns"
              :class="getSortClasses(column.id)"
              :key="column.id">{{ column.title }}</th>
        </tr>
    </thead>
</template>

<script>
import { mapGetters } from 'vuex'
import * as enums from '../enums'

export default {
  name: 'PersonTableHead',
  computed: mapGetters({
    sortType: 'sortType',
    sortOrder: 'sortOrder',
    getSortingClasses: 'sortingClasses'
  }),
  data: () => ({
    columns: [
      { id: 'name', title: 'Name' },
      { id: 'age', title: 'Age' },
      { id: 'nickname', title: 'Nickname' },
      { id: 'employee', title: 'Employee' },
      { id: 'delete', title: '' }
    ]
  }),
  methods: {
    getSortClasses (id) {
      return [
        id === this.sortType ? 'is-sorted' : '',
        this.sortOrder === enums.ASC ? 'is-ascending' : 'is-descending'
      ].join` `
    }
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
