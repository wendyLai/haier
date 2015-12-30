export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "revision": "Ember@1.13.11",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 6,
                    "column": 7
                  },
                  "end": {
                    "line": 9,
                    "column": 4
                  }
                },
                "moduleName": "borrowers/templates/funcs/func.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("			    	");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("span");
                dom.setAttribute(el1,"class","kindicon");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n			    	");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element0 = dom.childAt(fragment, [1]);
                var morphs = new Array(2);
                morphs[0] = dom.createAttrMorph(element0, 'style');
                morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
                return morphs;
              },
              statements: [
                ["attribute","style",["concat",["background-position-y:",["get","kind.icon_y",["loc",[null,[7,62],[7,73]]]]]]],
                ["inline","link-to",[["get","kind.name",["loc",[null,[8,18],[8,27]]]],"funcs.func.kindall",["get","model.func_slug",["loc",[null,[8,49],[8,64]]]],["get","row.row_slug",["loc",[null,[8,65],[8,77]]]],["get","kind.kind_slug",["loc",[null,[8,78],[8,92]]]]],[],["loc",[null,[8,8],[8,95]]]]
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
                  "line": 5,
                  "column": 3
                },
                "end": {
                  "line": 10,
                  "column": 3
                }
              },
              "moduleName": "borrowers/templates/funcs/func.hbs"
            },
            arity: 1,
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
              ["block","ivy-tab",[],[],0,null,["loc",[null,[6,7],[9,16]]]]
            ],
            locals: ["kind"],
            templates: [child0]
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 2
              },
              "end": {
                "line": 13,
                "column": 2
              }
            },
            "moduleName": "borrowers/templates/funcs/func.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("			");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n			");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
            morphs[2] = dom.createMorphAt(fragment,4,4,contextualElement);
            dom.insertBoundary(fragment, 0);
            return morphs;
          },
          statements: [
            ["block","each",[["get","row.kinds",["loc",[null,[5,11],[5,20]]]]],[],0,null,["loc",[null,[5,3],[10,12]]]],
            ["inline","page-toggle",[],["class","icon_list"],["loc",[null,[11,3],[11,36]]]],
            ["inline","page-refresh",[],["class","icon_list"],["loc",[null,[12,3],[12,37]]]]
          ],
          locals: [],
          templates: [child0]
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
                  "line": 16,
                  "column": 3
                },
                "end": {
                  "line": 18,
                  "column": 3
                }
              },
              "moduleName": "borrowers/templates/funcs/func.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("				");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["inline","outlet",[["get","kind.id",["loc",[null,[17,13],[17,20]]]]],[],["loc",[null,[17,4],[17,22]]]]
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
                "line": 15,
                "column": 2
              },
              "end": {
                "line": 19,
                "column": 2
              }
            },
            "moduleName": "borrowers/templates/funcs/func.hbs"
          },
          arity: 1,
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
            ["block","ivy-tab-panel",[],[],0,null,["loc",[null,[16,3],[18,21]]]]
          ],
          locals: ["kind"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 1
            },
            "end": {
              "line": 21,
              "column": 1
            }
          },
          "moduleName": "borrowers/templates/funcs/func.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
          return morphs;
        },
        statements: [
          ["block","ivy-tab-list",[],[],0,null,["loc",[null,[4,2],[13,19]]]],
          ["block","each",[["get","row.kinds",["loc",[null,[15,10],[15,19]]]]],[],1,null,["loc",[null,[15,2],[19,11]]]]
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
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/funcs/func.hbs"
      },
      arity: 1,
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
        ["block","ivy-tabs",[],[],0,null,["loc",[null,[2,1],[21,14]]]]
      ],
      locals: ["row"],
      templates: [child0]
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
          "line": 22,
          "column": 9
        }
      },
      "moduleName": "borrowers/templates/funcs/func.hbs"
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
      ["block","each",[["get","model.rows",["loc",[null,[1,8],[1,18]]]]],[],0,null,["loc",[null,[1,0],[22,9]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));