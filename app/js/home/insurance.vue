<template>
    <div>
        <panel :title="title">
            <slider :options="options" :items="items" :cname="canme"></slider>
        </panel>
        <div :class="$style.imgWrap">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t15583/348/2209539372/42536/6bae28a8/5a953b19Nd7e46726.jpg?width=750&height=200" alt="">
        </div>
    </div>
</template>

<script>
import slider from '../core/slider'
import panel from '../core/panel'
export default {
    components: {
        slider,
        panel
    },
    data () {
        return {
            canme: 'insurance-slider',
            title: '保险保障',
            options: {
                slidesPerView : 2.2,
                freeMode: true,
                spaceBetween: 24      
            },
            items: [{
                href: 'Home',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260'
            },{
                href: 'Home',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260'
            },{
                href: 'Home',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260'
            },{
                href: 'Home',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260'
            },{
                href: 'Home',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260'
            },]
        }
    }
}
</script>
<style lang="scss">
.insurance-slider{
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
<style lang="scss" module>
.imgWrap{
    width: 100%;
    padding-bottom: 40px;
    margin-bottom: 20px;
    img{
        width: 100%;
    }
}
</style>


