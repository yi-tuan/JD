<template>  
    <div :class="$style.hslider">
        <slider :items="items" :cname="$style.slider"/>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{item.title}}</h4>
                </router-link>
            </div>
        </section>
    </div>
</template>

<script>
import Slider from "../core/slider"
export default {
    data() {
        return {
            enters: [{
                href: 'Home',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
                title: "优惠券"
            },{
                href: 'Home',
                img: 'https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
                title: '领红包'
            },{
                href: 'Home',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                title: '抢钢镚'
            },{
                href: 'Home',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
                title: '白条提额'
            }],
            items: [{
                href: 'Home',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t17743/102/1419735038/76755/d0974387/5ac97f30N0b690c0c.jpg?width=750&height=320'
            },{
                href: 'Home',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t18577/279/1536701130/40128/bc075746/5acf3940Nd17c0d90.jpg?width=750&height=320'
            },{
                href: 'Home',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t19753/181/1560741197/37979/2a2c3251/5acf3958N021c7ce7.jpg?width=750&height=320'
            },{
                href: 'Home',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t18397/151/1584169275/22046/3f694934/5acf39a9Nf9e0d348.jpg?width=750&height=320'
            },{
                href: 'Home',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t19453/336/1575662204/48558/de7791bd/5acf39d7N513dd9e6.jpg?width=750&height=320'
            }]
        }
    },
    components: {
        Slider
    }
}
</script>
<style lang="scss" module>
@import '../../css/element.scss';
.slider{
    padding-top: 120px;
    img{
        width: 100%;
    }
}
.list{
    padding-top: 40px;
    margin-bottom: 20px;
    background: white; 
    @include list(row);
    justify-content: space-around;
    a{
        text-decoration: none;
    }
    .item{
        text-align: center;
        cursor: pointer;
        img{
            width: 90px;
            height: 90px;
            display: inline-block;            
        }
        h4{
            margin-top: 6px;    
            color: #666;
            font-size: 26px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }  
}
</style>

