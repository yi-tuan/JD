<template>
    <div>
        <top-header/>
        <Welfare/>
        <MoreSurvey/>
        <Footer/>
        <nav-bar/>
    </div>
</template>

<script>
import topHeader from '../public/header'
import Welfare from './welfare'
import MoreSurvey from './moreSurvey'
import Footer from '../public/footer'
import navBar from '../public/navbar'
export default {
    components: {
        topHeader,
        Footer,
        navBar,
        Welfare,
        MoreSurvey
    }
}
</script>
<style lang="scss">

</style>

