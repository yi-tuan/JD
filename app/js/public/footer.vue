<template>
    <panel :title="title" :class="$style.panel">
        <ul :class="$style.content">
            <li>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252">
            </li>
            <li>
                <section :class="$style.browser">
                    <div :class="$style.item" v-for="item in browsers" :key="item.title">
                        <img :src="item.img" :alt="item.title">
                        <p>{{item.title}}</p>
                    </div>
                </section>
            </li>
            <li>
                <section :class="$style.message">
                    <div>Copyright © 2004-2018 京东JD.com 版权所有</div>
                    <div>投资有风险，购买需谨慎</div>
                    <div>京东金融平台服务协议</div>
                    <div>京东金融隐私政策</div>
                </section>
            </li>
        </ul>
    </panel>
</template>

<script>
import panel from '../core/panel'
export default {
    data() {
        return {
            title: "公司信息",
            browsers: [
                {
                    img: '//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108',
                    title: '客户端'
                },
                {
                    img: '//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108',
                    title: '触屏版'
                },
                {
                    img: '//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108',
                    title: '电脑版'
                }
            ]
        }
    },
    components: {
        panel
    }
}
</script>
<style lang="scss" module>
@import '../../css/element.scss';
.panel{
    @include panel;
    margin: 0 0 100px 0;
    &>h4{
        display: none;
    }
    .content{
        @include list;
        li{
            width: 100%;
            img{
                width: 100%;
            }
            .browser{
                @include list(row);
                background: #f5f5f5;
                padding: 40px 0 20px;               
                .item{
                    flex: 1;
                    box-sizing: content-box;
                    width: 33.3%;
                    text-align: center;
                    img{
                        width: 90px;
                        height: 90px;
                    }
                    p{
                        font-size: 26px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        color: #666;
                    }
                }
            }
            .message{
                @include list;
                div{            
                    position: relative;
                    box-sizing: border-box;   
                    background: #f5f5f5;
                    text-align: center;    
                    width: 100%;
                    font-size: 24px;
                    color: #999;
                    padding: 24px 32px; 
                    &::before{
                        content: " ";
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: block;
                        width: 100%;
                        height: 1px;
                        background: #DDD;
                    }
                } 
            }
        }        
    }
}
</style>

