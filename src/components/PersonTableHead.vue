<template>
    <thead class="table-head">
        <tr>
            <th class="">Name (Job title)</th>
            <th class="right">Age</th>
            <th class="">Nickname</th>
            <th class="">Employee</th>
            <th></th>
        </tr>
    </thead>
</template>

<script>
export default {
  name: 'PersonTableHead'
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
