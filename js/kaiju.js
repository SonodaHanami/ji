
const VERSION = '2.11';

const question_mark = '？';
const window_length = 10;

const IS = [
    '傀影与猩红孤钻',
    '水月与深蓝之树',
    '探索者的银凇止境',
]

const GROUPS_2 = [
    '指挥分队', '集群分队', '后勤分队', '矛头分队',
    '突击战术分队', '堡垒战术分队', '远程战术分队', '破坏战术分队',
    '研究分队', '高规格分队',
]
const GROUPS_3 = [
    '心胜于物分队', '物尽其用分队', '以人为本分队',
    '指挥分队', '集群分队', '后勤分队', '矛头分队',
    '突击战术分队', '堡垒战术分队', '远程战术分队', '破坏战术分队',
    '研究分队', '高规格分队',
]
const GROUPS_4 = [
    '指挥分队', '集群分队', '后勤分队', '矛头分队',
    '突击战术分队', '堡垒战术分队', '远程战术分队', '破坏战术分队',
    '特训分队', '高规格分队',
    '永恒狩猎分队', '生活至上分队', '科学主义分队'
]
const GROUPS_JOBS = ['突击战术分队', '堡垒战术分队', '远程战术分队', '破坏战术分队']

const OPERATORS_STAR_6_VANGUARD = ['推进之王', '风笛', '嵯峨', '琴柳', '焰尾', '伺夜', '伊内丝', '缪尔赛思']
const OPERATORS_STAR_6_GUARD = ['银灰', '斯卡蒂', '陈', '赫拉格', '煌', '棘刺', '史尔特尔', '山', '帕拉斯', '耀骑士临光', '艾丽妮', '百炼嘉维尔', '玛恩纳', '重岳', '仇白', '圣约送葬人', '赫德雷']
const OPERATORS_STAR_6_DEFENDER = ['星熊', '塞雷娅', '年', '森蚺', '瑕光', '泥岩', '号角', '斥罪', '涤火杰西卡']
const OPERATORS_STAR_6_SNIPER = ['能天使', '黑', 'W', '早露', '迷迭香', '空弦', '灰烬', '假日威龙陈', '远牙', '菲亚梅塔', '鸿雪', '提丰']
const OPERATORS_STAR_6_CASTER = ['伊芙利特', '艾雅法拉', '莫斯提马', '刻俄柏', '夕', '异客', '卡涅利安', '澄闪', '黑键', '林', '霍尔海雅']
const OPERATORS_STAR_6_MEDIC = ['闪灵', '夜莺', '凯尔希', '流明', '焰影苇草', '纯烬艾雅法拉']
const OPERATORS_STAR_6_SUPPORTER = ['安洁莉娜', '麦哲伦', '铃兰', '浊心斯卡蒂', '灵知', '令', '白铁', '淬羽赫默']
const OPERATORS_STAR_6_SPECIALIST = ['阿', '傀影', '温蒂', '歌蕾蒂娅', '水月', '老鲤', '归溟幽灵鲨', '多萝西', '缄默德克萨斯', '麒麟R夜刀', '琳琅诗怀雅']

const OPERATORS_STAR_5_VANGUARD = ['凛冬', '德克萨斯', '格拉尼', '苇草', '极境', '贾维', '野鬃', '夜半', '晓歌', '谜图', '青枳']
const OPERATORS_STAR_5_GUARD = ['芙兰卡', '因陀罗', '拉普兰德', '幽灵鲨', '暴行', '诗怀雅', '星极', '炎客', '布洛卡', '柏喙', '铸铁', '断崖', '燧石', '鞭刃', '阿米娅(近卫)',
    '战车', '赤冬', '龙舌兰', '羽毛笔', '海沫', '达格达', '铎铃', '火龙S黑角', '摩根', '苍苔']
const OPERATORS_STAR_5_DEFENDER = ['临光', '雷蛇', '可颂', '火神', '拜松', '吽', '石棉', '闪击', '暴雨', '灰毫', '极光', '暮落', '车尔尼', '火哨', '洋灰']
const OPERATORS_STAR_5_SNIPER = ['蓝毒', '白金', '陨星', '普罗旺斯', '守林人', '送葬人', '灰喉', '慑砂', '安哲拉', '四月', '奥斯塔', '熔泉', '寒芒克洛丝', '埃拉托', '承曦格雷伊', '子月', '截云', '玫拉', '隐现', '冰酿']
const OPERATORS_STAR_5_CASTER = ['阿米娅', '天火', '夜魔', '惊蛰', '苦艾', '莱恩哈特', '蜜蜡', '特米米', '薄绿', '爱丽丝', '炎狱炎熔', '蚀清', '耶拉', '洛洛', '星源', '至简', '雪绒', '和弦', '寒檀', '戴菲恩']
const OPERATORS_STAR_5_MEDIC = ['白面鸮', '赫默', '华法琳', '锡兰', '微风', '亚叶', '絮雨', '图耶', '桑葚', '蜜莓', '濯尘芙蓉', '明椒', '刺玫']
const OPERATORS_STAR_5_SUPPORTER = ['梅尔', '初雪', '真理', '空', '格劳克斯', '巫恋', '月禾', '稀音', '九色鹿', '夏栎', '海蒂', '掠风', '但书', '凛视']
const OPERATORS_STAR_5_SPECIALIST = ['红', '崖心', '狮蝎', '食铁兽', '槐琥', '雪雉', '罗宾', '卡夫卡', '乌有', '霜华', '贝娜', '绮良', '见行者', '风丸', '空构', '杏仁']

const OPERATORS_STAR_4_VANGUARD = ['讯使', '清道夫', '红豆', '桃金娘', '豆苗']
const OPERATORS_STAR_4_GUARD = ['杜宾', '缠丸', '霜叶', '艾丝黛尔', '慕斯', '猎蜂', '宴', '断罪者', '刻刀', '芳汀', '杰克', '罗小黑', '石英', '休谟斯']
const OPERATORS_STAR_4_DEFENDER = ['角峰', '蛇屠箱', '古米', '坚雷', '泡泡']
const OPERATORS_STAR_4_SNIPER = ['杰西卡', '流星', '白雪', '红云', '梅', '安比尔', '酸糖', '松果', '铅踝']
const OPERATORS_STAR_4_CASTER = ['夜烟', '远山', '格雷伊', '卡达', '深靛', '布丁']
const OPERATORS_STAR_4_MEDIC = ['末药', '嘉维尔', '调香师', '苏苏洛', '清流', '褐果']
const OPERATORS_STAR_4_SUPPORTER = ['深海色', '地灵', '波登可', '罗比菈塔']
const OPERATORS_STAR_4_SPECIALIST = ['砾', '暗索', '阿消', '伊桑', '孑', '维荻']

const OPERATORS_STAR_3_VANGUARD = ['芬', '香草', '翎羽']
const OPERATORS_STAR_3_GUARD = ['玫兰莎', '月见夜', '泡普卡']
const OPERATORS_STAR_3_DEFENDER = ['卡缇', '米格鲁', '斑点']
const OPERATORS_STAR_3_SNIPER = ['克洛丝', '安德切尔', '空爆']
const OPERATORS_STAR_3_CASTER = ['炎熔', '史都华德']
const OPERATORS_STAR_3_MEDIC = ['芙蓉', '安赛尔']
const OPERATORS_STAR_3_SUPPORTER = ['梓兰']
const OPERATORS_STAR_3_SPECIALIST = []

