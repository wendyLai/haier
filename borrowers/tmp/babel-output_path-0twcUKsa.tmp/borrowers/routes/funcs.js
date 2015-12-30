define('borrowers/routes/funcs', ['exports', 'ember', 'borrowers/models/func', 'borrowers/models/row', 'borrowers/models/kind'], function (exports, _ember, _borrowersModelsFunc, _borrowersModelsRow, _borrowersModelsKind) {

	/*三级导航*/

	var kind111 = _borrowersModelsKind['default'].create({
		name: '路由状态',
		name_en: 'routingstatus',
		id: 'kind1',
		icon_y: "-0px"
	});

	var kind121 = _borrowersModelsKind['default'].create({
		name: '无线设备',
		name_en: 'wirelessdevice',
		id: 'kind2',
		deviceinfo: [{
			kindisknow: false,
			kindiscomputer: true,
			kindismobile: false,
			devicename: 'MI4W-xiaomishouji',
			MAC: '0C:82:68:10:03:5E',
			IP: '192.168.68.119',
			wifitype: "2.4"
		}],
		icon_y: "-24px"
	});

	var kind131 = _borrowersModelsKind['default'].create({
		name: '外接USB设备',
		name_en: 'USB',
		id: 'kind3',
		deviceinfo: [{
			kindisknow: false,
			kindiscomputer: true,
			kindismobile: false,
			storagetype: '内置存储',
			devicename: 'MI4W-xiaomishouji',
			totalcapacity: '977.75GB',
			usedcapacity: '142.54MB'
		}],
		icon_y: "-48px"
	});

	var kind211 = _borrowersModelsKind['default'].create({
		name: '在线设备',
		name_en: 'onlineunit',
		id: 'kind4',
		deviceinfo: [{
			kindisknow: false,
			kindiscomputer: true,
			kindismobile: false,
			devicename: 'MI4W-xiaomishouji',
			MAC: '0C:82:68:10:03:5E',
			IP: '192.168.68.119',
			wifitype: "2.4"
		}],
		icon_y: "-72px"
	});

	var kind212 = _borrowersModelsKind['default'].create({
		name: '历史设备',
		name_en: 'oldunit',
		id: 'kind5',
		deviceinfo: [{
			kindisknow: false,
			kindiscomputer: true,
			kindismobile: false,
			devicename: 'MI4W-xiaomishouji',
			MAC: '0C:82:68:10:03:5E'
		}, {
			kindisknow: false,
			kindismobile: false,
			kindiscomputer: true,
			devicename: 'MI4W-231',
			MAC: '0C:22:68:10:03:5E'
		}, {
			kindisknow: false,
			kindismobile: true,
			kindiscomputer: false,
			devicename: 'MI4W-12',
			MAC: '0C:221:68:10:03:5E'
		}, {
			kindisknow: false,
			kindismobile: true,
			kindiscomputer: false,
			devicename: 'MI4W-231',
			MAC: '0D:22:68:10:03:5E'
		}, {
			kindisknow: true,
			kindismobile: false,
			kindiscomputer: false,
			devicename: 'MI4W-231',
			MAC: '0E:22:68:10:03:5E'
		}],
		icon_y: "-96px"

	});

	var kind213 = _borrowersModelsKind['default'].create({
		name: '黑名单',
		name_en: 'blacklist',
		id: 'kind6',
		deviceinfo: [{
			kindisknow: false,
			kindiscomputer: true,
			kindismobile: false,
			devicename: 'MI4W324-xiaomishouji',
			MAC: '0E:22:63:10:03:5E'
		}, {
			kindisknow: true,
			kindiscomputer: false,
			kindismobile: false,
			devicename: 'MI4W324-hongmishouji',
			MAC: '4E:22:63:10:03:5E'
		}],
		icon_y: "-120px"
	});

	var kind221 = _borrowersModelsKind['default'].create({
		name: '外接USB设备',
		name_en: 'USB',
		id: 'kind7',
		deviceinfo: [{
			kindisknow: false,
			kindiscomputer: true,
			kindismobile: false,
			storagetype: '内置存储',
			devicename: 'MI4W-xiaomishouji',
			totalcapacity: '977.75GB',
			usedcapacity: '142.54MB'
		}],
		icon_y: "-144px"
	});

	var kind311 = _borrowersModelsKind['default'].create({
		name: '互联网（WAN）设置',
		name_en: 'WANsetting',
		id: 'kind8',
		icon_y: "-168px"
	});

	var kind411 = _borrowersModelsKind['default'].create({
		name: '局域网（LAN）设置',
		name_en: 'LANsetting',
		id: 'kind9',
		icon_y: "-192px"
	});

	var kind511 = _borrowersModelsKind['default'].create({
		name: '小悦网关助手',
		name_en: 'gatewayhelper',
		id: 'kind10',
		icon_y: "-216px"
	});

	var kind611 = _borrowersModelsKind['default'].create({
		name: '无线（wifi）设置',
		name_en: 'wifisetting',
		id: 'kind11',
		icon_y: "-240px"
	});

	var kind711 = _borrowersModelsKind['default'].create({
		name: '路由器管理密码重置',
		name_en: 'resetkey',
		id: 'kind12',
		icon_y: "-264px"
	});

	var kind721 = _borrowersModelsKind['default'].create({
		name: '系统版本更新',
		name_en: 'updata',
		id: 'kind13',
		icon_y: "-288px"
	});

	var kind731 = _borrowersModelsKind['default'].create({
		name: '恢复出厂设置',
		name_en: 'restorefactory',
		id: 'kind14',
		icon_y: "-312px"
	});

	var kind811 = _borrowersModelsKind['default'].create({
		name: '总流量统计',
		name_en: 'trafficstatistics',
		id: 'kind15',
		icon_y: "-336px"
	});

	var kind821 = _borrowersModelsKind['default'].create({
		name: '互联网连接状态',
		name_en: 'internetconnection',
		id: 'kind16',
		icon_y: "-360px"
	});

	var kind831 = _borrowersModelsKind['default'].create({
		name: '局域网连接状态',
		name_en: 'LANconnection',
		id: 'kind17',
		icon_y: "-384px"
	});

	var kind841 = _borrowersModelsKind['default'].create({
		name: '无线运行状态',
		name_en: 'wirelessstate',
		id: 'kind18',
		icon_y: "-408px"
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