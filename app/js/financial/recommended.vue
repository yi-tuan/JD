<template>
    <div>
        <Panel title="精选推荐">
            <div>
                <section :class="$style.list">
                    <div v-for="(item,index) in values" :key="index" :class="$style.item">
                        <p :class="$style.title">
                            <span>{{item.title}}</span><span>{{item.label}}</span>
                        </p>
                        <p :class="$style.value">
                            {{item.value}}
                        </p>
                        <p :class="$style.desc">
                            {{item.desc}}
                        </p>
                    </div>
                </section>    
            </div> 
        </Panel>
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240" width="100%">
    </div>       
</template>

<script>
import Panel from '../core/panel'
export default {
    data () {
        return {
            values: [{
                    title: '定期理财',
                    label: '90天可质押',
                    value: '5.50%',
                    desc: '历史年化结算利率'
                },{
                    title: '年年盈',
                    label: '理财推荐',
                    value: '5.80%',
                    desc: '综合年化收益率'
                },{
                    title: '基智账户',
                    label: '组合投资',
                    value: '8%-10%',
                    desc: '止盈年华收益率'
                },{
                    title: '小白基金',
                    label: '超短期',
                    value: '5.00%',
                    desc: '7日年华收益率'
                }]
        }
    },
    components: {
        Panel
    }
}
</script>
<style lang="scss" module>
@import '../../css/element.scss';
.list{
    @include list(row);
    .item{        
        position: relative;
        box-sizing: border-box;
        padding-left: 32px;       
        width: 50%;   
        &::after{
            content: " ";
            width: 1px;
            height: 136px;
            display: block;
            position: absolute;
            top: 50%;
            right: 0;
            margin-top: -68px;
            border-right: 1px solid #eee;
        }
        &:nth-child(2n){
            &::after{
                display: none;
            }
        }
        .title{                    
            margin: 34px 0 16px;
            color: #333;
            height: 42px;
            line-height: 42px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            span{
                display: inline-block;
            }
            span:first-child{
                font-size: 30px;
                font-weight: 700;
                height: 42px;
                line-height: 42px;
            }
            span:last-child{
                position: relative;
                top: -3px;
                left: 8px;
                padding: 0 8px;
                font-size: 22px;
                color: #FF5155;               
                height: 34px;
                line-height: 34px;
                vertical-align: 1px;
                border: 1px solid #FF5155;
            }
        }
        .value{
            font-weight: 700;
            font-size: 44px;
            height: 58px;
            line-height: 58px;
            color: #FF5155;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .desc{
            font-size: 24px;
            height: 34px;
            line-height: 34px;
            color: #999;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>