const OPERATORS_STAR_2_VANGUARD = ['夜刀']
const OPERATORS_STAR_2_GUARD = []
const OPERATORS_STAR_2_DEFENDER = ['黑角']
const OPERATORS_STAR_2_SNIPER = ['巡林者']
const OPERATORS_STAR_2_CASTER = ['杜林', '12F']
const OPERATORS_STAR_2_MEDIC = []
const OPERATORS_STAR_2_SUPPORTER = []
const OPERATORS_STAR_2_SPECIALIST = []

const OPERATORS_STAR_1_VANGUARD = []
const OPERATORS_STAR_1_GUARD = ['Castle-3']
const OPERATORS_STAR_1_DEFENDER = ['Friston-3']
const OPERATORS_STAR_1_SNIPER = ['正义骑士号', '泰拉大陆调查团']
const OPERATORS_STAR_1_CASTER = []
const OPERATORS_STAR_1_MEDIC = ['Lancet-2']
const OPERATORS_STAR_1_SUPPORTER = ['U-Official']
const OPERATORS_STAR_1_SPECIALIST = ['THRM-EX']

const OPERATORS_STAR_6_LIST = OPERATORS_STAR_6_VANGUARD.concat(OPERATORS_STAR_6_GUARD).concat(OPERATORS_STAR_6_DEFENDER).concat(OPERATORS_STAR_6_SNIPER).concat(OPERATORS_STAR_6_CASTER).concat(OPERATORS_STAR_6_MEDIC).concat(OPERATORS_STAR_6_SUPPORTER).concat(OPERATORS_STAR_6_SPECIALIST)
const OPERATORS_STAR_5_LIST = OPERATORS_STAR_5_VANGUARD.concat(OPERATORS_STAR_5_GUARD).concat(OPERATORS_STAR_5_DEFENDER).concat(OPERATORS_STAR_5_SNIPER).concat(OPERATORS_STAR_5_CASTER).concat(OPERATORS_STAR_5_MEDIC).concat(OPERATORS_STAR_5_SUPPORTER).concat(OPERATORS_STAR_5_SPECIALIST)
const OPERATORS_STAR_4_LIST = OPERATORS_STAR_4_VANGUARD.concat(OPERATORS_STAR_4_GUARD).concat(OPERATORS_STAR_4_DEFENDER).concat(OPERATORS_STAR_4_SNIPER).concat(OPERATORS_STAR_4_CASTER).concat(OPERATORS_STAR_4_MEDIC).concat(OPERATORS_STAR_4_SUPPORTER).concat(OPERATORS_STAR_4_SPECIALIST)
const OPERATORS_STAR_3_LIST = OPERATORS_STAR_3_VANGUARD.concat(OPERATORS_STAR_3_GUARD).concat(OPERATORS_STAR_3_DEFENDER).concat(OPERATORS_STAR_3_SNIPER).concat(OPERATORS_STAR_3_CASTER).concat(OPERATORS_STAR_3_MEDIC).concat(OPERATORS_STAR_3_SUPPORTER).concat(OPERATORS_STAR_3_SPECIALIST)
const OPERATORS_STAR_2_LIST = OPERATORS_STAR_2_VANGUARD.concat(OPERATORS_STAR_2_GUARD).concat(OPERATORS_STAR_2_DEFENDER).concat(OPERATORS_STAR_2_SNIPER).concat(OPERATORS_STAR_2_CASTER).concat(OPERATORS_STAR_2_MEDIC).concat(OPERATORS_STAR_2_SUPPORTER).concat(OPERATORS_STAR_2_SPECIALIST)
const OPERATORS_STAR_1_LIST = OPERATORS_STAR_1_VANGUARD.concat(OPERATORS_STAR_1_GUARD).concat(OPERATORS_STAR_1_DEFENDER).concat(OPERATORS_STAR_1_SNIPER).concat(OPERATORS_STAR_1_CASTER).concat(OPERATORS_STAR_1_MEDIC).concat(OPERATORS_STAR_1_SUPPORTER).concat(OPERATORS_STAR_1_SPECIALIST)
// 按星级-职业-实装顺序排序
const ALL_OPERATORS_LIST = OPERATORS_STAR_6_LIST.concat(OPERATORS_STAR_5_LIST).concat(OPERATORS_STAR_4_LIST).concat(OPERATORS_STAR_3_LIST).concat(OPERATORS_STAR_2_LIST).concat(OPERATORS_STAR_1_LIST)
const ALL_OPERATORS_DICTS_LIST = [];

const JOBS = ['先锋', '近卫', '重装', '狙击', '术师', '医疗', '辅助', '特种'];
const OPERATORS_STAR_6_BY_JOB = {
    '先锋': OPERATORS_STAR_6_VANGUARD,
    '近卫': OPERATORS_STAR_6_GUARD,
    '重装': OPERATORS_STAR_6_DEFENDER,
    '狙击': OPERATORS_STAR_6_SNIPER,
    '术师': OPERATORS_STAR_6_CASTER,
    '医疗': OPERATORS_STAR_6_MEDIC,
    '辅助': OPERATORS_STAR_6_SUPPORTER,
    '特种': OPERATORS_STAR_6_SPECIALIST
}
const OPERATORS_STAR_5_BY_JOB = {
    '先锋': OPERATORS_STAR_5_VANGUARD,
    '近卫': OPERATORS_STAR_5_GUARD,
    '重装': OPERATORS_STAR_5_DEFENDER,
    '狙击': OPERATORS_STAR_5_SNIPER,
    '术师': OPERATORS_STAR_5_CASTER,
    '医疗': OPERATORS_STAR_5_MEDIC,
    '辅助': OPERATORS_STAR_5_SUPPORTER,
    '特种': OPERATORS_STAR_5_SPECIALIST
}
const OPERATORS_STAR_4_BY_JOB = {
    '先锋': OPERATORS_STAR_4_VANGUARD,
    '近卫': OPERATORS_STAR_4_GUARD,
    '重装': OPERATORS_STAR_4_DEFENDER,
    '狙击': OPERATORS_STAR_4_SNIPER,
    '术师': OPERATORS_STAR_4_CASTER,
    '医疗': OPERATORS_STAR_4_MEDIC,
    '辅助': OPERATORS_STAR_4_SUPPORTER,
    '特种': OPERATORS_STAR_4_SPECIALIST
}
const OPERATORS_STAR_3_BY_JOB = {
    '先锋': OPERATORS_STAR_3_VANGUARD,
    '近卫': OPERATORS_STAR_3_GUARD,
    '重装': OPERATORS_STAR_3_DEFENDER,
    '狙击': OPERATORS_STAR_3_SNIPER,
    '术师': OPERATORS_STAR_3_CASTER,
    '医疗': OPERATORS_STAR_3_MEDIC,
    '辅助': OPERATORS_STAR_3_SUPPORTER,
    '特种': OPERATORS_STAR_3_SPECIALIST
}
const OPERATORS_STAR_2_BY_JOB = {
    '先锋': OPERATORS_STAR_2_VANGUARD,
    '近卫': OPERATORS_STAR_2_GUARD,
    '重装': OPERATORS_STAR_2_DEFENDER,
    '狙击': OPERATORS_STAR_2_SNIPER,
    '术师': OPERATORS_STAR_2_CASTER,
    '医疗': OPERATORS_STAR_2_MEDIC,
    '辅助': OPERATORS_STAR_2_SUPPORTER,
    '特种': OPERATORS_STAR_2_SPECIALIST
}
const OPERATORS_STAR_1_BY_JOB = {
    '先锋': OPERATORS_STAR_1_VANGUARD,
    '近卫': OPERATORS_STAR_1_GUARD,
    '重装': OPERATORS_STAR_1_DEFENDER,
    '狙击': OPERATORS_STAR_1_SNIPER,
    '术师': OPERATORS_STAR_1_CASTER,
    '医疗': OPERATORS_STAR_1_MEDIC,
    '辅助': OPERATORS_STAR_1_SUPPORTER,
    '特种': OPERATORS_STAR_1_SPECIALIST
}
const OPERATORS_BY_STAR = {
    '6': OPERATORS_STAR_6_BY_JOB,
    '5': OPERATORS_STAR_5_BY_JOB,
    '4': OPERATORS_STAR_4_BY_JOB,
    '3': OPERATORS_STAR_3_BY_JOB,
    '2': OPERATORS_STAR_2_BY_JOB,
    '1': OPERATORS_STAR_1_BY_JOB,
}

