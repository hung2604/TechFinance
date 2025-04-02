import { defineComponent, mergeModels, useSlots, useModel, useId, computed, unref, mergeProps, withCtx, createBlock, openBlock, createVNode, renderSlot, createTextVNode, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { useForwardProps, Primitive, CheckboxRoot, CheckboxIndicator, Label } from 'reka-ui';
import { g as reactivePick, f as useAppConfig, h as useFormField, t as tv, c as __nuxt_component_0, d as _appConfig } from './server.mjs';

const theme = {
  "slots": {
    "root": "relative flex items-start",
    "base": "shrink-0 flex items-center justify-center rounded-(--ui-radius) text-(--ui-bg) ring ring-inset ring-(--ui-border-accented) focus-visible:outline-2 focus-visible:outline-offset-2",
    "container": "flex items-center",
    "wrapper": "ms-2",
    "icon": "shrink-0 size-full",
    "label": "block font-medium text-(--ui-text)",
    "description": "text-(--ui-text-muted)"
  },
  "variants": {
    "color": {
      "primary": "focus-visible:outline-(--ui-primary)",
      "secondary": "focus-visible:outline-(--ui-secondary)",
      "success": "focus-visible:outline-(--ui-success)",
      "info": "focus-visible:outline-(--ui-info)",
      "warning": "focus-visible:outline-(--ui-warning)",
      "error": "focus-visible:outline-(--ui-error)",
      "neutral": "focus-visible:outline-(--ui-border-inverted)"
    },
    "size": {
      "xs": {
        "base": "size-3",
        "container": "h-4",
        "wrapper": "text-xs"
      },
      "sm": {
        "base": "size-3.5",
        "container": "h-4",
        "wrapper": "text-xs"
      },
      "md": {
        "base": "size-4",
        "container": "h-5",
        "wrapper": "text-sm"
      },
      "lg": {
        "base": "size-4.5",
        "container": "h-5",
        "wrapper": "text-sm"
      },
      "xl": {
        "base": "size-5",
        "container": "h-6",
        "wrapper": "text-base"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-(--ui-error)"
      }
    },
    "disabled": {
      "true": {
        "base": "cursor-not-allowed opacity-75",
        "label": "cursor-not-allowed opacity-75",
        "description": "cursor-not-allowed opacity-75"
      }
    },
    "checked": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "checked": true,
      "class": "ring-2 ring-(--ui-primary) bg-(--ui-primary)"
    },
    {
      "color": "secondary",
      "checked": true,
      "class": "ring-2 ring-(--ui-secondary) bg-(--ui-secondary)"
    },
    {
      "color": "success",
      "checked": true,
      "class": "ring-2 ring-(--ui-success) bg-(--ui-success)"
    },
    {
      "color": "info",
      "checked": true,
      "class": "ring-2 ring-(--ui-info) bg-(--ui-info)"
    },
    {
      "color": "warning",
      "checked": true,
      "class": "ring-2 ring-(--ui-warning) bg-(--ui-warning)"
    },
    {
      "color": "error",
      "checked": true,
      "class": "ring-2 ring-(--ui-error) bg-(--ui-error)"
    },
    {
      "color": "neutral",
      "checked": true,
      "class": "ring-2 ring-(--ui-border-inverted) bg-(--ui-bg-inverted)"
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary"
  }
};

var _a;
const appConfigCheckbox = _appConfig;
const checkbox = tv({ extend: tv(theme), ...((_a = appConfigCheckbox.ui) == null ? void 0 : _a.checkbox) || {} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: {},
    label: {},
    description: {},
    color: {},
    size: {},
    icon: {},
    indeterminateIcon: {},
    class: {},
    ui: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: {},
    id: {},
    defaultValue: { type: [Boolean, String] }
  }, {
    "modelValue": { type: [Boolean, String], ...{ default: void 0 } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const slots = useSlots();
    const emits = __emit;
    const modelValue = useModel(__props, "modelValue");
    const rootProps = useForwardProps(reactivePick(props, "required", "value", "defaultValue"));
    const appConfig = useAppConfig();
    const { id: _id, emitFormChange, emitFormInput, size, color, name, disabled, ariaAttrs } = useFormField(props);
    const id = _id.value ?? useId();
    const ui = computed(() => checkbox({
      size: size.value,
      color: color.value,
      required: props.required,
      disabled: disabled.value,
      checked: Boolean(modelValue.value ?? props.defaultValue)
    }));
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: (_a3 = props.ui) == null ? void 0 : _a3.container }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckboxRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
              modelValue: modelValue.value,
              "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
              name: unref(name),
              disabled: unref(disabled),
              class: ui.value.base({ class: (_b = props.ui) == null ? void 0 : _b.base })
            }), {
              default: withCtx(({ modelValue: modelValue2 }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CheckboxIndicator), { "as-child": "" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a4, _b2, _c2, _d2;
                      if (_push4) {
                        if (modelValue2 === "indeterminate") {
                          _push4(ssrRenderComponent(__nuxt_component_0, {
                            name: _ctx.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            class: ui.value.icon({ class: (_a4 = props.ui) == null ? void 0 : _a4.icon })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(__nuxt_component_0, {
                            name: _ctx.icon || unref(appConfig).ui.icons.check,
                            class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon })
                          }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          modelValue2 === "indeterminate" ? (openBlock(), createBlock(__nuxt_component_0, {
                            key: 0,
                            name: _ctx.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            class: ui.value.icon({ class: (_c2 = props.ui) == null ? void 0 : _c2.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(__nuxt_component_0, {
                            key: 1,
                            name: _ctx.icon || unref(appConfig).ui.icons.check,
                            class: ui.value.icon({ class: (_d2 = props.ui) == null ? void 0 : _d2.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CheckboxIndicator), { "as-child": "" }, {
                      default: withCtx(() => {
                        var _a4, _b2;
                        return [
                          modelValue2 === "indeterminate" ? (openBlock(), createBlock(__nuxt_component_0, {
                            key: 0,
                            name: _ctx.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            class: ui.value.icon({ class: (_a4 = props.ui) == null ? void 0 : _a4.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(__nuxt_component_0, {
                            key: 1,
                            name: _ctx.icon || unref(appConfig).ui.icons.check,
                            class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (_ctx.label || !!slots.label || (_ctx.description || !!slots.description)) {
              _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_c = props.ui) == null ? void 0 : _c.wrapper }))}"${_scopeId}>`);
              if (_ctx.label || !!slots.label) {
                _push2(ssrRenderComponent(unref(Label), {
                  for: unref(id),
                  class: ui.value.label({ class: (_d = props.ui) == null ? void 0 : _d.label })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => {
                        _push3(`${ssrInterpolate(_ctx.label)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => [
                          createTextVNode(toDisplayString(_ctx.label), 1)
                        ])
                      ];
                    }
                  }),
                  _: 3
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.description || !!slots.description) {
                _push2(`<p class="${ssrRenderClass(ui.value.description({ class: (_e = props.ui) == null ? void 0 : _e.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => {
                  _push2(`${ssrInterpolate(_ctx.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ui.value.container({ class: (_f = props.ui) == null ? void 0 : _f.container })
              }, [
                createVNode(unref(CheckboxRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                  modelValue: modelValue.value,
                  "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
                  name: unref(name),
                  disabled: unref(disabled),
                  class: ui.value.base({ class: (_g = props.ui) == null ? void 0 : _g.base })
                }), {
                  default: withCtx(({ modelValue: modelValue2 }) => [
                    createVNode(unref(CheckboxIndicator), { "as-child": "" }, {
                      default: withCtx(() => {
                        var _a4, _b2;
                        return [
                          modelValue2 === "indeterminate" ? (openBlock(), createBlock(__nuxt_component_0, {
                            key: 0,
                            name: _ctx.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            class: ui.value.icon({ class: (_a4 = props.ui) == null ? void 0 : _a4.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(__nuxt_component_0, {
                            key: 1,
                            name: _ctx.icon || unref(appConfig).ui.icons.check,
                            class: ui.value.icon({ class: (_b2 = props.ui) == null ? void 0 : _b2.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                }, 16, ["id", "modelValue", "onUpdate:modelValue", "name", "disabled", "class"])
              ], 2),
              _ctx.label || !!slots.label || (_ctx.description || !!slots.description) ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.wrapper({ class: (_h = props.ui) == null ? void 0 : _h.wrapper })
              }, [
                _ctx.label || !!slots.label ? (openBlock(), createBlock(unref(Label), {
                  key: 0,
                  for: unref(id),
                  class: ui.value.label({ class: (_i = props.ui) == null ? void 0 : _i.label })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => [
                      createTextVNode(toDisplayString(_ctx.label), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["for", "class"])) : createCommentVNode("", true),
                _ctx.description || !!slots.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: ui.value.description({ class: (_j = props.ui) == null ? void 0 : _j.description })
                }, [
                  renderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => [
                    createTextVNode(toDisplayString(_ctx.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main, { __name: "UCheckbox" });

export { __nuxt_component_8 as _ };
//# sourceMappingURL=Checkbox.vue.mjs.map
