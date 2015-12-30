export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 4
            },
            "end": {
              "line": 9,
              "column": 4
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind4.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","icon desktop myblue");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 11,
                "column": 4
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind4.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("					");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.setAttribute(el1,"class","icon mobile myblue");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() { return []; },
          statements: [

          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 4
                },
                "end": {
                  "line": 13,
                  "column": 4
                }
              },
              "moduleName": "borrowers/templates/funcs/func/kind4.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("					");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("i");
              dom.setAttribute(el1,"class","icon help circle myblue");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n				");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() { return []; },
            statements: [

            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "borrowers/templates/funcs/func/kind4.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","if",[["get","device.kindisknow",["loc",[null,[11,14],[11,31]]]]],[],0,null,["loc",[null,[11,4],[13,4]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 4
            },
            "end": {
              "line": 13,
              "column": 4
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind4.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","device.kindismobile",["loc",[null,[9,14],[9,33]]]]],[],0,1,["loc",[null,[9,4],[13,4]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 3,
            "column": 1
          },
          "end": {
            "line": 24,
            "column": 1
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind4.hbs"
      },
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","item clearfix devicedetail");
        var el2 = dom.createTextNode("\n\n			");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","left");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("			");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n			");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","left");
        var el3 = dom.createTextNode("\n				");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","ui list");
        var el4 = dom.createTextNode("\n					");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","item");
        var el5 = dom.createElement("label");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n					");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","item");
        var el5 = dom.createElement("label");
        var el6 = dom.createTextNode("设备名称");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("：");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n					");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","item");
        var el5 = dom.createElement("label");
        var el6 = dom.createTextNode("总容量");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("：");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n					");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","item");
        var el5 = dom.createElement("label");
        var el6 = dom.createTextNode("已用容量");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("：");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n				");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n			");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n		");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [3, 1]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1, 0]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [3, 2]),0,0);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [5, 2]),0,0);
        morphs[4] = dom.createMorphAt(dom.childAt(element1, [7, 2]),0,0);
        return morphs;
      },
      statements: [
        ["block","if",[["get","device.kindiscomputer",["loc",[null,[7,10],[7,31]]]]],[],0,1,["loc",[null,[7,4],[13,11]]]],
        ["content","device.storagetype",["loc",[null,[17,30],[17,52]]]],
        ["content","device.devicename",["loc",[null,[18,50],[18,71]]]],
        ["content","device.totalcapacity",["loc",[null,[19,49],[19,73]]]],
        ["content","device.usedcapacity",["loc",[null,[20,50],[20,73]]]]
      ],
      locals: ["device"],
      templates: [child0, child1]
    };
  }());
  return {
    meta: {
      "revision": "Ember@1.13.11",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 36,
          "column": 9
        }
      },
      "moduleName": "borrowers/templates/funcs/func/kind4.hbs"
    },
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","kind4_t");
      dom.setAttribute(el1,"class","ui list");
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("script");
      var el2 = dom.createTextNode("\n  \n  $(function(){\n  \n    var main_height=$(\"#main\").outerHeight();\n    $(\"#nav\").css(\"height\",main_height);\n  \n  })\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
      return morphs;
    },
    statements: [
      ["block","each",[["get","model.deviceinfo",["loc",[null,[3,9],[3,25]]]]],[],0,null,["loc",[null,[3,1],[24,10]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));