const DEFAULT_DECK = [
    '琴柳', '伊内丝', '缪尔赛思',
    '银灰', '史尔特尔', '耀骑士临光', '百炼嘉维尔', '玛恩纳', '玛恩纳', '玛恩纳', '仇白',
    '星熊', '年', '涤火杰西卡',
    '假日威龙陈', '提丰',
    '艾雅法拉', '莫斯提马', '异客', '澄闪', '林',
    '夜莺', '焰影苇草', '纯烬艾雅法拉',
    '铃兰', '浊心斯卡蒂', '多萝西', '缄默德克萨斯', '缄默德克萨斯', '麒麟R夜刀', '麒麟R夜刀', '琳琅诗怀雅',
    '极境', '四月', '阿米娅', '雪绒', '白面鸮', '赫默', '华法琳', '巫恋',
    '桃金娘', '蛇屠箱',
    '芬', '玫兰莎', '泡普卡', '卡缇', '米格鲁', '斑点',
    '克洛丝', '炎熔', '安赛尔', '梓兰'
];
const MIN_DECK_SIZE = 40;
const MAX_DECK_SIZE = 60;

let current_box_mode = 2;
let current_operators_6_list, current_operators_6_by_job;
let current_deck = [];

function save_settings() {
    if (!window.localStorage) {
        console.error("浏览器不支持localStorage");
    }
    else {
        console.log("save_settings()");
        let storage = window.localStorage;
        // 选中的集成战略
        let enabled_is = [];
        if (document.getElementById('is_2').checked) {
            enabled_is.push(2)
        }
        if (document.getElementById('is_3').checked) {
            enabled_is.push(3)
        }
        if (document.getElementById('is_4').checked) {
            enabled_is.push(4)
        }
        // 不在box中的干员
        let operators_star_6_to_get = [];
        for (let idx = 0; idx < OPERATORS_STAR_6_LIST.length; idx++) {
            let code_name = OPERATORS_STAR_6_LIST[idx];
            if (document.getElementById(`box_${code_name}`).checked == false) {
                operators_star_6_to_get.push(code_name);
            }
        }
        let data_to_save = {
            'box_mode': current_box_mode,
            'enabled_is': enabled_is,
            'job_group_only': document.getElementById('job_group_only').checked,
            'support_unit_enabled': document.getElementById('support_unit_enabled').checked,
            'to_get': operators_star_6_to_get,
            'deck': current_deck,
        };
        storage['data_ji_kaiju'] = JSON.stringify(data_to_save);
        return true;
    }
}

function load_settings() {
    if (!window.localStorage) {
        console.error("浏览器不支持localStorage");
    }
    else {
        console.log("load_settings()");
        if (!('data_ji_kaiju' in window.localStorage)) {
            console.log("没有找到已保存的设置");
            return false;
        }
        let data = JSON.parse(window.localStorage['data_ji_kaiju']);
        // 选中的集成战略
        if ('enabled_is' in data) {
            document.getElementById('is_2').checked = data['enabled_is'].includes(2);
            document.getElementById('is_3').checked = data['enabled_is'].includes(3);
            document.getElementById('is_4').checked = data['enabled_is'].includes(4);
        }
        // 仅使用职业分队开局
        if ('job_group_only' in data) {
            document.getElementById('job_group_only').checked = data['job_group_only'];
            document.getElementById('support_unit_enabled').checked = data['support_unit_enabled'];
        }
        // box模式
        if ('box_mode' in data) {
            current_box_mode = data['box_mode'];
        }
        // 不在box中的干员
        if ('to_get' in data) {
            current_operators_6_by_job = JSON.parse(JSON.stringify(OPERATORS_STAR_6_BY_JOB));
            current_operators_6_list = OPERATORS_STAR_6_LIST.slice();
            for (let job in OPERATORS_STAR_6_BY_JOB) {
                for (let idx = 0; idx < OPERATORS_STAR_6_BY_JOB[job].length; idx++) {
                    let code_name = OPERATORS_STAR_6_BY_JOB[job][idx];
                    if (data['to_get'].includes(code_name)) {
                        document.getElementById(`box_${code_name}`).checked = false;
                        current_operators_6_list.splice(current_operators_6_list.indexOf(code_name), 1);
                        current_operators_6_by_job[job].splice(current_operators_6_by_job[job].indexOf(code_name), 1);
                    }
                }
            }
        }
        if ('deck' in data) {
            current_deck = data['deck'];
        }
        return true;
    }
}

function init_version() {
    document.getElementById('span_version').innerHTML = VERSION;
    console.log(`肉鸽开局生成器 ${VERSION} 启动！`)
}

function init_all_operators() {
    let idx = 0;
    let stars = ['6', '5', '4', '3', '2', '1'];
    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        for (let job in OPERATORS_BY_STAR[star]) {
            for (let j = 0; j < OPERATORS_BY_STAR[star][job].length; j++) {
                let code_name = OPERATORS_BY_STAR[star][job][j];
                ALL_OPERATORS_DICTS_LIST.push({
                    'index': idx++,
                    'code_name': code_name,
                    'star': parseInt(star),
                    'job': job,
                })
            }
        }
    }
}

function init_table_box_basic() {
    for (let job in OPERATORS_STAR_6_BY_JOB) {
        document.getElementById(`td_box_operators_star_6_${job}`).innerHTML = '';
        for (let idx = 0; idx < OPERATORS_STAR_6_BY_JOB[job].length; idx++) {
            let code_name = OPERATORS_STAR_6_BY_JOB[job][idx];
            document.getElementById(`td_box_operators_star_6_${job}`).innerHTML += `
                <span><input type="checkbox" id="box_${code_name}" checked><label for="box_${code_name}">${code_name}</label></span>
            `
        }
    }
}

function init_table_box_deck() {
    document.getElementById('td_current_deck_all').innerHTML = '当前卡组为空';
    for (let i = 0; i < JOBS.length; i++) {
        document.getElementById(`td_deck_operators_${JOBS[i]}`).innerHTML = '';
    }
    for (let i = 0; i < ALL_OPERATORS_DICTS_LIST.length; i++) {
        let opr = ALL_OPERATORS_DICTS_LIST[i];
        if (opr.star >= 3) {
            class_list = [`div_button_operator`, `div_button_operator_star_${opr.star}`];
            if (opr.star == 6 && !(current_operators_6_list.includes(opr.code_name))) {
                class_list.push(`div_button_operator_to_get`);
            }
            document.getElementById(`td_deck_operators_${opr.job}`).innerHTML += `
                <div class="${class_list.join(' ')}" id="deck_${opr.code_name}" onclick="handle_deck('add', '${opr.code_name}', ${opr.star});">
                    <div class="div_button_operator_${opr.job}">${opr.job.slice(0, 1)}</div>
                    ${opr.code_name}
                </div>
            `
        }
    }
}

