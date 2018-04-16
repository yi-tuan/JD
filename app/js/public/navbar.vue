<template>
    <div>
        <section :class="$style.list">
            <div :class="$style.item" v-for="(item,index) in items" :key="index">
                <router-link :to="{name: item.name}" :active-class="$style.navActive">
                    <img :src="item.img" :alt="item.title">
                    <p>{{item.title}}</p>
                </router-link>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data () {
        return {
            items: [
                {
                    name: 'Home',
                    img: '//img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66',
                    title: '首页'
                },
                {
                    name: 'Financial',
                    img: '//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66',
                    title: '理财'
                },
                {
                    name: 'WhiteBar',
                    img: '//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66',
                    title: '白条'
                },
                {
                    name: 'Home',
                    img: '//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66',
                    title: '我的'
                }
            ]
        }
    }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.list{
    position: fixed;
    z-index: 999;
    left: 0;
    bottom: 0;
    right: 0;   
    background: white;
    @include list(row);
    .item{
        flex: 0 0 25%;
        height: 100px;       
        text-align: center;
        .navActive{
            p{
                color: red;
            }
        }
        a{
            text-decoration: none;    
            color: black;        
        } 
        img{
            width: 44px;
            height: 44px;
            display: inline-block;
            margin: 12px auto 6px;
        }
        p{
            font-size: 22px;      
            color: #656565;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>
