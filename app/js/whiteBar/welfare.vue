<template>
    <div>
        <div :class="$style.wrap">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t16798/322/621991060/49914/ec0d539b/5a991ebcN932c6731.jpg?width=750&height=320" width="100%">
        </div>
        <Panel title="白条福利" :class="$style.panel">
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
                            <span>立即查看 ></span>
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
                    img: '//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120',
                    title: '开通白条',
                    sub: '送百元元礼包'
                },
                {
                    img: '//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120',
                    title: '白条提额',
                    sub: '金融app专享提额礼包'
                }                
            ]
        }
    }
}
</script>
<style lang="scss" module>
@import '../../css/element.scss';
.wrap{
     margin-top: 120px;
    img{
       
        vertical-align: top;
    }
    
}
.panel{
    @include panel;
    margin: 0;
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
                    span{         
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
                        color: #999999;
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

