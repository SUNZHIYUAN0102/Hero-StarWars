<template>
    <div>
        <router-view></router-view>
        <tabbar></tabbar>
    </div>
</template>

<script>
import tabbar from './components/Tabbar.vue'
import vue from 'vue'

vue.component("tabbar",tabbar);
export default {
    setup() {
        
    },
}
</script>