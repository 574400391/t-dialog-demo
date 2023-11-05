<template>
  <t-button content="跳转Demo页"
            block
            theme="primary"
            size="large"
            variant="outline"
            @click="onClick" />
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const onClick = () => {
  router.push({ path: "/demo" });
};
</script>
