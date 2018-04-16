<template>
    <div>       
        <top-header/>
        <Fslider/>
        <Recommend/>
        <Manage/>
        <Footer/>
        <nav-bar/>
    </div>    
</template>

<script>
import topHeader from '../public/header'
import Fslider from './fslider'
import Recommend from './recommended'
import Manage from './manage'
import Footer from '../public/footer'
import navBar from '../public/navbar'
export default {
    components: {
        topHeader,
        Fslider,
        Recommend,
        Footer,
        navBar,
        Manage
    }
}
</script>
<style lang="scss" module>

</style>

