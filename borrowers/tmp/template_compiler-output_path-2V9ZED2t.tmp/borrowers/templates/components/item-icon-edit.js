export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 4,
            "column": 1
          },
          "end": {
            "line": 6,
            "column": 1
          }
        },
        "moduleName": "borrowers/templates/components/item-icon-edit.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","icon write myblue");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [1]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [
        ["element","action",["do_edit"],[],["loc",[null,[5,31],[5,51]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 7,
            "column": 1
          },
          "end": {
            "line": 10,
            "column": 1
          }
        },
        "moduleName": "borrowers/templates/components/item-icon-edit.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","icon checkmark myred");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.setAttribute(el1,"class","icon remove");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(fragment, [3]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [
        ["element","action",["do_save"],[],["loc",[null,[8,34],[8,54]]]],
        ["element","action",["do_cancle"],[],["loc",[null,[9,25],[9,47]]]]
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
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 14,
          "column": 0
        }
      },
      "moduleName": "borrowers/templates/components/item-icon-edit.hbs"
    },
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("label");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("：\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("input");
      dom.setAttribute(el1,"type","text");
      dom.setAttribute(el1,"class","edit_input transparent");
      dom.setAttribute(el1,"readOnly","true");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","icon_list");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element3 = dom.childAt(fragment, [2]);
      var element4 = dom.childAt(fragment, [4]);
      var morphs = new Array(4);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
      morphs[1] = dom.createAttrMorph(element3, 'value');
      morphs[2] = dom.createMorphAt(element4,1,1);
      morphs[3] = dom.createMorphAt(element4,2,2);
      return morphs;
    },
    statements: [
      ["content","label",["loc",[null,[1,7],[1,16]]]],
      ["attribute","value",["get","defaultvalue",["loc",[null,[2,72],[2,84]]]]],
      ["block","if",[["get","showEdit",["loc",[null,[4,7],[4,15]]]]],[],0,null,["loc",[null,[4,1],[6,8]]]],
      ["block","if",[["get","showSave",["loc",[null,[7,7],[7,15]]]]],[],1,null,["loc",[null,[7,1],[10,8]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));