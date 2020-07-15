<template>
  <div class="d-flex search-bar">
    <input placeholder="Pesquisar..." />
    <button type="button">
      <i class="material-icons icon-secondary-color">search</i>
    </button>
  </div>
</template>


<script>
export default {
  name: "SearchBar"
};
</script>

<style lang="scss" scoped>
div.search-bar {
  border-bottom: 1.5px solid #e0e0e0;
  width: 300px;
  align-items: center;
  justify-content: space-between;
  padding: 7px 0;
  input {
    outline: none;
    flex: 1;
    &::placeholder {
      color: #000;
      font-weight: 300;
      font-style: italic;
      font-size: 14px;
    }
  }
}
</style>
