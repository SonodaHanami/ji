const NAME = 'IM-2 斗蛐蛐计算器';
const VERSION = '2.02';

const CONTENTS = {
    'settings': {
        'icon': '⚙',
        'title': '设置',
        'file_path': 'settings.html',
    },
    'update_log': {
        'icon': '⚠',
        'title': '更新日志',
        'file_path': 'update_log.html',
    },
    'document': {
        'icon': '📖',
        'title': '文档',
        'file_path': 'document.html',
    },
}

let last_checked_version = '';
let current_sub_content = '';

let combos = [200, 203, 222, 233, 314, 314, 555, 555, 618, 888];
let per = [10, 30, 60, 100];
let res = [1, -1];
let current_combo = 0;
let jieguo = [];
let money = 8888;

let next_player_id = 0;
let current_player_id = 0;
let current_round = 0;
let player_names = [];
let player_inputs = {};
let round_results = [];


function save_settings() {
    if (!window.localStorage) {
        console.error('浏览器不支持localStorage');
    }
    else {
        console.log('保存设置');
        let storage = window.localStorage;
        let data_to_save = {
            'last_checked_version': last_checked_version,
        };
        storage['data_ji_ququ2'] = JSON.stringify(data_to_save);
        return true;
    }
}

function load_settings() {
    if (!window.localStorage) {
        console.error("浏览器不支持localStorage");
    }
    else {
        console.log('加载已保存的设置');
        if (!('data_ji_ququ2' in window.localStorage)) {
            console.log('没有找到已保存的设置');
            return false;
        }
        let data = JSON.parse(window.localStorage['data_ji_ququ2']);
        // 最后确认过的版本号
        if ('last_checked_version' in data) {
            last_checked_version = data['last_checked_version'];
        }
        return true;
    }
}

function load_contents() {
    let current_timestamp = new Date().getTime();
    console.log('开始加载文档');
    console.time('加载文档');
    fetch(`${CONTENTS['document']['file_path']}?t=${current_timestamp}`)
    .then(response => response.text())
    .then(doc => {
        document.getElementById('div_document').innerHTML = doc;
        console.timeEnd('加载文档');
    })
    .catch(err => {
        console.error(err);
    });

    console.log('开始加载更新日志');
    console.time('加载更新日志');
    fetch(`${CONTENTS['update_log']['file_path']}?t=${current_timestamp}`)
    .then(response => response.text())
    .then(doc => {
        document.getElementById('div_update_log').innerHTML = doc;
        handle_red_spot('update_log');
        console.timeEnd('加载更新日志');
    })
    .catch(err => {
        console.error(err);
    });

}

function init_version() {
    document.getElementById('span_version').innerHTML = VERSION;
    console.log(`${NAME} ${VERSION} 启动！`);
}

function handle_red_spot(name) {
    if (name == 'update_log') {
        // 更新日志
        if (last_checked_version == VERSION) {
            document.getElementById('div_red_spot_version').style.display = 'none';
            document.getElementById('div_red_spot_update_log').style.display = 'none';
            document.getElementById('div_version').onclick = null;
            document.getElementById('div_version').style.cursor = 'auto';
        }
        else {
            console.log('检测到未确认过的新版本');
            document.getElementById('div_red_spot_version').style.display = '';
            document.getElementById('div_red_spot_update_log').style.display = '';
            document.getElementById('div_version').onclick = () => {handle_sub_content('update_log');}
            document.getElementById('div_version').style.cursor = 'pointer';
        }
    }
}

function update_last_checked_version() {
    last_checked_version = VERSION;
}

function update_current_datetime() {
    let now = new Date();
    let new_datetime = `${now.toLocaleDateString("zh-CN")} ${now.toLocaleTimeString("zh-CN").slice(0, 5)}`;
    if (document.getElementById('div_current_datetime').innerHTML != new_datetime) {
        document.getElementById('div_current_datetime').innerHTML = new_datetime;
    }
    setTimeout(update_current_datetime, 1000);
}

function handle_click_copy(target) {
    console.log('点击复制');
    let input = document.getElementById('textarea_copy');
    let text = document.getElementById(target).innerText;
    input.value = text; // 修改文本框的内容
    input.select(); // 选中文本
    document.execCommand('copy'); // 执行浏览器复制命令
    document.getElementById(`${target}_copied`).style.display = '';
    setTimeout(() => {document.getElementById(`${target}_copied`).style.display = 'none';}, 3000);
    console.log('复制成功');
}

