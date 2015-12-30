define('borrowers/routes/funcs', ['exports', 'ember', 'borrowers/models/func', 'borrowers/models/row', 'borrowers/models/kind'], function (exports, _ember, _borrowersModelsFunc, _borrowersModelsRow, _borrowersModelsKind) {

	/*三级导航*/

	var kind111 = _borrowersModelsKind['default'].create({
		name: '路由状态',
		id: 'kind1'
	});

	var kind121 = _borrowersModelsKind['default'].create({
		name: '无线设备',
		id: 'kind2'
	});

	var kind131 = _borrowersModelsKind['default'].create({
		name: '外接USB设备',
		id: 'kind3'
	});

	var kind211 = _borrowersModelsKind['default'].create({
		name: '在线设备',
		id: 'kind4'
	});

	var kind212 = _borrowersModelsKind['default'].create({
		name: '历史设备',
		id: 'kind5'
	});

	var kind213 = _borrowersModelsKind['default'].create({
		name: '黑名单',
		id: 'kind6'
	});

	var kind221 = _borrowersModelsKind['default'].create({
		name: '外接USB设备',
		id: 'kind7'
	});

	var kind311 = _borrowersModelsKind['default'].create({
		name: '互联网(WAN)设置',
		id: 'kind8'
	});

	var kind411 = _borrowersModelsKind['default'].create({
		name: '局域网(WAN)设置',
		id: 'kind9'
	});

	var kind511 = _borrowersModelsKind['default'].create({
		name: '小悦网关助手',
		id: 'kind10'
	});

	var kind611 = _borrowersModelsKind['default'].create({
		name: '无线(wifi)设置',
		id: 'kind11'
	});

	var kind711 = _borrowersModelsKind['default'].create({
		name: '路由器管理密码重置',
		id: 'kind12'
	});

	var kind721 = _borrowersModelsKind['default'].create({
		name: '系统版本更新',
		id: 'kind13'
	});

	var kind731 = _borrowersModelsKind['default'].create({
		name: '恢复出厂设置',
		id: 'kind14'
	});

	var kind811 = _borrowersModelsKind['default'].create({
		name: '总流量统计',
		id: 'kind15'
	});

	var kind821 = _borrowersModelsKind['default'].create({
		name: '互联网连接状态',
		id: 'kind16'
	});

	var kind831 = _borrowersModelsKind['default'].create({
		name: '局域网连接状态',
		id: 'kind17'
	});

	var kind841 = _borrowersModelsKind['default'].create({
		name: '无线运行状态',
		id: 'kind18'
	});

	/*二级导航*/

	var row11 = _borrowersModelsRow['default'].create({
		id: 'row1',
		kinds: [kind111]
	});

	var row12 = _borrowersModelsRow['default'].create({
		id: 'row2',
		kinds: [kind121]
	});

	var row13 = _borrowersModelsRow['default'].create({
		id: 'row3',
		kinds: [kind131]
	});

	var row21 = _borrowersModelsRow['default'].create({
		id: 'row1',
		kinds: [kind211, kind212, kind213]
	});

	var row22 = _borrowersModelsRow['default'].create({
		id: 'row2',
		kinds: [kind221]
	});

	var row31 = _borrowersModelsRow['default'].create({
		id: 'row1',
		kinds: [kind311]
	});

	var row41 = _borrowersModelsRow['default'].create({
		id: 'row1',
		kinds: [kind411]
	});

	var row51 = _borrowersModelsRow['default'].create({
		id: 'row1',
		kinds: [kind511]
	});

	var row61 = _borrowersModelsRow['default'].create({
		id: 'row1',
		kinds: [kind611]
	});

	var row71 = _borrowersModelsRow['default'].create({
		id: 'row1',
		kinds: [kind711]
	});

	var row72 = _borrowersModelsRow['default'].create({
		id: 'row2',
		kinds: [kind721]
	});

	var row73 = _borrowersModelsRow['default'].create({
		id: 'row3',
		kinds: [kind731]
	});
	var row81 = _borrowersModelsRow['default'].create({
		id: 'row1',
		kinds: [kind811]
	});

	var row82 = _borrowersModelsRow['default'].create({
		id: 'row2',
		kinds: [kind821]
	});

	var row83 = _borrowersModelsRow['default'].create({
		id: 'row3',
		kinds: [kind831]
	});

	var row84 = _borrowersModelsRow['default'].create({
		id: 'row4',
		kinds: [kind841]
	});

	/*一级导航*/
	var func1 = _borrowersModelsFunc['default'].create({
		name: '路由状态',
		name_en: 'routestatus',
		rows: [row11, row12, row13]
	});

	var func2 = _borrowersModelsFunc['default'].create({
		name: '设备连接管理器',
		name_en: 'devicemanager',
		rows: [row21, row22]
	});

	var func3 = _borrowersModelsFunc['default'].create({
		name: '互联网WAN设置',
		name_en: 'WANsetting',
		rows: [row31]
	});

	var func4 = _borrowersModelsFunc['default'].create({
		name: '局域网LAN设置',
		name_en: 'LANsetting',
		rows: [row41]
	});

	var func5 = _borrowersModelsFunc['default'].create({
		name: '小悅网关助手',
		name_en: 'gatewayhelper',
		rows: [row51]
	});

	var func6 = _borrowersModelsFunc['default'].create({
		name: '无线设置',
		name_en: 'wirelesssetting',
		rows: [row61]
	});

	var func7 = _borrowersModelsFunc['default'].create({
		name: '系统设置',
		name_en: 'systemsetting',
		rows: [row71, row72, row73]
	});

	var func8 = _borrowersModelsFunc['default'].create({
		name: '运行状态',
		name_en: 'runningstatus',
		rows: [row81, row82, row83, row84]
	});

	var funcs = [func1, func2, func3, func4, func5, func6, func7, func8];

	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return funcs;
		} /*,
    afterModel: function(model) {
    var funcs = model;
    if (funcs.id    =id== 1) {
    	this.transitionTo('funcs.func', bands.get('firstObject'));
    }
    }*/
	});
});