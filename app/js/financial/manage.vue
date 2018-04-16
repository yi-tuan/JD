<template>
    <div>
        <Panel title="理财精选" :class="$style.panel">
            <section :class="$style.content">
                <div :class="$style.item" v-for="item in datas" :key="item.title">
                    <div :class="$style.icon">
                        <img :src="item.img" :alt="item.title">
                    </div>
                    <ul :class="$style.description">
                        <li :class="$style.desc">
                            <p :class="$style.title">{{item.title}}</p>
                            <p :class="$style.sub">{{item.sub}}</p>
                        </li>
                        <li :class="$style.out">
                            <span>去赚钱 ></span>
                        </li>
                    </ul>
                </div>
            </section>
        </Panel>    
    </div>
</template>

<script>
import Panel from '../core/panel'
export default {
    components: {
        Panel
    },
    data () {
        return {
            datas: [
                {
                    img: '//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76',
                    title: '月度理财',
                    sub: '预期年化收益率4.50%'
                },
                {
                    img: '//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76',
                    title: '季度理财',
                    sub: '历史年化回报率5.50%'
                },
                {
                    img: '//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76',
                    title: '一年理财',
                    sub: '历史年化回报率5.80%'
                }
            ]
        }
    }
}
</script>
<style lang="scss" module>
@import '../../css/element.scss';
.panel{
    @include panel;
    &>h4{
        border-bottom: 1px solid #eee;
    }
    .content{
        @include list;
        width: 100%;
        .item{
            @include list(row); 
            height: 140px;   
            align-items: center;                    
            .icon{
                flex: 0 0 140px;                   
                text-align: center;                
                img{
                    width: 88px;
                    height: 88px;   
                }
            }     
            .description{
                flex: 1;
                height: 100%;
                @include list(row);
                justify-content: space-around;
                align-items: center;
                li{
                    flex: 1;
                }   
                .out{
                    flex: 0 0 39%;
                    box-sizing: border-box;
                    padding: 0 32px 0 20px;                
                    position: relative;
                    span{     
                        position: absolute;
                        margin-right: 32px;            
                        font-size: 28px;
                        color: #FF801A;
                    }
                }  
                .desc{
                    p{
                        height: 40px;
                        max-width: 224px;
                    }
                    .title{
                        font-size: 32px;
                        color: #333;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .sub{
                        font-size: 24px;
                        color: #ff3232;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }           
            }      
        } 
    }
}
</style>

