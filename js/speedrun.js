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

// 这代码很乱，到时候重构一下
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
        group_id: '',
        group_info_str: '',
        last_update_timestamp: 0,
        last_update_str: '',
        last_update_fixed: true,
        show_ji_stats_custom_column: false,
        table_ji_stats_height: 'auto',
        ji_stats_index_list: [],
        ji_stats_columns: {
            ji_stats_5: {
                'label': '萨卡兹的无终奇语',
                'header': 'self',
                'on': true,
            },
            ji_stats_clear_grade_5: {
                'label': '通关最高难度，包括通关的最高难度和该难度下通关的结局',
                'header': 'ji_stats_5',
                'on': true,
            },
            ji_stats_clear_count_5: {
                'label': '通关次数，包含通关各结局的次数和累计次数',
                'header': 'ji_stats_5',
                'on': false,
            },
            ji_stats_node_5: {
                'label': '累计通过节点',
                'header': 'ji_stats_5',
                'on': true,
            },
            ji_stats_invest_5: {
                'label': '累计存入源石锭',
                'header': 'ji_stats_5',
                'on': true,
            },
            ji_stats_4: {
                'label': '探索者的银凇止境',
                'header': 'self',
                'on': false,
            },
            ji_stats_clear_grade_4: {
                'label': '通关最高难度，包括通关的最高难度和该难度下通关的结局',
                'header': 'ji_stats_4',
                'on': true,
            },
            ji_stats_clear_count_4: {
                'label': '通关次数，包含通关各结局的次数和累计次数',
                'header': 'ji_stats_4',
                'on': true,
            },
            ji_stats_node_4: {
                'label': '累计通过节点',
                'header': 'ji_stats_4',
                'on': true,
            },
            ji_stats_invest_4: {
                'label': '累计存入源石锭',
                'header': 'ji_stats_4',
                'on': true,
            },
            ji_stats_chaos_4: {
                'label': '累计触发和去除坍缩范式次数',
                'header': 'ji_stats_4',
                'on': true,
            },
            ji_stats_totem_4: {
                'label': '累计获得和宣告密文板次数',
                'header': 'ji_stats_4',
                'on': true,
            },
            ji_stats_predict_4: {
                'label': '累计远见到密文板和坍缩范式次数',
                'header': 'ji_stats_4',
                'on': true,
            },
            ji_stats_game_4: {
                'label': '累计在北地巫师竞技中参与选择竞技斗士次数',
                'header': 'ji_stats_4',
                'on': true,
            },
            ji_stats_friend_4: {
                'label': '累计在最好的朋友中品尝难喝的酒次数',
                'header': 'ji_stats_4',
                'on': true,
            },
            ji_stats_3: {
                'label': '水月与深蓝之树',
                'header': 'self',
                'on': false,
            },
            ji_stats_clear_grade_3: {
                'label': '通关最高难度，包括通关的最高难度和该难度下通关的结局',
                'header': 'ji_stats_3',
                'on': true,
            },
            ji_stats_clear_count_3: {
                'label': '通关次数，包含通关各结局的次数和累计次数',
                'header': 'ji_stats_3',
                'on': true,
            },
            ji_stats_node_3: {
                'label': '累计通过节点',
                'header': 'ji_stats_3',
                'on': true,
            },
            ji_stats_invest_3: {
                'label': '累计存入源石锭',
                'header': 'ji_stats_3',
                'on': true,
            },
            ji_stats_mutation_3: {
                'label': '累计触发排异反应干员数',
                'header': 'ji_stats_3',
                'on': true,
            },
            ji_stats_coin_3: {
                'label': '累计在阿戈尔打印机中投币次数',
                'header': 'ji_stats_3',
                'on': true,
            },
            ji_stats_cost_3: {
                'label': '累计在苦路节点消耗生命',
                'header': 'ji_stats_3',
                'on': true,
            },
            ji_stats_dice_3: {
                'label': '累计投掷骰子次数',
                'header': 'ji_stats_3',
                'on': true,
            },
            ji_stats_2: {
                'label': '傀影与猩红孤钻',
                'header': 'self',
                'on': false,
            },
            ji_stats_node_2: {
                'label': '累计通过节点',
                'header': 'ji_stats_2',
                'on': true,
            },
            ji_stats_invest_2: {
                'label': '累计存入源石锭',
                'header': 'ji_stats_2',
                'on': true,
            },
            ji_stats_story_2: {
                'label': '累计听老妇人讲故事次数',
                'header': 'ji_stats_2',
                'on': true,
            },
            ji_stats_wine_2: {
                'label': '累计在酒窖喝酒桶数',
                'header': 'ji_stats_2',
                'on': true,
            },
            ji_stats_trash_2: {
                'label': '累计从地下室的垃圾堆翻出“好东西”份数',
                'header': 'ji_stats_2',
                'on': true,
            },
            ji_stats_coin_2: {
                'label': '在一次探险中，在微型舞台的投币口投币最多次数',
                'header': 'ji_stats_2',
                'on': true,
            },

            ji_stats_all: {
                'label': '累计数据',
                'header': 'self',
                'on': false,
            },
            ji_stats_clear_count_all: {
                'label': '累计通关次数，包含通关水月+萨米',
                'header': 'ji_stats_all',
                'on': true,
            },
            ji_stats_node_all: {
                'label': '累计通过节点，包括傀影+水月+萨米',
                'header': 'ji_stats_all',
                'on': true,
            },
            ji_stats_invest_all: {
                'label': '累计存入源石锭，包括傀影+水月+萨米',
                'header': 'ji_stats_all',
                'on': true,
            },
        },
        src_help: 'help.html',
        src_join: 'join.html',
        members: [],
        range: '',
        allChallenges: [],
        activeIndex: '4',
        challengeMap: {},
        challenges: [],
        players: {},
        games: [],
        rooms: [],
        gamesAll: {},
        games3: {},
        games4: {},
        totalGames3: 0,
        total_player_count: 0,
        nameMap: {},
        containTailAndContinue: true,
        globalTableData: [],
        ji_logs: {},
        ji_logs_data: [],
        ji_stats_data: [],
        roomsTableData:[],
        colorList: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
        missChart: null,
        bossHitChart: null,
        totalTimeChartStart: null,
        totalTimeChartEnd: null,
        personalProgressChart: null,
        personalTimeChart: null,
        isLoading: true,
        selectingTab: "table",
        selectingQQid: null,
    }),
    mounted() {
        this.selectingTab = "ji_stats";
        this.load_login_data();
        this.fetchData();
        // this.update_table_ji_stats_height();
        window.addEventListener('resize', () => this.update_table_ji_stats_height());
    },
    watch: {
        selectingTab: function() {
            this.init();
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
                if (!('login_token' in window.localStorage) || !('login_user_id' in window.localStorage)) {
                    console.log('没有找到已保存的登录信息');
                    return false;
                }
                this.login_user_id = window.localStorage['login_user_id'];
                this.login_token = window.localStorage['login_token'];
                return true;
            }
        },

        fetchData: function() {
            const that = this;
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            let type_name = '';
            if (urlParams.get('refresh')) {
                setTimeout(this.fetchData, urlParams.get('refresh'));
            }
            if (urlParams.get('group_id')) {
                this.group_id = urlParams.get('group_id') || '';
                type_name = 'group';
            }
            else {
                this.group_id = '';
                type_name = 'public';
            }
            console.log(this.group_id)
            payload = {
                'type_name': type_name,
                'group_id': this.group_id,
                'user_id': this.login_user_id || '',
                'login_token': this.login_token || '',
            }
            axios.post('https://yubo.run/api/arknights/get_ji_stats', payload).then(res => {
                // if (res.data.code != 0) {
                if (!res.data.ji_stats && !res.data.ji_logs) {
                    that.$alert(res.data.message, '获取记录失败');
                    that.isLoading = false;
                    if (res.data.go_to_home) {
                        setTimeout(this.goto_user_home, 3000);
                    }
                    return;
                }
                that.last_update_timestamp = res.data.last_update_timestamp;
                that.ji_stats_data = res.data.ji_stats;
                that.ji_logs = res.data.ji_logs;
                that.group_info_str = res.data.group_info_str;
                that.nameMap = res.data.names;
                if (that.ji_stats_data.length == 0 && Object.keys(that.ji_logs).length == 0) {
                    that.$alert(res.data.message, '获取到的记录为空');
                    that.isLoading = false;
                    return;
                }
                that.refreshData();
                this.update_table_ji_stats_height();
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

        get_span: function(list, key) {
            const newArr = [];
            const obj = {};
            for (let i = 0; i < list.length; i++) {
                if (i === 0) {
                    obj.row = 1;
                    obj.col = 1;
                    newArr.push(obj)
                }
                else {
                    if (list[i][key] === list[i - 1][key]) {
                        newArr.push({ row: 0, col: 0});
                        const index = list.findIndex(item => {
                            return item[key] === list[i - 1][key];
                        });
                        newArr[index].row++;
                    }
                    else {
                        newArr.push({ row: 1, col: 1 });
                    }
                }
            }
            return newArr;
        },

        ji_logs_span_method: function ({row, column, rowIndex, columnIndex}) {
            let ji_logs_count = 0;
            let ji_logs_list = [];
            let timestamp_list = Object.keys(this.ji_logs);
            timestamp_list.reverse();
            for (let timestamp of timestamp_list) {
                for (let i in this.ji_logs[timestamp]) {
                    let ji_logs_split = this.ji_logs[timestamp][i][1].split('\n');
                    ji_logs_count += ji_logs_split.length;
                    for (let j in ji_logs_split) {
                        ji_logs_list.push({'timestamp': timestamp})
                    }
                }
            }
            const arr = [];
            const obj = {};
            for (let i = 0; i < ji_logs_count; i++) {
                if (i === 0) {
                    obj.row = 1;
                    obj.col = 1;
                    arr.push(obj)
                }
                else {
                    if (ji_logs_list[i]['timestamp'] === ji_logs_list[i - 1]['timestamp']) {
                        arr.push({ row: 0, col: 0 });
                        const index = ji_logs_list.findIndex(item => {
                            return item['timestamp'] === ji_logs_list[i - 1]['timestamp'];
                        });
                        arr[index].row++;
                    }
                    else {
                        arr.push({ row: 1, col: 1 });
                    }
                }
            }
            // if (columnIndex < 1) {
            if (columnIndex == 0) {
                const rowspan_result = arr[rowIndex].row;
                const colspan_result = arr[rowIndex].col;
                return {
                    rowspan: rowspan_result,
                    colspan: colspan_result,
                };
            }
        },

        handle_custom_column: function(event) {
            console.time('handle_custom_column');
            this.show_ji_stats_custom_column = !this.show_ji_stats_custom_column;
            console.timeEnd('handle_custom_column');
        },

        ji_stats_sort_change: function({prop, order}) {
            console.log(`当前排序的列为${prop}，排序顺序为${order}`);
            let prop_value_list = [];
            for (let nickname in this.players) {
                if (prop == 'last_update') {
                    prop_value_list.push(this.players[nickname]['last_update_timestamp']);
                }
                else {
                    prop_value_list.push(parseInt(this.players[nickname][prop]));
                }
            }
            prop_value_list.sort((a, b) => (a - b));
            prop_value_list.reverse();
            if (order == 'descending') {
                for (let nickname in this.players) {
                    this.players[nickname]['index'] = prop_value_list.indexOf(this.players[nickname][prop]);
                    // console.log(nickname, this.players[nickname]['index']);
                }
                for (let i in prop_value_list) {
                    this.ji_stats_index_list[i] = prop_value_list.indexOf(prop_value_list[i]) + 1;
                }
            }
            else {
                for (let nickname in this.players) {
                    this.players[nickname]['index'] = prop_value_list.length - prop_value_list.indexOf(this.players[nickname][prop]);
                    // console.log(nickname, this.players[nickname]['index'])
                }
                for (let i in prop_value_list) {
                    this.ji_stats_index_list[i] = prop_value_list.indexOf(prop_value_list[i]) + 1;
                }
                this.ji_stats_index_list.reverse();
            }
            // console.log(prop_value_list);
            // console.log(this.ji_stats_index_list);
        },

        ji_stats_get_index: function(index) {
            // console.log(`第${index + 1}行，${this.ji_stats_index_list[index]}`);
            return this.ji_stats_index_list[index];
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

        refreshData: function() {
            for (let player of this.ji_stats_data) {
                this.players[player['nickname']] = player;
            }
            // this.totalGames3 = Object.keys(this.games3).length;
            this.total_player_count = Object.keys(this.players).length;
            // this.sortAndDivide();
            this.init();
            this.isLoading = false;
        },

        init: function() {
            // this.isLoading = true;
            let nd = new Date();
            let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            nd.setTime(this.last_update_timestamp * 1000);
            this.last_update_str = nd.toLocaleString('chinese', { timeZone: tz, ...this.datetime_str_options });
            this.initjiStats();
            this.initJiLog();
            // this.isLoading = false;
            // this.initTotalDamage();
            // this.initPlayerDamage();
            // this.initGlobalTableData();
            // this.initGames3TableData();
            // this.initGames4TableData();
            // this.initRoomsTableData();
            // this.initPlayerData();
            if (this.selectingTab === 'ji_stats') {
                // this.update_table_ji_stats_height();
                // this.ji_stats_sort_change('node_4', 'descending');
            }
            else if (this.selectingTab === 'ji_logs') {
            }
            else if (this.selectingTab === 'help') {
                // window.location = 'help.html'
            }
            else if (this.selectingTab === 'join') {
                // window.location = 'join.html'
            }
            else if (this.selectingTab === 'player'){
                // this.initChart(this.playerDamage(this.selectingQQid).bossDamageList);
            }
        },

        initJiLog: function() {
            this.ji_logs_data = [];
            for (let timestamp in this.ji_logs) {
                let nd = new Date();
                let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
                nd.setTime(timestamp * 1000);
                let startstr = nd.toLocaleString('chinese', { timeZone: tz, ...this.datetime_str_options });
                for (let i in this.ji_logs[timestamp]) {
                    // ji_logs_str += `${this.get_channel_mark(this.ji_logs[timestamp][i][0])}${this.ji_logs[timestamp][i][1]}`;
                    let ji_logs_split = this.ji_logs[timestamp][i][1].split('\n');
                    for (let j in ji_logs_split) {
                        this.ji_logs_data.push({
                            last_update: startstr,
                            channel: this.ji_logs[timestamp][i][0],
                            log: ji_logs_split[j],
                        });
                    }
                }
            }
            // console.log(this.ji_logs_data);
        },

        initjiStats: function() {
            if (!this.ji_stats_data) {
                return;
            }
            this.ji_stats_index_list = [];
            let prop_value_list = [];
            for (let player of this.ji_stats_data) {
                player['channel_mark'] = this.get_channel_mark(player['channel']);
                player['clear_endings_str_3'] = player['clear_endings_3'].join(',') || '无';
                player['clear_count_3_1'] = player['clear_count_3'][0];
                player['clear_count_3_2'] = player['clear_count_3'][1];
                player['clear_count_3_3'] = player['clear_count_3'][2];
                player['clear_count_3_4'] = player['clear_count_3'][3];
                player['clear_count_3_all'] = player['clear_count_3'][0] + player['clear_count_3'][1] + player['clear_count_3'][2] + player['clear_count_3'][3];
                player['clear_endings_str_4'] = player['clear_endings_4'].join(',') || '无';
                player['clear_count_4_1'] = player['clear_count_4'][0];
                player['clear_count_4_2'] = player['clear_count_4'][1];
                player['clear_count_4_3'] = player['clear_count_4'][2];
                player['clear_count_4_4'] = player['clear_count_4'][3];
                player['clear_count_4_all'] = player['clear_count_4'][0] + player['clear_count_4'][1] + player['clear_count_4'][2] + player['clear_count_4'][3];
                player['clear_endings_str_5'] = player['clear_endings_5'].join(',') || '无';
                player['clear_count_5_1'] = player['clear_count_5'][0];
                player['clear_count_5_2'] = player['clear_count_5'][1];
                player['clear_count_5_3'] = player['clear_count_5'][2];
                player['clear_count_5_4'] = player['clear_count_5'][3];
                player['clear_count_5_all'] = player['clear_count_5'][0] + player['clear_count_5'][1] + player['clear_count_5'][2] + player['clear_count_5'][3];
                player['clear_count_all'] = player['clear_count_3_all'] + player['clear_count_4_all'] + player['clear_count_5_all'];
                player['node_all'] = player['node_2'] + player['node_3'] + player['node_4'] + player['node_5'];
                player['invest_all'] = player['invest_2'] + player['invest_3'] + player['invest_4'] + player['invest_5'];
                let nd = new Date();
                let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
                nd.setTime(player['last_update_timestamp'] * 1000);
                let startstr = nd.toLocaleString('chinese', { timeZone: tz, ...this.datetime_str_options });
                player['last_update'] = startstr;
                player['index'] = 0;
                this.ji_stats_index_list.push(player['index']);
                prop_value_list.push(player['node_4']);
            }
            prop_value_list.sort((a, b) => (a - b));
            prop_value_list.reverse();
            for (let i in prop_value_list) {
                this.ji_stats_index_list[i] = prop_value_list.indexOf(prop_value_list[i]) + 1;
            }
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
