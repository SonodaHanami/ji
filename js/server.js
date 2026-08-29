if (!Object.defineProperty) {
    alert('浏览器版本过低');
}


const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#FFB6C1', // 浅粉红
    '#87CEEB', // 天空蓝
    '#98FB98', // 淡绿色
    '#DDA0DD', // 李紫色
    '#FFD700', // 金色
    '#FFA07A'  // 浅鲑鱼色
];

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
    'rogue_7': '沉沦者的黑流树海',
}

const ROGUE_STARTS = {
    'rogue_2': '2022-01-05',
    'rogue_3': '2022-09-27',
    'rogue_4': '2023-07-13',
    'rogue_5': '2024-07-16',
    'rogue_6': '2025-07-15',
    'rogue_7': '2026-07-17',
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
    5: '落子无悔',
}

const ENDINGS_7 = {
    1: '强制重启',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
}

const JOBS = {
    'PIONEER': '先锋',
    'WARRIOR': '近卫',
    'TANK': '重装',
    'SNIPER': '狙击',
    'CASTER': '术师',
    'MEDIC': '医疗',
    'SUPPORT': '辅助',
    'SPECIAL': '特种',
}

const CHART_NAMES = {
    'node_and_invest': '通过节点与存入源石锭',
    'clear': '通关次数',
    'node': '通过节点',
    'invest': '存入源石锭',
    'endings': '通关结局个数比例',
    'dice': '累计投掷骰子次数',
    'coin': '累计在阿戈尔打印机中的投币次数',
    'vision': '累计消耗抗干扰指数',
    'game': '在【北地巫师竞技】中“连输五次”的博士',
    'spring': '在【度假胜地】中入住度假村的博士',
    'height': '遇到了【负伤的主树】的博士',
    'alchemy': '累计解读次数',
    'amiya': '看到了阿米娅的纪念碑的博士比例',
    'persuade': '累计触发圣卫铳骑的劝导次数',
    'goldSave': '累计请坎诺特“降价”的源石锭数量',
    'tempUpgrade': '累计完成印象加深的次数',
    'ticket': '累计留存的招募券',
    'costHp': '累计在节点易与中的绩处购买物品所花费的生命值',
    'nodePass': '累计在岁兽残识中消耗的烛火',
    'fall': '博士烛火尚未燃尽就被迫回到人间的次数',
    'rotate': '界园的供游客盖章收藏的宝印被博士转动过的次数',
    'gold': '累计通过坎诺特印记获得源石锭',
    'raidian': '在岁兽残识中遭遇同心事件时，由电弧带领进入玉石同心球中的小镇的次数',
    'character': '在完成结局时，出场率最高的干员',
    'wrath': '完成探险时，最常显露的岁时',
    'candle': '被授予伺烛客身份最多次的干员',
    'expeditionGuide': '累计入卷最多次的干员',
    'moveCostAp': '累计消耗行动力',
}

const OPERATOR_NAMES = {
    'char_002_amiya': '阿米娅',
    'char_003_kalts': '凯尔希',
    'char_123_fang': '芬',
    'char_124_kroos': '克洛丝',
    'char_128_plosis': '白面鸮',
    'char_150_snakek': '蛇屠箱',
    'char_151_myrtle': '桃金娘',
    'char_180_amgoat': '艾雅法拉',
    'char_196_sunbr': '古米',
    'char_202_demkni': '塞雷娅',
    'char_206_gnosis': '灵知',
    'char_212_ansel': '安赛尔',
    'char_245_cello': '塑心',
    'char_284_spot': '斑点',
    'char_293_thorns': '棘刺',
    'char_350_surtr': '史尔特尔',
    'char_377_gdglow': '澄闪',
    'char_449_glider': '蜜莓',
    'char_472_pasngr': '异客',
    'char_497_ctable': '晓歌',
    'char_1016_agoat2': '纯烬艾雅法拉',
    'char_1012_skadi2': '浊心斯卡蒂',
    'char_1013_chen2': '假日威龙陈',
    'char_1020_reed2': '焰影苇草',
    'char_1023_ghost2': '归溟幽灵鲨',
    'char_1026_gvial2': '百炼嘉维尔',
    'char_1028_texas2': '缄默德克萨斯',
    'char_1029_yato2': '麒麟R夜刀',
    'char_1035_wisdel': '维什戴尔',
    'char_2012_typhon': '提丰',
    'char_2023_ling': '令',
    'char_2025_shu': '黍',
    'char_4039_horn': '号角',
    'char_4055_bgsnow': '鸿雪',
    'char_4064_mlynar': '玛恩纳',
    'char_4066_highmo': '海沫',
    'char_4087_ines': '伊内丝',
    'char_4116_blkkgt': '锏',
    'char_4117_ray': '莱伊',
    'char_4123_ela': '艾拉',
    'char_4132_ascln': '阿斯卡纶',
    'char_4133_logos': '逻各斯',
    'char_4145_ulpia': '乌尔比安',
    'char_4146_nymph': '妮芙',
    'char_4151_tinman': '锡人',
}

const TOOL_NAMES_3 = {
    "209": '支援补给站',
    "210": '支援地雷组',
    "211": '支援轰隆隆',
}
const TOOL_NAMES_4 = {
    'rogue_3_active_tool_1': '支援补给站',
    'rogue_3_active_tool_3': '支援轰隆隆',
    'rogue_3_active_tool_5': '支援防暴桩',
}

const RELIC_NAMES_3 = {
    "001": '精选兽肉罐头',
    "110": '绿叶菜罐头',
    "118": '药枚',
    "122": '疗养体验卡',
    "180": '地形图',
    "199": '御2',
    "207": '投币玩具',
}
const RELIC_NAMES_4 = {
    'rogue_3_relic_fight_19': '岩角号',
    'rogue_3_relic_legacy_30': '热水壶',
    'rogue_3_relic_fight_21': '湖中神盾',
    'rogue_3_relic_legacy_21': '蓝色丝巾',
    'rogue_3_relic_res_6': '《重型音乐选集》',
}

const CHAOS_NAMES = {
    "rogue_3_chaos_1": '去量化',
    "rogue_3_chaos_2": '实质性坍缩',
    "rogue_3_chaos_3": '非线性移动',
    "rogue_3_chaos_4": '情绪实体',
    "rogue_3_chaos_5": '泛社会悖论',
}

const TOTEM_NAMES = {
    'rogue_3_totem_R_L3': '战士',
    'rogue_3_totem_R_E1': '歌唱',
}

const datetime_str_options = {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false,
}
const date_str_options = {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour12: false,
}
const time_str_options = {
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false,
}

function toLocalISOStringShanghai(date, is_28_hours=false, length=16) {
    // 获取时区偏移量（分钟）
    // const timezoneOffset = date.getTimezoneOffset();
    const timezoneOffset = -480; // 固定东八区
    // const offsetHours = String(Math.floor(Math.abs(timezoneOffset) / 60)).padStart(2, '0');
    // const offsetMinutes = String(Math.abs(timezoneOffset) % 60).padStart(2, '0');
    // const offsetSign = timezoneOffset > 0 ? '-' : '+';

    // 创建东八区时间的ISO格式（去掉秒、毫秒和Z）
    let isoString;
    if (is_28_hours) {
        isoString = get_datetime_str_28(date, 8);
    }
    else {
        isoString = new Date(date.getTime() - (timezoneOffset * 60000)).toISOString();
    }
    // return isoString.slice(0, -1) + offsetSign + offsetHours + ':' + offsetMinutes;
    if (length >= 16 && isoString[11] == '-' ) {
        return isoString.replace('T', ' ').replace('Z', '').slice(0, length + 1);
    }
    return isoString.replace('T', ' ').replace('Z', '').slice(0, length);
}

function toLocalISOStringTokyo(date, is_28_hours=false, length=16) {
    const timezoneOffset = -540; // 固定东九区
    // 创建东九区时间的ISO格式（去掉秒、毫秒和Z）
    let isoString;
    if (is_28_hours) {
        isoString = get_datetime_str_28(date, 9);
    }
    else {
        isoString = new Date(date.getTime() - (timezoneOffset * 60000)).toISOString();
    }
    // return isoString.slice(0, -1) + offsetSign + offsetHours + ':' + offsetMinutes;
    if (length >= 16 && isoString[11] == '-' ) {
        return isoString.replace('T', ' ').replace('Z', '').slice(0, length + 1);
    }
    return isoString.replace('T', ' ').replace('Z', '').slice(0, length);
}

function toLocalISOStringPDT(date, is_28_hours=false, length=16) {
    const timezoneOffset = 420; // 固定西七区
    // 创建东九区时间的ISO格式（去掉秒、毫秒和Z）
    let isoString;
    if (is_28_hours) {
        isoString = get_datetime_str_28(date, -7);
    }
    else {
        isoString = new Date(date.getTime() - (timezoneOffset * 60000)).toISOString();
    }
    // return isoString.slice(0, -1) + offsetSign + offsetHours + ':' + offsetMinutes;
    if (length >= 16 && isoString[11] == '-' ) {
        return isoString.replace('T', ' ').replace('Z', '').slice(0, length + 1);
    }
    return isoString.replace('T', ' ').replace('Z', '').slice(0, length);
}

