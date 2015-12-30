define("borrowers/templates/components/ip-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
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
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/components/ip-input.hbs"
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
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createTextNode(".");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createTextNode(".");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createTextNode(".");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "class", "ui button transparent ip_btn");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.setAttribute(el2, "class", "delete icon");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n	$(function(){\n	});\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(fragment, [2, 1]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 5, 5);
        morphs[2] = dom.createMorphAt(element0, 9, 9);
        morphs[3] = dom.createMorphAt(element0, 13, 13);
        morphs[4] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["inline", "input", [], ["type", "text", "maxlength", "3", "tabindex", "1", "numindex", "1", "key-up", "updateValue"], ["loc", [null, [2, 1], [2, 84]]]], ["inline", "input", [], ["type", "text", "maxlength", "3", "tabindex", "1", "numindex", "2", "key-up", "updateValue"], ["loc", [null, [4, 1], [4, 84]]]], ["inline", "input", [], ["type", "text", "maxlength", "3", "tabindex", "1", "numindex", "3", "key-up", "updateValue"], ["loc", [null, [6, 1], [6, 84]]]], ["inline", "input", [], ["type", "text", "maxlength", "3", "tabindex", "1", "numindex", "4", "key-up", "updateValue"], ["loc", [null, [8, 1], [8, 84]]]], ["element", "action", ["clear_text"], [], ["loc", [null, [11, 24], [11, 47]]]]],
      locals: [],
      templates: []
    };
  })());
});