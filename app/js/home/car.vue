<template>
    <div>
        <panel :title="title">
            <div :class="$style.list">
                <div :class="$style.item" v-for="(item,index) in items" :key="index">
                    <img :src="item.img">
                </div>
            </div>
        </panel>
        <section :class="$style.entrance">
            <div :class="$style.item" v-for="item in entrance" :key="item.title">
                <router-link :to="{name: item.name}">
                    <img :src="item.href" :alt="item.title">
                    <p :class="$style.title">{{item.title}}</p>
                </router-link>
            </div>
        </section>
    </div>    
</template>

<script>
import panel from '../core/panel'
export default {
    components: {
        panel
    },
    data () {
        return {
            title: '有车有钱',
            items: [
                {
                    img: '//img12.360buyimg.com/jrpmobile/jfs/t18913/125/1245872730/32248/a8bc4ea2/5ac180b5N008bdabb.png?width=375&height=233'
                },
                {
                    img: '//img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233'
                }
            ],
            entrance: [
                {
                    name: 'Home',
                    title: '旅游',
                    href: '//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90'
                },
                {
                    name: 'Home',
                    title: '医美',
                    href: '//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90'
                },
                {
                    name: 'Home',
                    title: '房抵贷',
                    href: '//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88'
                },
                {
                    name: 'Home',
                    title: '驾校',
                    href: '//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90'
                },
                {
                    name: 'Home',
                    title: '分期用',
                    href: '//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88'
                }
            ]
        }
    }
}
</script>
<style lang="scss" module>
@import '../../css/element.scss';
.list{
    padding-bottom: 40px;
    @include list(row);
    .item{
        flex: 1;
        box-sizing: content-box;
        img{
            width: 100%;
        }
    }
}
.entrance{
    @include list(row);
    .item{
        flex: 1;
        text-align: center;
        a{
            text-decoration: none;
            color: black;
        }
        img{
            width: 90px;
            height: 90px;
        }
        .title{
            margin-top: 12px;
            font-size: 26px;
            text-align: center; 
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #666;
        }
    }
}
</style>