/**
 * 格式化时间戳为指定格式的字符串，由服务器时区决定日期分界线和日期
 * @param {number} timestamp - 时间戳（毫秒）
 * @param {number} serverTimezone - 服务器日期分界线偏移量（小时）
 * @returns {string} 格式为 'yyyy-mm-dd HH:MM:SS' 的日期时间字符串
 */
function get_datetime_str_28(timestamp, serverTimezone=8) {
    // 创建时间戳在服务器所在那一天的凌晨4点
    const server4 = new Date(Math.floor((+timestamp + serverTimezone * 3600000 - 4 * 3600000) / 86400000) * 86400000 - serverTimezone * 3600000 + 4 * 3600000);
    // 计算经过秒数、分钟数、小时数
    const millisecond_passed = +timestamp - server4;
    const second_passed = Math.floor((millisecond_passed % 60000) / 1000);
    const minute_passed = Math.floor((millisecond_passed % 3600000) / 60000);
    const hour_passed = Math.floor(millisecond_passed / 3600000);
    // 浏览器本地时区与服务器时区的差
    const timezone_delta = (new Date().getTimezoneOffset() / 60) + serverTimezone;
    // 想想服务器上是几号
    const date_on_server = new Date(+server4 + timezone_delta * 3600000);
    const year_on_server = date_on_server.getFullYear();
    const month_on_server = date_on_server.getMonth() + 1;
    const day_on_server = date_on_server.getDate();
    const hour_on_server = date_on_server.getHours() - timezone_delta + hour_passed;
    // 构建日期和时间字符串
    let date_str = `${year_on_server}-${String(month_on_server).padStart(2, '0')}-${String(day_on_server).padStart(2, '0')}`;
    let time_str = `${hour_on_server < 0 ? '-' : ''}${String(Math.abs(hour_on_server)).padStart(2, '0')}:${String(minute_passed).padStart(2, '0')}:${String(second_passed).padStart(2, '0')}`;

    return `${date_str} ${time_str}`;
}



function get_event_y_axis(event_type) {
    if (event_type == 'rogue_main') {
        return 1
    }
    else if (event_type == 'rogue_monthly') {
        return 0.9
    }
    else if (event_type == 'sidestory') {
        return 0.8
    }
    else if (event_type == 'time_limited_event') {
        return 0.7
    }
    else if (event_type == 'others') {
        return 0.6
    }
    else if (event_type == 'unknown') {
        return 0.5
    }
    else {
        return 0.4
    }
}