function update_current_deck() {
    console.time('update_current_deck');
    update_current_operators();
    // 按星级-职业-实装顺序排序
    let new_deck = [];
    for (let i = 0; i < ALL_OPERATORS_DICTS_LIST.length; i++) {
        let opr = ALL_OPERATORS_DICTS_LIST[i];
        if (opr.star >= 3) {
            if (opr.star == 6 && !(current_operators_6_list.includes(opr.code_name))) {
                continue;
            }
            while (current_deck.includes(opr.code_name)) {
                new_deck.push(current_deck.splice(current_deck.indexOf(opr.code_name), 1)[0]);
            }
        }
    }
    current_deck = new_deck.slice();
    init_table_box_deck();
    if (current_deck.length > 0) {
        document.getElementById('td_current_deck_all').innerHTML = '';
        for (let i = 0; i < current_deck.length; i++) {
            let opr = get_operator_by_code_name(current_deck[i]);
            class_list = [`div_button_operator`, `div_button_operator_star_${opr.star}`];
            document.getElementById('td_current_deck_all').innerHTML += `
                <div class="${class_list.join(' ')}" onclick="handle_deck('remove', '${opr.code_name}', ${opr.star});">
                    <div class="div_button_operator_${opr.job}">${opr.job.slice(0, 1)}</div>
                    ${opr.code_name}
                </div>
            `
            if (opr.star < 6) {
                document.getElementById(`deck_${opr.code_name}`).style.display = 'none';
                if (opr.code_name == '阿米娅' || opr.code_name == '阿米娅(近卫)') {
                    document.getElementById(`deck_阿米娅`).style.display = 'none';
                    document.getElementById(`deck_阿米娅(近卫)`).style.display = 'none';
                }
            }
        }
    }
    document.getElementById('td_deck_count').innerHTML = `${current_deck.length}`;
    console.timeEnd('update_current_deck');
}

function get_operator_by_code_name(code_name) {
    if (ALL_OPERATORS_LIST.indexOf(code_name) > -1) {
        return ALL_OPERATORS_DICTS_LIST[ALL_OPERATORS_LIST.indexOf(code_name)];
    }
}


function get_operator_star(code_name) {
    return ALL_OPERATORS_DICTS_LIST[ALL_OPERATORS_LIST.indexOf(code_name)]['star'];
}

function handle_deck(action, code_name, star) {
    if (action == 'add') {
        if (current_deck.length >= MAX_DECK_SIZE) {
            return;
        }
        if (star == 6 && !(current_operators_6_list.includes(code_name))) {
            return;
        }
        current_deck.push(code_name);
    }
    else if (action == 'remove') {
        current_deck.splice(current_deck.indexOf(code_name), 1);
    }
    update_current_deck();
}

function handle_full_deck(deck=[]) {
    current_deck = deck.slice();
    update_current_deck();
}

function draw_in_drama(code_name) {
    // Draw!
    let draw_opr_from_deck = document.getElementsByClassName(`div_deck_in_drama_${code_name}`);
    for (let j = 0; j < draw_opr_from_deck.length; j++) {
        draw_opr_from_deck[j].style.display = 'none';
    }
    let opr = get_operator_by_code_name(code_name);
    document.getElementById('div_draw').innerHTML += `
        <div class="div_button_operator div_button_operator_star_${opr.star} div_button_operator_${opr.job}" style="cursor: auto";>
            <div class="div_button_operator_${opr.job}">${opr.job.slice(0, 1)}</div>
            ${opr.code_name}
        </div>
    `
}

function update_current_operators(full_box=false) {
    current_operators_6_by_job = JSON.parse(JSON.stringify(OPERATORS_STAR_6_BY_JOB));
    current_operators_6_list = OPERATORS_STAR_6_LIST.slice();
    let operators_to_get = [];
    if (full_box) {
        return operators_to_get;
    }
    for (let job in OPERATORS_STAR_6_BY_JOB) {
        for (let idx = 0; idx < OPERATORS_STAR_6_BY_JOB[job].length; idx++) {
            let code_name = OPERATORS_STAR_6_BY_JOB[job][idx];
            if (document.getElementById(`box_${code_name}`).checked == false) {
                current_operators_6_list.splice(current_operators_6_list.indexOf(code_name), 1);
                current_operators_6_by_job[job].splice(current_operators_6_by_job[job].indexOf(code_name), 1);
                operators_to_get.push(code_name);
            }
        }
    }
    return operators_to_get;
}

function get_opening_today() {
    if (current_box_mode == 1) {
        get_opening_basic();
    }
    else if (current_box_mode == 2) {
        get_drama_deck(0);
    }
}

function get_opening_basic() {
    update_current_operators(document.getElementById('support_unit_enabled').checked);
    let user_id = document.getElementById('user_id').value;
    let now = (new Date).toLocaleDateString("zh-CN");
    let hash_int = parseInt(md5(user_id.concat('_').concat(now)).slice(0, 8), 16);

    let is_pool = [];
    if (document.getElementById('is_2').checked) {
        is_pool.push('傀影与猩红孤钻')
    }
    if (document.getElementById('is_3').checked) {
        is_pool.push('水月与深蓝之树')
    }
    if (document.getElementById('is_4').checked) {
        is_pool.push('探索者的银凇止境')
    }
    let opening_is = is_pool[hash_int % is_pool.length];
    let opening_group;
    if (document.getElementById('job_group_only').checked) {
        opening_group = GROUPS_JOBS[hash_int % GROUPS_JOBS.length];
    }
    else {
        if (opening_is == '傀影与猩红孤钻') {
            opening_group = GROUPS_2[hash_int % GROUPS_2.length];
        }
        if (opening_is == '水月与深蓝之树') {
            opening_group = GROUPS_3[hash_int % GROUPS_3.length];
        }
        if (opening_is == '探索者的银凇止境') {
            opening_group = GROUPS_4[hash_int % GROUPS_4.length];
        }
    }
    let operators;
    if (opening_group == '突击战术分队') {
        operators = current_operators_6_by_job['先锋'].concat(current_operators_6_by_job['近卫']);
    }
    else if (opening_group == '堡垒战术分队') {
        operators = current_operators_6_by_job['重装'].concat(current_operators_6_by_job['辅助']);
    }
    else if (opening_group == '远程战术分队') {
        operators = current_operators_6_by_job['狙击'].concat(current_operators_6_by_job['医疗']);
    }
    else if (opening_group == '破坏战术分队') {
        operators = current_operators_6_by_job['术师'].concat(current_operators_6_by_job['特种']);
    }
    else {
        operators = current_operators_6_list;
    }
    let opening_operator = operators[hash_int % operators.length];
    let result = `我掐指一算，今天 ${user_id} 适合在 ${opening_is} 用 ${opening_group} ${opening_operator} 开局`;
    document.getElementById('tr_today_button').style.display = 'none';
    document.getElementById('tr_today_result').style.display = '';
    handle_text_animation('td_today', result);
}

function get_drama_today(level) {
    if (current_box_mode == 1) {
        get_drama_basic(level);
    }
    else if (current_box_mode == 2) {
        get_drama_deck(level);
    }
}

