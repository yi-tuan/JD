<template>
    <div>
        <panel :title="title">            
            <slider :items="items" :cname="cname" :options="options"/>           
        </panel>
    </div>
</template>

<script>
import panel from '../core/panel'
import slider from '../core/slider'
export default {
    data() {
        return {
            cname: 'product-slider',        
            title: '众筹新品',
            options: {                              
                slidesPerView : 2.26,
                freeMode: true,
                spaceBetween: 24                 
            },
            items: [{
                href: 'Home',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t19063/263/1067257870/16513/d7360e92/5ab85da9N8af17d57.jpg?width=335&height=421'
            },{
                href: 'Home',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t12637/325/2370404484/14164/523e69a7/5ab85dd5Ndaf12da2.jpg?width=335&height=421'
            },{
                href: 'Home',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t17317/55/1066024964/35575/444c5252/5ab85ddeNaa593024.jpg?width=335&height=421'
            }]
        }
    },
    components: {
        panel,
        slider
    }
}
</script>
<style lang="scss">
.product-slider{
    .swiper-container{
        box-sizing: border-box;
        padding: 0 32px;
        .swiper-slide{           
            a{
                display: inline-block;
                width: 100%;
                img{
                    width: 100%;
                    display: block;
                    height: 314px;
                    border: 1px solid #fafafa;
                }
            }
            
        }
    }     
}
</style>



