if (!Object.defineProperty) {
    alert('浏览器版本过低');
}

const numberFormatter = num => {
    if (num < 10000)
        return `${num.toLocaleString()}`
    if (num < 100000000)
        return `${(num / 10000).toLocaleString()} W`
    return `${(num / 100000000).toLocaleString()} E`
}

const ROGUE_NAMES = {
    'rogue_2': '傀影与猩红孤钻',
    'rogue_3': '水月与深蓝之树',
    'rogue_4': '探索者的银凇止境',
    'rogue_5': '萨卡兹的无终奇语',
    'rogue_6': '岁的界园志异',
}

const ROGUE_STARTS = {
    'rogue_2': '2022-01-05',
    'rogue_3': '2022-09-27',
    'rogue_4': '2023-07-13',
    'rogue_5': '2024-07-16',
    'rogue_6': '2025-07-15',
}

const ENDINGS_3 = {
    1: '平凡即是喜乐',
    2: '静谧时代',
    3: '息潮的代价',
    4: '如星空般深蓝',
}

const ENDINGS_4 = {
    1: '越过群山',
    2: '直至冬夜降临',
    3: '自深处的一瞥',
    4: '终始',
}

const ENDINGS_5 = {
    1: '憧憬未来',
    2: '双王记',
    3: '天使之城',
    4: '遁入阇那',
    5: '无瑕之日',
}

const ENDINGS_6 = {
    1: '依律镇抚',
    2: '长卷留痕',
    3: '黑白入玄',
    4: '无中生有',
    5: '未知结局五',
}

const CHART_NAMES = {
    'node_and_invest': '通过节点与存入源石锭',
    'clear': '通关次数',
    'node': '通过节点',
    'invest': '存入源石锭',
}

