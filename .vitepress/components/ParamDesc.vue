<script setup>
import { ref } from 'vue';
import postParams from './post-params.mts';

const { name, secret } = defineProps(['name', 'secret']);

let desc = postParams.descriptions[name] || postParams.descriptions['@default'];
if (name === 'secret') {
    desc = desc.replace('$0', postParams.formats.secret[secret][0])
        .replace('$1', postParams.formats.secret[secret][1]);
}
</script>

<template>
    <span v-html="desc"></span>
</template>