export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 40,
              "column": 6
            },
            "end": {
              "line": 44,
              "column": 6
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("							");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","item");
          var el2 = dom.createTextNode("\n								");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n							");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element10 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element10, 'data-id');
          morphs[1] = dom.createMorphAt(element10,1,1);
          return morphs;
        },
        statements: [
          ["attribute","data-id",["concat",[["get","actionname",["loc",[null,[41,36],[41,46]]]]]]],
          ["content","actionname",["loc",[null,[42,8],[42,22]]]]
        ],
        locals: ["actionname"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 36,
            "column": 4
          },
          "end": {
            "line": 46,
            "column": 4
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","default text");
        var el2 = dom.createTextNode("请选择");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","dropdown icon");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","menu");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("					");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","itemActions_1",["loc",[null,[40,14],[40,27]]]]],[],0,null,["loc",[null,[40,6],[44,15]]]]
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
              "line": 56,
              "column": 6
            },
            "end": {
              "line": 60,
              "column": 6
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("							");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","item");
          var el2 = dom.createTextNode("\n								");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n							");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element9 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element9, 'data-id');
          morphs[1] = dom.createMorphAt(element9,1,1);
          return morphs;
        },
        statements: [
          ["attribute","data-id",["concat",[["get","actionname",["loc",[null,[57,36],[57,46]]]]]]],
          ["content","actionname",["loc",[null,[58,8],[58,22]]]]
        ],
        locals: ["actionname"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 52,
            "column": 4
          },
          "end": {
            "line": 62,
            "column": 4
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","default text");
        var el2 = dom.createTextNode("请选择");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","dropdown icon");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","menu");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("					");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","itemActions_2",["loc",[null,[56,14],[56,27]]]]],[],0,null,["loc",[null,[56,6],[60,15]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child2 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 80,
              "column": 6
            },
            "end": {
              "line": 84,
              "column": 6
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("							");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","item");
          var el2 = dom.createTextNode("\n								");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n							");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element8 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element8, 'data-id');
          morphs[1] = dom.createMorphAt(element8,1,1);
          return morphs;
        },
        statements: [
          ["attribute","data-id",["concat",[["get","actionname",["loc",[null,[81,36],[81,46]]]]]]],
          ["content","actionname",["loc",[null,[82,8],[82,22]]]]
        ],
        locals: ["actionname"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 76,
            "column": 4
          },
          "end": {
            "line": 86,
            "column": 4
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","default text");
        var el2 = dom.createTextNode("请选择");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","dropdown icon");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","menu");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("					");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","itemActions_3",["loc",[null,[80,14],[80,27]]]]],[],0,null,["loc",[null,[80,6],[84,15]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child3 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 96,
              "column": 6
            },
            "end": {
              "line": 100,
              "column": 6
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("							");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","item");
          var el2 = dom.createTextNode("\n								");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n							");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element7 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element7, 'data-id');
          morphs[1] = dom.createMorphAt(element7,1,1);
          return morphs;
        },
        statements: [
          ["attribute","data-id",["concat",[["get","actionname",["loc",[null,[97,36],[97,46]]]]]]],
          ["content","actionname",["loc",[null,[98,8],[98,22]]]]
        ],
        locals: ["actionname"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 92,
            "column": 4
          },
          "end": {
            "line": 102,
            "column": 4
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","default text");
        var el2 = dom.createTextNode("请选择");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","dropdown icon");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","menu");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("					");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","itemActions_4",["loc",[null,[96,14],[96,27]]]]],[],0,null,["loc",[null,[96,6],[100,15]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child4 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 112,
              "column": 6
            },
            "end": {
              "line": 116,
              "column": 6
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("							");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","item");
          var el2 = dom.createTextNode("\n								");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n							");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element6 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element6, 'data-id');
          morphs[1] = dom.createMorphAt(element6,1,1);
          return morphs;
        },
        statements: [
          ["attribute","data-id",["concat",[["get","actionname",["loc",[null,[113,36],[113,46]]]]]]],
          ["content","actionname",["loc",[null,[114,8],[114,22]]]]
        ],
        locals: ["actionname"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 108,
            "column": 4
          },
          "end": {
            "line": 118,
            "column": 4
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","default text");
        var el2 = dom.createTextNode("请选择");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","dropdown icon");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","menu");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("					");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","itemActions_5",["loc",[null,[112,14],[112,27]]]]],[],0,null,["loc",[null,[112,6],[116,15]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child5 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 175,
              "column": 6
            },
            "end": {
              "line": 179,
              "column": 6
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("							");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","item");
          var el2 = dom.createTextNode("\n								");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n							");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element5 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element5, 'data-id');
          morphs[1] = dom.createMorphAt(element5,1,1);
          return morphs;
        },
        statements: [
          ["attribute","data-id",["concat",[["get","actionname",["loc",[null,[176,36],[176,46]]]]]]],
          ["content","actionname",["loc",[null,[177,8],[177,22]]]]
        ],
        locals: ["actionname"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 171,
            "column": 4
          },
          "end": {
            "line": 181,
            "column": 4
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","default text");
        var el2 = dom.createTextNode("请选择");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","dropdown icon");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","menu");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("					");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","itemActions_1",["loc",[null,[175,14],[175,27]]]]],[],0,null,["loc",[null,[175,6],[179,15]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child6 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 191,
              "column": 6
            },
            "end": {
              "line": 195,
              "column": 6
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("							");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","item");
          var el2 = dom.createTextNode("\n								");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n							");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element4 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element4, 'data-id');
          morphs[1] = dom.createMorphAt(element4,1,1);
          return morphs;
        },
        statements: [
          ["attribute","data-id",["concat",[["get","actionname",["loc",[null,[192,36],[192,46]]]]]]],
          ["content","actionname",["loc",[null,[193,8],[193,22]]]]
        ],
        locals: ["actionname"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 187,
            "column": 4
          },
          "end": {
            "line": 197,
            "column": 4
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","default text");
        var el2 = dom.createTextNode("请选择");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","dropdown icon");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","menu");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("					");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","itemActions_7",["loc",[null,[191,14],[191,27]]]]],[],0,null,["loc",[null,[191,6],[195,15]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child7 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 218,
              "column": 6
            },
            "end": {
              "line": 222,
              "column": 6
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("							");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","item");
          var el2 = dom.createTextNode("\n								");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n							");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element3, 'data-id');
          morphs[1] = dom.createMorphAt(element3,1,1);
          return morphs;
        },
        statements: [
          ["attribute","data-id",["concat",[["get","actionname",["loc",[null,[219,36],[219,46]]]]]]],
          ["content","actionname",["loc",[null,[220,8],[220,22]]]]
        ],
        locals: ["actionname"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 214,
            "column": 4
          },
          "end": {
            "line": 224,
            "column": 4
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","default text");
        var el2 = dom.createTextNode("请选择");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","dropdown icon");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","menu");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("					");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","itemActions_2",["loc",[null,[218,14],[218,27]]]]],[],0,null,["loc",[null,[218,6],[222,15]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child8 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 242,
              "column": 6
            },
            "end": {
              "line": 246,
              "column": 6
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("							");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","item");
          var el2 = dom.createTextNode("\n								");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n							");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element2, 'data-id');
          morphs[1] = dom.createMorphAt(element2,1,1);
          return morphs;
        },
        statements: [
          ["attribute","data-id",["concat",[["get","actionname",["loc",[null,[243,36],[243,46]]]]]]],
          ["content","actionname",["loc",[null,[244,8],[244,22]]]]
        ],
        locals: ["actionname"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 238,
            "column": 4
          },
          "end": {
            "line": 248,
            "column": 4
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","default text");
        var el2 = dom.createTextNode("请选择");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","dropdown icon");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","menu");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("					");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","itemActions_9",["loc",[null,[242,14],[242,27]]]]],[],0,null,["loc",[null,[242,6],[246,15]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child9 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 258,
              "column": 6
            },
            "end": {
              "line": 262,
              "column": 6
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("							");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","item");
          var el2 = dom.createTextNode("\n								");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n							");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'data-id');
          morphs[1] = dom.createMorphAt(element1,1,1);
          return morphs;
        },
        statements: [
          ["attribute","data-id",["concat",[["get","actionname",["loc",[null,[259,36],[259,46]]]]]]],
          ["content","actionname",["loc",[null,[260,8],[260,22]]]]
        ],
        locals: ["actionname"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 254,
            "column": 4
          },
          "end": {
            "line": 264,
            "column": 4
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","default text");
        var el2 = dom.createTextNode("请选择");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","dropdown icon");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","menu");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("					");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","itemActions_4",["loc",[null,[258,14],[258,27]]]]],[],0,null,["loc",[null,[258,6],[262,15]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child10 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 274,
              "column": 6
            },
            "end": {
              "line": 278,
              "column": 6
            }
          },
          "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("							");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","item");
          var el2 = dom.createTextNode("\n								");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n							");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'data-id');
          morphs[1] = dom.createMorphAt(element0,1,1);
          return morphs;
        },
        statements: [
          ["attribute","data-id",["concat",[["get","actionname",["loc",[null,[275,36],[275,46]]]]]]],
          ["content","actionname",["loc",[null,[276,8],[276,22]]]]
        ],
        locals: ["actionname"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 270,
            "column": 4
          },
          "end": {
            "line": 280,
            "column": 4
          }
        },
        "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","default text");
        var el2 = dom.createTextNode("请选择");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","dropdown icon");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n					");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","menu");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("					");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","itemActions_5",["loc",[null,[274,14],[274,27]]]]],[],0,null,["loc",[null,[274,6],[278,15]]]]
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
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 313,
          "column": 9
        }
      },
      "moduleName": "borrowers/templates/funcs/func/kind11.hbs"
    },
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","kind11_t");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","ui list clearfix settingdetail");
      var el3 = dom.createTextNode("\n\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("2.4G：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("\n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","ui toggle checkbox");
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","checkbox");
      dom.setAttribute(el6,"name","public");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      var el7 = dom.createTextNode("关闭/开启");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n				");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","ui divider");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("无线名称：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("\n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","ui input");
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","text");
      dom.setAttribute(el6,"placeholder","");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n				");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("是否广播SSID：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("\n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","ui toggle checkbox");
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","checkbox");
      dom.setAttribute(el6,"name","public");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      var el7 = dom.createTextNode("关闭/开启");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n				");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("加密方式：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("  \n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("传输功率：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("  \n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode(" \n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      var el6 = dom.createTextNode("如非必要，请勿改动下列设置");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("网络模式：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("  \n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("信道：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("  \n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("频道带宽：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("  \n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("beacon时槽：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("form");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("\n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","field uninput");
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","text");
      dom.setAttribute(el6,"class","left smallinput");
      dom.setAttribute(el6,"placeholder","100");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"class","itemlabel");
      var el7 = dom.createTextNode(" ms(范围：20-1024)");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n				");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","ui divider");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("5G：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("\n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","ui toggle checkbox");
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","checkbox");
      dom.setAttribute(el6,"name","public");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      var el7 = dom.createTextNode("关闭/开启");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n				");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("\n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","ui divider");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("无线名称：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("\n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","ui input");
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","text");
      dom.setAttribute(el6,"placeholder","");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n				");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("是否广播：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("\n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","ui toggle checkbox");
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","checkbox");
      dom.setAttribute(el6,"name","public");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      var el7 = dom.createTextNode("关闭/开启");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n				");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("加密方式：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("  \n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("加密算法：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("  \n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("密码：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright passwordinput");
      var el5 = dom.createTextNode("\n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","ui input");
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","password");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n				");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("button");
      dom.setAttribute(el5,"class","ui icon button transparent");
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("i");
      dom.setAttribute(el6,"class","unhide icon");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n				");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("传输功率：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("  \n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode(" \n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      var el6 = dom.createTextNode("如非必要，请勿改动下列设置");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("网络模式：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("  \n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("信道：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("  \n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("频道带宽：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("  \n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","ui left pointing label droplabel");
      var el6 = dom.createTextNode("\n			    	默认值是1500，如无必要请勿改动\n			    ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","item");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("beacon时槽：");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("form");
      dom.setAttribute(el4,"class","itemright");
      var el5 = dom.createTextNode("\n				");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","field uninput");
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("input");
      dom.setAttribute(el6,"type","text");
      dom.setAttribute(el6,"class","left smallinput");
      dom.setAttribute(el6,"placeholder","100");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n					");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("label");
      dom.setAttribute(el6,"class","itemlabel");
      var el7 = dom.createTextNode(" ms(范围：20-1024)");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n				");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","centerbtn");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","ui button bgblue");
      var el5 = dom.createTextNode("\n				保存设置\n			");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
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
      var element11 = dom.childAt(fragment, [0, 1]);
      var morphs = new Array(12);
      morphs[0] = dom.createMorphAt(dom.childAt(element11, [9, 3]),1,1);
      morphs[1] = dom.createMorphAt(dom.childAt(element11, [11, 3]),1,1);
      morphs[2] = dom.createMorphAt(dom.childAt(element11, [15, 3]),1,1);
      morphs[3] = dom.createMorphAt(dom.childAt(element11, [17, 3]),1,1);
      morphs[4] = dom.createMorphAt(dom.childAt(element11, [19, 3]),1,1);
      morphs[5] = dom.createMorphAt(dom.childAt(element11, [27, 3]),1,1);
      morphs[6] = dom.createMorphAt(dom.childAt(element11, [35, 3]),1,1);
      morphs[7] = dom.createMorphAt(dom.childAt(element11, [37, 3]),1,1);
      morphs[8] = dom.createMorphAt(dom.childAt(element11, [41, 3]),1,1);
      morphs[9] = dom.createMorphAt(dom.childAt(element11, [45, 3]),1,1);
      morphs[10] = dom.createMorphAt(dom.childAt(element11, [47, 3]),1,1);
      morphs[11] = dom.createMorphAt(dom.childAt(element11, [49, 3]),1,1);
      return morphs;
    },
    statements: [
      ["block","ui-dropdown",[],["class","selection","onChange",["subexpr","action",["update_selected"],[],["loc",[null,[36,46],[36,72]]]]],0,null,["loc",[null,[36,4],[46,20]]]],
      ["block","ui-dropdown",[],["class","selection","onChange",["subexpr","action",["update_selected"],[],["loc",[null,[52,46],[52,72]]]]],1,null,["loc",[null,[52,4],[62,20]]]],
      ["block","ui-dropdown",[],["class","selection","onChange",["subexpr","action",["update_selected"],[],["loc",[null,[76,46],[76,72]]]]],2,null,["loc",[null,[76,4],[86,20]]]],
      ["block","ui-dropdown",[],["class","selection","onChange",["subexpr","action",["update_selected"],[],["loc",[null,[92,46],[92,72]]]]],3,null,["loc",[null,[92,4],[102,20]]]],
      ["block","ui-dropdown",[],["class","selection","onChange",["subexpr","action",["update_selected"],[],["loc",[null,[108,46],[108,72]]]]],4,null,["loc",[null,[108,4],[118,20]]]],
      ["inline","ui-checkbox",[],["label","应用与2.4G相同的设置","class","uninput"],["loc",[null,[145,4],[145,56]]]],
      ["block","ui-dropdown",[],["class","selection","onChange",["subexpr","action",["update_selected"],[],["loc",[null,[171,46],[171,72]]]]],5,null,["loc",[null,[171,4],[181,20]]]],
      ["block","ui-dropdown",[],["class","selection","onChange",["subexpr","action",["update_selected"],[],["loc",[null,[187,46],[187,72]]]]],6,null,["loc",[null,[187,4],[197,20]]]],
      ["block","ui-dropdown",[],["class","selection","onChange",["subexpr","action",["update_selected"],[],["loc",[null,[214,46],[214,72]]]]],7,null,["loc",[null,[214,4],[224,20]]]],
      ["block","ui-dropdown",[],["class","selection","onChange",["subexpr","action",["update_selected"],[],["loc",[null,[238,46],[238,72]]]]],8,null,["loc",[null,[238,4],[248,20]]]],
      ["block","ui-dropdown",[],["class","selection","onChange",["subexpr","action",["update_selected"],[],["loc",[null,[254,46],[254,72]]]]],9,null,["loc",[null,[254,4],[264,20]]]],
      ["block","ui-dropdown",[],["class","selection","onChange",["subexpr","action",["update_selected"],[],["loc",[null,[270,46],[270,72]]]]],10,null,["loc",[null,[270,4],[280,20]]]]
    ],
    locals: [],
    templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9, child10]
  };
}()));