// Vue 3
const { createApp } = Vue;
const app = createApp({
    el: '#app',
    data: () => ({
        datetime_str_options: {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            hour12: false,
        },
        date_str_options: {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour12: false,
        },
        time_str_options: {
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            hour12: false,
        },
        group_id: '',
        ji_interval_str: '',
        last_update_timestamp: 0,
        last_update_fixed: true,
        show_ji_stats_custom_column: false,
        table_ji_stats_height: 'auto',
        ji_stats_index_list: [],
        ji_stats_data: {
            'channel': 0,
            'uid': 0,
            'nickname': '博士',
            'first': '1970-01-01',
            'rogue_2': {
                'latest': {},
                'node': {},
                'invest': {},
                'clear': {},
            },
            'rogue_3': {
                'latest': {},
                'node': {},
                'invest': {},
                'clear': {},
            },
            'rogue_4': {
                'latest': {},
                'node': {},
                'invest': {},
                'clear': {},
            },
            'rogue_5': {
                'latest': {},
                'node': {},
                'invest': {},
                'clear': {},
            },
            'rogue_6': {
                'latest': {},
                'node': {},
                'invest': {},
                'clear': {},
            },
        },
        members: [],
        range: '',
        allChallenges: [],
        activeIndex: '4',
        nameMap: {},
        containTailAndContinue: true,
        globalTableData: [],
        colorList: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
        missChart: null,
        bossHitChart: null,
        totalTimeChartStart: null,
        totalTimeChartEnd: null,
        personalProgressChart: null,
        personalTimeChart: null,
        isLoading: true,
        selectingTab: "main",
        selectingQQid: null,
    }),
    mounted() {
        this.selectingTab = "main";

        this.chart_main = echarts.init(document.getElementById('div_chart_main'));
        this.chart_heatmap_node_all = echarts.init(document.getElementById('div_chart_heatmap_node_all'));
        this.chart_heatmap_node_invest_all = echarts.init(document.getElementById('div_chart_heatmap_node_invest_all'));
        this.chart_line_node_all = echarts.init(document.getElementById('div_chart_line_node_all'));
        this.chart_node_invest_2 = echarts.init(document.getElementById('div_chart_node_invest_2'));
        this.chart_clear_2 = echarts.init(document.getElementById('div_chart_clear_2'));
        this.chart_node_2 = echarts.init(document.getElementById('div_chart_node_2'));
        this.chart_invest_2 = echarts.init(document.getElementById('div_chart_invest_2'));
        this.chart_node_invest_3 = echarts.init(document.getElementById('div_chart_node_invest_3'));
        this.chart_clear_3 = echarts.init(document.getElementById('div_chart_clear_3'));
        this.chart_node_3 = echarts.init(document.getElementById('div_chart_node_3'));
        this.chart_invest_3 = echarts.init(document.getElementById('div_chart_invest_3'));
        this.chart_node_invest_4 = echarts.init(document.getElementById('div_chart_node_invest_4'));
        this.chart_clear_4 = echarts.init(document.getElementById('div_chart_clear_4'));
        this.chart_node_4 = echarts.init(document.getElementById('div_chart_node_4'));
        this.chart_invest_4 = echarts.init(document.getElementById('div_chart_invest_4'));
        this.chart_node_invest_5 = echarts.init(document.getElementById('div_chart_node_invest_5'));
        this.chart_node_5 = echarts.init(document.getElementById('div_chart_node_5'));
        this.chart_invest_5 = echarts.init(document.getElementById('div_chart_invest_5'));
        this.chart_node_6 = echarts.init(document.getElementById('div_chart_node_6'));

        this.charts = {
            'rogue_2': {
                'node_and_invest': this.chart_node_invest_2,
                'clear': this.chart_clear_2,
                'node': this.chart_node_2,
                'invest': this.chart_invest_2,
            },
            'rogue_3': {
                'node_and_invest': this.chart_node_invest_3,
                'clear': this.chart_clear_3,
                'node': this.chart_node_3,
                'invest': this.chart_invest_3,
            },
            'rogue_4': {
                'node_and_invest': this.chart_node_invest_4,
                'clear': this.chart_clear_4,
                'node': this.chart_node_4,
                'invest': this.chart_invest_4,
            },
            'rogue_5': {
                'node_and_invest': this.chart_node_invest_5,
                'clear': null,
                'node': this.chart_node_5,
                'invest': this.chart_invest_5,
            },
            'rogue_6': {
                'node_and_invest': null,
                'clear': null,
                'node': this.chart_node_6,
                'invest': null,
            },
        }

        this.load_login_data();
        this.fetchData();
        setTimeout(this.resizeAll, 100);
        // this.update_table_ji_stats_height();

        // window.addEventListener('resize', () => this.update_table_ji_stats_height());
        window.addEventListener('resize', this.resizeAll);
    },
    watch: {
        selectingTab: function() {
            this.init();
            setTimeout(this.resizeAll, 100);
        },
    },

    methods: {
        // tools function
        sum: (iterable) => {
            let sum = 0;
            iterable.forEach(v => sum += v);
            return sum;
        },
        formatTo2: (num) => { return (num >= 10) ?  num.toString() : '0' + num.toString() },

        load_login_data() {
            if (!window.localStorage) {
                console.error("浏览器不支持localStorage");
            }
            else {
                console.log('加载登录信息');
                if (!('login_token' in window.localStorage) || !('login_identifier' in window.localStorage)) {
                    console.log('没有找到已保存的登录信息');
                    return false;
                }
                this.login_identifier = window.localStorage['login_identifier'];
                this.login_token = window.localStorage['login_token'];
                return true;
            }
        },

        fetchData: function() {
            const that = this;
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            payload = {
                'type_name': 'player',
                'group_id': this.group_id,
                'user_id': this.login_identifier || '',
                'login_token': this.login_token || '',
            }
            axios.post('https://yubo.run/api/arknights/get_ji_stats', payload).then(res => {
                if (res.data.code != 0) {
                    that.$alert(res.data.message, '获取记录失败');
                    // that.isLoading = false;
                    if (res.data.go_to_home) {
                        setTimeout(this.goto_user_home, 3000);
                    }
                    return;
                }
                that.ji_stats_data = res.data;
                that.init();
                this.init_main();
                // this.update_table_ji_stats_height();
            }).catch(function (error) {
                that.$alert(error, '获取数据失败，请联系维护人员');
                that.isLoading = false;
                console.error(error);
                console.error(error.stack);
            });
        },

        goto_user_home: function() {
            window.location.href = `https://yubo.run/user/`;
        },

        get_channel_mark: function(channel_id) {
            return channel_id == 1 ? '<span class="span_channel_1">■</span>' : channel_id == 2 ? '<span class="span_channel_2">■</span>' : '';
        },

        handle_custom_column: function(event) {
            console.time('handle_custom_column');
            this.show_ji_stats_custom_column = !this.show_ji_stats_custom_column;
            console.timeEnd('handle_custom_column');
        },

        get_datetime_str_28: function(date) {
            let hour = date.getHours();
            let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            let date_str = date.toLocaleString('chinese', { timeZone: tz, ...this.date_str_options }).split('/').join('-');
            let time_str = date.toLocaleString('chinese', { timeZone: tz, ...this.time_str_options });
            // if (16 * 3600 <= +date && +date < 20 * 3600) {
            if (16 * 3600 * 1000 <= (+date % (24 * 3600 * 1000)) && (+date % (24 * 3600 * 1000)) < 20 * 3600 * 1000) {
                date = new Date(date - 24 * 3600 * 1000);
                date_str = date.toLocaleString('chinese', { timeZone: tz, ...this.date_str_options }).split('/').join('-');
                time_str = 24 + hour + time_str.slice(2, 8);
            }
            return `${date_str} ${time_str}`;
        },

        getMonday: function(d) {
            d = new Date(d);
            var day = d.getDay(), diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
            return new Date(d.setDate(diff));
        },

        get_ceil: function (a) {
            let m = 1;
            while (a > 1) {
                a = Math.round(a / 10)
                m *= 10;
            }
            return a * m;
        },

        getElementTop: function(element) {
            var actualTop = element.offsetTop;
            var current = element.offsetParent;
            while (current !== null){
                actualTop += current.offsetTop;
                current = current.offsetParent;
            }
            return actualTop;
        },

        update_table_ji_stats_height: function() {
            const wrapper = this.$refs.table_ji_stats;
            if (wrapper) {
                // let height_to_set = wrapper.offsetHeight;
                // document.getElementById('table_ji_stats').style.height = (
                //     parseInt(document.getElementById('table_ji_stats').style.maxHeight.replace('px', '')) +
                //     document.documentElement.clientHeight - (
                //         app.getElementTop(document.getElementById('table_ji_stats')) + parseInt(document.getElementById('table_ji_stats').style.maxHeight.replace('px', ''))
                //     )
                // )
                let height_to_set = document.documentElement.clientHeight - this.getElementTop(document.getElementById('table_ji_stats'));
                this.table_ji_stats_height = height_to_set - 20;
                // document.getElementById('table_ji_stats').style.maxHeight = `${this.table_ji_stats_height}px`;
                // console.log('this.table_ji_stats_height', this.table_ji_stats_height);
                // console.log(document.getElementById('table_ji_stats').clientHeight);
            }
        },

        init: function() {
            this.isLoading = true;
            let nd = new Date();
            let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            nd.setTime(this.last_update_timestamp * 1000);
            let first_date = new Date(this.ji_stats_data.first);
            first_date.setTime(+first_date - 4 * 60 * 60 * 1000);
            let first_date_str = this.get_datetime_str_28(first_date);
            let last_update = new Date(this.ji_stats_data.last_update_timestamp * 1000);
            let last_update_str = this.get_datetime_str_28(last_update);
            this.ji_interval_str = `统计区间 ${first_date_str} - ${last_update_str}`;
            if (this.selectingTab === 'main') {
                // this.init_main();
                this.init_chart_main();
                this.init_chart_heatmap_node_all();
                this.init_chart_heatmap_node_invest_all();
                this.init_chart_line_node_all();
                // this.update_table_ji_stats_height();
                // this.ji_stats_sort_change('node_4', 'descending');
            }
            else if (this.selectingTab === 'rogue_2') {
                this.init_charts(this.selectingTab);
            }
            else if (this.selectingTab === 'rogue_3') {
                this.init_charts(this.selectingTab);
            }
            else if (this.selectingTab === 'rogue_4') {
                this.init_charts(this.selectingTab);
            }
            else if (this.selectingTab === 'rogue_5'){
                this.init_charts(this.selectingTab);
            }
            else if (this.selectingTab === 'rogue_6'){
                this.init_charts(this.selectingTab);
            }
            this.isLoading = false;
        },

        init_main: function() {
            this.ji_stats_data.rogue_2.latest.total_clear_count = 0;
            for (let date_str in this.ji_stats_data.rogue_2.clear) {
                this.ji_stats_data.rogue_2.latest.total_clear_count += this.ji_stats_data.rogue_2.clear[date_str];
            }

            let clear_endings_3 = [];
            for (ending_index of this.ji_stats_data.rogue_3.latest.clearInfo.endings) {
                clear_endings_3.push(ENDINGS_3[ending_index]);
            }
            let clear_endings_str_3 = clear_endings_3.join('、');
            this.ji_stats_data.rogue_3.latest.clear_info_str = `波涛迭起${this.ji_stats_data.rogue_3.latest.clearInfo.grade} ${clear_endings_str_3}`;
            this.ji_stats_data.rogue_3.latest.total_clear_count = 0;
            for (let date_str in this.ji_stats_data.rogue_3.clear) {
                this.ji_stats_data.rogue_3.latest.total_clear_count += this.ji_stats_data.rogue_3.clear[date_str];
            }

            let clear_endings_4 = [];
            for (ending_index of this.ji_stats_data.rogue_4.latest.clearInfo.endings) {
                clear_endings_4.push(ENDINGS_4[ending_index]);
            }
            let clear_endings_str_4 = clear_endings_4.join('、');
            this.ji_stats_data.rogue_4.latest.clear_info_str = `挑战自然${this.ji_stats_data.rogue_4.latest.clearInfo.grade} ${clear_endings_str_4}`;
            this.ji_stats_data.rogue_4.latest.total_clear_count = 0;
            let total_clear_count_list = Object.values(this.ji_stats_data.rogue_4.clear)
            for (let i = 0; i < total_clear_count_list.length; i++) {
                this.ji_stats_data.rogue_4.latest.total_clear_count += total_clear_count_list[i];
            }

            let clear_endings_5 = [];
            for (ending_index of this.ji_stats_data.rogue_5.latest.clearInfo.endings) {
                clear_endings_5.push(ENDINGS_5[ending_index]);
            }
            let clear_endings_str_5 = clear_endings_5.join('、');
            this.ji_stats_data.rogue_5.latest.clear_info_str = `直面魂灵${this.ji_stats_data.rogue_5.latest.clearInfo.grade} ${clear_endings_str_5}`;

            let clear_endings_6 = [];
            // for (ending_index of this.ji_stats_data.rogue_6.latest.clearInfo.endings) {
            //     clear_endings_6.push(ENDINGS_6[ending_index]);
            // }
            let clear_endings_str_6 = clear_endings_6.join('、');
            this.ji_stats_data.rogue_6.latest.clear_info_str = `请君入园${this.ji_stats_data.rogue_6.latest.clearInfo.grade} ${clear_endings_str_6}`;


            // this.init_chart_main();
            // this.init_chart_heatmap_node_all();
        },


        init_charts: function(rogue_id) {
            this.init_chart_node_and_invest(rogue_id);
            this.init_chart_heatmap(rogue_id, 'clear');
            this.init_chart_heatmap(rogue_id, 'node');
            this.init_chart_heatmap(rogue_id, 'invest');
        },

        init_chart_main: function() {
            // 最新记录
            let node_data_list = [];
            let invest_data_list = [];
            node_data_list.push(this.ji_stats_data.rogue_2.latest.nodes);
            node_data_list.push(this.ji_stats_data.rogue_3.latest.node);
            node_data_list.push(this.ji_stats_data.rogue_4.latest.node);
            node_data_list.push(this.ji_stats_data.rogue_5.latest.node);
            node_data_list.push(this.ji_stats_data.rogue_6.latest.node);
            invest_data_list.push(this.ji_stats_data.rogue_2.latest.bank);
            invest_data_list.push(this.ji_stats_data.rogue_3.latest.invest);
            invest_data_list.push(this.ji_stats_data.rogue_4.latest.invest);
            invest_data_list.push(this.ji_stats_data.rogue_5.latest.invest);
            var option = {
                title: {
                    left: 'center',
                    text: `个人集集统计 ${this.ji_stats_data.nickname}`
                },
                grid: {
                    height: '70%',
                    top: '15%',
                    left: 80,
                    right: 80,
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                toolbox: {
                    feature: {
                        saveAsImage: { show: true }
                    }
                },
                legend: {
                    top: 30,
                    data: ['通过节点', '存入源石锭']
                },
                xAxis: [
                    {
                        type: 'category',
                        // type: 'time',
                        data: Object.values(ROGUE_NAMES),
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '通过节点',
                        // min: 'dataMin',
                        // max: 'dataMax',
                        // interval: 50,
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    {
                        type: 'value',
                        name: '存入源石锭',
                        // min: '0',
                        // min: 'dataMin',
                        // max: 'dataMax',
                        // interval: 5,
                        axisLabel: {
                            formatter: '{value}'
                        }
                    }
                ],
                series: [
                    {
                        name: '通过节点',
                        type: 'bar',
                        tooltip: {
                            valueFormatter: function (value) {
                                return value;
                            }
                        },
                        label: {
                            show: true,
                            position: 'inside'
                        },
                        data: node_data_list,
                    },
                    {
                        name: '存入源石锭',
                        type: 'bar',
                        yAxisIndex: 1,
                        // tooltip: {
                        //     valueFormatter: function (value) {
                        //         return value + ' °C';
                        //     }
                        // },
                        label: {
                            show: true,
                            position: 'inside'
                        },
                        data: invest_data_list,
                    }
                ]
            };

            this.chart_main && this.chart_main.setOption(option);
        },

        init_chart_heatmap_node_all: function() {
            // 用init_chart_heatmap改的
            const days = [
                'Sunday', 'Saturday', 'Friday', 'Thursday',
                'Wednesday', 'Tuesday', 'Monday',
            ];
            let weeks = [];
            let date_list = Object.keys(this.ji_stats_data['rogue_2']['node']);
            if (Object.keys(this.ji_stats_data['rogue_3']['node']).length > date_list.length) {
                date_list = Object.keys(this.ji_stats_data['rogue_3']['node']);
            }
            if (Object.keys(this.ji_stats_data['rogue_4']['node']).length > date_list.length) {
                date_list = Object.keys(this.ji_stats_data['rogue_4']['node']);
            }
            if (Object.keys(this.ji_stats_data['rogue_5']['node']).length > date_list.length) {
                date_list = Object.keys(this.ji_stats_data['rogue_5']['node']);
            }
            if (Object.keys(this.ji_stats_data['rogue_6']['node']).length > date_list.length) {
                date_list = Object.keys(this.ji_stats_data['rogue_6']['node']);
            }
            let first_day = new Date(Math.max(new Date(date_list[0]), new Date(this.ji_stats_data.first)));
            let last_day = new Date(date_list.slice(-1)[0]);
            let first_monday = this.getMonday(first_day);
            let last_monday = this.getMonday(last_day);
            let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            for (let date = new Date(first_monday); date < last_day; date = new Date(date.setDate(date.getDate() + 7))) {
                weeks.push(date.toLocaleString('chinese', { timeZone: tz, ...this.date_str_options }).split('/').join('-'));
            }
            let data = [];
            let max_data = 0;
            for (let date = new Date(first_monday), week_index = 0, day_index = 0; date < last_day; date = new Date(date.setDate(date.getDate() + 1))) {
                let date_str = date.toLocaleString('chinese', { timeZone: tz, ...this.date_str_options }).split('/').join('-');
                let node_count = 0;
                node_count += this.ji_stats_data['rogue_2']['node'][date_str] || 0;
                node_count += this.ji_stats_data['rogue_3']['node'][date_str] || 0;
                node_count += this.ji_stats_data['rogue_4']['node'][date_str] || 0;
                node_count += this.ji_stats_data['rogue_5']['node'][date_str] || 0;
                node_count += this.ji_stats_data['rogue_6']['node'][date_str] || 0;
                data.push([week_index, 6 - day_index, node_count || '-']);

                day_index += 1;
                if (day_index > 6) {
                    week_index += 1;
                    day_index = day_index % 7;
                }
                if (node_count && node_count > max_data) {
                    max_data = node_count;
                }
            }
            option = {
                title: {
                    top: 0,
                    left: 'center',
                    text: `总通过节点 ${this.ji_stats_data.nickname}`
                },
                tooltip: {
                    position: 'top',
                    formatter: function(params) {
                        let date = new Date(weeks[params.value[0]]);
                        date.setDate(date.getDate() + 6 - params.value[1]);
                        let date_str = date.toLocaleString('chinese', { year: 'numeric', month: '2-digit', day: '2-digit' }).split('/').join('-');
                        return `${date_str} ${params.value[2]}`;
                    }
                },
                toolbox: {
                    feature: {
                        saveAsImage: { show: true }
                    }
                },
                grid: {
                    height: '70%',
                    top: '15%',
                    left: 80,
                    right: 80,
                },
                xAxis: {
                    type: 'category',
                    data: weeks,
                    splitArea: {
                        show: true
                    }
                },
                yAxis: {
                    type: 'category',
                    data: days,
                    splitArea: {
                        show: true
                    }
                },
                dataZoom: [
                    // {
                    //     type: 'inside',
                    //     start: 0,
                    //     end: 100
                    // },
                    {
                        xAxisIndex: [0],
                        filterMode: 'filter',
                        start: 0,
                        end: 100
                    }
                ],
                visualMap: {
                    min: 0,
                    max: max_data,
                    calculable: true,
                    orient: 'vertical',
                    right: '0%',
                    top: 'center',
                    filterMode: 'filter',
                    outOfRange: {
                        symbol: 'none',
                        color: '#f1f1f1',
                    },
                },
                series: [
                    {
                        name: '总通过节点',
                        type: 'heatmap',
                        data: data,
                        label: {
                            show: true
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

            this.chart_heatmap_node_all && this.chart_heatmap_node_all.setOption(option);
        },

        init_chart_heatmap_node_invest_all: function() {
            // 用init_chart_heatmap_node_all改的
            // 存钱系数
            // 计算公式：log10(100 * 存入源石锭² / (总通过节点 + 1) + 1)
            const days = [
                'Sunday', 'Saturday', 'Friday', 'Thursday',
                'Wednesday', 'Tuesday', 'Monday',
            ];
            let weeks = [];
            let date_list = Object.keys(this.ji_stats_data['rogue_2']['node']);
            if (Object.keys(this.ji_stats_data['rogue_3']['node']).length > date_list.length) {
                date_list = Object.keys(this.ji_stats_data['rogue_3']['node']);
            }
            if (Object.keys(this.ji_stats_data['rogue_4']['node']).length > date_list.length) {
                date_list = Object.keys(this.ji_stats_data['rogue_4']['node']);
            }
            if (Object.keys(this.ji_stats_data['rogue_5']['node']).length > date_list.length) {
                date_list = Object.keys(this.ji_stats_data['rogue_5']['node']);
            }
            let first_day = new Date(Math.max(new Date(date_list[0]), new Date(this.ji_stats_data.first)));
            let last_day = new Date(date_list.slice(-1)[0]);
            let first_monday = this.getMonday(first_day);
            let last_monday = this.getMonday(last_day);
            let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            for (let date = new Date(first_monday); date < last_day; date = new Date(date.setDate(date.getDate() + 7))) {
                weeks.push(date.toLocaleString('chinese', { timeZone: tz, ...this.date_str_options }).split('/').join('-'));
            }
            let data = [];
            let max_data = 0;
            for (let date = new Date(first_monday), week_index = 0, day_index = 0; date < last_day; date = new Date(date.setDate(date.getDate() + 1))) {
                let date_str = date.toLocaleString('chinese', { timeZone: tz, ...this.date_str_options }).split('/').join('-');
                let node_count = 0;
                let invest_count = 0;
                node_count += this.ji_stats_data['rogue_2']['node'][date_str] || 0;
                node_count += this.ji_stats_data['rogue_3']['node'][date_str] || 0;
                node_count += this.ji_stats_data['rogue_4']['node'][date_str] || 0;
                node_count += this.ji_stats_data['rogue_5']['node'][date_str] || 0;
                invest_count += this.ji_stats_data['rogue_2']['invest'][date_str] || 0;
                invest_count += this.ji_stats_data['rogue_3']['invest'][date_str] || 0;
                invest_count += this.ji_stats_data['rogue_4']['invest'][date_str] || 0;
                invest_count += this.ji_stats_data['rogue_5']['invest'][date_str] || 0;
                let invest_coefficient = invest_count ? (Math.log10((invest_count * invest_count) / (node_count + 1) * 100 + 1)).toFixed(1) : 0;
                data.push([week_index, 6 - day_index, invest_coefficient || '-']);

                day_index += 1;
                if (day_index > 6) {
                    week_index += 1;
                    day_index = day_index % 7;
                }
                if (invest_coefficient && invest_coefficient > max_data) {
                    max_data = invest_coefficient;
                }
            }
            option = {
                title: {
                    top: 0,
                    left: 'center',
                    text: `存钱系数（log10(100 * 存入源石锭² / (总通过节点 + 1) + 1)） ${this.ji_stats_data.nickname}`
                },
                tooltip: {
                    position: 'top',
                    formatter: function(params) {
                        let date = new Date(weeks[params.value[0]]);
                        date.setDate(date.getDate() + 6 - params.value[1]);
                        let date_str = date.toLocaleString('chinese', { year: 'numeric', month: '2-digit', day: '2-digit' }).split('/').join('-');
                        return `${date_str} ${params.value[2]}`;
                    }
                },
                toolbox: {
                    feature: {
                        saveAsImage: { show: true }
                    }
                },
                grid: {
                    height: '70%',
                    top: '10%',
                    left: 80,
                    right: 80,
                },
                xAxis: {
                    type: 'category',
                    data: weeks,
                    splitArea: {
                        show: true
                    }
                },
                yAxis: {
                    type: 'category',
                    data: days,
                    splitArea: {
                        show: true
                    }
                },
                dataZoom: [
                    // {
                    //     type: 'inside',
                    //     start: 0,
                    //     end: 100
                    // },
                    {
                        xAxisIndex: [0],
                        filterMode: 'filter',
                        start: 0,
                        end: 100
                    }
                ],
                visualMap: {
                    min: 0,
                    max: max_data,
                    calculable: true,
                    orient: 'vertical',
                    right: '0%',
                    top: 'center',
                    filterMode: 'filter',
                    outOfRange: {
                        symbol: 'none',
                        color: '#f1f1f1',
                    },
                },
                series: [
                    {
                        name: '存钱系数（log10(100 * 存入源石锭² / (总通过节点 + 1) + 1)）',
                        type: 'heatmap',
                        data: data,
                        label: {
                            show: true
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

            this.chart_heatmap_node_invest_all && this.chart_heatmap_node_invest_all.setOption(option);
        },

        init_chart_line_node_all: function() {
            let date_list = Object.keys(this.ji_stats_data['rogue_2']['node']);
            if (Object.keys(this.ji_stats_data['rogue_3']['node']).length > date_list.length) {
                date_list = Object.keys(this.ji_stats_data['rogue_3']['node']);
            }
            if (Object.keys(this.ji_stats_data['rogue_4']['node']).length > date_list.length) {
                date_list = Object.keys(this.ji_stats_data['rogue_4']['node']);
            }
            if (Object.keys(this.ji_stats_data['rogue_5']['node']).length > date_list.length) {
                date_list = Object.keys(this.ji_stats_data['rogue_5']['node']);
            }
            if (Object.keys(this.ji_stats_data['rogue_6']['node']).length > date_list.length) {
                date_list = Object.keys(this.ji_stats_data['rogue_6']['node']);
            }
            let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            let first_day = new Date(Math.max(new Date(date_list[0]), new Date(this.ji_stats_data.first)));
            let first_day_str = first_day.toLocaleString('chinese', { timeZone: tz, ...this.date_str_options }).split('/').join('-');
            date_list = date_list.slice(date_list.indexOf(first_day_str));
            let node_delta_list_2 = [];
            let node_delta_list_3 = [];
            let node_delta_list_4 = [];
            let node_delta_list_5 = [];
            let node_delta_list_6 = [];
            for (let i = 0; i < date_list.length; i++) {
                let date_str = date_list[i];
                node_delta_list_2.push(this.ji_stats_data['rogue_2']['node'][date_str] || 0);
                node_delta_list_3.push(this.ji_stats_data['rogue_3']['node'][date_str] || 0);
                node_delta_list_4.push(this.ji_stats_data['rogue_4']['node'][date_str] || 0);
                node_delta_list_5.push(this.ji_stats_data['rogue_5']['node'][date_str] || 0);
                node_delta_list_6.push(this.ji_stats_data['rogue_6']['node'][date_str] || 0);
            }
            let node_total_list_2 = node_delta_list_2.slice();
            let node_total_list_3 = node_delta_list_3.slice();
            let node_total_list_4 = node_delta_list_4.slice();
            let node_total_list_5 = node_delta_list_5.slice();
            let node_total_list_6 = node_delta_list_6.slice();
            node_total_list_2.push(this.ji_stats_data['rogue_2']['latest']['nodes']);
            for (let i = node_total_list_2.length - 2; i > 0; i--) {
                node_total_list_2[i] = node_total_list_2[i + 1] - node_total_list_2[i];
            }
            node_total_list_2 = node_total_list_2.slice(1);
            node_total_list_3.push(this.ji_stats_data['rogue_3']['latest']['node']);
            for (let i = node_total_list_3.length - 2; i > 0; i--) {
                node_total_list_3[i] = node_total_list_3[i + 1] - node_total_list_3[i];
            }
            node_total_list_3 = node_total_list_3.slice(1);
            node_total_list_4.push(this.ji_stats_data['rogue_4']['latest']['node']);
            for (let i = node_total_list_4.length - 2; i > 0; i--) {
                node_total_list_4[i] = node_total_list_4[i + 1] - node_total_list_4[i];
            }
            node_total_list_4 = node_total_list_4.slice(1);
            node_total_list_5.push(this.ji_stats_data['rogue_5']['latest']['node']);
            for (let i = node_total_list_5.length - 2; i > 0; i--) {
                node_total_list_5[i] = node_total_list_5[i + 1] - node_total_list_5[i];
            }
            node_total_list_5 = node_total_list_5.slice(1);
            node_total_list_6.push(this.ji_stats_data['rogue_6']['latest']['node']);
            for (let i = node_total_list_6.length - 2; i > 0; i--) {
                node_total_list_6[i] = node_total_list_6[i + 1] - node_total_list_6[i];
            }
            node_total_list_6 = node_total_list_6.slice(1);
            option = {
                title: {
                    top: 0,
                    left: 'center',
                    text: `总通过节点 ${this.ji_stats_data.nickname}`
                },
                tooltip: {
                    position: 'top',
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                toolbox: {
                    feature: {
                        saveAsImage: { show: true }
                    }
                },
                grid: {
                    height: '70%',
                    top: '10%',
                    left: 80,
                    right: 80,
                },
                xAxis: {
                    type: 'category',
                    data: date_list,
                    splitArea: {
                        show: true
                    }
                },
                yAxis: [
                    {
                        type: 'value',
                        name: '总通过节点',
                    },
                    {
                        type: 'value',
                        name: '增量',
                    }
                ],
                legend: {
                    top: 30,
                    data: [
                        '傀影', '水月', '萨米', '萨卡兹', '界园',
                        '傀影增量', '水月增量', '萨米增量', '萨卡兹增量', '界园增量',
                    ],
                    selected: {
                        '傀影增量': true,
                        '水月增量': true,
                        '萨米增量': true,
                        '萨卡兹增量': true,
                        '界园增量': true,
                    },
                },
                dataZoom: [
                    {
                        type: 'slider',
                        bottom: '2%',
                        xAxisIndex: [0],
                        filterMode: 'filter',
                        start: 0,
                        end: 100
                    }
                ],
                series: [
                    {
                        name: '傀影',
                        type: 'line',
                        data: node_total_list_2,
                    },
                    {
                        name: '水月',
                        type: 'line',
                        data: node_total_list_3,
                    },
                    {
                        name: '萨米',
                        type: 'line',
                        data: node_total_list_4,
                    },
                    {
                        name: '萨卡兹',
                        type: 'line',
                        data: node_total_list_5,
                    },
                    {
                        name: '界园',
                        type: 'line',
                        data: node_total_list_6,
                    },
                    {
                        name: '傀影增量',
                        type: 'bar',
                        data: node_delta_list_2,
                        yAxisIndex: 1,
                    },
                    {
                        name: '水月增量',
                        type: 'bar',
                        data: node_delta_list_3,
                        yAxisIndex: 1,
                    },
                    {
                        name: '萨米增量',
                        type: 'bar',
                        data: node_delta_list_4,
                        yAxisIndex: 1,
                    },
                    {
                        name: '萨卡兹增量',
                        type: 'bar',
                        data: node_delta_list_5,
                        yAxisIndex: 1,
                    },
                    {
                        name: '界园增量',
                        type: 'bar',
                        data: node_delta_list_6,
                        yAxisIndex: 1,
                    },
                ]
            };

            this.chart_line_node_all && this.chart_line_node_all.setOption(option);
        },

        init_chart_node_and_invest: function(rogue_id) {
            // 每个月有记录的最后一天
            let total_node_dict = {};
            let total_invest_dict = {};
            let last_day_of_month_set = new Set();
            let date_list = Object.keys(this.ji_stats_data[rogue_id]['node']);
            let first_day = new Date(this.ji_stats_data.first);
            let last_day = new Date(date_list.slice(-1)[0]);
            let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            for (let year = first_day.getFullYear(); year <= last_day.getFullYear(); year++) {
                for (let month = 1; month <= 12; month++) {
                    let current_total_node = 0;
                    let current_total_invest = 0;
                    let last_day_of_month = new Date(year, month, 0);
                    if (last_day_of_month - last_day_of_month.getTimezoneOffset() * 60 * 1000 < first_day) {
                        continue;
                    }
                    for (let day = (new Date(year, month, 0)).getDate(); day >= 1; day--) {
                        let date_str = (new Date(year, month - 1, day)).toLocaleString('chinese', { timeZone: tz, ...this.date_str_options }).split('/').join('-');
                        if (date_list.includes(date_str)) {
                            last_day_of_month_set.add(date_str);
                            break;
                        }
                    }
                    for (let day = 1; day <= (new Date(year, month, 0)).getDate(); day++) {
                        let date_str = (new Date(year, month - 1, day)).toLocaleString('chinese', { timeZone: tz, ...this.date_str_options }).split('/').join('-');
                        if (date_list.includes(date_str)) {
                            current_total_node += this.ji_stats_data[rogue_id]['node'][date_str];
                            current_total_invest += this.ji_stats_data[rogue_id]['invest'][date_str];
                            total_node_dict[date_str] = current_total_node;
                            total_invest_dict[date_str] = current_total_invest;
                        }
                    }
                }
            }
            let month_list = [];
            let node_data_list = [];
            let invest_data_list = [];
            for (let last_day_of_month of last_day_of_month_set) {
                month_list.push(last_day_of_month.slice(0, 7));
                node_data_list.push(total_node_dict[last_day_of_month]);
                invest_data_list.push(total_invest_dict[last_day_of_month]);
            }
            var option = {
                title: {
                    left: 'center',
                    text: `${ROGUE_NAMES[rogue_id]} ${CHART_NAMES['node_and_invest']} ${this.ji_stats_data.nickname}`
                },
                grid: {
                    height: '70%',
                    top: '10%',
                    left: 80,
                    right: 80,
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                toolbox: {
                    feature: {
                        dataView: { show: true, readOnly: true },
                        magicType: { show: true, type: ['line', 'bar'] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                legend: {
                    top: 30,
                    data: ['通过节点', '存入源石锭']
                },
                xAxis: [
                    {
                        type: 'category',
                        // type: 'time',
                        data: month_list,
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '通过节点',
                        // min: 'dataMin',
                        // max: 'dataMax',
                        // interval: 50,
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    {
                        type: 'value',
                        name: '存入源石锭',
                        // min: '0',
                        // min: 'dataMin',
                        // max: 'dataMax',
                        // interval: 5,
                        axisLabel: {
                            formatter: '{value}'
                        }
                    }
                ],
                series: [
                    {
                        name: '通过节点',
                        type: 'bar',
                        tooltip: {
                            valueFormatter: function (value) {
                                return value;
                            }
                        },
                        label: {
                            show: true,
                            position: 'inside'
                        },
                        data: node_data_list,
                    },
                    {
                        name: '存入源石锭',
                        type: 'line',
                        yAxisIndex: 1,
                        // tooltip: {
                        //     valueFormatter: function (value) {
                        //         return value + ' °C';
                        //     }
                        // },
                        data: invest_data_list,
                    }
                ]
            };

            this.charts[rogue_id]['node_and_invest'] && this.charts[rogue_id]['node_and_invest'].setOption(option);
        },

        init_chart_heatmap: function(rogue_id, chart_name) {
            const days = [
                'Sunday', 'Saturday', 'Friday', 'Thursday',
                'Wednesday', 'Tuesday', 'Monday',
            ];
            let weeks = [];
            let date_list = Object.keys(this.ji_stats_data[rogue_id][chart_name]);
            let first_day = new Date(Math.max(new Date(date_list[0]), new Date(this.ji_stats_data.first)));
            let last_day = new Date(date_list.slice(-1)[0]);
            let first_monday = this.getMonday(first_day);
            let last_monday = this.getMonday(last_day);
            let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            for (let date = new Date(first_monday); date < last_day; date = new Date(date.setDate(date.getDate() + 7))) {
                weeks.push(date.toLocaleString('chinese', { timeZone: tz, ...this.date_str_options }).split('/').join('-'));
            }
            let data = [];
            let max_data = 0;
            for (let date = new Date(first_monday), week_index = 0, day_index = 0; date < last_day; date = new Date(date.setDate(date.getDate() + 1))) {
                let date_str = date.toLocaleString('chinese', { timeZone: tz, ...this.date_str_options }).split('/').join('-');
                let temp_data = this.ji_stats_data[rogue_id][chart_name][date_str];
                if (rogue_id != 'rogue_2' && chart_name == 'clear' && date_str == this.ji_stats_data.first) {
                    temp_data = 0;
                }
                data.push([week_index, 6 - day_index, temp_data || '-']);
                // if (date_str < ROGUE_STARTS[rogue_id]) {
                //     data.push([week_index, day_index, ]);
                // }
                // else {
                //     data.push([week_index, day_index, this.ji_stats_data[rogue_id][chart_name][date_str] || '-']);
                // }

                day_index += 1;
                if (day_index > 6) {
                    week_index += 1;
                    day_index = day_index % 7;
                }
                if (temp_data && temp_data > max_data) {
                    max_data = this.ji_stats_data[rogue_id][chart_name][date_str];
                }
            }
            option = {
                title: {
                    top: 0,
                    left: 'center',
                    text: `${ROGUE_NAMES[rogue_id]} ${CHART_NAMES[chart_name]} ${this.ji_stats_data.nickname}`
                },
                tooltip: {
                    position: 'top',
                    formatter: function(params) {
                        let date = new Date(weeks[params.value[0]]);
                        date.setDate(date.getDate() + 6 - params.value[1]);
                        let date_str = date.toLocaleString('chinese', { year: 'numeric', month: '2-digit', day: '2-digit' }).split('/').join('-');
                        return `${date_str} ${params.value[2]}`;
                    }
                },
                toolbox: {
                    feature: {
                        saveAsImage: { show: true }
                    }
                },
                grid: {
                    height: '70%',
                    top: '10%',
                    left: 80,
                    right: 80,
                },
                xAxis: {
                    type: 'category',
                    data: weeks,
                    splitArea: {
                        show: true
                    }
                },
                yAxis: {
                    type: 'category',
                    data: days,
                    splitArea: {
                        show: true
                    }
                },
                dataZoom: [
                    // {
                    //     // 影响鼠标滚轮
                    //     type: 'inside',
                    //     start: 0,
                    //     end: 100
                    // },
                    {
                        xAxisIndex: [0],
                        filterMode: 'filter',
                        start: 0,
                        end: 100
                    }
                ],
                visualMap: {
                    min: 0,
                    max: max_data,
                    calculable: true,
                    orient: 'vertical',
                    right: '0%',
                    top: 'center'
                },
                series: [
                    {
                        name: CHART_NAMES[chart_name],
                        type: 'heatmap',
                        data: data,
                        label: {
                            show: true
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

            this.charts[rogue_id][chart_name] && this.charts[rogue_id][chart_name].setOption(option);

            function getVirtualData(ji_stats_data, year) {
                const date = +echarts.time.parse(year + '-01-01');
                const end = +echarts.time.parse(+year + 1 + '-01-01');
                const dayTime = 3600 * 24 * 1000;
                const data = [];
                let i = 0;
                for (let time = date; time < end; time += dayTime) {
                    data.push([
                        echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
                        // Math.floor(Math.random() * 10)
                        ji_stats_data['rogue_4']['node'][echarts.time.format(time, '{yyyy}{MM}{dd}', false)]
                    ]);
                    i += 1;
                }
                return data;
            }


        },

        resizeAll: function() {
            this.chart_main.resize();
            this.chart_heatmap_node_all.resize();
            this.chart_line_node_all.resize();
            for (let rogue_id in this.charts) {
                for (let i in this.charts[rogue_id]) {
                    this.charts[rogue_id][i] && this.charts[rogue_id][i].resize();
                }
            }
            // this.chart_node_invest_4.resize();
            // this.chart_clear_4.resize();
            // this.chart_node_4.resize();
            // this.chart_invest_4.resize();
        },

        tsToDay: function (ts) {
            // 减去5点
            let date = new Date((ts - 18000) * 1000);
            return date.getFullYear() + '-' + this.formatTo2(date.getMonth() + 1) + '-' + this.formatTo2(date.getDate());
        },
        sortChallengeByTime: function(c1, c2) {
            return c1.challenge_time - c2.challenge_time;
        },
        sortAndDivide: function() {
            for (let m of this.members) {
                let detail = {};
                let challenges = m.challenges;
                if (!challenges) {
                    continue;
                }
                for (let challenge of challenges) {
                    if (detail[this.tsToDay(challenge.challenge_time)] == undefined) {
                        detail[this.tsToDay(challenge.challenge_time)] = [];
                    }
                    detail[this.tsToDay(challenge.challenge_time)].push(challenge);
                }
                for (let key in detail) {
                    detail[key].sort(this.sortChallengeByTime);
                }
                m.challenges = detail;
                this.challengeMap[m.qqid] = detail;
            }
        },

        getToday: function () {
            let d = new Date();
            d -= 18000000;
            d = new Date(d).setHours(0, 0, 0, 0);
            return d;
        },
    },
    delimiters: ['[[', ']]'],
})

// Vue 3
app.use(ElementPlus);
app.mount('#app');
