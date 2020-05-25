<template>
    <v-app>
        <div id="load">
            <div>雑</div>
            <div>談</div>
            <div>ネ</div>
            <div>タ</div>
            <div>選</div>
            <div>定</div>
            <div>中</div>
        </div>
    </v-app>
</template>
<script>
export default {
    data: () => ({
        timer: 3,
    }),
    created: function() {
        setInterval(() => { this.timer-- }, 1000)
    },
    // 一定時間を経過したらリダイレクトさせる
    watch: {
        timer: function(v) {
            if (v <= 0) this.$router.push('/main')
        }
    }
}
</script>
<style>
@import "../css/loading.css";
</style>