function handle_sub_content(name) {
    if (name != undefined && current_sub_content == '') {
        console.log(`打开 ${name}`);
        current_sub_content = name;
        // document.body.style.overflow = 'hidden';
        document.body.style.backgroundColor = '#dddd';
        document.getElementById('table_sub_content_header').style.display = '';
        document.getElementById(`div_${name}`).style.display = '';
        document.getElementById(`table_main_navbar`).style.display = 'none';
        document.getElementById(`div_main`).style.display = 'none';
        document.getElementById('span_overlay_header_icon').innerHTML = CONTENTS[name]['icon'];
        document.getElementById('span_overlay_header_title').innerHTML = CONTENTS[name]['title'];
        
        if (name == 'update_log') {
            console.log('已确认最新版本');
            update_last_checked_version();
            save_settings();
        }
    }
    else {
        console.log(`关闭 ${current_sub_content}`);
        handle_red_spot(current_sub_content);
        document.body.style.backgroundColor = '#FFF';
        document.getElementById('table_sub_content_header').style.display = 'none';
        document.getElementById(`div_${current_sub_content}`).style.display = 'none';
        document.getElementById(`table_main_navbar`).style.display = '';
        document.getElementById(`div_main`).style.display = '';
        // document.body.style.overflow = 'auto';
        current_sub_content = '';
    }
}

function set_plan(plan) {
    console.log(plan);
    let money = 8888;
    let income = 0;
    let plan_a = [], plan_b = [];
    let current_combo = 0;
    let rounds_alive = 0;
    player_inputs[current_player_id][current_round] = plan;
    let player = document.getElementById(`input_player_id_${current_player_id}`).value;
    for (let round = 0; round <= current_round; round++) {
        let p = player_inputs[current_player_id][round];
        plan_a.push(Math.abs(p));
        plan_b.push(parseInt((p / Math.abs(p)) * (round_results[round] || 1)));
        console.log(`round ${round + 1}`);
        let input = Math.ceil(money * plan_a[round] / 100)
        income = plan_b[round] > 0 ? Math.ceil(input * combos[current_combo] / 100) : -input;
        console.log(plan_a, plan_b);
        console.log(
            `本金`, money,
            `投注比例`, Math.abs(plan_a[round] / 100),
            `投注`, input,
            `当前连胜`, current_combo,
            `赔率`, combos[current_combo] / 100,
            `预计收益 ${Math.ceil(input * combos[current_combo] / 100)} / ${-input}`,
        );
        let player_name = player || `匿名玩家${current_player_id}`;
        document.getElementById(`td_temp_result`).innerHTML = `<${player_name}>
            本金 ${money}，投注比例 ${Math.abs(plan_a[round] / 100)}，投注 ${input}，
            当前连胜 ${current_combo}，赔率 ${combos[current_combo] / 100}，
            预计收益 ${Math.ceil(input * combos[current_combo] / 100)} / ${-input}`;
        if (money == 0 || rounds_alive < 0) {
            continue
        }
        money += income;
        if (plan_b[round] > 0) {
            current_combo += 1;
        }
        else {
            current_combo = 0;
        }
        console.log('结算后本金', money)
        if (money > 0) {
            rounds_alive += 1;
        }
        else {
            rounds_alive = -rounds_alive;
        }
    }
    document.getElementById('div_inputs_1').style.display = 'none';
    document.getElementById('div_inputs_2').style.display = 'none';
    document.getElementById(`td_inputs_${current_player_id}_${current_round}`).innerHTML = `${plan > 0 ? '左' : '右'}${Math.abs(plan) == 100 ? 'ALL' : (Math.abs(plan) + '%')}`;
    document.getElementById(`td_inputs_${current_player_id}_${current_round}`).style.backgroundColor = '';
}

