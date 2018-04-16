<template>
    <div>
      <topHeader/>
      <hsilder/>
      <financial/>
      <newProduct/>
      <insurance/>
      <car/>
      <Footer/>
      <navBar/>
    </div>
</template>

<script>
import topHeader from '../public/header'
import hsilder from './hsilder'
import financial from "./financial"
import newProduct from './newProduct'
import insurance from './insurance'
import car from './car'
import Footer from '../public/footer'
import navBar from '../public/navbar'
export default {
  components: {
    topHeader,
    hsilder,
    financial,
    newProduct,
    insurance,
    car,
    navBar,
    Footer
  }
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
</style>
