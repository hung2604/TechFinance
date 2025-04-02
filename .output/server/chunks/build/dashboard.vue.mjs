import { g as reactivePick, t as tv, c as __nuxt_component_0, k as __nuxt_component_4, l as get, d as _appConfig, b as __nuxt_component_2 } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './Card.vue.mjs';
import { defineComponent, useSlots, computed, unref, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, createVNode, Fragment, renderList, useSSRContext, ref, resolveComponent, isRef } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { useForwardPropsEmits, TabsRoot, TabsList, TabsIndicator, TabsTrigger, TabsContent } from 'reka-ui';
import { _ as __nuxt_component_2$1 } from './Table.vue.mjs';
import { _ as __nuxt_component_3$1 } from './Badge.vue.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'mongoose';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'better-sqlite3';
import 'ipx';
import 'vue-router';
import '@iconify/vue';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import '@tanstack/vue-table';

const theme = {
  "slots": {
    "root": "flex items-center gap-2",
    "list": "relative flex p-1 group",
    "indicator": "absolute transition-[translate,width] duration-200",
    "trigger": [
      "group relative inline-flex items-center shrink-0 min-w-0 data-[state=inactive]:text-(--ui-text-muted) hover:data-[state=inactive]:not-disabled:text-(--ui-text) font-medium rounded-[calc(var(--ui-radius)*1.5)] disabled:cursor-not-allowed disabled:opacity-75 focus:outline-hidden",
      "transition-colors"
    ],
    "content": "focus:outline-none w-full",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "label": "truncate"
  },
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "pill": {
        "list": "bg-(--ui-bg-elevated) rounded-[calc(var(--ui-radius)*2)]",
        "trigger": "flex-1 w-full",
        "indicator": "rounded-[calc(var(--ui-radius)*1.5)] shadow-xs"
      },
      "link": {
        "list": "border-(--ui-border)",
        "indicator": "rounded-full"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "flex-col",
        "list": "w-full",
        "indicator": "left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)",
        "trigger": "justify-center"
      },
      "vertical": {
        "list": "flex-col",
        "indicator": "top-0 h-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position)"
      }
    },
    "size": {
      "xs": {
        "trigger": "px-2 py-1 text-xs gap-1",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs"
      },
      "sm": {
        "trigger": "px-2.5 py-1.5 text-xs gap-1.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs"
      },
      "md": {
        "trigger": "px-3 py-1.5 text-sm gap-1.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs"
      },
      "lg": {
        "trigger": "px-3 py-2 text-sm gap-2",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs"
      },
      "xl": {
        "trigger": "px-3 py-2 text-base gap-2",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "variant": "pill",
      "class": {
        "indicator": "inset-y-1"
      }
    },
    {
      "orientation": "horizontal",
      "variant": "link",
      "class": {
        "list": "border-b -mb-px",
        "indicator": "-bottom-px h-px"
      }
    },
    {
      "orientation": "vertical",
      "variant": "pill",
      "class": {
        "indicator": "inset-x-1",
        "list": "items-center"
      }
    },
    {
      "orientation": "vertical",
      "variant": "link",
      "class": {
        "list": "border-s -ms-px",
        "indicator": "-start-px w-px"
      }
    },
    {
      "color": "primary",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-primary)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-secondary)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-secondary)"
      }
    },
    {
      "color": "success",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-success)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-success)"
      }
    },
    {
      "color": "info",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-info)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-info)"
      }
    },
    {
      "color": "warning",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-warning)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-error)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-error)"
      }
    },
    {
      "color": "neutral",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-bg-inverted)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-border-inverted)"
      }
    },
    {
      "color": "primary",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-primary)",
        "trigger": "data-[state=active]:text-(--ui-primary) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-secondary)",
        "trigger": "data-[state=active]:text-(--ui-secondary) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-secondary)"
      }
    },
    {
      "color": "success",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-success)",
        "trigger": "data-[state=active]:text-(--ui-success) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-success)"
      }
    },
    {
      "color": "info",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-info)",
        "trigger": "data-[state=active]:text-(--ui-info) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-info)"
      }
    },
    {
      "color": "warning",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-warning)",
        "trigger": "data-[state=active]:text-(--ui-warning) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-error)",
        "trigger": "data-[state=active]:text-(--ui-error) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)"
      }
    },
    {
      "color": "neutral",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-bg-inverted)",
        "trigger": "data-[state=active]:text-(--ui-text-highlighted) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-border-inverted)"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "pill",
    "size": "md"
  }
};

