define("borrowers/templates/components/input-ip", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "borrowers/templates/components/input-ip.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "ui button transparent ip_btn");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("i");
          dom.setAttribute(el2, "class", "delete icon myred");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["clear_ip"], [], ["loc", [null, [12, 31], [12, 52]]]]],
        locals: [],
        templates: []
      };
    })();
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
            "column": 7
          }
        },
        "moduleName": "borrowers/templates/components/input-ip.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ui input ip_input");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "text");
        dom.setAttribute(el2, "maxlength", "3");
        dom.setAttribute(el2, "tabindex", "1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createTextNode(".");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "text");
        dom.setAttribute(el2, "maxlength", "3");
        dom.setAttribute(el2, "tabindex", "1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createTextNode(".");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "text");
        dom.setAttribute(el2, "maxlength", "3");
        dom.setAttribute(el2, "tabindex", "1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createTextNode(".");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "text");
        dom.setAttribute(el2, "maxlength", "3");
        dom.setAttribute(el2, "tabindex", "1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [5]);
        var element4 = dom.childAt(element1, [9]);
        var element5 = dom.childAt(element1, [13]);
        var morphs = new Array(17);
        morphs[0] = dom.createAttrMorph(element2, 'onKeypress');
        morphs[1] = dom.createAttrMorph(element2, 'onKeyup');
        morphs[2] = dom.createAttrMorph(element2, 'value');
        morphs[3] = dom.createAttrMorph(element2, 'readOnly');
        morphs[4] = dom.createAttrMorph(element3, 'onKeypress');
        morphs[5] = dom.createAttrMorph(element3, 'onKeyup');
        morphs[6] = dom.createAttrMorph(element3, 'value');
        morphs[7] = dom.createAttrMorph(element3, 'readOnly');
        morphs[8] = dom.createAttrMorph(element4, 'onKeypress');
        morphs[9] = dom.createAttrMorph(element4, 'onKeyup');
        morphs[10] = dom.createAttrMorph(element4, 'value');
        morphs[11] = dom.createAttrMorph(element4, 'readOnly');
        morphs[12] = dom.createAttrMorph(element5, 'onKeypress');
        morphs[13] = dom.createAttrMorph(element5, 'onKeyup');
        morphs[14] = dom.createAttrMorph(element5, 'value');
        morphs[15] = dom.createAttrMorph(element5, 'readOnly');
        morphs[16] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "onKeypress", ["subexpr", "action", ["valid_value"], [], ["loc", [null, [2, 58], [2, 82]]]]], ["attribute", "onKeyup", ["subexpr", "action", ["update_value", "1"], [], ["loc", [null, [2, 91], [2, 120]]]]], ["attribute", "value", ["get", "value1", ["loc", [null, [2, 129], [2, 135]]]]], ["attribute", "readOnly", ["get", "isread", ["loc", [null, [2, 149], [2, 155]]]]], ["attribute", "onKeypress", ["subexpr", "action", ["valid_value"], [], ["loc", [null, [4, 58], [4, 82]]]]], ["attribute", "onKeyup", ["subexpr", "action", ["update_value", "2"], [], ["loc", [null, [4, 91], [4, 120]]]]], ["attribute", "value", ["get", "value2", ["loc", [null, [4, 129], [4, 135]]]]], ["attribute", "readOnly", ["get", "isread", ["loc", [null, [4, 149], [4, 155]]]]], ["attribute", "onKeypress", ["subexpr", "action", ["valid_value"], [], ["loc", [null, [6, 58], [6, 82]]]]], ["attribute", "onKeyup", ["subexpr", "action", ["update_value", "3"], [], ["loc", [null, [6, 91], [6, 120]]]]], ["attribute", "value", ["get", "value3", ["loc", [null, [6, 129], [6, 135]]]]], ["attribute", "readOnly", ["get", "isread", ["loc", [null, [6, 149], [6, 155]]]]], ["attribute", "onKeypress", ["subexpr", "action", ["valid_value"], [], ["loc", [null, [8, 58], [8, 82]]]]], ["attribute", "onKeyup", ["subexpr", "action", ["update_value", "4"], [], ["loc", [null, [8, 91], [8, 120]]]]], ["attribute", "value", ["get", "value4", ["loc", [null, [8, 129], [8, 135]]]]], ["attribute", "readOnly", ["get", "isread", ["loc", [null, [8, 149], [8, 155]]]]], ["block", "if", [["get", "isneedbtn", ["loc", [null, [10, 6], [10, 15]]]]], [], 0, null, ["loc", [null, [10, 0], [14, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});