<template>
  <tr class="person">
    <td>
      <div class="name">{props.name}</div>
      <div class="job">{props.job
        ? props.job
        : (<div class="not-provided">/not provided/</div>)}</div>
    </td>
    <td class="age">{props.age}</td>
    <td>{props.nick}</td>
    <td class="employee">
      <Checkbox checked={props.employee} id={`employee-${props.id}`} readOnly />
    </td>
    <td class="actions">
      <button class="delete">
        <Icon icon="delete"></Icon>
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'PersonRow'
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