var _a;
const appConfigTabs = _appConfig;
const tabs = tv({ extend: tv(theme), ...((_a = appConfigTabs.ui) == null ? void 0 : _a.tabs) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  props: {
    as: {},
    items: {},
    color: {},
    variant: {},
    size: {},
    orientation: { default: "horizontal" },
    content: { type: Boolean, default: true },
    labelKey: { default: "label" },
    class: {},
    ui: {},
    defaultValue: { default: "0" },
    modelValue: {},
    activationMode: {},
    unmountOnHide: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "modelValue", "defaultValue", "orientation", "activationMode", "unmountOnHide"), emits);
    const ui = computed(() => tabs({
      color: props.color,
      variant: props.variant,
      size: props.size,
      orientation: props.orientation
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(TabsRoot), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(TabsList), {
              class: ui.value.list({ class: (_a3 = props.ui) == null ? void 0 : _a3.list })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a4, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TabsIndicator), {
                    class: ui.value.indicator({ class: (_a4 = props.ui) == null ? void 0 : _a4.indicator })
                  }, null, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.items, (item, index) => {
                    var _a5;
                    _push3(ssrRenderComponent(unref(TabsTrigger), {
                      key: index,
                      value: item.value || String(index),
                      disabled: item.disabled,
                      class: ui.value.trigger({ class: (_a5 = props.ui) == null ? void 0 : _a5.trigger })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a6, _b3;
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "leading", {
                            item,
                            index
                          }, () => {
                            var _a7, _b4, _c;
                            if (item.icon) {
                              _push4(ssrRenderComponent(__nuxt_component_0, {
                                name: item.icon,
                                class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                              }, null, _parent4, _scopeId3));
                            } else if (item.avatar) {
                              _push4(ssrRenderComponent(__nuxt_component_4, mergeProps({
                                size: ((_b4 = props.ui) == null ? void 0 : _b4.leadingAvatarSize) || ui.value.leadingAvatarSize(),
                                ref_for: true
                              }, item.avatar, {
                                class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                              }), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                          if (unref(get)(item, props.labelKey) || !!slots.default) {
                            _push4(`<span class="${ssrRenderClass(ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "default", {
                              item,
                              index
                            }, () => {
                              _push4(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          ssrRenderSlot(_ctx.$slots, "trailing", {
                            item,
                            index
                          }, null, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index
                            }, () => {
                              var _a7, _b4, _c;
                              return [
                                item.icon ? (openBlock(), createBlock(__nuxt_component_0, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(__nuxt_component_4, mergeProps({
                                  key: 1,
                                  size: ((_b4 = props.ui) == null ? void 0 : _b4.leadingAvatarSize) || ui.value.leadingAvatarSize(),
                                  ref_for: true
                                }, item.avatar, {
                                  class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            }),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.label({ class: (_b3 = props.ui) == null ? void 0 : _b3.label })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(unref(TabsIndicator), {
                      class: ui.value.indicator({ class: (_b2 = props.ui) == null ? void 0 : _b2.indicator })
                    }, null, 8, ["class"]),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                      var _a5;
                      return openBlock(), createBlock(unref(TabsTrigger), {
                        key: index,
                        value: item.value || String(index),
                        disabled: item.disabled,
                        class: ui.value.trigger({ class: (_a5 = props.ui) == null ? void 0 : _a5.trigger })
                      }, {
                        default: withCtx(() => {
                          var _a6;
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index
                            }, () => {
                              var _a7, _b3, _c;
                              return [
                                item.icon ? (openBlock(), createBlock(__nuxt_component_0, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(__nuxt_component_4, mergeProps({
                                  key: 1,
                                  size: ((_b3 = props.ui) == null ? void 0 : _b3.leadingAvatarSize) || ui.value.leadingAvatarSize(),
                                  ref_for: true
                                }, item.avatar, {
                                  class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            }),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index
                            })
                          ];
                        }),
                        _: 2
                      }, 1032, ["value", "disabled", "class"]);
                    }), 128))
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            if (!!_ctx.content) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.items, (item, index) => {
                var _a4;
                _push2(ssrRenderComponent(unref(TabsContent), {
                  key: index,
                  value: item.value || String(index),
                  class: ui.value.content({ class: (_a4 = props.ui) == null ? void 0 : _a4.content })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, item.slot || "content", {
                        item,
                        index
                      }, () => {
                        _push3(`${ssrInterpolate(item.content)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, item.slot || "content", {
                          item,
                          index
                        }, () => [
                          createTextVNode(toDisplayString(item.content), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(TabsList), {
                class: ui.value.list({ class: (_b = props.ui) == null ? void 0 : _b.list })
              }, {
                default: withCtx(() => {
                  var _a4;
                  return [
                    createVNode(unref(TabsIndicator), {
                      class: ui.value.indicator({ class: (_a4 = props.ui) == null ? void 0 : _a4.indicator })
                    }, null, 8, ["class"]),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                      var _a5;
                      return openBlock(), createBlock(unref(TabsTrigger), {
                        key: index,
                        value: item.value || String(index),
                        disabled: item.disabled,
                        class: ui.value.trigger({ class: (_a5 = props.ui) == null ? void 0 : _a5.trigger })
                      }, {
                        default: withCtx(() => {
                          var _a6;
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index
                            }, () => {
                              var _a7, _b2, _c;
                              return [
                                item.icon ? (openBlock(), createBlock(__nuxt_component_0, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(__nuxt_component_4, mergeProps({
                                  key: 1,
                                  size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize(),
                                  ref_for: true
                                }, item.avatar, {
                                  class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            }),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index
                            })
                          ];
                        }),
                        _: 2
                      }, 1032, ["value", "disabled", "class"]);
                    }), 128))
                  ];
                }),
                _: 3
              }, 8, ["class"]),
              !!_ctx.content ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.items, (item, index) => {
                var _a4;
                return openBlock(), createBlock(unref(TabsContent), {
                  key: index,
                  value: item.value || String(index),
                  class: ui.value.content({ class: (_a4 = props.ui) == null ? void 0 : _a4.content })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, item.slot || "content", {
                      item,
                      index
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["value", "class"]);
              }), 128)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "UTabs" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const balance = ref({
      total: 0,
      available: 0,
      frozen: 0
    });
    const profit24h = ref(0);
    const lastUpdate = ref(/* @__PURE__ */ new Date());
    const loading = ref(false);
    const loadingTransactions = ref(false);
    const transactions = ref([]);
    const activeTab = ref("transactions");
    const loadingDeposits = ref(false);
    const deposits = ref([]);
    const loadingKickstarter = ref(false);
    const kickstarterRewards = ref([]);
    const columns = [
      {
        id: "type",
        key: "type",
        label: "Loại",
        accessorKey: "type"
      },
      {
        id: "symbol",
        key: "symbol",
        label: "Cặp giao dịch",
        accessorKey: "symbol"
      },
      {
        id: "amount",
        key: "amount",
        label: "Số lượng",
        accessorKey: "amount"
      },
      {
        id: "price",
        key: "price",
        label: "Giá",
        accessorKey: "price"
      },
      {
        id: "total",
        key: "total",
        label: "Tổng",
        accessorKey: "total"
      },
      {
        id: "time",
        key: "time",
        label: "Thời gian",
        accessorKey: "time"
      }
    ];
    const depositColumns = [
      {
        id: "time",
        key: "time",
        label: "Thời gian",
        accessorKey: "time"
      },
      {
        id: "amount",
        key: "amount",
        label: "Số lượng",
        accessorKey: "amount"
      },
      {
        id: "network",
        key: "network",
        label: "Mạng",
        accessorKey: "network"
      },
      {
        id: "status",
        key: "status",
        label: "Trạng thái",
        accessorKey: "status"
      },
      {
        id: "txId",
        key: "txId",
        label: "Mã giao dịch",
        accessorKey: "txId"
      }
    ];
    const kickstarterColumns = [
      {
        id: "time",
        key: "time",
        label: "Thời gian",
        accessorKey: "time"
      },
      {
        id: "coin",
        key: "coin",
        label: "Loại tiền",
        accessorKey: "coin"
      },
      {
        id: "amount",
        key: "amount",
        label: "Số lượng",
        accessorKey: "amount"
      },
      {
        id: "type",
        key: "type",
        label: "Loại thưởng",
        accessorKey: "type"
      }
    ];
    const formatNumber = (value) => {
      return new Intl.NumberFormat("vi-VN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(value);
    };
    const formatDate = (date) => {
      return new Intl.DateTimeFormat("vi-VN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      }).format(date);
    };
    const fetchBalance = async () => {
      try {
        loading.value = true;
        const response = await $fetch("/api/mexc/balance");
        balance.value = response;
        lastUpdate.value = /* @__PURE__ */ new Date();
      } catch (error) {
        console.error("Error fetching balance:", error);
      } finally {
        loading.value = false;
      }
    };
    const fetchTransactions = async () => {
      try {
        loadingTransactions.value = true;
        const response = await $fetch("/api/mexc/transactions");
        transactions.value = response;
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        loadingTransactions.value = false;
      }
    };
    const fetchDeposits = async () => {
      try {
        loadingDeposits.value = true;
        const response = await $fetch("/api/mexc/deposits");
        deposits.value = response;
      } catch (error) {
        console.error("Error fetching deposits:", error);
      } finally {
        loadingDeposits.value = false;
      }
    };
    const fetchKickstarterRewards = async () => {
      try {
        loadingKickstarter.value = true;
        const response = await $fetch("/api/mexc/kickstarter");
        kickstarterRewards.value = response;
      } catch (error) {
        console.error("Error fetching Kickstarter rewards:", error);
      } finally {
        loadingKickstarter.value = false;
      }
    };
    const refreshData = async () => {
      await Promise.all([
        fetchBalance(),
        fetchTransactions(),
        fetchDeposits(),
        fetchKickstarterRewards()
      ]);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0;
      const _component_UButton = __nuxt_component_2;
      const _component_UCard = __nuxt_component_0$1;
      const _component_UTabs = __nuxt_component_3;
      const _component_UTabPanels = resolveComponent("UTabPanels");
      const _component_UTabPanel = resolveComponent("UTabPanel");
      const _component_UTable = __nuxt_component_2$1;
      const _component_UBadge = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-gray-900" }, _attrs))}><header class="bg-white dark:bg-gray-800 shadow-sm"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"><div class="flex items-center justify-between"><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-banknotes",
        class: "w-8 h-8 text-primary-500"
      }, null, _parent));
      _push(`<span class="ml-2 text-xl font-semibold text-gray-800 dark:text-white">TechFinance</span></div><div class="flex items-center space-x-4">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        variant: "ghost",
        icon: "i-heroicons-arrow-path",
        loading: unref(loading),
        onClick: refreshData
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Làm mới `);
          } else {
            return [
              createTextVNode(" Làm mới ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "ghost",
        icon: "i-heroicons-user-circle"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a = _ctx.user) == null ? void 0 : _a.name) || "Tài khoản")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b = _ctx.user) == null ? void 0 : _b.name) || "Tài khoản"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></header><main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">`);
      _push(ssrRenderComponent(_component_UCard, { class: "bg-white dark:bg-gray-800" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><h3 class="text-lg font-medium text-gray-900 dark:text-white"${_scopeId}>Tổng tài sản (USDT)</h3>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-wallet",
              class: "w-5 h-5 text-primary-500"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("h3", { class: "text-lg font-medium text-gray-900 dark:text-white" }, "Tổng tài sản (USDT)"),
                createVNode(_component_UIcon, {
                  name: "i-heroicons-wallet",
                  class: "w-5 h-5 text-primary-500"
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-2xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(formatNumber(unref(balance).total))}</div><div class="mt-2 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> Cập nhật: ${ssrInterpolate(formatDate(unref(lastUpdate)))}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-2xl font-bold text-gray-900 dark:text-white" }, toDisplayString(formatNumber(unref(balance).total)), 1),
              createVNode("div", { class: "mt-2 text-sm text-gray-500 dark:text-gray-400" }, " Cập nhật: " + toDisplayString(formatDate(unref(lastUpdate))), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "bg-white dark:bg-gray-800" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><h3 class="text-lg font-medium text-gray-900 dark:text-white"${_scopeId}>Số dư khả dụng</h3>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-arrow-trending-up",
              class: "w-5 h-5 text-green-500"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("h3", { class: "text-lg font-medium text-gray-900 dark:text-white" }, "Số dư khả dụng"),
                createVNode(_component_UIcon, {
                  name: "i-heroicons-arrow-trending-up",
                  class: "w-5 h-5 text-green-500"
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-2xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(formatNumber(unref(balance).available))}</div><div class="mt-2 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> Có thể giao dịch </div>`);
          } else {
            return [
              createVNode("div", { class: "text-2xl font-bold text-gray-900 dark:text-white" }, toDisplayString(formatNumber(unref(balance).available)), 1),
              createVNode("div", { class: "mt-2 text-sm text-gray-500 dark:text-gray-400" }, " Có thể giao dịch ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "bg-white dark:bg-gray-800" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><h3 class="text-lg font-medium text-gray-900 dark:text-white"${_scopeId}>Đang đóng băng</h3>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-lock-closed",
              class: "w-5 h-5 text-yellow-500"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("h3", { class: "text-lg font-medium text-gray-900 dark:text-white" }, "Đang đóng băng"),
                createVNode(_component_UIcon, {
                  name: "i-heroicons-lock-closed",
                  class: "w-5 h-5 text-yellow-500"
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-2xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(formatNumber(unref(balance).frozen))}</div><div class="mt-2 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> Đang trong lệnh </div>`);
          } else {
            return [
              createVNode("div", { class: "text-2xl font-bold text-gray-900 dark:text-white" }, toDisplayString(formatNumber(unref(balance).frozen)), 1),
              createVNode("div", { class: "mt-2 text-sm text-gray-500 dark:text-gray-400" }, " Đang trong lệnh ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "bg-white dark:bg-gray-800" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><h3 class="text-lg font-medium text-gray-900 dark:text-white"${_scopeId}>Lợi nhuận 24h</h3>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-chart-bar",
              class: "w-5 h-5 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("h3", { class: "text-lg font-medium text-gray-900 dark:text-white" }, "Lợi nhuận 24h"),
                createVNode(_component_UIcon, {
                  name: "i-heroicons-chart-bar",
                  class: "w-5 h-5 text-blue-500"
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([unref(profit24h) >= 0 ? "text-green-500" : "text-red-500", "text-2xl font-bold"])}"${_scopeId}>${ssrInterpolate(formatNumber(unref(profit24h)))}% </div><div class="mt-2 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> So với 24h trước </div>`);
          } else {
            return [
              createVNode("div", {
                class: ["text-2xl font-bold", unref(profit24h) >= 0 ? "text-green-500" : "text-red-500"]
              }, toDisplayString(formatNumber(unref(profit24h))) + "% ", 3),
              createVNode("div", { class: "mt-2 text-sm text-gray-500 dark:text-gray-400" }, " So với 24h trước ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCard, { class: "bg-white dark:bg-gray-800" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UTabs, {
              modelValue: unref(activeTab),
              "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
              items: [
                { label: "Giao dịch gần đây", slot: "transactions" },
                { label: "Lịch sử nạp", slot: "deposits" },
                { label: "Thưởng Kickstarter", slot: "kickstarter" }
              ]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              variant: "ghost",
              icon: "i-heroicons-arrow-path",
              loading: unref(loadingTransactions),
              onClick: refreshData
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Làm mới `);
                } else {
                  return [
                    createTextVNode(" Làm mới ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode(_component_UTabs, {
                  modelValue: unref(activeTab),
                  "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                  items: [
                    { label: "Giao dịch gần đây", slot: "transactions" },
                    { label: "Lịch sử nạp", slot: "deposits" },
                    { label: "Thưởng Kickstarter", slot: "kickstarter" }
                  ]
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_UButton, {
                  color: "primary",
                  variant: "ghost",
                  icon: "i-heroicons-arrow-path",
                  loading: unref(loadingTransactions),
                  onClick: refreshData
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Làm mới ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTabPanels, {
              modelValue: unref(activeTab),
              "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTabPanel, { name: "transactions" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UTable, {
                          columns,
                          data: unref(transactions),
                          loading: unref(loadingTransactions)
                        }, {
                          "type-data": withCtx(({ row }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UBadge, {
                                color: row.type === "buy" ? "success" : "error",
                                label: row.type === "buy" ? "Mua" : "Bán"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UBadge, {
                                  color: row.type === "buy" ? "success" : "error",
                                  label: row.type === "buy" ? "Mua" : "Bán"
                                }, null, 8, ["color", "label"])
                              ];
                            }
                          }),
                          "amount-data": withCtx(({ row }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="${ssrRenderClass(row.type === "buy" ? "text-green-500" : "text-red-500")}"${_scopeId4}>${ssrInterpolate(row.type === "buy" ? "+" : "-")}${ssrInterpolate(formatNumber(row.amount))}</span>`);
                            } else {
                              return [
                                createVNode("span", {
                                  class: row.type === "buy" ? "text-green-500" : "text-red-500"
                                }, toDisplayString(row.type === "buy" ? "+" : "-") + toDisplayString(formatNumber(row.amount)), 3)
                              ];
                            }
                          }),
                          "price-data": withCtx(({ row }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(formatNumber(row.price))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(formatNumber(row.price)), 1)
                              ];
                            }
                          }),
                          "total-data": withCtx(({ row }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(formatNumber(row.total))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(formatNumber(row.total)), 1)
                              ];
                            }
                          }),
                          "time-data": withCtx(({ row }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(formatDate(row.time))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(formatDate(row.time)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UTable, {
                            columns,
                            data: unref(transactions),
                            loading: unref(loadingTransactions)
                          }, {
                            "type-data": withCtx(({ row }) => [
                              createVNode(_component_UBadge, {
                                color: row.type === "buy" ? "success" : "error",
                                label: row.type === "buy" ? "Mua" : "Bán"
                              }, null, 8, ["color", "label"])
                            ]),
                            "amount-data": withCtx(({ row }) => [
                              createVNode("span", {
                                class: row.type === "buy" ? "text-green-500" : "text-red-500"
                              }, toDisplayString(row.type === "buy" ? "+" : "-") + toDisplayString(formatNumber(row.amount)), 3)
                            ]),
                            "price-data": withCtx(({ row }) => [
                              createTextVNode(toDisplayString(formatNumber(row.price)), 1)
                            ]),
                            "total-data": withCtx(({ row }) => [
                              createTextVNode(toDisplayString(formatNumber(row.total)), 1)
                            ]),
                            "time-data": withCtx(({ row }) => [
                              createTextVNode(toDisplayString(formatDate(row.time)), 1)
                            ]),
                            _: 1
                          }, 8, ["data", "loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UTabPanel, { name: "deposits" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UTable, {
                          columns: depositColumns,
                          data: unref(deposits),
                          loading: unref(loadingDeposits)
                        }, {
                          "amount-data": withCtx(({ row }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-green-500"${_scopeId4}> +${ssrInterpolate(formatNumber(row.amount))}</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-green-500" }, " +" + toDisplayString(formatNumber(row.amount)), 1)
                              ];
                            }
                          }),
                          "status-data": withCtx(({ row }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UBadge, {
                                color: row.status === "SUCCESS" ? "success" : "warning",
                                label: row.status === "SUCCESS" ? "Thành công" : "Đang xử lý"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UBadge, {
                                  color: row.status === "SUCCESS" ? "success" : "warning",
                                  label: row.status === "SUCCESS" ? "Thành công" : "Đang xử lý"
                                }, null, 8, ["color", "label"])
                              ];
                            }
                          }),
                          "time-data": withCtx(({ row }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(formatDate(row.time))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(formatDate(row.time)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UTable, {
                            columns: depositColumns,
                            data: unref(deposits),
                            loading: unref(loadingDeposits)
                          }, {
                            "amount-data": withCtx(({ row }) => [
                              createVNode("span", { class: "text-green-500" }, " +" + toDisplayString(formatNumber(row.amount)), 1)
                            ]),
                            "status-data": withCtx(({ row }) => [
                              createVNode(_component_UBadge, {
                                color: row.status === "SUCCESS" ? "success" : "warning",
                                label: row.status === "SUCCESS" ? "Thành công" : "Đang xử lý"
                              }, null, 8, ["color", "label"])
                            ]),
                            "time-data": withCtx(({ row }) => [
                              createTextVNode(toDisplayString(formatDate(row.time)), 1)
                            ]),
                            _: 1
                          }, 8, ["data", "loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UTabPanel, { name: "kickstarter" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UTable, {
                          columns: kickstarterColumns,
                          data: unref(kickstarterRewards),
                          loading: unref(loadingKickstarter)
                        }, {
                          "amount-data": withCtx(({ row }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="text-green-500"${_scopeId4}> +${ssrInterpolate(formatNumber(row.amount))}</span>`);
                            } else {
                              return [
                                createVNode("span", { class: "text-green-500" }, " +" + toDisplayString(formatNumber(row.amount)), 1)
                              ];
                            }
                          }),
                          "time-data": withCtx(({ row }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(formatDate(row.time))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(formatDate(row.time)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UTable, {
                            columns: kickstarterColumns,
                            data: unref(kickstarterRewards),
                            loading: unref(loadingKickstarter)
                          }, {
                            "amount-data": withCtx(({ row }) => [
                              createVNode("span", { class: "text-green-500" }, " +" + toDisplayString(formatNumber(row.amount)), 1)
                            ]),
                            "time-data": withCtx(({ row }) => [
                              createTextVNode(toDisplayString(formatDate(row.time)), 1)
                            ]),
                            _: 1
                          }, 8, ["data", "loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTabPanel, { name: "transactions" }, {
                      default: withCtx(() => [
                        createVNode(_component_UTable, {
                          columns,
                          data: unref(transactions),
                          loading: unref(loadingTransactions)
                        }, {
                          "type-data": withCtx(({ row }) => [
                            createVNode(_component_UBadge, {
                              color: row.type === "buy" ? "success" : "error",
                              label: row.type === "buy" ? "Mua" : "Bán"
                            }, null, 8, ["color", "label"])
                          ]),
                          "amount-data": withCtx(({ row }) => [
                            createVNode("span", {
                              class: row.type === "buy" ? "text-green-500" : "text-red-500"
                            }, toDisplayString(row.type === "buy" ? "+" : "-") + toDisplayString(formatNumber(row.amount)), 3)
                          ]),
                          "price-data": withCtx(({ row }) => [
                            createTextVNode(toDisplayString(formatNumber(row.price)), 1)
                          ]),
                          "total-data": withCtx(({ row }) => [
                            createTextVNode(toDisplayString(formatNumber(row.total)), 1)
                          ]),
                          "time-data": withCtx(({ row }) => [
                            createTextVNode(toDisplayString(formatDate(row.time)), 1)
                          ]),
                          _: 1
                        }, 8, ["data", "loading"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UTabPanel, { name: "deposits" }, {
                      default: withCtx(() => [
                        createVNode(_component_UTable, {
                          columns: depositColumns,
                          data: unref(deposits),
                          loading: unref(loadingDeposits)
                        }, {
                          "amount-data": withCtx(({ row }) => [
                            createVNode("span", { class: "text-green-500" }, " +" + toDisplayString(formatNumber(row.amount)), 1)
                          ]),
                          "status-data": withCtx(({ row }) => [
                            createVNode(_component_UBadge, {
                              color: row.status === "SUCCESS" ? "success" : "warning",
                              label: row.status === "SUCCESS" ? "Thành công" : "Đang xử lý"
                            }, null, 8, ["color", "label"])
                          ]),
                          "time-data": withCtx(({ row }) => [
                            createTextVNode(toDisplayString(formatDate(row.time)), 1)
                          ]),
                          _: 1
                        }, 8, ["data", "loading"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UTabPanel, { name: "kickstarter" }, {
                      default: withCtx(() => [
                        createVNode(_component_UTable, {
                          columns: kickstarterColumns,
                          data: unref(kickstarterRewards),
                          loading: unref(loadingKickstarter)
                        }, {
                          "amount-data": withCtx(({ row }) => [
                            createVNode("span", { class: "text-green-500" }, " +" + toDisplayString(formatNumber(row.amount)), 1)
                          ]),
                          "time-data": withCtx(({ row }) => [
                            createTextVNode(toDisplayString(formatDate(row.time)), 1)
                          ]),
                          _: 1
                        }, 8, ["data", "loading"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTabPanels, {
                modelValue: unref(activeTab),
                "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null
              }, {
                default: withCtx(() => [
                  createVNode(_component_UTabPanel, { name: "transactions" }, {
                    default: withCtx(() => [
                      createVNode(_component_UTable, {
                        columns,
                        data: unref(transactions),
                        loading: unref(loadingTransactions)
                      }, {
                        "type-data": withCtx(({ row }) => [
                          createVNode(_component_UBadge, {
                            color: row.type === "buy" ? "success" : "error",
                            label: row.type === "buy" ? "Mua" : "Bán"
                          }, null, 8, ["color", "label"])
                        ]),
                        "amount-data": withCtx(({ row }) => [
                          createVNode("span", {
                            class: row.type === "buy" ? "text-green-500" : "text-red-500"
                          }, toDisplayString(row.type === "buy" ? "+" : "-") + toDisplayString(formatNumber(row.amount)), 3)
                        ]),
                        "price-data": withCtx(({ row }) => [
                          createTextVNode(toDisplayString(formatNumber(row.price)), 1)
                        ]),
                        "total-data": withCtx(({ row }) => [
                          createTextVNode(toDisplayString(formatNumber(row.total)), 1)
                        ]),
                        "time-data": withCtx(({ row }) => [
                          createTextVNode(toDisplayString(formatDate(row.time)), 1)
                        ]),
                        _: 1
                      }, 8, ["data", "loading"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UTabPanel, { name: "deposits" }, {
                    default: withCtx(() => [
                      createVNode(_component_UTable, {
                        columns: depositColumns,
                        data: unref(deposits),
                        loading: unref(loadingDeposits)
                      }, {
                        "amount-data": withCtx(({ row }) => [
                          createVNode("span", { class: "text-green-500" }, " +" + toDisplayString(formatNumber(row.amount)), 1)
                        ]),
                        "status-data": withCtx(({ row }) => [
                          createVNode(_component_UBadge, {
                            color: row.status === "SUCCESS" ? "success" : "warning",
                            label: row.status === "SUCCESS" ? "Thành công" : "Đang xử lý"
                          }, null, 8, ["color", "label"])
                        ]),
                        "time-data": withCtx(({ row }) => [
                          createTextVNode(toDisplayString(formatDate(row.time)), 1)
                        ]),
                        _: 1
                      }, 8, ["data", "loading"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UTabPanel, { name: "kickstarter" }, {
                    default: withCtx(() => [
                      createVNode(_component_UTable, {
                        columns: kickstarterColumns,
                        data: unref(kickstarterRewards),
                        loading: unref(loadingKickstarter)
                      }, {
                        "amount-data": withCtx(({ row }) => [
                          createVNode("span", { class: "text-green-500" }, " +" + toDisplayString(formatNumber(row.amount)), 1)
                        ]),
                        "time-data": withCtx(({ row }) => [
                          createTextVNode(toDisplayString(formatDate(row.time)), 1)
                        ]),
                        _: 1
                      }, 8, ["data", "loading"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard.vue.mjs.map