function get_drama_basic(level=1) {
    function check_drama_box() {
        let keys = Object.keys(drama_box);
        for (let i = 0; i < keys.length; i++) {
            let job = keys[i];
            if (drama_box[job].length == 0) {
                delete drama_box[job];
                delete picks_count[job];
            }
        }
    }

    let drama_level, replys = [], reply_picks = [];
    let operators_to_get = update_current_operators();
    if (operators_to_get.length > 0) {
        replys.push(`<span class="elm_bg_orange" onclick="document.getElementById('span_to_get').style.display = '';" style="cursor: pointer;">${operators_to_get.length}位干员</span><span id="span_to_get" style="display: none;">（${operators_to_get.join('、')}）</span>不在box中`);
    }
    if (document.getElementById('support_unit_enabled').checked) {
        update_current_operators(true);
        replys.push('允许使用不在box中的干员开局（招募助战）');
    }
    let user_id = document.getElementById('user_id').value;
    let now = (new Date).toLocaleDateString("zh-CN");
    let hash_int = parseInt(md5(user_id.concat('_').concat(now)).slice(0, 8), 16);

    let is_pool = [];
    if (document.getElementById('is_2').checked) {
        is_pool.push('傀影与猩红孤钻')
    }
    if (document.getElementById('is_3').checked) {
        is_pool.push('水月与深蓝之树')
    }
    if (document.getElementById('is_4').checked) {
        is_pool.push('探索者的银凇止境')
    }
    let opening_is = is_pool[hash_int % is_pool.length];
    let opening_group;
    if (document.getElementById('job_group_only').checked) {
        opening_group = GROUPS_JOBS[hash_int % GROUPS_JOBS.length];
        replys.push('仅使用职业分队开局');
    }
    else {
        if (opening_is == '傀影与猩红孤钻') {
            opening_group = GROUPS_2[hash_int % GROUPS_2.length];
        }
        if (opening_is == '水月与深蓝之树') {
            opening_group = GROUPS_3[hash_int % GROUPS_3.length];
        }
        if (opening_is == '探索者的银凇止境') {
            opening_group = GROUPS_4[hash_int % GROUPS_4.length];
        }
    }
    let drama_box, drama_operators_star_6;
    if (opening_group == '突击战术分队') {
        drama_operators_star_6 = current_operators_6_by_job['先锋'].concat(current_operators_6_by_job['近卫']);
    }
    else if (opening_group == '堡垒战术分队') {
        drama_operators_star_6 = current_operators_6_by_job['重装'].concat(current_operators_6_by_job['辅助']);
    }
    else if (opening_group == '远程战术分队') {
        drama_operators_star_6 = current_operators_6_by_job['狙击'].concat(current_operators_6_by_job['医疗']);
    }
    else if (opening_group == '破坏战术分队') {
        drama_operators_star_6 = current_operators_6_by_job['术师'].concat(current_operators_6_by_job['特种']);
    }
    else {
        drama_operators_star_6 = current_operators_6_list.slice();
    }
    let opening_operator = drama_operators_star_6[hash_int % drama_operators_star_6.length];
    if (replys.length > 0) {
        replys = [`<p>${replys.join('，')}</p>`];
    }
    replys.push(`<p>我掐指一算，今天 ${user_id} 适合在 ${opening_is} 用 ${opening_group} ${opening_operator} 开局</p>`);

    update_current_operators();
    let picks = {
        '先锋': [],
        '近卫': [],
        '重装': [],
        '狙击': [],
        '术师': [],
        '医疗': [],
        '辅助': [],
        '特种': [],
    }
    let picks_count = {
        '先锋': 0,
        '近卫': 0,
        '重装': 0,
        '狙击': 0,
        '术师': 0,
        '医疗': 0,
        '辅助': 0,
        '特种': 0,
    }
    drama_box = JSON.parse(JSON.stringify(current_operators_6_by_job));
    drama_operators_star_6 = current_operators_6_list.slice();
    if (document.getElementById('support_unit_enabled').checked) {
        // 将助战招募干员临时加入box
        for (let job in OPERATORS_STAR_6_BY_JOB) {
            if (OPERATORS_STAR_6_BY_JOB[job].includes(opening_operator)) {
                if (!(job in drama_box)) {
                    drama_box[job] = [];
                }
                if (!(drama_box[job].includes(opening_operator))) {
                    drama_box[job].push(opening_operator);
                }
                if (!(drama_operators_star_6.includes(opening_operator))) {
                    drama_operators_star_6.push(opening_operator);
                }
                break;
            }
        }
    }
    drama_operators_star_6.splice(drama_operators_star_6.indexOf(opening_operator), 1);
    // 处理box中某一职业没有六星的情况
    check_drama_box();
    for (let job in OPERATORS_STAR_6_BY_JOB) {
        if (OPERATORS_STAR_6_BY_JOB[job].includes(opening_operator)) {
            picks[job].push(`${opening_operator}（开局）`)
            picks_count[job] += 1
            reply_picks.push(`<input type="checkbox" id="operator_pick_-1"><label for="operator_pick_-1">第 ${picks_count[job]} 位 六星${job}干员 选择 ${opening_operator}（开局）</label>`);
            if (job in drama_box && drama_box[job].indexOf(opening_operator) > -1) {
                drama_box[job].splice(drama_box[job].indexOf(opening_operator), 1);
            }
            break;
        }
    }
    switch (level) {
        case 3:
            drama_level = 3;
            break;
        case 7:
            drama_level = 7;
            break;
        case 15:
            drama_level = 15;
            break;
        default:
            drama_level = 7;
    }
    // 禁用（从本局游戏中移除）
    let banned_operators = []
    for (let i = 0; i <= drama_level && drama_operators_star_6.length > 0; i++) {
        let banned_operator = drama_operators_star_6[hash_int % drama_operators_star_6.length];
        banned_operators.push(banned_operator);
        drama_operators_star_6.splice(drama_operators_star_6.indexOf(banned_operator), 1);
        for (let job in drama_box) {
            if (drama_box[job].includes(banned_operator)) {
                drama_box[job].splice(drama_box[job].indexOf(banned_operator), 1);
                break;
            }
        }
    }
    replys.push(`<p>将以下 ${banned_operators.length} 位干员从本局游戏中移除：<span id="span_bans" onclick="handle_click_copy('span_bans');">${banned_operators.join('、')}</span> <span id="span_bans_copied" style="display: none;">已复制到剪贴板</span></p>`);
    // 处理禁用后box中某一职业没有六星的情况
    check_drama_box();
    // 选择
    for (let i = 0; i < drama_level && Object.keys(drama_box).length > 0; i++) {
        let not_picked_jobs = [];
        for (let p in picks_count) {
            if (picks_count[p] < Math.max(...Object.values(picks_count))) {
                not_picked_jobs.push(p);
            }
        }
        if (not_picked_jobs.length == 0) {
            not_picked_jobs = Object.keys(picks_count);
        }
        let job_id = hash_int % not_picked_jobs.length;
        let job = not_picked_jobs[job_id];
        operator = drama_box[job].splice(hash_int % drama_box[job].length, 1)[0]
        picks[job].push(operator);
        picks_count[job] += 1;
        reply_picks.push(`<input type="checkbox" id="operator_pick_${i}"><label for="operator_pick_${i}">第 ${picks_count[job]} 位 六星${job}干员 选择 ${operator}</label>`);
        if (drama_box[job].length == 0) {
            delete drama_box[job];
            delete picks_count[job];
        }
    }
    let picks_keys = Object.keys(picks);
    for (let i = 0; i < picks_keys.length; i++) {
        let job = picks_keys[i];
        if (picks[job].length == 0) {
            delete picks[job];
        }
    }
    let picks_oneline = JSON.stringify(picks).replaceAll('","', '、').replaceAll('"', '').replaceAll('[', '').replaceAll(']', '').replaceAll('{', '').replaceAll('}', '').replaceAll(':', '：').replaceAll(',', ' | ');
    picks_oneline = `<p>各职业六星干员必须优先选择：<span id="span_picks" onclick="handle_click_copy('span_picks');">${picks_oneline}</span> <span id="span_picks_copied" style="display: none;">已复制到剪贴板</span></p>`;
    document.getElementById('tr_today_button').style.display = 'none';
    document.getElementById('tr_today_result').style.display = 'none';
    document.getElementById('tr_drama_button_1').style.display = 'none';
    document.getElementById('tr_drama_button_2').style.display = 'none';
    document.getElementById('tr_drama_result').style.display = '';
    document.getElementById('td_drama').innerHTML = `${replys.join('')}${picks_oneline}<p>${reply_picks.join('<br>')}</p>`;
}