// Vue 3
const { createApp } = Vue;
const app = createApp({
    el: '#app',
    data: () => ({
        group_id: '',
        player_info_str: '',
        display_mode: 'default',
        display_mode_names: {'default': '默认', 'all': '每一次更新', 'daily': '每天最后一次更新', 'weekly': '每周最后一次更新'},
        operator_names: OPERATOR_NAMES,
        tool_names_3: TOOL_NAMES_3,
        tool_names_4: TOOL_NAMES_4,
        relic_names_3: RELIC_NAMES_3,
        relic_names_4: RELIC_NAMES_4,
        chaos_names: CHAOS_NAMES,
        totem_names: TOTEM_NAMES,
        event_list: [],
        EVENTS: {},
        day_offset: 3,
        interval: 20,
        end_of_week: 0,
        ji_stats_date: undefined,
        top_character_job: 'PIONEER',
        top_character_job_name: '先锋',
        last_update_timestamp: 0,
        last_update_fixed: true,
        table_ji_stats_height: 'auto',
        ji_stats_index_list: [],
        ji_stats_data: {},
        latest_data: {rogue_2: '', rogue_3: '', rogue_4: '', rogue_5: '', rogue_6: '', rogue_7: ''},
        data_change_log: [],
        data_diff_data: [],
        colorList: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
        isLoading: true,
        isFirstInited: false,
        selectingTab: 'rogue_7',
        active_collapse_name_list: [],
    }),
    async mounted() {
        // this.get_datetime_str_28 = get_datetime_str_28;

        this.selectingTab = 'rogue_7';

        this.chart_2_endings = echarts.init(document.getElementById('div_chart_2_endings'));
        this.chart_2_top_character = echarts.init(document.getElementById('div_chart_2_top_character'));

        this.chart_3_endings = echarts.init(document.getElementById('div_chart_3_endings'));
        this.chart_3_dice = echarts.init(document.getElementById('div_chart_3_dice'));
        this.chart_3_coin = echarts.init(document.getElementById('div_chart_3_coin'));
        this.chart_3_top_character = echarts.init(document.getElementById('div_chart_3_top_character'));

        this.chart_4_endings = echarts.init(document.getElementById('div_chart_4_endings'));
        this.chart_4_vision = echarts.init(document.getElementById('div_chart_4_vision'));
        this.chart_4_game = echarts.init(document.getElementById('div_chart_4_game'));
        this.chart_4_spring = echarts.init(document.getElementById('div_chart_4_spring'));
        this.chart_4_height = echarts.init(document.getElementById('div_chart_4_height'));
        this.chart_4_top_character = echarts.init(document.getElementById('div_chart_4_top_character'));

        this.chart_5_endings = echarts.init(document.getElementById('div_chart_5_endings'));
        this.chart_5_alchemy = echarts.init(document.getElementById('div_chart_5_alchemy'));
        this.chart_5_amiya = echarts.init(document.getElementById('div_chart_5_amiya'));
        this.chart_5_persuade = echarts.init(document.getElementById('div_chart_5_persuade'));
        this.chart_5_gold_save = echarts.init(document.getElementById('div_chart_5_gold_save'));
        this.chart_5_temp_upgrade = echarts.init(document.getElementById('div_chart_5_temp_upgrade'));
        this.chart_5_top_character = echarts.init(document.getElementById('div_chart_5_top_character'));

        this.chart_6_endings = echarts.init(document.getElementById('div_chart_6_endings'));
        this.chart_6_ticket = echarts.init(document.getElementById('div_chart_6_ticket'));
        this.chart_6_cost_hp = echarts.init(document.getElementById('div_chart_6_cost_hp'));
        this.chart_6_node_pass = echarts.init(document.getElementById('div_chart_6_node_pass'));
        this.chart_6_fall = echarts.init(document.getElementById('div_chart_6_fall'));
        this.chart_6_rotate = echarts.init(document.getElementById('div_chart_6_rotate'));
        this.chart_6_gold = echarts.init(document.getElementById('div_chart_6_gold'));
        this.chart_6_raidian = echarts.init(document.getElementById('div_chart_6_raidian'));
        this.chart_6_top_character = echarts.init(document.getElementById('div_chart_6_top_character'));
        this.chart_6_top_wrath = echarts.init(document.getElementById('div_chart_6_top_wrath'));
        this.chart_6_top_candle = echarts.init(document.getElementById('div_chart_6_top_candle'));
        this.chart_6_top_expeditionGuide = echarts.init(document.getElementById('div_chart_6_top_expeditionGuide'));

        this.chart_7_endings = echarts.init(document.getElementById('div_chart_7_endings'));
        this.chart_7_node_pass = echarts.init(document.getElementById('div_chart_7_node_pass'));

        this.charts = {
            'rogue_2': {
                'endings': this.chart_2_endings,
                'top_character': this.chart_2_top_character,
            },
            'rogue_3': {
                'endings': this.chart_3_endings,
                'dice': this.chart_3_dice,
                'coin': this.chart_3_coin,
                'top_character': this.chart_3_top_character,
            },
            'rogue_4': {
                'endings': this.chart_4_endings,
                'vision': this.chart_4_vision,
                'game': this.chart_4_game,
                'spring': this.chart_4_spring,
                'height': this.chart_4_height,
                'top_character': this.chart_4_top_character,
            },
            'rogue_5': {
                'endings': this.chart_5_endings,
                'alchemy': this.chart_5_alchemy,
                'amiya': this.chart_5_amiya,
                'persuade': this.chart_5_persuade,
                'goldSave': this.chart_5_gold_save,
                'tempUpgrade': this.chart_5_temp_upgrade,
                'top_character': this.chart_5_top_character,
            },
            'rogue_6': {
                'endings': this.chart_6_endings,
                'ticket': this.chart_6_ticket,
                'costHp': this.chart_6_cost_hp,
                'nodePass': this.chart_6_node_pass,
                'fall': this.chart_6_fall,
                'rotate': this.chart_6_rotate,
                'gold': this.chart_6_gold,
                'raidian': this.chart_6_raidian,
                'top_character': this.chart_6_top_character,
                'top_wrath': this.chart_6_top_wrath,
                'top_candle': this.chart_6_top_candle,
                'top_expeditionGuide': this.chart_6_top_expeditionGuide,
            },
            'rogue_7': {
                'endings': this.chart_7_endings,
                'moveCostAp': this.chart_7_node_pass,
            },
        }

        this.load_login_data();
        await this.fetchData();

        setTimeout(this.resizeAll, 100);
        window.addEventListener('resize', this.resizeAll);
    },
    watch: {
        selectingTab: function() {
            this.init();
            setTimeout(this.resizeAll, 100);
        },
        display_mode: function() {
            this.init();
            setTimeout(this.resizeAll, 100);
        },
        day_offset: function() {
            this.init();
            setTimeout(this.resizeAll, 100);
        },
        interval: function() {
            this.init();
            setTimeout(this.resizeAll, 100);
        },
        end_of_week: function() {
            this.init();
            setTimeout(this.resizeAll, 100);
        },
        ji_stats_date: function() {
            console.log(this.ji_stats_date)
            this.init_latest_data();
        },
        top_character_job: function() {
            this.top_character_job_name = JOBS[this.top_character_job];
            // this.init_chart_top_heatmap(this.selectingTab, 'character');
            this.init_chart_top_markarea(this.selectingTab, 'character');
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
                console.error('浏览器不支持localStorage');
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

        fetchData: async function() {
            const that = this;
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            that.isLoading = true;
            // 事件数据
            ElementPlus.ElMessage('正在请求事件数据');
            let start = new Date();
            await axios.get('https://yubo.run/arknights/event.json').then(res => {
                let elapsed = +new Date() - start;
                ElementPlus.ElMessage({
                    message: `请求事件数据完成，用时${elapsed}ms`,
                    type: 'success',
                });
                console.log(`fetchData: event.json ${elapsed} ms`)
                that.EVENTS = res.data;
                for (let e in that.EVENTS) {
                    that.event_list.push(
                        [
                            {
                                name: e, // 活动名称
                                xAxis: Date.parse(that.EVENTS[e]['start'] + '+08:00'), // start
                                yAxis: get_event_y_axis(that.EVENTS[e]['type']),
                                itemStyle: {
                                    // color: 'rgba(32, 255, 32, 0.5)'
                                    color: `rgba(${Math.floor(Math.random() * 128) + 128}, ${Math.floor(Math.random() * 128) + 128}, ${Math.floor(Math.random() * 128) + 128}, 0.5)`
                                }
                            },
                            {
                                xAxis: Date.parse(that.EVENTS[e]['end'] + '+08:00'), // end
                                yAxis: get_event_y_axis(that.EVENTS[e]['type']) - 0.1,
                            }
                        ]
                    )
                }
            }).catch(function (error) {
                that.$alert(error, '获取数据失败，请联系维护人员');
                that.isLoading = false;
                console.error(error);
                console.error(error.stack);
            });
            // 统计数据
            ElementPlus.ElMessage('正在请求数据');
            start = new Date();
            let payload = {
                'type_name': 'server',
                'group_id': this.group_id || '',
                'user_id': this.login_user_id || '',
                'login_token': this.login_token || '',
            }
            await axios.post('https://yubo.run/api/arknights/get_ji_stats', payload).then(res => {
                if (res.data.code != 0) {
                    that.$alert(res.data.message, '获取记录失败');
                    // that.isLoading = false;
                    if (res.data.go_to_home) {
                        setTimeout(this.goto_user_home, 3000);
                    }
                    return;
                }
                let elapsed = +new Date() - start;
                ElementPlus.ElMessage({
                    message: `请求数据完成，用时${elapsed}ms`,
                    type: 'success',
                });
                console.log(`fetchData: ji_stats_data ${elapsed} ms`)
                that.ji_stats_data = res.data;
                // console.log('ji_stats_data', that.ji_stats_data)
                that.init();
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

        getMonday: function(d) {
            d = new Date(d);
            var day = d.getDay(), diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
            return new Date(d.setDate(diff));
        },

        init: function() {
            console.time('init');
            this.isLoading = true;
            this.init_latest_data();
            this.init_data_change_log();
            this.handle_data_diff();
            if (this.selectingTab === 'rogue_2') {
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
            else if (this.selectingTab === 'rogue_7'){
                this.init_charts(this.selectingTab);
            }
            this.isLoading = false;
            this.isFirstInited = true;
            console.timeEnd('init');
        },

        init_latest_data: function() {
            for (let rogue_id in this.charts) {
                // let latest_day_str = Object.keys(this.ji_stats_data[rogue_id]).slice(-1)[0];
                let latest_day_str = this.ji_stats_date ? toLocalISOStringShanghai(this.ji_stats_date, true, 10) : Object.keys(this.ji_stats_data[rogue_id]).slice(-1)[0];
                let latest_timestamp = Object.keys(this.ji_stats_data[rogue_id][latest_day_str]).slice(-1)[0];
                this.latest_data[rogue_id] = this.ji_stats_data[rogue_id][latest_day_str][latest_timestamp];
            }
        },

        init_data_change_log: function() {
            const target_key_list = ['character', 'candle', 'expeditionGuide']
            this.data_change_log = [];
            for (let rogue_id in this.charts) {
                let prev_data = {}, curr_data = {};
                let is_prev_ready = false;

                for (let date_str in this.ji_stats_data[rogue_id]) {
                    for (timestamp in this.ji_stats_data[rogue_id][date_str]) {
                        if (is_prev_ready) {
                            prev_data = curr_data;
                            curr_data = {
                                'character': this.ji_stats_data[rogue_id][date_str][timestamp]['character'],
                            }
                            if (this.ji_stats_data[rogue_id][date_str][timestamp]['candle']) {
                                curr_data['candle'] = this.ji_stats_data[rogue_id][date_str][timestamp]['candle'];
                            }
                            if (this.ji_stats_data[rogue_id][date_str][timestamp]['expeditionGuide']) {
                                curr_data['expeditionGuide'] = this.ji_stats_data[rogue_id][date_str][timestamp]['expeditionGuide'];
                            }
                        }
                        else {
                            curr_data = {
                                'character': this.ji_stats_data[rogue_id][date_str][timestamp]['character'],
                            }
                            if (this.ji_stats_data[rogue_id][date_str][timestamp]['candle']) {
                                curr_data['candle'] = this.ji_stats_data[rogue_id][date_str][timestamp]['candle'];
                            }
                            if (this.ji_stats_data[rogue_id][date_str][timestamp]['expeditionGuide']) {
                                curr_data['expeditionGuide'] = this.ji_stats_data[rogue_id][date_str][timestamp]['expeditionGuide'];
                            }
                            prev_data = curr_data;
                            is_prev_ready = true;
                            continue
                        }
                        this.check_data_change(rogue_id, timestamp, prev_data, curr_data);
                    }
                }
            }
            // console.table(this.data_change_log);
        },

        check_data_change: function(rogue_id, timestamp, prev_data, curr_data) {
            if (prev_data['character'] && curr_data['character']) {
                for (let job in prev_data['character']) {
                    let is_changed = false;
                    for (let i = 0; i < prev_data['character'][job].length; i++) {
                        if (prev_data['character'][job] && curr_data['character'][job] && prev_data['character'][job][i] && curr_data['character'][job][i] && prev_data['character'][job][i]['id'] != curr_data['character'][job][i]['id']) {
                            is_changed = true;
                        }
                    }
                    if (is_changed) {
                        for (let i = 0; i < prev_data['character'][job].length; i++) {
                            if (!prev_data['character'][job][i]['name']) {
                                prev_data['character'][job][i]['name'] = OPERATOR_NAMES[prev_data['character'][job][i]['id']];
                            }
                            if (!curr_data['character'][job][i]['name']) {
                                curr_data['character'][job][i]['name'] = OPERATOR_NAMES[curr_data['character'][job][i]['id']];
                            }
                        }
                        let prev_str = prev_data['character'][job].map(x => x['name']).join(', ');
                        let curr_str = curr_data['character'][job].map(x => x['name']).join(', ');
                        // this.data_change_log.push(`${toLocalISOStringShanghai(new Date(timestamp * 1000))} ${ROGUE_NAMES[rogue_id]} 在完成结局时，出场率最高的${JOBS[job]}干员 [${prev_str}] -> [${curr_str}]`);
                        let isoStringLength = new Date() - new Date(timestamp * 1000) <= 7 * 86400000 ? 16 : 10;
                        this.data_change_log.push({
                            'time': toLocalISOStringShanghai(new Date(timestamp * 1000), is_28_hours=true, length=isoStringLength),
                            'rogue_name': ROGUE_NAMES[rogue_id],
                            'item': `在完成结局时，出场率最高的${JOBS[job]}干员`,
                            // 'previous': prev_data['character'][job].map(x => x['name']),
                            // 'current': curr_data['character'][job].map(x => x['name']),
                            'old': `[${prev_str}]`,
                            'new': `[${curr_str}]`,
                        });
                    }
                }
            }
            if (prev_data['candle'] && curr_data['candle']) {
                let is_changed = false;
                for (let i = 0; i < prev_data['candle'].length; i++) {
                    if (prev_data['candle'][i]['name'] != curr_data['candle'][i]['name']) {
                        is_changed = true;
                        // this.data_change_log.push(`${toLocalISOStringShanghai(new Date(timestamp * 1000))} ${ROGUE_NAMES[rogue_id]} candle ${i + 1} ${prev_data['candle'][i]['name']} -> ${curr_data['candle'][i]['name']}`);
                    }
                }
                if (is_changed) {
                    for (let i = 0; i < prev_data['candle'].length; i++) {
                        if (!prev_data['candle'][i]['name']) {
                            prev_data['candle'][i]['name'] = OPERATOR_NAMES[prev_data['candle'][i]['id']];
                        }
                        if (!curr_data['candle'][i]['name']) {
                            curr_data['candle'][i]['name'] = OPERATOR_NAMES[curr_data['candle'][i]['id']];
                        }
                    }
                    let prev_str = prev_data['candle'].map(x => x['name']).join(', ');
                    let curr_str = curr_data['candle'].map(x => x['name']).join(', ');
                    // this.data_change_log.push(`${toLocalISOStringShanghai(new Date(timestamp * 1000))} ${ROGUE_NAMES[rogue_id]} 被授予伺烛客身份最多次的干员 [${prev_str}] -> [${curr_str}]`);
                    let isoStringLength = new Date() - new Date(timestamp * 1000) <= 7 * 86400000 ? 16 : 10;
                    this.data_change_log.push({
                        'time': toLocalISOStringShanghai(new Date(timestamp * 1000), is_28_hours=true, length=isoStringLength),
                        'rogue_name': ROGUE_NAMES[rogue_id],
                        'item': `被授予伺烛客身份最多次的干员`,
                        'old': `[${prev_str}]`,
                        'new': `[${curr_str}]`,
                    });
                }
            }
            if (prev_data['expeditionGuide'] && curr_data['expeditionGuide']) {
                let is_changed = false;
                for (let i = 0; i < prev_data['expeditionGuide'].length; i++) {
                    if (prev_data['expeditionGuide'][i]['name'] != curr_data['expeditionGuide'][i]['name']) {
                        is_changed = true;
                    }
                }
                if (is_changed) {
                    for (let i = 0; i < prev_data['expeditionGuide'].length; i++) {
                        if (!prev_data['expeditionGuide'][i]['name']) {
                            prev_data['expeditionGuide'][i]['name'] = OPERATOR_NAMES[prev_data['expeditionGuide'][i]['id']];
                        }
                        if (!curr_data['expeditionGuide'][i]['name']) {
                            curr_data['expeditionGuide'][i]['name'] = OPERATOR_NAMES[curr_data['expeditionGuide'][i]['id']];
                        }
                    }
                    let prev_str = prev_data['expeditionGuide'].map(x => x['name']).join(', ');
                    let curr_str = curr_data['expeditionGuide'].map(x => x['name']).join(', ');
                    // this.data_change_log.push(`${toLocalISOStringShanghai(new Date(timestamp * 1000))} ${ROGUE_NAMES[rogue_id]} 累计入卷最多次的干员 [${prev_str}] -> [${curr_str}]`);
                    let isoStringLength = new Date() - new Date(timestamp * 1000) <= 7 * 86400000 ? 16 : 10;
                    this.data_change_log.push({
                        'time': toLocalISOStringShanghai(new Date(timestamp * 1000), is_28_hours=true, length=isoStringLength),
                        'rogue_name': ROGUE_NAMES[rogue_id],
                        'item': `累计入卷最多次的干员`,
                        'old': `[${prev_str}]`,
                        'new': `[${curr_str}]`,
                    });
                }
            }
        },

        handle_data_diff: function() {
            console.time('handle_data_diff')
            this.data_diff_data = [];
            for (let i = 0; i < this.data_change_log.length; i++) {
                // 使用diff库比较差异
                const changes = Diff.diffWords(this.data_change_log[i]['old'], this.data_change_log[i]['new'])
                // 构建表格数据
                this.data_change_log[i]['change'] = changes.map(change => ({
                        text: change.value,
                        type: change.added ? 'added' : (change.removed ? 'removed' : 'unchanged')
                    })).filter(part => part.type)
                    // })).filter(part => !part.type || part.type !== 'removed')
            }
            console.timeEnd('handle_data_diff')
        },

        is_date_disabled: function(date) {
            const date_str = toLocalISOStringShanghai(new Date(date), true, 10);
            return !Object.keys(this.ji_stats_data[this.selectingTab]).includes(date_str);
        },

        init_charts: function(rogue_id) {
            for (let chart_name in this.charts[rogue_id]) {
                if (chart_name == 'endings') {
                    this.init_chart_stacked_area_endings(rogue_id, 'endings');
                }
                else if (chart_name.startsWith('top_')) {
                    // this.init_chart_top_heatmap(rogue_id, chart_name.slice(4));
                    this.init_chart_top_markarea(rogue_id, chart_name.slice(4));
                }
                else {
                    this.init_chart_line(rogue_id, chart_name);
                }
            }
        },

        init_chart_line: function(rogue_id, chart_name) {
            const that = this;
            let today = new Date();
            today.setTime(+today - 4 * 60 * 60 * 1000);
            // let today_str = toLocalISOStringShanghai(today);
            let data_list = [];
            // let x_axis_list = [];
            let date_list = Object.keys(this.ji_stats_data[rogue_id]);
            for (let i = 0; i < date_list.length; i++) {
                let timestamp_delta;
                let timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]);
                if (this.display_mode == 'default') {
                    if (i < date_list.length - this.day_offset) {
                        timestamp_delta = +new Date();
                        timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]).slice(-1);
                    }
                    else {
                        timestamp_delta = this.day_offset * 24 * 60 * 60 * 1000 + 40 * 60 * 1000;
                        // timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]);
                        let full_timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]);
                        timestamp_list = [];
                        let timestamp_set = new Set();
                        for (let j = 0; j < full_timestamp_list.length; j++) {
                            let timestamp = +full_timestamp_list[j];
                            let timestamp_of_interval = Math.floor(timestamp / (60 * this.interval)) * 60 * this.interval;
                            if ((!(timestamp_set.has(timestamp_of_interval))) || ((i == date_list.length - 1) && (j == full_timestamp_list.length - 1))) {
                                timestamp_list.push(full_timestamp_list[j]);
                                timestamp_set.add(timestamp_of_interval);
                            }
                        }
                    }
                }
                else if (this.display_mode == 'all') {
                    timestamp_delta = +new Date();
                    timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]);
                }
                else if (this.display_mode == 'daily') {
                    timestamp_delta = +new Date();
                    timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]).slice(-1);
                }
                else if (this.display_mode == 'weekly') {
                    timestamp_delta = +new Date();
                    if (((new Date(date_list[i])).getDay() == this.end_of_week) || (i == date_list.length - 1)) {
                        timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]).slice(-1);
                    }
                    else {
                        timestamp_list = [];
                    }
                }

                for (let j = 0; j < timestamp_list.length; j++) {
                    if (+new Date() - timestamp_list[j] * 1000 < timestamp_delta) {
                        // data_list.push(this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]][chart_name]);
                        data_list.push([new Date(timestamp_list[j] * 1000), this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]][chart_name]]);
                        // x_axis_list.push(toLocalISOStringShanghai(new Date(this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]]['last_update_timestamp'] * 1000)));
                    }
                }
            }
            // let delta_list = [0];
            let delta_list = [[undefined, 0]];
            for (let i = 1; i < data_list.length; i++) {
                // delta_list.push(data_list[i] - data_list[i - 1]);
                delta_list.push([data_list[i][0], data_list[i][1] - data_list[i - 1][1]]);
            }
            // let offset_28 = (24 + new Date().getHours() + (new Date().getTimezoneOffset() / 60)) % 24;
            // offset_28 = (16 <= offset_28 && offset_28 < 20) ? 0 : 1;
            // let start_date = new Date(new Date() - (this.day_offset + offset_28) * 24 * 60 * 60 * 1000).setHours(20 - (new Date().getTimezoneOffset() / 60), 0, 0);

            // offset_28: 是否已进入泰拉历新的一天(day n+1)而UTC仍在原来的一天(day n)
            // 20: 泰拉历与UTC之间的时差为4小时，泰拉历0时=UTC前一天20时
            let offset_28 = ((+new Date()) % 86400000) / (60 * 60 * 1000) > 20 ? 1 : 0;
            // Math.ceil((+new Date()) / 86400000 + offset_28): 泰拉历天数（一天的结束）
            // - 4 * 3600000: 泰拉历与UTC之间的时差
            // this.day_offset * 86400000: 要展示的天数
            let start_date = new Date(Math.ceil((+new Date()) / 86400000 + offset_28) * 86400000 - 4 * 3600000 - this.day_offset * 86400000);
            let end_date = new Date(Math.min((Math.floor(+new Date() / (1000 * 60 * this.interval)) * 60 * this.interval + 59) * 1000, data_list[data_list.length - 1][0]));

            var option = {
                title: {
                    top: 0,
                    left: 'center',
                    text: `全服集集统计 ${ROGUE_NAMES[rogue_id]} ${CHART_NAMES[chart_name]}`
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
                        },
                        label: {
                            // 这里是控制x轴和y轴上显示值的格式
                            show: true,
                            formatter: function(params) {
                                // params.value 是坐标轴的值
                                // 根据坐标轴类型格式化
                                if (params.axisDimension === 'x') {
                                    // x轴的值格式化
                                    const date = new Date(params.value);
                                    return toLocalISOStringShanghai(date, true, 16);
                                }
                                else if (params.axisDimension === 'y') {
                                    // y轴的值格式化 - 添加千位分隔符
                                    return Number(params.value).toLocaleString('zh-CN');
                                }
                                return undefined;
                            },
                        }
                    },
                    formatter: function(params) {
                        // params是一个数组，包含所有在该x轴位置有数据的系列
                        if (!params || params.length === 0) return '';

                        // 只使用第一个参数的日期（因为所有数据点都在同一时间）
                        const firstParam = params[0];
                        const date = new Date(firstParam.value[0]);
                        const dateStr = toLocalISOStringShanghai(date, true, 16);
                        let result = `<span>本地时间</span><span style="float:right;margin-left:20px;font-size:14px;color:#6d6e73;font-weight:900">${dateStr}</span><br/>`;
                        result += `<span>服务器时间</span><span style="float:right;margin-left:20px;font-size:14px;color:#6d6e73;font-weight:900">${toLocalISOStringShanghai(date, false, 16)}</span><br/>`
                        params.forEach(param => {
                            result += `${param.marker}<span style="font-size:14px;color:#6d6e73;font-weight:400;margin-left:2px">${param.seriesName}</span><span style="float:right;margin-left:20px;font-size:14px;color:#6d6e73;font-weight:900">${Number(param.value[1]).toLocaleString('zh-CN')}</span><br/>`;
                        });
                        return result;
                    },
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
                    // data: [`数值`, '比上一个时间点增加了', '事件'],
                    selected: {
                        // '事件': false,
                    },
                },
                xAxis: [
                    {
                        // type: 'category',
                        type: 'time',
                        // data: x_axis_list,
                        axisLabel: {
                            interval: 'auto',  // 自动计算间隔
                            // formatter: '{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}',
                            // formatter: '{yyyy}-{MM}-{dd}',
                            formatter: function(object) {
                                return toLocalISOStringShanghai(new Date(object), true, 16);
                            },
                        },
                        axisPointer: {
                            type: 'shadow',
                            // formatter: '{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}',
                            formatter: function(object) {
                                return toLocalISOStringShanghai(new Date(object), true, 16);
                            },
                        },
                        splitArea: {
                            show: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: `数值`,
                        min: 'dataMin',
                        // max: 'dataMax',
                        // interval: 50,
                        axisLabel: {
                            align: 'right',
                            // margin: 0,
                            formatter: '{value}',
                        }
                    },
                    {
                        type: 'value',
                        name: `比上一个时间点增加了`,
                        // min: 'dataMin',
                        // max: 'dataMax',
                        // interval: 50,
                        axisLabel: {
                            align: 'left',
                            formatter: '{value}',
                        }
                    },
                    {
                        type: 'value',
                        name: `事件`,
                        min: 0,
                        max: 1,
                        show: false,
                        axisLabel: {
                            align: 'left',
                            formatter: '{value}',
                        },
                        // 鼠标悬浮时不显示右侧坐标轴上数字标签
                        axisPointer: {
                            show: false
                        }
                    },
                ],
                dataZoom: [
                    {
                        type: 'slider',
                        bottom: '2%',
                        xAxisIndex: [0],
                        filterMode: 'filter',
                        // start: 0,
                        // 20: 24 - 4（泰拉时间），(new Date().getTimezoneOffset() / -60): 本地时区
                        startValue: this.display_mode == 'default' ? start_date: new Date(0),
                        // end: 100
                        endValue: end_date,
                    },
                ],
                series: [
                    {
                        name: `${CHART_NAMES[chart_name]}`,
                        type: 'line',
                        yAxisIndex: 0,
                        tooltip: {
                            // valueFormatter: function(value) {
                            //     return value;
                            // }
                            formatter: function(params) {
                                return params;
                            }
                        },
                        label: {
                            // show: true,
                            position: 'inside'
                        },
                        data: data_list,
                    },
                    {
                        name: `比上一个时间点增加了`,
                        type: 'bar',
                        yAxisIndex: 1,
                        tooltip: {
                            // valueFormatter: function(value) {
                            //     return value;
                            // }
                            formatter: function(params) {
                                // console.log(params)
                                return params;
                            }
                        },
                        label: {
                            // show: true,
                            position: 'inside'
                        },
                        itemStyle: {
                            // 核心：使用颜色回调函数
                            color: function(params) {
                                // 定义颜色
                                var increaseColor = '#f17b91dd'; // 上涨颜色 (红色系)
                                var decreaseColor = '#b5d347dd'; // 下跌颜色 (绿色系)

                                // 获取当前数据索引
                                var dataIndex = params.dataIndex;
                                // 获取当前系列的全部数据
                                var dataList = delta_list;

                                // 如果是第一个数据点（没有前一个点），默认返回灰色或不应用规则
                                if (dataIndex === 0) {
                                    return '#ccc'; // 或者 return increaseColor; 根据你的需求决定
                                }

                                // 获取当前数据和前一个数据
                                var currentValue = params.value[1];
                                var prevValue = dataList[dataIndex - 1][1];
                                // 比较并返回颜色
                                if (currentValue > prevValue) {
                                    return increaseColor; // 当前值大于前一个值，返回红色
                                } else if (currentValue < prevValue) {
                                    return decreaseColor; // 当前值小于前一个值，返回绿色
                                } else {
                                    return '#00bee8dd'; // 相等时可以自定义颜色，例如灰色
                                }
                            }
                        },
                        data: delta_list,
                    },
                    {
                        name: `事件`,
                        type: 'line',
                        // stack: 'all',
                        yAxisIndex: 2,
                        symbolSize: 10,
                        // label: {
                        //     show: true,
                        //     position: 'top',
                        //     formatter: function (object) {
                        //         return object.value[2];
                        //         // return EVENTS[toLocalISOStringShanghai(new Date(object.value[0]))];
                        //     }
                        // },
                        tooltip: {
                            show: false,
                        },
                        // data: this.event_list.map(x => [x[0], (0.9 - 0.15 * (x[2] % 4)), x[3]]),
                        // data: this.event_list.map(x => [x[0], x[1], (0.9 - 0.15 * (x[2] % 4)), x[3]]),
                        // markArea
                        markArea: {
                            // itemStyle: {
                            //     color: 'rgba(255, 229, 143, 0.3)'  // 浅黄色背景
                            // },
                            data: that.event_list,
                            // data: [
                            //     [
                            //         {
                            //             name: '卫戍协议：盟约',
                            //             xAxis: '2025-11-14 17:00',
                            //             yAxis: 0.5,
                            //             itemStyle: {
                            //                 color: 'rgba(32, 255, 32, 0.5)'
                            //             }
                            //         },
                            //         {
                            //             xAxis: '2025-12-12 04:00',
                            //             yAxis: 0.4,
                            //         }
                            //     ],
                            // ],
                            label: {
                                show: true,
                                position: 'inside',
                                // position: 'insideTop',
                                color: '#777'
                            },
                            emphasis: {
                                itemStyle: {
                                    color: 'rgba(255, 173, 177, 0.8)'
                                },
                                // 悬浮状态的 label
                                label: {
                                    show: true,
                                    position: 'inside',
                                    formatter: function (object) {
                                        return `${object.data.name}\n(${toLocalISOStringShanghai(new Date(object.data.coord[0][0]))} ~ ${toLocalISOStringShanghai(new Date(object.data.coord[1][0]))})`;
                                    },
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#325',
                                    z: 325,
                                    zlevel: 325,
                                },
                            },
                        },
                    },
                ]
            };

            this.charts[rogue_id][chart_name] && this.charts[rogue_id][chart_name].setOption(option);
        },

        init_chart_stacked_area_endings: function(rogue_id) {
            let chart_name = 'endings';
            let today = new Date();
            today.setTime(+today - 4 * 60 * 60 * 1000);
            // let today_str = toLocalISOStringShanghai(today);
            let ending_lists = {'1': [], '2': [], '3': [], '4': [], '5': []};
            // let x_axis_list = [];
            let date_list = Object.keys(this.ji_stats_data[rogue_id]);
            for (let i = 0; i < date_list.length; i++) {
                let timestamp_delta;
                let timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]);
                if (this.display_mode == 'default') {
                    if (i < date_list.length - this.day_offset) {
                        timestamp_delta = +new Date();
                        timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]).slice(-1);
                    }
                    else {
                        timestamp_delta = this.day_offset * 24 * 60 * 60 * 1000 + 40 * 60 * 1000;
                        // timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]);
                        let full_timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]);
                        timestamp_list = [];
                        let timestamp_set = new Set();
                        for (let j = 0; j < full_timestamp_list.length; j++) {
                            let timestamp = +full_timestamp_list[j];
                            let timestamp_of_interval = Math.floor(timestamp / (60 * this.interval)) * 60 * this.interval;
                            if (!(timestamp_set.has(timestamp_of_interval))) {
                                timestamp_list.push(full_timestamp_list[j]);
                                timestamp_set.add(timestamp_of_interval);
                            }
                        }
                    }
                }
                else if (this.display_mode == 'all') {
                    timestamp_delta = +new Date();
                    timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]);
                }
                else if (this.display_mode == 'daily') {
                    timestamp_delta = +new Date();
                    timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]).slice(-1);
                }
                else if (this.display_mode == 'weekly') {
                    timestamp_delta = +new Date();
                    if (((new Date(date_list[i])).getDay() == this.end_of_week) || (i == date_list.length - 1)) {
                        timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]).slice(-1);
                    }
                    else {
                        timestamp_list = [];
                    }
                }
                for (let j = 0; j < timestamp_list.length; j++) {
                    if (+new Date() - timestamp_list[j] * 1000 < timestamp_delta) {
                        for (let ending_count in ending_lists) {
                            // ending_lists[ending_count].push(this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]][chart_name][ending_count] || '-');
                            ending_lists[ending_count].push([new Date(timestamp_list[j] * 1000), this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]][chart_name] && this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]][chart_name][ending_count] || '-']);
                            // ending_lists[ending_count].push([new Date(timestamp_list[j] * 1000), this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]][chart_name][ending_count] || '-']);
                        }
                        // x_axis_list.push(toLocalISOStringShanghai(new Date(this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]]['last_update_timestamp'] * 1000)));
                    }
                }
            }

            // offset_28: 是否已进入泰拉历新的一天(day n+1)而UTC仍在原来的一天(day n)
            // 20: 泰拉历与UTC之间的时差为4小时，泰拉历0时=UTC前一天20时
            let offset_28 = ((+new Date()) % 86400000) / (60 * 60 * 1000) > 20 ? 1 : 0;
            // Math.ceil((+new Date()) / 86400000 + offset_28): 泰拉历天数（一天的结束）
            // - 4 * 3600000: 泰拉历与UTC之间的时差
            // this.day_offset * 86400000: 要展示的天数
            let start_date = new Date(Math.ceil((+new Date()) / 86400000 + offset_28) * 86400000 - 4 * 3600000 - this.day_offset * 86400000);

            var option = {
                title: {
                    left: 'center',
                    text: `全服集集统计 ${ROGUE_NAMES[rogue_id]} ${CHART_NAMES[chart_name]}`
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
                        },
                        label: {
                            // 这里是控制x轴和y轴上显示值的格式
                            show: true,
                            formatter: function(params) {
                                // params.value 是坐标轴的值
                                // 根据坐标轴类型格式化
                                if (params.axisDimension === 'x') {
                                    // x轴的值格式化
                                    const date = new Date(params.value);
                                    return toLocalISOStringShanghai(date, true, 16);
                                }
                                else if (params.axisDimension === 'y') {
                                    // y轴的值格式化 - 添加千位分隔符
                                    return Number(params.value).toLocaleString('zh-CN');
                                }
                                return undefined;
                            },
                        }
                    },
                    formatter: function(params) {
                        // params是一个数组，包含所有在该x轴位置有数据的系列
                        if (!params || params.length === 0) return '';

                        // 只使用第一个参数的日期（因为所有数据点都在同一时间）
                        const firstParam = params[0];
                        const date = new Date(firstParam.value[0]);
                        const dateStr = toLocalISOStringShanghai(date, true, 16);
                        let result = `<span>本地时间</span><span style="float:right;margin-left:20px;font-size:14px;color:#6d6e73;font-weight:900">${dateStr}</span><br/>`;
                        result += `<span>服务器时间</span><span style="float:right;margin-left:20px;font-size:14px;color:#6d6e73;font-weight:900">${toLocalISOStringShanghai(date, false, 16)}</span><br/>`
                        params.forEach(param => {
                            result += `${param.marker}<span style="font-size:14px;color:#6d6e73;font-weight:400;margin-left:2px">${param.seriesName}</span><span style="float:right;margin-left:20px;font-size:14px;color:#6d6e73;font-weight:900">${param.value[1]}</span><br/>`;
                        });
                        return result;
                    },
                },
                toolbox: {
                    feature: {
                        saveAsImage: { show: true }
                    }
                },
                legend: {
                    top: 30,
                    data: [``]
                },
                xAxis: [
                    {
                        type: 'time',
                        axisLabel: {
                            interval: 'auto',  // 自动计算间隔
                            formatter: function(object) {
                                return toLocalISOStringShanghai(new Date(object), true, 16);
                            },
                        },
                        axisPointer: {
                            type: 'shadow',
                            formatter: function(object) {
                                return toLocalISOStringShanghai(new Date(object), true, 16);
                            },
                        },
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: ``,
                        // min: 'dataMin',
                        // max: 'dataMax',
                        // interval: 50,
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                ],
                dataZoom: [
                    {
                        type: 'slider',
                        bottom: '2%',
                        xAxisIndex: [0],
                        filterMode: 'filter',
                        // start: 0,
                        // 20: 24 - 4（泰拉时间），(new Date().getTimezoneOffset() / -60): 本地时区
                        startValue: this.display_mode == 'default' ? start_date: new Date(0),
                        // end: 100
                    },
                ],
                series: [
                    {
                        name: `通关一个结局`,
                        stack: 'Total',
                        type: 'line',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        tooltip: {
                            valueFormatter: function(value) {
                                // return `${value}%`;
                                return `${value}`;
                            }
                        },
                        label: {
                            // show: true,
                            position: 'inside'
                        },
                        data: ending_lists['1'],
                    },
                    {
                        name: `通关两个结局`,
                        stack: 'Total',
                        type: 'line',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        tooltip: {
                            valueFormatter: function(value) {
                                // return `${value}%`;
                                return `${value}`;
                            }
                        },
                        label: {
                            // show: true,
                            position: 'inside'
                        },
                        data: ending_lists['2'],
                    },
                    {
                        name: `通关三个结局`,
                        stack: 'Total',
                        type: 'line',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        tooltip: {
                            valueFormatter: function(value) {
                                // return `${value}%`;
                                return `${value}`;
                            }
                        },
                        label: {
                            // show: true,
                            position: 'inside'
                        },
                        data: ending_lists['3'],
                    },
                    {
                        name: `通关四个结局`,
                        stack: 'Total',
                        type: 'line',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        tooltip: {
                            valueFormatter: function(value) {
                                // return `${value}%`;
                                return `${value}`;
                            }
                        },
                        label: {
                            // show: true,
                            position: 'inside'
                        },
                        data: ending_lists['4'],
                    },
                    {
                        name: `通关五个结局`,
                        stack: 'Total',
                        type: 'line',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        tooltip: {
                            valueFormatter: function(value) {
                                // return `${value}%`;
                                return `${value}`;
                            }
                        },
                        label: {
                            // show: true,
                            position: 'inside'
                        },
                        data: ending_lists['5'],
                    },
                ]
            };

            this.charts[rogue_id][chart_name] && this.charts[rogue_id][chart_name].setOption(option);
        },

        init_chart_top_heatmap: function(rogue_id, chart_name) {
            let today = new Date();
            today.setTime(+today - 4 * 60 * 60 * 1000);
            let data_list = [];
            let x_axis_list = [];
            let date_list = Object.keys(this.ji_stats_data[rogue_id]);
            for (let i = 0; i < date_list.length; i++) {
                let timestamp_delta;
                let timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]);
                if ((this.display_mode == 'default') || (this.display_mode == 'all') || (this.display_mode == 'daily')) {
                    timestamp_delta = +new Date();
                    timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]).slice(-1);
                }
                else if (this.display_mode == 'weekly') {
                    timestamp_delta = +new Date();
                    if (((new Date(date_list[i])).getDay() == this.end_of_week) || (i == date_list.length - 1)) {
                        timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]).slice(-1);
                    }
                    else {
                        timestamp_list = [];
                    }
                }
                for (let j = 0; j < timestamp_list.length; j++) {
                    if (!(chart_name in this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]])) {
                        continue;
                    }
                    if ((+new Date() - timestamp_list[j] * 1000 < timestamp_delta) && (Object.keys(this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]][chart_name]).length > 0)) {
                        let name_list = [];
                        if ((chart_name == 'character')){
                            for (let k = 0; k < this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]][chart_name][this.top_character_job].length; k++) {
                                name_list.push(
                                    (this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]][chart_name][this.top_character_job][k]['name']) ||
                                    (OPERATOR_NAMES[this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]][chart_name][this.top_character_job][k]['id']])
                                );
                            }
                        }
                        if ((chart_name == 'wrath') || (chart_name == 'candle') || (chart_name == 'expeditionGuide')) {
                            for (let k = 0; k < this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]][chart_name].length; k++) {
                                name_list.push(this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]][chart_name][k]['name']);
                            }
                        }
                        data_list.push([date_list[i], name_list]);
                        x_axis_list.push(date_list[i]);
                    }
                }
            }

            // 收集所有干员代号
            const name_set = new Set();
            data_list[data_list.length - 1][1].forEach((name, rank) => {
                name_set.add(name);
            });
            data_list.forEach((item, timeIndex) => {
                item[1].forEach((name, rank) => {
                    name_set.add(name);
                });
            });

            // offset_28: 是否已进入泰拉历新的一天(day n+1)而UTC仍在原来的一天(day n)
            // 20: 泰拉历与UTC之间的时差为4小时，泰拉历0时=UTC前一天20时
            let offset_28 = ((+new Date()) % 86400000) / (60 * 60 * 1000) > 20 ? 1 : 0;
            // Math.ceil((+new Date()) / 86400000 + offset_28): 泰拉历天数（一天的结束）
            // - 4 * 3600000: 泰拉历与UTC之间的时差
            // this.day_offset * 86400000: 要展示的天数
            let start_date = new Date(Math.ceil((+new Date()) / 86400000 + offset_28) * 86400000 - 4 * 3600000 - this.day_offset * 86400000);

            var option = {
                title: {
                    top: 0,
                    left: 'center',
                    text: `全服集集统计 ${ROGUE_NAMES[rogue_id]} ${CHART_NAMES[chart_name]}`
                },
                grid: {
                    height: '70%',
                    top: '15%',
                    left: 80,
                    right: 80,
                },
                // tooltip: {
                //     trigger: 'axis',
                //     axisPointer: {
                //         type: 'cross',
                //         crossStyle: {
                //             color: '#999'
                //         }
                //     }
                // },
                tooltip: {
                    position: 'top',
                    formatter: function(params) {
                        return `${params.data[1]}<br/>日期: ${params.data[0]}<br/>排名: 第${params.data[2]}名`;
                    }
                },
                toolbox: {
                    feature: {
                        // dataView: { show: true, readOnly: true },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        data: x_axis_list,
                        splitArea: {
                            show: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'category',
                        data: Array.from(name_set).reverse(), // 所有不重复的名字
                        splitArea: { show: true }
                    },
                ],
                dataZoom: [
                    {
                        type: 'slider',
                        bottom: '2%',
                        xAxisIndex: [0],
                        filterMode: 'filter',
                        // start: 0,
                        // 20: 24 - 4（泰拉时间），(new Date().getTimezoneOffset() / -60): 本地时区
                        startValue: this.display_mode == 'default' ? start_date: new Date(0),
                        // end: 100
                    },
                ],
                visualMap: {
                    min: 1,
                    max: 5,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '0%',
                    inRange: {
                        color: ['#DD6666', '#E47E7E', '#EB9898', '#F3B4B4', '#FAD0D0']
                    },
                    show: false,
                },
                series: [
                    {
                        name: '排名',
                        type: 'heatmap',
                        data: data_list.flatMap((item, timeIndex) =>
                            item[1].map((name, rank) => [item[0], name, rank + 1])
                        ),
                        label: { show: true },
                        emphasis: {
                            itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0, 0, 0, 0.5)' }
                        }
                    },
                ]
            };
            this.charts[rogue_id][`top_${chart_name}`] && this.charts[rogue_id][`top_${chart_name}`].setOption(option);
        },

        init_chart_top_markarea: function(rogue_id, chart_name) {
            // 转换数据结构：按人名分组，记录每个排名的时间段
            function transformData(data) {
                const result = {};
                const dates = Object.keys(data).sort();
                dates.forEach((date, index) => {
                    const dayData = data[date];
                    Object.entries(dayData).forEach(([rank, name]) => {
                    if (!result[name]) {
                        result[name] = [];
                    }
                    const rankNum = parseInt(rank);
                    // 检查是否需要延续上一个时间段
                    const lastPeriod = result[name][result[name].length - 1];
                    if (lastPeriod &&
                        lastPeriod.rank === rankNum &&
                        lastPeriod.end === dates[index - 1]) {
                        // 延续上一个时间段
                        lastPeriod.end = date;
                    } else {
                        // 创建新的时间段
                        result[name].push({
                        name: name,
                        rank: rankNum,
                        start: date,
                        end: date
                        });
                    }
                    });
                });
                // 将结束日期调整为下一天，确保markArea覆盖完整的时间段
                Object.values(result).forEach(periods => {
                    periods.forEach(period => {
                        if (period.end) {
                            // 将结束日期转换为下一天
                            const endDate = new Date(period.end);
                            endDate.setDate(endDate.getDate() + 1);
                            period.endAdjusted = endDate.toISOString().split('T')[0];
                        }
                    });
                });
                return result;
            }

            // 生成markArea配置
            function generateMarkAreas(transformedData) {
                const markAreas = [];
                Object.entries(transformedData).forEach(([name, periods], index) => {
                    periods.forEach(period => {
                        markAreas.push([
                            {
                                // name: `${name} 第${period.rank}名`,
                                name: `${name}`,
                                rank: period.rank,
                                itemStyle: {
                                    color: COLORS[index % COLORS.length] + '40' // 添加透明度
                                },
                                emphasis: {
                                    itemStyle: {
                                        color: COLORS[index % COLORS.length] + '80', // 高亮时增加透明度
                                        borderWidth: 2,
                                        borderColor: COLORS[index % COLORS.length]
                                    }
                                },
                                label: {
                                    color: COLORS[index % COLORS.length],
                                    fontWeight: 'bold'
                                },
                                xAxis: period.start,
                                yAxis: period.rank - 0.5,
                            },
                            {
                                xAxis: period.endAdjusted || period.end, // 使用调整后的结束时间
                                yAxis: period.rank + 0.5
                            }
                        ]);
                    });
                });
                return markAreas;
            }

            function generateSeries(transformedData, chartData) {
                const series = [];
                // 获取所有日期并排序
                const dates = Object.keys(chartData).sort();
                Object.entries(transformedData).forEach(([name, periods], index) => {
                    const seriesData = [];
                    // 为每个日期创建数据点
                    dates.forEach(date => {
                        // 找到该日期这个人所在的排名
                        const dayData = chartData[date];
                        for (const [rank, person] of Object.entries(dayData)) {
                            if (person === name) {
                                const rankNum = parseInt(rank);
                                // 将日期转换为当天的中间时刻（12:00:00）
                                const dateTime = new Date(date);
                                dateTime.setHours(12, 0, 0, 0);
                                seriesData.push({
                                    name: name,
                                    value: [dateTime, rankNum]
                                });
                                break;
                            }
                        }
                    });
                    series.push({
                        name: name,
                        type: 'line',
                        data: seriesData,
                        lineStyle: {
                            color: COLORS[index % COLORS.length],
                            width: 2
                        },
                        symbol: 'circle',
                        symbolSize: 2,
                        itemStyle: {
                            color: COLORS[index % COLORS.length]
                        },
                        smooth: true,
                        // 添加tooltip配置
                        tooltip: {
                            valueFormatter: function(value) {
                                return `第${value[1]}名`;
                            }
                        }
                    });
                });
                return series;
            }

            function getMaxRank(data) {
                let maxRank = 0;
                Object.values(data).forEach(dayData => {
                    Object.keys(dayData).forEach(rank => {
                        const rankNum = parseInt(rank);
                        if (rankNum > maxRank) {
                            maxRank = rankNum;
                        }
                    });
                });
                return maxRank;
            }

            let today = new Date();
            today.setTime(+today - 4 * 60 * 60 * 1000);
            let data_list = [];
            let x_axis_list = [];
            let date_list = Object.keys(this.ji_stats_data[rogue_id]);
            for (let i = 0; i < date_list.length; i++) {
                let timestamp_delta;
                let timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]);
                if ((this.display_mode == 'default') || (this.display_mode == 'all') || (this.display_mode == 'daily')) {
                    timestamp_delta = +new Date();
                    timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]).slice(-1);
                }
                else if (this.display_mode == 'weekly') {
                    timestamp_delta = +new Date();
                    if (((new Date(date_list[i])).getDay() == this.end_of_week) || (i == date_list.length - 1)) {
                        timestamp_list = Object.keys(this.ji_stats_data[rogue_id][date_list[i]]).slice(-1);
                    }
                    else {
                        timestamp_list = [];
                    }
                }
                for (let j = 0; j < timestamp_list.length; j++) {
                    if (!(chart_name in this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]])) {
                        continue;
                    }
                    if ((+new Date() - timestamp_list[j] * 1000 < timestamp_delta) && (Object.keys(this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]][chart_name]).length > 0)) {
                        let name_list = [];
                        if ((chart_name == 'character')){
                            for (let k = 0; k < this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]][chart_name][this.top_character_job].length; k++) {
                                name_list.push(
                                    (this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]][chart_name][this.top_character_job][k]['name']) ||
                                    (OPERATOR_NAMES[this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]][chart_name][this.top_character_job][k]['id']])
                                );
                            }
                        }
                        if ((chart_name == 'wrath') || (chart_name == 'candle') || (chart_name == 'expeditionGuide')) {
                            for (let k = 0; k < this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]][chart_name].length; k++) {
                                name_list.push(this.ji_stats_data[rogue_id][date_list[i]][timestamp_list[j]][chart_name][k]['name']);
                            }
                        }
                        data_list.push([date_list[i], name_list]);
                        x_axis_list.push(date_list[i]);
                    }
                }
            }

            // offset_28: 是否已进入泰拉历新的一天(day n+1)而UTC仍在原来的一天(day n)
            // 20: 泰拉历与UTC之间的时差为4小时，泰拉历0时=UTC前一天20时
            let offset_28 = ((+new Date()) % 86400000) / (60 * 60 * 1000) > 20 ? 1 : 0;
            // Math.ceil((+new Date()) / 86400000 + offset_28): 泰拉历天数（一天的结束）
            // - 4 * 3600000: 泰拉历与UTC之间的时差
            // this.day_offset * 86400000: 要展示的天数
            // let start_date = new Date(Math.ceil((+new Date()) / 86400000 + offset_28) * 86400000 - 4 * 3600000 - this.day_offset * 86400000);
            let start_date = new Date(Math.ceil((+new Date()) / 86400000 + offset_28) * 86400000 - 4 * 3600000 - 30 * 86400000);

            let data = {};
            data_list.forEach((item, timeIndex) => {
                let rank_in_one_day = {}
                item[1].forEach((name, rank) => {
                    rank_in_one_day[rank + 1] = name;
                });
                data[item[0]] = rank_in_one_day;
            });

            // 初始化图表
            const transformedData = transformData(data);
            const markAreas = generateMarkAreas(transformedData);
            const lineSeries = generateSeries(transformedData, data);

            // 计算y轴的范围，让排名在区域中垂直居中
            const maxRank = getMaxRank(data);
            const yAxisMin = 0.5; // 从第0.5名开始，这样第1名的区域是0.5-1.5
            const yAxisMax = maxRank + 0.5; // 到最大排名(+0.5)名结束

            // ECharts配置
            const option = {
                title: {
                    top: 0,
                    left: 'center',
                    text: `全服集集统计 ${ROGUE_NAMES[rogue_id]} ${CHART_NAMES[chart_name]}`
                },
                grid: {
                    height: '70%',
                    top: '12%',
                    left: 80,
                    right: 80,
                    // containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        },
                        label: {
                            // 这里是控制x轴和y轴上显示值的格式
                            show: true,
                            formatter: function(params) {
                                // params.value 是坐标轴的值
                                // 根据坐标轴类型格式化
                                if (params.axisDimension === 'x') {
                                    // x轴的值格式化
                                    const date = new Date(params.value);
                                    return toLocalISOStringShanghai(date, true, 10);
                                }
                                return params.value;
                            },
                        }
                    },
                    formatter: function(params) {
                        // params是一个数组，包含所有在该x轴位置有数据的系列
                        if (!params || params.length === 0) return '';

                        // 只使用第一个参数的日期（因为所有数据点都在同一时间）
                        const firstParam = params[0];
                        const date = new Date(firstParam.value[0]);
                        const dateStr = date.toISOString().split('T')[0];
                        const timeStr = date.toTimeString().split(' ')[0];

                        // let result = `${dateStr} ${timeStr}<br/>`;
                        let result = `${dateStr}<br/>`;

                        // 按照排名顺序排序（排名第1的在前）
                        const sortedParams = [...params].sort((a, b) => {
                            return a.value[1] - b.value[1]; // 按排名升序排序
                        });

                        // 添加每个人的排名信息，按排名顺序显示
                        sortedParams.forEach(param => {
                            result += `${param.marker} 第${param.value[1]}名: ${param.seriesName}<br/>`;
                        });
                        return result;
                    }
                },
                toolbox: {
                    feature: {
                        // dataView: { show: true, readOnly: true },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                xAxis: {
                    type: 'time',
                    name: '日期',
                    axisLabel: {
                        interval: 'auto',  // 自动计算间隔
                        formatter: function(object) {
                            return toLocalISOStringShanghai(new Date(object), true, 10);
                        },
                    },
                    axisPointer: {
                        type: 'shadow',
                        formatter: function(object) {
                            return toLocalISOStringShanghai(new Date(object), true, 10);
                        },
                    },
                    // 设置时间范围
                    min: (() => {
                        const dates = Object.keys(data).sort();
                        const firstDate = new Date(dates[0]);
                        firstDate.setHours(0, 0, 0, 0);
                        return firstDate;
                    })(),
                    max: (() => {
                    const dates = Object.keys(data).sort();
                        const lastDate = new Date(dates[dates.length - 1]);
                        lastDate.setDate(lastDate.getDate() + 1); // 加一天
                        lastDate.setHours(0, 0, 0, 0);
                        return lastDate;
                    })()
                },
                yAxis: {
                    type: 'value',
                    name: '排名',
                    inverse: true,
                    min: yAxisMin,
                    max: yAxisMax,
                    interval: 0.5,
                    // 自定义坐标轴标签
                    axisLabel: {
                        formatter: function(value) {
                            const rank = Math.round(value);
                            // 只显示整数位置的有效排名范围内的标签
                            if (Math.abs(value - rank) < 0.01 && rank >= 1 && rank <= maxRank) {
                                return `第${rank}名`;
                            }
                            return ''; // 其他位置不显示标签
                        },
                    },
                    // 自定义坐标轴刻度线
                    axisTick: {
                        show: false,
                        // alignWithLabel: true,
                        interval: function(index, value) {
                            // 只显示整数位置的刻度线
                            // return Math.abs((value - 0.5) % 1) < 0.01;
                            return Math.abs((value % 1) - 0.5) < 0.01;
                        }
                    },
                    // 坐标轴线
                    axisLine: {
                        show: true
                    },
                    // 鼠标悬浮时不显示坐标轴上数字标签
                    axisPointer: {
                        show: false
                    },
                    // 分割线
                    splitLine: {
                        show: false,
                        lineStyle: {
                            type: 'dashed',
                            color: '#e0e0e0'
                        },
                        interval: function(index, value) {
                            // 只在整数位置显示网格线
                            return Math.abs((value % 1) - 0.5) < 0.01;
                            // return Math.abs(value - Math.round(value)) < 0.01;
                        }
                    }
                },
                dataZoom: [
                    {
                        type: 'slider',
                        bottom: '2%',
                        xAxisIndex: [0],
                        filterMode: 'filter',
                        // start: 0,
                        // 20: 24 - 4（泰拉时间），(new Date().getTimezoneOffset() / -60): 本地时区
                        startValue: this.display_mode == 'default' ? start_date: new Date(0),
                        // end: 100
                    },
                ],
                series: [
                    // 背景区域系列
                    {
                        type: 'line',
                        markArea: {
                            // silent: true,
                            itemStyle: {
                                borderWidth: 0
                            },
                            label: {
                            position: 'insideTop',
                            fontSize: 12,
                            formatter: function(params) {
                                // markArea标签也显示在区域中间
                                return params.data.name;
                            }
                            },
                            emphasis: {
                                disabled: false, // 启用强调状态
                                itemStyle: {
                                    opacity: 0.8,
                                    borderWidth: 2,
                                    // borderColor: function(params) {
                                    // // 根据名字动态返回颜色
                                    // }
                                },
                                // 悬浮状态的 label
                                label: {
                                    show: true,
                                    position: 'inside',
                                    formatter: function (object) {
                                        let start = new Date(object.data.coord[0][0]);
                                        let end = new Date(new Date(object.data.coord[1][0]) - 86400000);
                                        let day_count = Math.floor((end - start) / 86400000) + 1;
                                        return `${object.data.name} 第${object.data.rank}名\n${day_count}天 (${toLocalISOStringShanghai(start, true, 10)} ~ ${toLocalISOStringShanghai(end, true, 10)})`;
                                    },
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: '#325',
                                },
                            },
                            data: markAreas,
                            // data: markAreas.map(area => {
                            //     // 确保markArea区域与y轴设置一致
                            //     const data = area;
                            //     data[0].yAxis = data[0].yAxis || area.rank - 0.5;
                            //     data[1].yAxis = data[1].yAxis || area.rank + 0.5;
                            //     return area;
                            // })
                        },
                        data: []
                    },
                    // 排名线
                    ...lineSeries
                ],
                legend: {
                    show: false,
                    data: Object.keys(transformedData),
                    top: 30,
                    type: 'scroll' // 如果人名太多，可以滚动
                }
            };
            // 初始化图表
            const chart = this.charts[rogue_id][`top_${chart_name}`];
            chart && chart.clear();
            chart && chart.setOption(option, true);
        },

        set_display_mode: function(mode_name) {
            this.display_mode = mode_name;
        },

        set_day_offset: function(day_offset) {
            this.day_offset = day_offset;
        },

        set_interval: function(interval) {
            this.interval = interval;
        },

        set_end_of_week: function(weekday) {
            this.end_of_week = weekday;
        },

        set_top_character_job: function(job) {
            this.top_character_job = job;
        },

        resizeAll: function() {
            console.time('resizeAll');
            for (let rogue_id in this.charts) {
                for (let i in this.charts[rogue_id]) {
                    this.charts[rogue_id][i] && this.charts[rogue_id][i].resize();
                }
            }
            console.timeEnd('resizeAll');
        },
    },
    // delimiters: ['[[', ']]'],
})

// Vue 3
app.use(ElementPlus);
app.mount('#app');

window.vueApp = app;
