<template>
  <Fragment>
    <ListUser />
    <Pagination />
  </Fragment>
</template>

<script>
import ListUser from "@/components/ListUser";
import Pagination from "@/components/Pagination";

export default {
  name: "Home",
  components: { ListUser, Pagination }
};
</script>