function confirm_round(result) {
    round_results.push(result);
    for (let pid = 0; pid < next_player_id; pid++) {
        let money = 8888;
        let plan_a = [], plan_b = [];
        let current_combo = 0;
        let rounds_alive = 0;
        let income = 0;
        let plan = player_inputs[pid][current_round];
        for (let round = 0; round <= current_round; round++) {
            let p = player_inputs[pid][round];
            if (p === undefined) {
                continue;
            }
            plan_a.push(Math.abs(p));
            plan_b.push(parseInt((p / Math.abs(p)) * round_results[round]));  
            if (money == 0 || rounds_alive < 0) {
                income = 0;
                continue;
            }
            let input = Math.ceil(money * plan_a[round] / 100);
            income = plan_b[round] > 0 ? Math.ceil(input * combos[current_combo] / 100) : -input;
            money += income;
            if (plan_b[round] > 0) {
                current_combo += 1;
            }
            else {
                current_combo = 0;
            }
            if (money > 0) {
                rounds_alive += 1;
            }
            else {
                rounds_alive = -rounds_alive;
            }
        }
        console.log('结束后本金', money)
        document.getElementById('div_inputs_1').style.display = 'none';
        document.getElementById('div_inputs_2').style.display = 'none';
        if (plan === undefined) {
            document.getElementById(`td_inputs_${pid}_${current_round}`).innerHTML = '未投注';
        }
        else {
            document.getElementById(`td_inputs_${pid}_${current_round}`).innerHTML = `${money}<br>(${plan > 0 ? '左' : '右'}${Math.abs(plan) == 100 ? 'ALL' : (Math.abs(plan) + '%')} ${plan * result > 0 ? '赢' : '输'} ${plan * result > 0 ? '+' : income == 0 ? '-' : ''}${income})`;
            document.getElementById(`td_inputs_${pid}_${current_round}`).style.backgroundColor = '';
            document.getElementById(`td_money_${pid}`).innerHTML = money;
            if (current_round < 9) {
                document.getElementById(`div_inputs_${pid}_${current_round + 1}`).style.display = '';
            }
        }
    }
    document.getElementById(`th_round_${current_round}`).innerHTML += `<br>${result > 0 ? '左' : '右'}边赢`;
    for (let pid = 0; pid < next_player_id; pid++) {
        document.getElementById(`td_inputs_${pid}_${current_round}`).style.backgroundColor = '';
    }
    current_round += 1;
    document.getElementById(`td_temp_result`).innerHTML = '';
    if (current_round < 10) {
        document.getElementById(`th_confirm`).innerHTML = `结算第${current_round + 1}轮`;
        document.getElementById(`div_button_confirm_1`).innerHTML = `左边赢`;
        document.getElementById(`div_button_confirm_2`).innerHTML = `右边赢`;
    } 
    else {
        document.getElementById(`th_confirm`).innerHTML = `结课！`;
        document.getElementById(`div_button_confirm_1`).style.display = 'none';
        document.getElementById(`div_button_confirm_2`).style.display = 'none';
    }
}

function add_player() {
    let new_player = `<tr id="tr_player_${next_player_id}">
        <td colspan="1">
            <input type="text" id="input_player_id_${next_player_id}" placeholder="匿名玩家${next_player_id}">
        </td>`;
    for (let i = 0; i < 10; i++) {
        new_player += `<td colspan="1" id="td_inputs_${next_player_id}_${i}">
            <div class="div_button" id="div_inputs_${next_player_id}_${i}" style="display: none;" onclick="handle_inputs(${next_player_id}, ${i});">
                投注
            </div>
        </td>`
    }
    new_player += `<td colspan="1" id="td_money_${next_player_id}">8888</td></tr>`;
    player_names = [];
    for (let i = 0; i < next_player_id; i++) {
        player_names.push(document.getElementById(`input_player_id_${i}`).value);
    }
    document.getElementById('table_main').innerHTML += new_player;
    player_inputs[next_player_id] = Array(10);
    for (let i = 0; i < next_player_id; i++) {
        document.getElementById(`input_player_id_${i}`).value = player_names[i];
    }
    next_player_id += 1;
    document.getElementById('div_button_start').innerHTML = `所有 ${next_player_id} 名玩家都已准备好，赚笔大的！`;
}

function game_start() {
    document.getElementById('tr_start').style.display = 'none';
    document.getElementById('tr_player_add').style.display = 'none';
    document.getElementById('tr_inputs_1').style.display = '';
    document.getElementById('tr_inputs_2').style.display = '';
    for (let pid = 0; pid < next_player_id; pid++) {
        document.getElementById(`div_inputs_${pid}_0`).style.display = '';
    }
}

function handle_inputs(player_id, round) {
    current_player_id = player_id;
    // current_round = round;
    document.getElementById(`td_inputs_${current_player_id}_${round}`).style.backgroundColor = '';
    document.getElementById('div_inputs_1').style.display = '';
    document.getElementById('div_inputs_2').style.display = '';
    document.getElementById('div_button_all_1').style.display = round < 5 ? 'none' : '';
    document.getElementById('div_button_all_2').style.display = round < 5 ? 'none' : '';
    for (let pid = 0; pid < next_player_id; pid++) {
        document.getElementById(`td_inputs_${pid}_${round}`).style.backgroundColor = '';
    }
    document.getElementById(`td_inputs_${player_id}_${round}`).style.backgroundColor = '#fedcba';
}