function get_drama_deck(drama_level) {
    function check_drama_box_by_job() {
        let jobs = Object.keys(drama_box_by_job);
        for (let i = 0; i < jobs.length; i++) {
            let job = jobs[i];
            if (drama_box_by_job[job].length == 0) {
                delete drama_box_by_job[job];
                delete picks_count_by_job[job];
            }
        }
    }

    function output_drama(drama_text) {
        document.getElementById('tr_today_button').style.display = 'none';
        document.getElementById('tr_today_result').style.display = 'none';
        document.getElementById('tr_drama_button_1').style.display = 'none';
        document.getElementById('tr_drama_button_2').style.display = 'none';
        document.getElementById('tr_drama_result').style.display = '';
        document.getElementById('td_drama').innerHTML = drama_text;
    }

    let replys = [], reply_picks = [];
    let operators_to_get = update_current_operators();
    update_current_deck();
    let drama_deck_list = current_deck.slice();
    let drama_box_set = new Set(drama_deck_list);
    if (drama_deck_list.length < MIN_DECK_SIZE) {
        output_drama(`当前卡组大小为${drama_deck_list.length}，小于下限${MIN_DECK_SIZE}，请检查设置后重试`);
        return;
    }
    if (drama_deck_list.length > MAX_DECK_SIZE) {
        output_drama(`当前卡组大小为${drama_deck_list.length}，超过上限${MAX_DECK_SIZE}，请检查设置后重试`);
        return;
    }

    let user_id = document.getElementById('user_id').value;
    let now = (new Date).toLocaleDateString("zh-CN");
    let hash_int = parseInt(md5(user_id.concat('_').concat(now)).slice(0, 8), 16);

    let is_pool = [];
    if (document.getElementById('is_2').checked) {
        is_pool.push('傀影与猩红孤钻')
    }
    if (document.getElementById('is_3').checked) {
        is_pool.push('水月与深蓝之树')
    }
    if (document.getElementById('is_4').checked) {
        is_pool.push('探索者的银凇止境')
    }
    let opening_is = is_pool[hash_int % is_pool.length];
    let opening_group, opening_job_group_only_text = '';
    if (document.getElementById('job_group_only').checked) {
        opening_group = GROUPS_JOBS[hash_int % GROUPS_JOBS.length];
        opening_job_group_only_text = '；仅使用职业分队开局';
    }
    else {
        if (opening_is == '傀影与猩红孤钻') {
            opening_group = GROUPS_2[hash_int % GROUPS_2.length];
        }
        if (opening_is == '水月与深蓝之树') {
            opening_group = GROUPS_3[hash_int % GROUPS_3.length];
        }
        if (opening_is == '探索者的银凇止境') {
            opening_group = GROUPS_4[hash_int % GROUPS_4.length];
        }
    }
    let drama_operators_star_6 = [], drama_box_by_job = {};
    // 开局干员池，范围为卡组中所有六星干员
    for (let i = 0; i < drama_deck_list.length; i++) {
        let opr = get_operator_by_code_name(drama_deck_list[i]);
        if (opr.star == 6) {
            if (GROUPS_JOBS.includes(opening_group)) {
                // 职业分队开局，范围改为卡组中对应职业所有六星干员
                if (opening_group == '突击战术分队' && (opr.job == '先锋' || opr.job == '近卫')) {
                    drama_operators_star_6.push(drama_deck_list[i]);
                }
                if (opening_group == '堡垒战术分队' && (opr.job == '重装' || opr.job == '辅助')) {
                    drama_operators_star_6.push(drama_deck_list[i]);
                }
                if (opening_group == '远程战术分队' && (opr.job == '狙击' || opr.job == '医疗')) {
                    drama_operators_star_6.push(drama_deck_list[i]);
                }
                if (opening_group == '破坏战术分队' && (opr.job == '术师' || opr.job == '特种')) {
                    drama_operators_star_6.push(drama_deck_list[i]);
                }
            }
            else {
                drama_operators_star_6.push(drama_deck_list[i]);
            }
        }
    }
    // 确定开局干员
    let opening_operator = drama_operators_star_6[hash_int % drama_operators_star_6.length];
    let opening_result = `<p>我掐指一算，今天 ${user_id} 适合在 ${opening_is} 用 ${opening_group} ${opening_operator} 开局</p>`;
    let temp_deck = '';
    for (let i = 0; i < drama_deck_list.length; i++) {
        let opr = get_operator_by_code_name(drama_deck_list[i]);
        temp_deck += `
            <div class="div_button_operator div_button_operator_star_${opr.star} div_deck_in_drama_${opr.code_name}" onclick="draw_in_drama('${opr.code_name}')";>
                <div class="div_button_operator_${opr.job}">${opr.job.slice(0, 1)}</div>
                ${opr.code_name}
            </div>
        `
    }
    // 干员池重置为卡组中所有六星干员
    drama_operators_star_6 = [];
    for (let i = 0; i < drama_deck_list.length; i++) {
        let opr = get_operator_by_code_name(drama_deck_list[i]);
        if (opr.star == 6) {
            drama_operators_star_6.push(drama_deck_list[i]);
        }
    }
    let drama_operators_star_6_set = new Set(drama_operators_star_6);
    replys.push(`<hr><p>当前卡组大小为${drama_deck_list.length}，包含${Array.from(drama_box_set).length}位不同的干员，其中有${Array.from(drama_operators_star_6_set).length}位不同的六星干员${opening_job_group_only_text}</p>`);
    replys.push(`<div style="font-size: 0;"><h2 style="font-size: 2rem;">当前卡组</h2>${temp_deck}</div><hr><div id="div_draw" style="font-size: 0;"><h2 style="font-size: 2rem;">已抽出</h2></div><hr>`);
    replys.push(opening_result);

    let picks_by_job = {
        '先锋': [],
        '近卫': [],
        '重装': [],
        '狙击': [],
        '术师': [],
        '医疗': [],
        '辅助': [],
        '特种': [],
    }
    let picks_count_by_job = {
        '先锋': 0,
        '近卫': 0,
        '重装': 0,
        '狙击': 0,
        '术师': 0,
        '医疗': 0,
        '辅助': 0,
        '特种': 0,
    }
    for (let job in picks_by_job) {
        drama_box_by_job[job] = [];
        // 卡组中所有六星干员
        for (let i = 0; i < drama_deck_list.length; i++) {
            let opr = get_operator_by_code_name(drama_deck_list[i]);
            if (opr.star == 6 && opr.job == job) {
                drama_box_by_job[job].push(drama_deck_list[i]);
            }
        }
    }

    // 开局干员
    let opening_opr = get_operator_by_code_name(opening_operator);
    picks_by_job[opening_opr.job].push(`${opening_operator}（开局）`)
    picks_count_by_job[opening_opr.job] += 1
    reply_picks.push(`<input type="checkbox" id="operator_pick_0"><label for="operator_pick_0">第 ${picks_count_by_job[opening_opr.job]} 位 六星${opening_opr.job}干员 选择 ${opening_operator}（开局）</label>`);
    // 从卡组中移除所有同名干员
    drama_box_set.delete(opening_operator);
    while (opening_opr.job in drama_box_by_job && drama_box_by_job[opening_opr.job].indexOf(opening_operator) > -1) {
        drama_box_by_job[opening_opr.job].splice(drama_box_by_job[opening_opr.job].indexOf(opening_operator), 1);
    }
    while (drama_operators_star_6.includes(opening_operator)) {
        drama_operators_star_6.splice(drama_operators_star_6.indexOf(opening_operator), 1);
    }

    // 处理box中某一职业没有六星的情况
    check_drama_box_by_job();

    // 禁用干员（从本局游戏中移除），范围为卡组中所有六星干员
    let banned_operators = [];
    for (let i = 0; i <= drama_level && drama_level > 0 && drama_operators_star_6.length > 0; i++) {
        let banned_operator = drama_operators_star_6[hash_int % drama_operators_star_6.length];
        let banned_opr = get_operator_by_code_name(banned_operator);
        banned_operators.push(banned_operator);
        // 从卡组中移除所有同名干员
        drama_box_set.delete(banned_operator);
        while (banned_opr.job in drama_box_by_job && drama_box_by_job[banned_opr.job].indexOf(banned_operator) > -1) {
            drama_box_by_job[banned_opr.job].splice(drama_box_by_job[banned_opr.job].indexOf(banned_operator), 1);
        }
        while (drama_operators_star_6.includes(banned_operator)) {
            drama_operators_star_6.splice(drama_operators_star_6.indexOf(banned_operator), 1);
        }
    }

    replys.push(`
        <p>
            · 本局游戏中，对于各个职业，招募到本职业的所有必须优先选择的六星干员之前，不能招募（普通招募或临时招募）本职业的其他六星干员<br>
            · 本局游戏中，招募（普通招募或临时招募）三星及以上的非预备干员时仅能选择卡组中的干员<br>
            · 本局游戏中，临时招募干员时仅能选择卡组中的干员<br>
            ※但是特别地，可以临时招募Sharp、Stormeye、Pith、Touch和郁金香<br>
        </p>
    `);
    replys.push(`<p>不符合以上规则招募到的干员从本局游戏中移除</p>`);
        // 本局游戏中临时招募干员时可以选择卡组外的干员
    // replys.push(`<p>本局游戏中招募所有对应职业的必须优先选择的六星干员之前，可以临时招募其他六星干员，但是招募所有对应职业的必须优先选择的六星干员之后，对应的临时招募六星干员才能进入编队</p>`);
    if (banned_operators.length > 0) {
        replys.push(`<p>将以下 ${banned_operators.length} 位干员从本局游戏中移除：<span id="span_bans" onclick="handle_click_copy('span_bans');">${banned_operators.join('、')}</span> <span id="span_bans_copied" style="display: none;">已复制到剪贴板</span></p>`);
    }
    // 处理禁用后box中某一职业没有六星的情况
    check_drama_box_by_job();

    // 选择本局游戏中各职业必须优先选择的六星干员，范围为(卡组中所有六星干员 + box中所有六星干员)
    for (let job in picks_by_job) {
        if (!(job in drama_box_by_job)) {
            drama_box_by_job[job] = [];
        }
        // 卡组中所有六星干员，已将开局干员和禁用干员移除
        // 额外放入box中所有六星干员
        for (let i = 0; i < current_operators_6_list.length; i++) {
            let opr = get_operator_by_code_name(current_operators_6_list[i]);
            if (opr.star == 6 && opr.job == job && opr.code_name != opening_operator && !(banned_operators.includes(opr.code_name))) {
                drama_box_by_job[job].push(opr.code_name);
            }
        }
    }
    for (let i = 1; i <= drama_level && Object.keys(drama_box_by_job).length > 0; i++) {
        let not_picked_jobs = [];
        for (let p in picks_count_by_job) {
            if (picks_count_by_job[p] < Math.max(...Object.values(picks_count_by_job))) {
                not_picked_jobs.push(p);
            }
        }
        if (not_picked_jobs.length == 0) {
            not_picked_jobs = Object.keys(picks_count_by_job);
        }
        let picked_job_id = hash_int % not_picked_jobs.length;
        let picked_job = not_picked_jobs[picked_job_id];
        picked_operator = drama_box_by_job[picked_job][hash_int % drama_box_by_job[picked_job].length];
        picks_by_job[picked_job].push(picked_operator);
        picks_count_by_job[picked_job] += 1;
        // 从卡组中移除所有同名干员
        let picked_opr = get_operator_by_code_name(picked_operator);
        drama_box_set.delete(picked_operator);
        while (picked_opr.job in drama_box_by_job && drama_box_by_job[picked_opr.job].indexOf(picked_operator) > -1) {
            drama_box_by_job[picked_opr.job].splice(drama_box_by_job[picked_opr.job].indexOf(picked_operator), 1);
        }
        while (drama_operators_star_6.includes(picked_operator)) {
            drama_operators_star_6.splice(drama_operators_star_6.indexOf(picked_operator), 1);
        }
        reply_picks.push(`<input type="checkbox" id="operator_pick_${i}"><label for="operator_pick_${i}">第 ${picks_count_by_job[picked_job]} 位 六星${picked_job}干员 选择 ${picked_operator}</label>`);
        // 处理选择后box中某一职业没有六星的情况
        check_drama_box_by_job();
    }
    // 处理box中所有六星提前抽完的情况
    if (drama_level + 1 > reply_picks.length) {
        reply_picks.push(`卡组中已经没有更多六星干员了`);
    }
    // 移除没有必须优先选择的六星干员的职业
    let picks_jobs = Object.keys(picks_by_job);
    for (let i = 0; i < picks_jobs.length; i++) {
        let job = picks_jobs[i];
        if (picks_by_job[job].length == 0) {
            delete picks_by_job[job];
        }
    }
    // 输出结果
    let picks_oneline = JSON.stringify(picks_by_job).replaceAll('","', '、').replaceAll('"', '').replaceAll('[', '').replaceAll(']', '').replaceAll('{', '').replaceAll('}', '').replaceAll(':', '：').replaceAll(',', ' | ');
    picks_oneline = `<p>各职业六星干员必须优先选择：<span id="span_picks" onclick="handle_click_copy('span_picks');">${picks_oneline}</span> <span id="span_picks_copied" style="display: none;">已复制到剪贴板</span></p>`;
    output_drama(`${replys.join('')}${picks_oneline}<p>${reply_picks.join('<br>')}</p>`);
    draw_in_drama(opening_operator);

    // // 输出结果中仅用于显示的卡组
    // // 开局 - 蓝色
    // for (let i = 0; i < 1; i++) {
    //     let temp_deck_opening_operator = document.getElementsByClassName(`div_deck_in_drama_${opening_operator}`);
    //     for (let j = 0; j < temp_deck_opening_operator.length; j++) {
    //         temp_deck_opening_operator[j].classList.add('div_button_operator_opening');
    //     }
    // }
    // // 优先选择 - 默认红色
    // // 禁用 - 删除线
    // for (let i = 0; i < banned_operators.length; i++) {
    //     let banned_operator = banned_operators[i]
    //     let temp_deck_banned_operator = document.getElementsByClassName(`div_deck_in_drama_${banned_operator}`);
    //     for (let j = 0; j < temp_deck_banned_operator.length; j++) {
    //         temp_deck_banned_operator[j].classList.add('div_button_operator_disabled');
    //         temp_deck_banned_operator[j].classList.add('elm_delete_line');
    //     }
    // }
    // // 其他正在等待 - 淡红色
    // for (let i = 0; i < current_deck.length; i++){
    //     let opr = get_operator_by_code_name(current_deck[i]);
    //     if (opr.star < 6) continue;
    //     waiting = true;
    //     for (let jid = 0; jid < JOBS.length; jid++) {
    //         if (picks_by_job[JOBS[jid]].includes(opr.code_name)) {
    //             waiting = false;
    //         }
    //     }
    //     if (waiting && opr.code_name != opening_operator && !(banned_operators.includes(opr.code_name))) {
    //         let temp_deck_waiting_operator = document.getElementsByClassName(`div_deck_in_drama_${opr.code_name}`);
    //         for (let j = 0; j < temp_deck_waiting_operator.length; j++) {
    //             temp_deck_waiting_operator[j].classList.add('div_button_operator_enabled_waiting');
    //         }
    //     }
    // }
}

