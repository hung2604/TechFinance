import { defineComponent, useSlots, computed, unref, mergeProps, withCtx, renderSlot, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList } from 'vue/server-renderer';
import { useForwardPropsEmits, PaginationRoot, PaginationList, PaginationFirst, PaginationPrev, PaginationListItem, PaginationEllipsis, PaginationNext, PaginationLast } from 'reka-ui';
import { f as useAppConfig, v as useLocale, g as reactivePick, t as tv, b as __nuxt_component_2, d as _appConfig } from './server.mjs';

const theme = {
  "slots": {
    "root": "",
    "list": "flex items-center gap-1",
    "ellipsis": "pointer-events-none",
    "label": "min-w-5 text-center",
    "first": "",
    "prev": "",
    "item": "",
    "next": "",
    "last": ""
  }
};

var _a;
const appConfigPagination = _appConfig;
const pagination = tv({ extend: tv(theme), ...((_a = appConfigPagination.ui) == null ? void 0 : _a.pagination) || {} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    as: {},
    firstIcon: {},
    prevIcon: {},
    nextIcon: {},
    lastIcon: {},
    ellipsisIcon: {},
    color: { default: "neutral" },
    variant: { default: "outline" },
    activeColor: { default: "primary" },
    activeVariant: { default: "solid" },
    showControls: { type: Boolean, default: true },
    size: { default: "md" },
    to: {},
    class: {},
    ui: {},
    defaultPage: {},
    disabled: { type: Boolean },
    itemsPerPage: { default: 10 },
    page: {},
    showEdges: { type: Boolean, default: false },
    siblingCount: { default: 2 },
    total: { default: 0 }
  },
  emits: ["update:page"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const { dir } = useLocale();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "defaultPage", "disabled", "itemsPerPage", "page", "showEdges", "siblingCount", "total"), emits);
    const firstIcon = computed(() => props.firstIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleRight : appConfig.ui.icons.chevronDoubleLeft));
    const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronRight : appConfig.ui.icons.chevronLeft));
    const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight));
    const lastIcon = computed(() => props.lastIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleLeft : appConfig.ui.icons.chevronDoubleRight));
    const ui = pagination();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(PaginationRoot), mergeProps(unref(rootProps), {
        class: unref(ui).root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx(({ page, pageCount }, _push2, _parent2, _scopeId) => {
          var _a3, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(PaginationList), {
              class: unref(ui).list({ class: (_a3 = props.ui) == null ? void 0 : _a3.list })
            }, {
              default: withCtx(({ items }, _push3, _parent3, _scopeId2) => {
                var _a4, _b2, _c, _d, _e, _f, _g, _h;
                if (_push3) {
                  if (_ctx.showControls || !!slots.first) {
                    _push3(ssrRenderComponent(unref(PaginationFirst), {
                      "as-child": "",
                      class: unref(ui).first({ class: (_a4 = props.ui) == null ? void 0 : _a4.first })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "first", {}, () => {
                            var _a5;
                            _push4(ssrRenderComponent(__nuxt_component_2, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: firstIcon.value,
                              to: (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, 1)
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "first", {}, () => {
                              var _a5;
                              return [
                                createVNode(__nuxt_component_2, {
                                  color: _ctx.color,
                                  variant: _ctx.variant,
                                  size: _ctx.size,
                                  icon: firstIcon.value,
                                  to: (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, 1)
                                }, null, 8, ["color", "variant", "size", "icon", "to"])
                              ];
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (_ctx.showControls || !!slots.prev) {
                    _push3(ssrRenderComponent(unref(PaginationPrev), {
                      "as-child": "",
                      class: unref(ui).prev({ class: (_b2 = props.ui) == null ? void 0 : _b2.prev })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "prev", {}, () => {
                            var _a5;
                            _push4(ssrRenderComponent(__nuxt_component_2, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: prevIcon.value,
                              to: page > 1 ? (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, page - 1) : void 0
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "prev", {}, () => {
                              var _a5;
                              return [
                                createVNode(__nuxt_component_2, {
                                  color: _ctx.color,
                                  variant: _ctx.variant,
                                  size: _ctx.size,
                                  icon: prevIcon.value,
                                  to: page > 1 ? (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, page - 1) : void 0
                                }, null, 8, ["color", "variant", "size", "icon", "to"])
                              ];
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<!--[-->`);
                  ssrRenderList(items, (item, index) => {
                    var _a5, _b3;
                    _push3(`<!--[-->`);
                    if (item.type === "page") {
                      _push3(ssrRenderComponent(unref(PaginationListItem), {
                        key: index,
                        "as-child": "",
                        value: item.value,
                        class: unref(ui).item({ class: (_a5 = props.ui) == null ? void 0 : _a5.item })
                      }, {
                        default: withCtx((_, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => {
                              var _a6;
                              _push4(ssrRenderComponent(__nuxt_component_2, {
                                color: page === item.value ? _ctx.activeColor : _ctx.color,
                                variant: page === item.value ? _ctx.activeVariant : _ctx.variant,
                                size: _ctx.size,
                                label: String(item.value),
                                ui: { label: unref(ui).label() },
                                to: (_a6 = _ctx.to) == null ? void 0 : _a6.call(_ctx, item.value),
                                square: ""
                              }, null, _parent4, _scopeId3));
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => {
                                var _a6;
                                return [
                                  createVNode(__nuxt_component_2, {
                                    color: page === item.value ? _ctx.activeColor : _ctx.color,
                                    variant: page === item.value ? _ctx.activeVariant : _ctx.variant,
                                    size: _ctx.size,
                                    label: String(item.value),
                                    ui: { label: unref(ui).label() },
                                    to: (_a6 = _ctx.to) == null ? void 0 : _a6.call(_ctx, item.value),
                                    square: ""
                                  }, null, 8, ["color", "variant", "size", "label", "ui", "to"])
                                ];
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(PaginationEllipsis), {
                        key: item.type,
                        index,
                        "as-child": "",
                        class: unref(ui).ellipsis({ class: (_b3 = props.ui) == null ? void 0 : _b3.ellipsis })
                      }, {
                        default: withCtx((_, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, "ellipsis", {}, () => {
                              _push4(ssrRenderComponent(__nuxt_component_2, {
                                color: _ctx.color,
                                variant: _ctx.variant,
                                size: _ctx.size,
                                icon: _ctx.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                              }, null, _parent4, _scopeId3));
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, "ellipsis", {}, () => [
                                createVNode(__nuxt_component_2, {
                                  color: _ctx.color,
                                  variant: _ctx.variant,
                                  size: _ctx.size,
                                  icon: _ctx.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                                }, null, 8, ["color", "variant", "size", "icon"])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]-->`);
                  if (_ctx.showControls || !!slots.next) {
                    _push3(ssrRenderComponent(unref(PaginationNext), {
                      "as-child": "",
                      class: unref(ui).next({ class: (_c = props.ui) == null ? void 0 : _c.next })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "next", {}, () => {
                            var _a5;
                            _push4(ssrRenderComponent(__nuxt_component_2, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: nextIcon.value,
                              to: page < pageCount ? (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, page + 1) : void 0
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "next", {}, () => {
                              var _a5;
                              return [
                                createVNode(__nuxt_component_2, {
                                  color: _ctx.color,
                                  variant: _ctx.variant,
                                  size: _ctx.size,
                                  icon: nextIcon.value,
                                  to: page < pageCount ? (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, page + 1) : void 0
                                }, null, 8, ["color", "variant", "size", "icon", "to"])
                              ];
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (_ctx.showControls || !!slots.last) {
                    _push3(ssrRenderComponent(unref(PaginationLast), {
                      "as-child": "",
                      class: unref(ui).last({ class: (_d = props.ui) == null ? void 0 : _d.last })
                    }, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "last", {}, () => {
                            var _a5;
                            _push4(ssrRenderComponent(__nuxt_component_2, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: lastIcon.value,
                              to: (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, pageCount)
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "last", {}, () => {
                              var _a5;
                              return [
                                createVNode(__nuxt_component_2, {
                                  color: _ctx.color,
                                  variant: _ctx.variant,
                                  size: _ctx.size,
                                  icon: lastIcon.value,
                                  to: (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, pageCount)
                                }, null, 8, ["color", "variant", "size", "icon", "to"])
                              ];
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    _ctx.showControls || !!slots.first ? (openBlock(), createBlock(unref(PaginationFirst), {
                      key: 0,
                      "as-child": "",
                      class: unref(ui).first({ class: (_e = props.ui) == null ? void 0 : _e.first })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "first", {}, () => {
                          var _a5;
                          return [
                            createVNode(__nuxt_component_2, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: firstIcon.value,
                              to: (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, 1)
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 3
                    }, 8, ["class"])) : createCommentVNode("", true),
                    _ctx.showControls || !!slots.prev ? (openBlock(), createBlock(unref(PaginationPrev), {
                      key: 1,
                      "as-child": "",
                      class: unref(ui).prev({ class: (_f = props.ui) == null ? void 0 : _f.prev })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "prev", {}, () => {
                          var _a5;
                          return [
                            createVNode(__nuxt_component_2, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: prevIcon.value,
                              to: page > 1 ? (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, page - 1) : void 0
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                      var _a5, _b3;
                      return openBlock(), createBlock(Fragment, null, [
                        item.type === "page" ? (openBlock(), createBlock(unref(PaginationListItem), {
                          key: index,
                          "as-child": "",
                          value: item.value,
                          class: unref(ui).item({ class: (_a5 = props.ui) == null ? void 0 : _a5.item })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => {
                              var _a6;
                              return [
                                createVNode(__nuxt_component_2, {
                                  color: page === item.value ? _ctx.activeColor : _ctx.color,
                                  variant: page === item.value ? _ctx.activeVariant : _ctx.variant,
                                  size: _ctx.size,
                                  label: String(item.value),
                                  ui: { label: unref(ui).label() },
                                  to: (_a6 = _ctx.to) == null ? void 0 : _a6.call(_ctx, item.value),
                                  square: ""
                                }, null, 8, ["color", "variant", "size", "label", "ui", "to"])
                              ];
                            })
                          ]),
                          _: 2
                        }, 1032, ["value", "class"])) : (openBlock(), createBlock(unref(PaginationEllipsis), {
                          key: item.type,
                          index,
                          "as-child": "",
                          class: unref(ui).ellipsis({ class: (_b3 = props.ui) == null ? void 0 : _b3.ellipsis })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "ellipsis", {}, () => [
                              createVNode(__nuxt_component_2, {
                                color: _ctx.color,
                                variant: _ctx.variant,
                                size: _ctx.size,
                                icon: _ctx.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                              }, null, 8, ["color", "variant", "size", "icon"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["index", "class"]))
                      ], 64);
                    }), 256)),
                    _ctx.showControls || !!slots.next ? (openBlock(), createBlock(unref(PaginationNext), {
                      key: 2,
                      "as-child": "",
                      class: unref(ui).next({ class: (_g = props.ui) == null ? void 0 : _g.next })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "next", {}, () => {
                          var _a5;
                          return [
                            createVNode(__nuxt_component_2, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: nextIcon.value,
                              to: page < pageCount ? (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, page + 1) : void 0
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true),
                    _ctx.showControls || !!slots.last ? (openBlock(), createBlock(unref(PaginationLast), {
                      key: 3,
                      "as-child": "",
                      class: unref(ui).last({ class: (_h = props.ui) == null ? void 0 : _h.last })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "last", {}, () => {
                          var _a5;
                          return [
                            createVNode(__nuxt_component_2, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: lastIcon.value,
                              to: (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, pageCount)
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(PaginationList), {
                class: unref(ui).list({ class: (_b = props.ui) == null ? void 0 : _b.list })
              }, {
                default: withCtx(({ items }) => {
                  var _a4, _b2, _c, _d;
                  return [
                    _ctx.showControls || !!slots.first ? (openBlock(), createBlock(unref(PaginationFirst), {
                      key: 0,
                      "as-child": "",
                      class: unref(ui).first({ class: (_a4 = props.ui) == null ? void 0 : _a4.first })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "first", {}, () => {
                          var _a5;
                          return [
                            createVNode(__nuxt_component_2, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: firstIcon.value,
                              to: (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, 1)
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 3
                    }, 8, ["class"])) : createCommentVNode("", true),
                    _ctx.showControls || !!slots.prev ? (openBlock(), createBlock(unref(PaginationPrev), {
                      key: 1,
                      "as-child": "",
                      class: unref(ui).prev({ class: (_b2 = props.ui) == null ? void 0 : _b2.prev })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "prev", {}, () => {
                          var _a5;
                          return [
                            createVNode(__nuxt_component_2, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: prevIcon.value,
                              to: page > 1 ? (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, page - 1) : void 0
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                      var _a5, _b3;
                      return openBlock(), createBlock(Fragment, null, [
                        item.type === "page" ? (openBlock(), createBlock(unref(PaginationListItem), {
                          key: index,
                          "as-child": "",
                          value: item.value,
                          class: unref(ui).item({ class: (_a5 = props.ui) == null ? void 0 : _a5.item })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, { item, index, page, pageCount }), () => {
                              var _a6;
                              return [
                                createVNode(__nuxt_component_2, {
                                  color: page === item.value ? _ctx.activeColor : _ctx.color,
                                  variant: page === item.value ? _ctx.activeVariant : _ctx.variant,
                                  size: _ctx.size,
                                  label: String(item.value),
                                  ui: { label: unref(ui).label() },
                                  to: (_a6 = _ctx.to) == null ? void 0 : _a6.call(_ctx, item.value),
                                  square: ""
                                }, null, 8, ["color", "variant", "size", "label", "ui", "to"])
                              ];
                            })
                          ]),
                          _: 2
                        }, 1032, ["value", "class"])) : (openBlock(), createBlock(unref(PaginationEllipsis), {
                          key: item.type,
                          index,
                          "as-child": "",
                          class: unref(ui).ellipsis({ class: (_b3 = props.ui) == null ? void 0 : _b3.ellipsis })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "ellipsis", {}, () => [
                              createVNode(__nuxt_component_2, {
                                color: _ctx.color,
                                variant: _ctx.variant,
                                size: _ctx.size,
                                icon: _ctx.ellipsisIcon || unref(appConfig).ui.icons.ellipsis
                              }, null, 8, ["color", "variant", "size", "icon"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["index", "class"]))
                      ], 64);
                    }), 256)),
                    _ctx.showControls || !!slots.next ? (openBlock(), createBlock(unref(PaginationNext), {
                      key: 2,
                      "as-child": "",
                      class: unref(ui).next({ class: (_c = props.ui) == null ? void 0 : _c.next })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "next", {}, () => {
                          var _a5;
                          return [
                            createVNode(__nuxt_component_2, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: nextIcon.value,
                              to: page < pageCount ? (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, page + 1) : void 0
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true),
                    _ctx.showControls || !!slots.last ? (openBlock(), createBlock(unref(PaginationLast), {
                      key: 3,
                      "as-child": "",
                      class: unref(ui).last({ class: (_d = props.ui) == null ? void 0 : _d.last })
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "last", {}, () => {
                          var _a5;
                          return [
                            createVNode(__nuxt_component_2, {
                              color: _ctx.color,
                              variant: _ctx.variant,
                              size: _ctx.size,
                              icon: lastIcon.value,
                              to: (_a5 = _ctx.to) == null ? void 0 : _a5.call(_ctx, pageCount)
                            }, null, 8, ["color", "variant", "size", "icon", "to"])
                          ];
                        })
                      ]),
                      _: 2
                    }, 1032, ["class"])) : createCommentVNode("", true)
                  ];
                }),
                _: 2
              }, 1032, ["class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main, { __name: "UPagination" });

export { __nuxt_component_6 as _ };
//# sourceMappingURL=Pagination.vue.mjs.map
