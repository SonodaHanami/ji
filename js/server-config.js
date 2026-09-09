// 服务器差异集中在此；国际服沿用固定 UTC-7，不自动切换夏令时。
const SERVER_CONFIGS = {
    cn: {label: 'CN', timezone: 8, defaultTopic: 'rogue_7', maxTopic: 7, expeditionGuide: true},
    jp: {label: 'JP', timezone: 9, defaultTopic: 'rogue_6', maxTopic: 6, expeditionGuide: false},
    global: {label: 'global', timezone: -7, defaultTopic: 'rogue_6', maxTopic: 6, expeditionGuide: false},
};
const requestedServer = new URLSearchParams(window.location.search).get('server') || 'cn';
const SERVER = Object.hasOwn(SERVER_CONFIGS, requestedServer) ? requestedServer : 'cn';
const SERVER_CONFIG = SERVER_CONFIGS[SERVER];
const JP_MESSAGES = {
    "正在请求数据": "fetching",
    "🔄 刷新数据": "🔄 refresh",
    "当前已加载最新数据：": "最新データ：",
    "当前显示模式：": "Mode：",
    "默认": "default",
    "每一次更新": "each",
    "每天最后一次更新": "daily",
    "每周最后一次更新": "weekly",
    "显示最近": "show data of the last",
    "天内间隔": "day(s) per",
    "分钟的每一次更新，在此范围外则显示每天最后一次更新": "minutes. Outside this range, the last update of the day will be displayed.",
    "一周的定义是从": "A week starts from",
    "开始，到下一个": "曜日 to next",
    "结束": "曜日",
    "变动记录": "変更履歴",
    "比上一个时间点增加了": "前回の時点と比較して増加",
    "周一": "月",
    "周二": "火",
    "周三": "水",
    "周四": "木",
    "周五": "金",
    "周六": "土",
    "周日": "日"
};
const JP_NAMES = {
    "ROGUE_NAMES": {
        "rogue_2": "ファントムと緋き貴石",
        "rogue_3": "ミヅキと紺碧の樹",
        "rogue_4": "探索者と銀氷の果て",
        "rogue_5": "サルカズの炉辺奇談",
        "rogue_6": "歳の界園志異"
    },
    "JOBS": {
        "PIONEER": "先鋒",
        "WARRIOR": "前衛",
        "TANK": "重装",
        "SNIPER": "狙撃",
        "CASTER": "術師",
        "MEDIC": "医療",
        "SUPPORT": "補助",
        "SPECIAL": "特殊"
    },
    "CHART_NAMES": {
        "node_and_invest": "通過したスポットと源石錐",
        "clear": "クリア回数",
        "node": "通過したスポット",
        "invest": "存入源石锭",
        "endings": "たどり着いた結末数の比率",
        "dice": "サイコロ回る回数",
        "coin": "累计在阿戈尔打印机中的投币次数",
        "vision": "累计消耗抗干扰指数",
        "game": "在【北地巫师竞技】中“连输五次”的博士",
        "spring": "在【度假胜地】中入住度假村的博士",
        "height": "遇到了【负伤的主树】的博士",
        "alchemy": "累计解读次数",
        "amiya": "看到了阿米娅的纪念碑的博士比例",
        "persuade": "累计触发圣卫铳骑的劝导次数",
        "goldSave": "累计请坎诺特“降价”的源石锭数量",
        "tempUpgrade": "累计完成印象加深的次数",
        "ticket": "保留した招集券の総個数",
        "costHp": "スポット「易与」にてジーから商品を購入するために消費した耐久値の総数",
        "nodePass": "歳獣の残識にて消費された燭火の総数",
        "fall": "燭火が残っている状態で歳獣の残識から追放された総回数",
        "rotate": "観光客が印影を集める際の宝印をドクターが回転させた総回数",
        "gold": "キャノットの印によって獲得した源石錐の総数",
        "raidian": "歳獣の残識での遭遇「同心」にて、レイディアンを玉の中の村に進入させた総回数",
        "character": "結末にたどり着いた際、最も多くその場に居合わせたオペレーター",
        "wrath": "結末にたどり着いた際、最も多く発動された上位三種の歳時",
        "candle": "伺燭客になった回数が最も多く上位のオペレーターたち",
        "expeditionGuide": "累计入卷最多次的干员"
    }
};
function t(text) {
    return SERVER === 'jp' ? (JP_MESSAGES[text] || text) : text;
}
function serverPageUrl(server) {
    const url = new URL(window.location.href);
    url.searchParams.set('server', server);
    return url.pathname + url.search + url.hash;
}
document.title = `全服集集统计(${SERVER_CONFIG.label}) | 羽bot`;