function handle_text_animation(element, full_text) {
    let block_text = question_mark.repeat(window_length);
    document.getElementById(element).innerHTML = '';
    for (let k = 1; k <= full_text.length; k++) {
        setTimeout(() => {
            let temp_text = full_text.slice(0, k);
            if (k < window_length) {
                temp_text = temp_text + block_text;
                temp_text = temp_text.slice(0, window_length);
            }
            document.getElementById(element).innerHTML = temp_text;
        }, k * 1000 / full_text.length);
    }
}

function handle_input_keypress(event) {
    let keyCode;
    if (event.which) {
        keyCode = event.which;
    }
    else if (e.keyCode) {
        keyCode = event.keyCode;
    }
    if (keyCode == 13) {
        get_opening_today();
    }
}

function handle_click_copy(target) {
    console.log('点击复制');
    let input = document.getElementById('textarea_bp');
    let text = document.getElementById(target).innerText;
    input.value = text; // 修改文本框的内容
    input.select(); // 选中文本
    document.execCommand('copy'); // 执行浏览器复制命令
    document.getElementById(`${target}_copied`).style.display = '';
    setTimeout(() => {document.getElementById(`${target}_copied`).style.display = 'none';}, 3000);
    console.log('复制成功');
}

function handle_notice(code) {
    let storage = window.localStorage;
    if (code == 1) {
        // 保存最近确认过的提示
        storage['data_ji_kaiju_last_checked_notice'] = document.getElementById('td_notice').innerHTML.trim();
    }
    // 比较最近确认过的提示
    if (storage['data_ji_kaiju_last_checked_notice'] == document.getElementById('td_notice').innerHTML.trim()) {
        // 一致时隐藏提示
        document.getElementById('tr_notice').style.display = 'none';
    }
}

