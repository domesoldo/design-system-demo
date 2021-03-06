(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1275: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function (module) {
          var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            460
          );
          (module._StorybookPreserveDecorators = !0),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(
              [__webpack_require__(1299)],
              module
            );
        }.call(this, __webpack_require__(1276)(module));
    },
    1299: function (module, exports, __webpack_require__) {
      var map = { './Button.stories.tsx': 1313 };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1299);
    },
    1313: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary;
        }),
        __webpack_require__.d(__webpack_exports__, 'Secondary', function () {
          return Secondary;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        TouchableOpacity = __webpack_require__(1321),
        View = __webpack_require__(207),
        Text = __webpack_require__(1320),
        Button = function (_a) {
          var _b = _a.color,
            color = void 0 === _b ? 'primary' : _b,
            title = _a.title,
            _c = _a.variant,
            variant = void 0 === _c ? 'solid' : _c;
          return react_default.a.createElement(
            TouchableOpacity.a,
            null,
            react_default.a.createElement(
              View.a,
              {
                style: {
                  backgroundColor: backgroundColors[variant][color],
                  borderColor: borderColors[color],
                  borderWidth: 2,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                },
              },
              react_default.a.createElement(
                Text.a,
                { style: { color: textColors[variant][color] } },
                title
              )
            )
          );
        },
        backgroundColors = {
          solid: { primary: 'blue', danger: 'red' },
          outline: { primary: 'white', danger: 'white' },
        },
        borderColors = { primary: 'blue', danger: 'red' },
        textColors = {
          solid: { primary: 'white', danger: 'white' },
          outline: { primary: 'blue', danger: 'red' },
        };
      try {
        (Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              color: {
                defaultValue: { value: 'primary' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'Color' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !0,
                type: { name: 'string' },
              },
              variant: {
                defaultValue: { value: 'solid' },
                description: '',
                name: 'variant',
                required: !1,
                type: { name: 'Variant' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Button.tsx#Button'] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'src/Button.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__(445).withSource;
      var addSourceDecorator = __webpack_require__(445).addSource,
        __SOURCE_PREFIX__ =
          '/Users/dsoldo001/workspace-react/components-lib/stories',
        __STORY__ =
          'import React from \'react\';\nimport { Button } from \'../src\';\n\nexport default {\n  title: \'Buttons\',\n};\n\nexport const Primary = () => <Button title="Hi guys!" />;\n\nexport const Secondary = () => (\n  <Button variant="outline" color="danger" title="Hi guys!" />\n);\n',
        __ADDS_MAP__ = {
          'buttons--primary': {
            startLoc: { col: 23, line: 8 },
            endLoc: { col: 56, line: 8 },
            startBody: { col: 23, line: 8 },
            endBody: { col: 56, line: 8 },
          },
          'buttons--secondary': {
            startLoc: { col: 25, line: 10 },
            endLoc: { col: 1, line: 12 },
            startBody: { col: 25, line: 10 },
            endBody: { col: 1, line: 12 },
          },
        },
        __MODULE_DEPENDENCIES__ = [],
        __LOCAL_DEPENDENCIES__ = {},
        __IDS_TO_FRAMEWORKS__ = {},
        Primary =
          ((__webpack_exports__.default = {
            parameters: {
              storySource: {
                source:
                  'import React from \'react\';\nimport { Button } from \'../src\';\n\nexport default {\n  title: \'Buttons\',\n};\n\nexport const Primary = () => <Button title="Hi guys!" />;\n\nexport const Secondary = () => (\n  <Button variant="outline" color="danger" title="Hi guys!" />\n);\n',
                locationsMap: {
                  'buttons--primary': {
                    startLoc: { col: 23, line: 8 },
                    endLoc: { col: 56, line: 8 },
                    startBody: { col: 23, line: 8 },
                    endBody: { col: 56, line: 8 },
                  },
                  'buttons--secondary': {
                    startLoc: { col: 25, line: 10 },
                    endLoc: { col: 1, line: 12 },
                    startBody: { col: 25, line: 10 },
                    endBody: { col: 1, line: 12 },
                  },
                },
              },
            },
            title: 'Buttons',
          }),
          addSourceDecorator(
            function () {
              return react_default.a.createElement(Button, {
                title: 'Hi guys!',
              });
            },
            {
              __STORY__: __STORY__,
              __ADDS_MAP__: __ADDS_MAP__,
              __MAIN_FILE_LOCATION__: '/Button.stories.tsx',
              __MODULE_DEPENDENCIES__: __MODULE_DEPENDENCIES__,
              __LOCAL_DEPENDENCIES__: __LOCAL_DEPENDENCIES__,
              __SOURCE_PREFIX__: __SOURCE_PREFIX__,
              __IDS_TO_FRAMEWORKS__: __IDS_TO_FRAMEWORKS__,
            }
          )),
        Secondary = addSourceDecorator(
          function () {
            return react_default.a.createElement(Button, {
              variant: 'outline',
              color: 'danger',
              title: 'Hi guys!',
            });
          },
          {
            __STORY__: __STORY__,
            __ADDS_MAP__: __ADDS_MAP__,
            __MAIN_FILE_LOCATION__: '/Button.stories.tsx',
            __MODULE_DEPENDENCIES__: __MODULE_DEPENDENCIES__,
            __LOCAL_DEPENDENCIES__: __LOCAL_DEPENDENCIES__,
            __SOURCE_PREFIX__: __SOURCE_PREFIX__,
            __IDS_TO_FRAMEWORKS__: __IDS_TO_FRAMEWORKS__,
          }
        );
    },
    478: function (module, exports, __webpack_require__) {
      __webpack_require__(479),
        __webpack_require__(622),
        __webpack_require__(623),
        __webpack_require__(1274),
        (module.exports = __webpack_require__(1275));
    },
    541: function (module, exports) {},
  },
  [[478, 1, 2]],
]);
//# sourceMappingURL=main.d785cd10076e1d8de3f9.bundle.js.map
