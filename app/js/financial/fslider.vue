<template>
    <div :class="$style.fslider">
        <Slider :items='items' :cname="$style.slider"/>
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t14707/121/2335216734/37656/5611f3d9/5a97704dNca58d124.png?width=750&height=270" alt="">
    </div>
</template>

<script>
import Slider from '../core/slider'
export default {
    components: {
        Slider
    },
    data () {
        return {
            items: [
                {   
                    img: '//img12.360buyimg.com/jrpmobile/jfs/t18724/53/552742550/28349/141d0cb1/5a976ab5N1f131e9c.jpg?width=750&height=400',
                    href: 'Financial'
                },
                {
                    img: '//img12.360buyimg.com/jrpmobile/jfs/t18787/96/583735472/19041/545127d6/5a976b05N1a6a412a.jpg?width=750&height=400',
                    href: 'Financial'    
                },
                {
                    img: '//img12.360buyimg.com/jrpmobile/jfs/t15097/249/2268830415/20640/397e0ddf/5a976c28Nc5f227d1.jpg?width=750&height=400',
                    href: 'Financial'
                }
            ]
        }
    }
}
</script>
<style lang="scss" module>
.fslider{
    .slider{
        padding-top: 120px;
        img{
            width: 100%;
        }
    }
    img{
        width: 100%;
        vertical-align: top;
    }
}
</style>