function handle_button_settings() {
    if (document.getElementById('table_settings').style.display == 'none') {
        document.getElementById('table_settings').style.display = '';
        document.getElementById('div_button_settings_main').innerHTML = "收起设置";
        // 文档
        document.getElementById('tr_document').style.display = 'none';
        document.getElementById('div_button_document').innerHTML = '文档';
    }
    else {
        document.getElementById('table_settings').style.display = 'none';
        document.getElementById('div_button_settings_main').innerHTML = '设置';
        document.getElementById('table_box_basic').style.display = 'none';
        document.getElementById('table_box_deck').style.display = 'none';
        document.getElementById('div_button_settings_box').innerHTML = '展开box';
    }
}

function handle_button_document() {
    if (document.getElementById('tr_document').style.display == 'none') {
        document.getElementById('tr_document').style.display = '';
        document.getElementById('div_button_document').innerHTML = "收起文档";
        // 设置
        document.getElementById('table_settings').style.display = 'none';
        document.getElementById('div_button_settings_main').innerHTML = '设置';
        document.getElementById('table_box_basic').style.display = 'none';
        document.getElementById('table_box_deck').style.display = 'none';
        document.getElementById('div_button_settings_box').innerHTML = '展开box';
    }
    else {
        document.getElementById('tr_document').style.display = 'none';
        document.getElementById('div_button_document').innerHTML = '文档';
    }
}

function handle_box_settings(mode) {
    if (mode == 1) {
        document.getElementById('table_box_deck').style.display = 'none';
        document.getElementById('div_button_settings_deck').innerHTML = "展开卡组";
        if (document.getElementById('table_box_basic').style.display == 'none') {
            document.getElementById('table_box_basic').style.display = '';
            document.getElementById('div_button_settings_box').innerHTML = "收起box";
        }
        else {
            document.getElementById('table_box_basic').style.display = 'none';
            document.getElementById('div_button_settings_box').innerHTML = '展开box';
        }
    }
    else if (mode == 2) {
        document.getElementById('table_box_basic').style.display = 'none';
        document.getElementById('div_button_settings_box').innerHTML = '展开box';
        if (document.getElementById('table_box_deck').style.display == 'none') {
            document.getElementById('table_box_deck').style.display = '';
            document.getElementById('div_button_settings_deck').innerHTML = "收起卡组";
        }
        else {
            document.getElementById('table_box_deck').style.display = 'none';
            document.getElementById('div_button_settings_deck').innerHTML = "展开卡组";
        }
    }
}

function handle_box_mode(box_mode) {
    if (box_mode == 1) {
        current_box_mode = box_mode;
        document.getElementById('tr_mode_1').style.display = '';
        document.getElementById('tr_mode_2').style.display = 'none';
        document.getElementById('div_button_settings_box').innerHTML = '展开box';
        document.getElementById('table_box_basic').style.display = 'none';
        document.getElementById('table_box_deck').style.display = 'none';
        document.getElementById('support_unit_enabled').disabled = false;
        document.getElementById('support_unit_disabled_in_deck_mode').innerHTML= '';
    }
    else if (box_mode == 2) {
        current_box_mode = box_mode;
        document.getElementById('tr_mode_1').style.display = 'none';
        document.getElementById('tr_mode_2').style.display = '';
        document.getElementById('div_button_settings_box').innerHTML = '展开box';
        document.getElementById('table_box_basic').style.display = 'none';
        document.getElementById('table_box_deck').style.display = 'none';
        document.getElementById('support_unit_enabled').disabled = true;
        document.getElementById('support_unit_disabled_in_deck_mode').innerHTML= '※在卡组模式下不可用';
    }
}

function reset_opening_today_4() {
    document.getElementById('user_id').value = ''
    document.getElementById('tr_today_button').style.display = '';
    document.getElementById('tr_today_result').style.display = 'none';
    document.getElementById('tr_drama_button_1').style.display = '';
    document.getElementById('tr_drama_button_2').style.display = '';
    document.getElementById('tr_drama_result').style.display = 'none';
}

