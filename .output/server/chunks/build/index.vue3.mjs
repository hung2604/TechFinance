import { g as reactivePick, t as tv, d as _appConfig, q as useToast, b as __nuxt_component_2, c as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_0 } from './Card.vue.mjs';
import { _ as __nuxt_component_5$1 } from './Input.vue.mjs';
import { _ as __nuxt_component_2$1 } from './Table.vue.mjs';
import { defineComponent, useSlots, toRef, computed, unref, mergeProps, withCtx, renderSlot, toHandlers, createBlock, createCommentVNode, openBlock, createVNode, useSSRContext, ref, watch, resolveComponent, createTextVNode, toDisplayString, isRef, Fragment, withModifiers } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { n as defu } from '../nitro/nitro.mjs';
import { useForwardPropsEmits } from 'reka-ui';
import { HoverCard, Popover } from 'reka-ui/namespaced';
import { _ as __nuxt_component_6 } from './Pagination.vue.mjs';
import { _ as __nuxt_component_4 } from './Modal.vue.mjs';
import { u as useFetch } from './fetch.mjs';
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

const theme = {
  "slots": {
    "content": "bg-(--ui-bg) shadow-lg rounded-[calc(var(--ui-radius)*1.5)] ring ring-(--ui-border) data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] focus:outline-none pointer-events-auto",
    "arrow": "fill-(--ui-border)"
  }
};

var _a;
const appConfigPopover = _appConfig;
const popover = tv({ extend: tv(theme), ...((_a = appConfigPopover.ui) == null ? void 0 : _a.popover) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Popover",
  __ssrInlineRender: true,
  props: {
    mode: { default: "click" },
    content: {},
    arrow: { type: [Boolean, Object] },
    portal: { type: Boolean, default: true },
    dismissible: { type: Boolean, default: true },
    class: {},
    ui: {},
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean },
    openDelay: { default: 0 },
    closeDelay: { default: 0 }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const pick = props.mode === "hover" ? reactivePick(props, "defaultOpen", "open", "openDelay", "closeDelay") : reactivePick(props, "defaultOpen", "open", "modal");
    const rootProps = useForwardPropsEmits(pick, emits);
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 }));
    const contentEvents = computed(() => {
      if (!props.dismissible) {
        return {
          pointerDownOutside: (e) => e.preventDefault(),
          interactOutside: (e) => e.preventDefault(),
          escapeKeyDown: (e) => e.preventDefault()
        };
      }
      return {};
    });
    const arrowProps = toRef(() => props.arrow);
    const ui = computed(() => popover({
      side: contentProps.value.side
    }));
    const Component = computed(() => props.mode === "hover" ? HoverCard : Popover);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Component).Root, mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(Component).Trigger, {
                "as-child": "",
                class: props.class
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(Component).Portal, {
              disabled: !_ctx.portal
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Component).Content, mergeProps(contentProps.value, {
                    class: ui.value.content({ class: [!slots.default && props.class, (_a2 = props.ui) == null ? void 0 : _a2.content] })
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a3, _b2;
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "content", {}, null, _push4, _parent4, _scopeId3);
                        if (!!_ctx.arrow) {
                          _push4(ssrRenderComponent(unref(Component).Arrow, mergeProps(arrowProps.value, {
                            class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "content"),
                          !!_ctx.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          renderSlot(_ctx.$slots, "content"),
                          !!_ctx.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(Component).Trigger, {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class"])) : createCommentVNode("", true),
              createVNode(unref(Component).Portal, {
                disabled: !_ctx.portal
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                      class: ui.value.content({ class: [!slots.default && props.class, (_a2 = props.ui) == null ? void 0 : _a2.content] })
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => {
                        var _a3;
                        return [
                          renderSlot(_ctx.$slots, "content"),
                          !!_ctx.arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: (_a3 = props.ui) == null ? void 0 : _a3.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 3
                    }, 16, ["class"])
                  ];
                }),
                _: 3
              }, 8, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$1, { __name: "UPopover" });

const useModal = () => {
  const isOpen = ref(false);
  const currentData = ref(null);
  const open = (data = null) => {
    currentData.value = data;
    isOpen.value = true;
  };
  const close = () => {
    currentData.value = null;
    isOpen.value = false;
  };
  return {
    isOpen,
    currentData,
    open,
    close
  };
};

const useFormValidation = (rules) => {
  const errors = ref({});
  const validate = (data) => {
    const newErrors = {};
    Object.entries(rules).forEach(([field, rule]) => {
      const value = data[field];
      if (rule.required && !value) {
        newErrors[field] = "Trường này là bắt buộc";
      }
      if (rule.min !== void 0 && value < rule.min) {
        newErrors[field] = `Giá trị tối thiểu là ${rule.min}`;
      }
      if (rule.max !== void 0 && value > rule.max) {
        newErrors[field] = `Giá trị tối đa là ${rule.max}`;
      }
      if (rule.pattern && !rule.pattern.test(value)) {
        newErrors[field] = "Giá trị không hợp lệ";
      }
      if (rule.custom) {
        const customResult = rule.custom(value);
        if (typeof customResult === "string") {
          newErrors[field] = customResult;
        } else if (!customResult) {
          newErrors[field] = "Giá trị không hợp lệ";
        }
      }
    });
    errors.value = newErrors;
    return Object.keys(newErrors).length === 0;
  };
  const clearErrors = () => {
    errors.value = {};
  };
  return {
    errors,
    validate,
    clearErrors
  };
};

const useCustomToast = () => {
  const toast = useToast();
  const showSuccess = (title, description) => {
    toast.add({
      title,
      description,
      icon: "i-heroicons-check-circle",
      color: "success",
      duration: 3e3,
      close: true
    });
  };
  const showError = (title, description) => {
    toast.add({
      title,
      description,
      icon: "i-heroicons-x-circle",
      color: "error",
      duration: 5e3
    });
  };
  const showWarning = (title, description) => {
    toast.add({
      title,
      description,
      icon: "i-heroicons-exclamation-triangle",
      color: "warning",
      duration: 4e3
    });
  };
  const showInfo = (title, description) => {
    toast.add({
      title,
      description,
      icon: "i-heroicons-information-circle",
      color: "info",
      duration: 3e3,
      close: true
    });
  };
  return {
    showSuccess,
    showError,
    showWarning,
    showInfo
  };
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const columns = [
      {
        accessorKey: "purchaseDate",
        header: "Ngày mua",
        sortable: true
      },
      {
        accessorKey: "quantity",
        header: "Số lượng MX",
        sortable: true
      },
      {
        accessorKey: "amount",
        header: "Số tiền",
        sortable: true
      },
      {
        accessorKey: "coinValue",
        header: "Giá trị 1 MX",
        sortable: true
      },
      {
        accessorKey: "actions",
        header: "Thao tác",
        sortable: false
      }
    ];
    const records = ref([]);
    const loading = ref(false);
    const submitting = ref(false);
    const currentPage = ref(1);
    const pagination = ref({
      page: 1,
      limit: 1e3,
      total: 0,
      totalPages: 0
    });
    const stats = ref({
      totalCoins: 0,
      totalAmount: 0,
      averagePrice: 0,
      lastPurchase: null
    });
    const filters = ref({
      startDate: "",
      endDate: "",
      minAmount: "",
      maxAmount: ""
    });
    const sortBy = ref("purchaseDate");
    const sortDirection = ref("desc");
    const form = ref({
      purchaseDate: "",
      quantity: 0,
      amount: 0,
      coinValue: 0
    });
    const isEditing = ref(false);
    const editingId = ref("");
    const modal = useModal();
    const calculatedCoinValue = computed(() => {
      const quantity = Number(form.value.quantity);
      const amount = Number(form.value.amount);
      if (quantity && amount) {
        return amount / quantity;
      }
      return 0;
    });
    watch([() => form.value.quantity, () => form.value.amount], () => {
      form.value.coinValue = calculatedCoinValue.value;
    });
    const validation = useFormValidation({
      purchaseDate: { required: true },
      quantity: { required: true, min: 0 },
      amount: { required: true, min: 0 }
    });
    const formatCurrency = (value) => {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(value);
    };
    const formatMX = (value) => {
      return new Intl.NumberFormat("vi-VN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(value) + " MX";
    };
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("vi-VN");
    };
    const calculateStats = (data) => {
      var _a;
      const totalCoins = data.reduce((sum, record) => sum + record.quantity, 0);
      const totalAmount = data.reduce((sum, record) => sum + record.amount, 0);
      const averagePrice = totalAmount / totalCoins;
      const lastPurchase = ((_a = data[0]) == null ? void 0 : _a.purchaseDate) || null;
      stats.value = {
        totalCoins,
        totalAmount,
        averagePrice: isNaN(averagePrice) ? 0 : averagePrice,
        lastPurchase
      };
    };
    const handleSort = (column, direction) => {
      sortBy.value = column;
      sortDirection.value = direction;
      fetchRecords();
    };
    const resetFilters = () => {
      filters.value = {
        startDate: "",
        endDate: "",
        minAmount: "",
        maxAmount: ""
      };
      fetchRecords();
    };
    const exportToExcel = async () => {
      try {
        const queryParams = new URLSearchParams({
          ...filters.value.startDate && { startDate: filters.value.startDate },
          ...filters.value.endDate && { endDate: filters.value.endDate },
          ...filters.value.minAmount && { minAmount: filters.value.minAmount },
          ...filters.value.maxAmount && { maxAmount: filters.value.maxAmount },
          sortBy: sortBy.value,
          sortDirection: sortDirection.value
        });
        const { data: response } = await useFetch(`/api/coin-history/export?${queryParams}`, "$mcR6XR8ZMj");
        if (!response.value) {
          throw new Error("No data received");
        }
        const blob = new Blob([response.value], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        const url = (void 0).URL.createObjectURL(blob);
        const a = (void 0).createElement("a");
        a.href = url;
        a.download = `lich-su-mua-coin-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.xlsx`;
        (void 0).body.appendChild(a);
        a.click();
        (void 0).URL.revokeObjectURL(url);
        (void 0).body.removeChild(a);
        useCustomToast().showSuccess("Xuất file thành công");
      } catch (error) {
        useCustomToast().showError("Có lỗi xảy ra khi xuất file");
      }
    };
    const fetchRecords = async () => {
      loading.value = true;
      try {
        const queryParams = new URLSearchParams({
          page: currentPage.value.toString(),
          limit: pagination.value.limit.toString(),
          ...filters.value.startDate && { startDate: filters.value.startDate },
          ...filters.value.endDate && { endDate: filters.value.endDate },
          ...filters.value.minAmount && { minAmount: filters.value.minAmount },
          ...filters.value.maxAmount && { maxAmount: filters.value.maxAmount },
          sortBy: sortBy.value,
          sortDirection: sortDirection.value
        });
        console.log("Fetching records with params:", queryParams.toString());
        const response = await $fetch(`/api/coin-history?${queryParams}`);
        console.log("API Response:", response);
        if (!(response == null ? void 0 : response.data)) {
          console.error("No data in response:", response);
          return;
        }
        records.value = response.data;
        pagination.value = response.pagination;
        calculateStats(response.data);
        console.log("Updated records:", records.value);
      } catch (error) {
        console.error("Error fetching records:", error);
        useCustomToast().showError("Có lỗi xảy ra khi tải dữ liệu");
      } finally {
        loading.value = false;
      }
    };
    const openCreateModal = () => {
      isEditing.value = false;
      editingId.value = "";
      form.value = {
        purchaseDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        quantity: 0,
        amount: 0,
        coinValue: 0
      };
      modal.open();
    };
    const openEditModal = (row) => {
      isEditing.value = true;
      editingId.value = row._id;
      form.value = {
        purchaseDate: new Date(row.purchaseDate).toISOString().split("T")[0],
        quantity: row.quantity,
        amount: row.amount,
        coinValue: row.coinValue
      };
      modal.open(row);
    };
    const handleSubmit = async () => {
      if (!validation.validate(form.value)) {
        useCustomToast().showError("Vui lòng kiểm tra lại thông tin");
        return;
      }
      submitting.value = true;
      try {
        const data = {
          ...form.value,
          quantity: Number(form.value.quantity),
          amount: Number(form.value.amount),
          coinValue: Number(form.value.coinValue)
        };
        if (isEditing.value) {
          await $fetch(`/api/coin-history/${editingId.value}`, {
            method: "PUT",
            body: data
          });
          useCustomToast().showSuccess("Cập nhật thành công");
        } else {
          await $fetch("/api/coin-history", {
            method: "POST",
            body: data
          });
          useCustomToast().showSuccess("Thêm mới thành công");
        }
        modal.close();
        validation.clearErrors();
        await fetchRecords();
      } catch (error) {
        useCustomToast().showError("Có lỗi xảy ra khi lưu dữ liệu");
      } finally {
        submitting.value = false;
      }
    };
    const handleDelete = async (row) => {
      try {
        loading.value = true;
        await $fetch(`/api/coin-history/${row._id}`, {
          method: "DELETE"
        });
        useCustomToast().showSuccess("Xóa thành công");
        await fetchRecords();
      } catch (error) {
        console.error("Error deleting record:", error);
        useCustomToast().showError("Có lỗi xảy ra khi xóa dữ liệu");
      } finally {
        loading.value = false;
      }
    };
    watch(filters, () => {
      currentPage.value = 1;
      fetchRecords();
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2;
      const _component_UCard = __nuxt_component_0;
      const _component_UIcon = __nuxt_component_0$1;
      const _component_UFormGroup = resolveComponent("UFormGroup");
      const _component_UInput = __nuxt_component_5$1;
      const _component_UTable = __nuxt_component_2$1;
      const _component_UPopover = __nuxt_component_5;
      const _component_UPagination = __nuxt_component_6;
      const _component_UModal = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex justify-between items-center"><h1 class="text-2xl font-semibold">Lịch sử mua MX</h1><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "gray",
        variant: "soft",
        icon: "i-heroicons-arrow-down-tray",
        onClick: exportToExcel
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Xuất Excel `);
          } else {
            return [
              createTextVNode(" Xuất Excel ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        icon: "i-heroicons-plus",
        onClick: openCreateModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Thêm mới `);
          } else {
            return [
              createTextVNode(" Thêm mới ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">`);
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-4"${_scopeId}><div class="p-3 bg-primary-100 dark:bg-primary-900 rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-currency-dollar",
              class: "w-6 h-6 text-primary-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>Số lượng MX đang sở hữu</div><div class="text-xl font-semibold"${_scopeId}>${ssrInterpolate(formatMX(unref(stats).totalCoins))}</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-4" }, [
                createVNode("div", { class: "p-3 bg-primary-100 dark:bg-primary-900 rounded-xl" }, [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-currency-dollar",
                    class: "w-6 h-6 text-primary-500"
                  })
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Số lượng MX đang sở hữu"),
                  createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(formatMX(unref(stats).totalCoins)), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-4"${_scopeId}><div class="p-3 bg-green-100 dark:bg-green-900 rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-banknotes",
              class: "w-6 h-6 text-green-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>Tổng tiền đã mua</div><div class="text-xl font-semibold"${_scopeId}>${ssrInterpolate(formatCurrency(unref(stats).totalAmount))}</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-4" }, [
                createVNode("div", { class: "p-3 bg-green-100 dark:bg-green-900 rounded-xl" }, [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-banknotes",
                    class: "w-6 h-6 text-green-500"
                  })
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Tổng tiền đã mua"),
                  createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(formatCurrency(unref(stats).totalAmount)), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-4"${_scopeId}><div class="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-chart-bar",
              class: "w-6 h-6 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>Giá trung bình</div><div class="text-xl font-semibold"${_scopeId}>${ssrInterpolate(formatCurrency(unref(stats).averagePrice))}</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-4" }, [
                createVNode("div", { class: "p-3 bg-blue-100 dark:bg-blue-900 rounded-xl" }, [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-chart-bar",
                    class: "w-6 h-6 text-blue-500"
                  })
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Giá trung bình"),
                  createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(formatCurrency(unref(stats).averagePrice)), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-4"${_scopeId}><div class="p-3 bg-purple-100 dark:bg-purple-900 rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-clock",
              class: "w-6 h-6 text-purple-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>Lần mua gần nhất</div><div class="text-xl font-semibold"${_scopeId}>${ssrInterpolate(unref(stats).lastPurchase ? formatDate(unref(stats).lastPurchase) : "Chưa có")}</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-4" }, [
                createVNode("div", { class: "p-3 bg-purple-100 dark:bg-purple-900 rounded-xl" }, [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-clock",
                    class: "w-6 h-6 text-purple-500"
                  })
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "text-sm text-gray-500 dark:text-gray-400" }, "Lần mua gần nhất"),
                  createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(unref(stats).lastPurchase ? formatDate(unref(stats).lastPurchase) : "Chưa có"), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-3 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormGroup, { label: "Từ ngày" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(filters).startDate,
                    "onUpdate:modelValue": ($event) => unref(filters).startDate = $event,
                    type: "date"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(filters).startDate,
                      "onUpdate:modelValue": ($event) => unref(filters).startDate = $event,
                      type: "date"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, { label: "Đến ngày" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(filters).endDate,
                    "onUpdate:modelValue": ($event) => unref(filters).endDate = $event,
                    type: "date"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(filters).endDate,
                      "onUpdate:modelValue": ($event) => unref(filters).endDate = $event,
                      type: "date"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, { label: "Khoảng giá" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(filters).minAmount,
                    "onUpdate:modelValue": ($event) => unref(filters).minAmount = $event,
                    type: "number",
                    placeholder: "Từ"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>-</span>`);
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(filters).maxAmount,
                    "onUpdate:modelValue": ($event) => unref(filters).maxAmount = $event,
                    type: "number",
                    placeholder: "Đến"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UInput, {
                        modelValue: unref(filters).minAmount,
                        "onUpdate:modelValue": ($event) => unref(filters).minAmount = $event,
                        type: "number",
                        placeholder: "Từ"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("span", null, "-"),
                      createVNode(_component_UInput, {
                        modelValue: unref(filters).maxAmount,
                        "onUpdate:modelValue": ($event) => unref(filters).maxAmount = $event,
                        type: "number",
                        placeholder: "Đến"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "gray",
              variant: "soft",
              icon: "i-heroicons-x-mark",
              onClick: resetFilters
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Xóa bộ lọc `);
                } else {
                  return [
                    createTextVNode(" Xóa bộ lọc ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-4" }, [
                createVNode(_component_UFormGroup, { label: "Từ ngày" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(filters).startDate,
                      "onUpdate:modelValue": ($event) => unref(filters).startDate = $event,
                      type: "date"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormGroup, { label: "Đến ngày" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(filters).endDate,
                      "onUpdate:modelValue": ($event) => unref(filters).endDate = $event,
                      type: "date"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormGroup, { label: "Khoảng giá" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UInput, {
                        modelValue: unref(filters).minAmount,
                        "onUpdate:modelValue": ($event) => unref(filters).minAmount = $event,
                        type: "number",
                        placeholder: "Từ"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("span", null, "-"),
                      createVNode(_component_UInput, {
                        modelValue: unref(filters).maxAmount,
                        "onUpdate:modelValue": ($event) => unref(filters).maxAmount = $event,
                        type: "number",
                        placeholder: "Đến"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex justify-end mt-4" }, [
                createVNode(_component_UButton, {
                  color: "gray",
                  variant: "soft",
                  icon: "i-heroicons-x-mark",
                  onClick: resetFilters
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Xóa bộ lọc ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTable, {
              data: unref(records),
              columns,
              loading: unref(loading),
              sort: { column: unref(sortBy), direction: unref(sortDirection) },
              onSort: handleSort,
              sticky: ""
            }, {
              "empty-state": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center py-4 text-gray-500"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-inbox",
                    class: "w-8 h-8 mx-auto mb-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`<p${_scopeId2}>Không có dữ liệu</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center py-4 text-gray-500" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-inbox",
                        class: "w-8 h-8 mx-auto mb-2"
                      }),
                      createVNode("p", null, "Không có dữ liệu")
                    ])
                  ];
                }
              }),
              "loading-state": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center py-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-arrow-path",
                    class: "w-8 h-8 mx-auto mb-2 animate-spin"
                  }, null, _parent3, _scopeId2));
                  _push3(`<p${_scopeId2}>Đang tải dữ liệu...</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center py-4" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-arrow-path",
                        class: "w-8 h-8 mx-auto mb-2 animate-spin"
                      }),
                      createVNode("p", null, "Đang tải dữ liệu...")
                    ])
                  ];
                }
              }),
              "quantity-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(formatMX(row.original.quantity))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(formatMX(row.original.quantity)), 1)
                  ];
                }
              }),
              "amount-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(formatCurrency(row.original.amount))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(formatCurrency(row.original.amount)), 1)
                  ];
                }
              }),
              "coinValue-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(formatCurrency(row.original.coinValue))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(formatCurrency(row.original.coinValue)), 1)
                  ];
                }
              }),
              "purchaseDate-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(formatDate(row.original.purchaseDate))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(formatDate(row.original.purchaseDate)), 1)
                  ];
                }
              }),
              "actions-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    variant: "ghost",
                    icon: "i-heroicons-pencil-square",
                    size: "xs",
                    onClick: ($event) => openEditModal(row.original)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UPopover, {
                    dismissible: false,
                    ui: { content: "p-4" }
                  }, {
                    content: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="p-4 space-y-4"${_scopeId3}><div class="flex items-center gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UIcon, {
                          name: "i-heroicons-exclamation-triangle",
                          class: "w-5 h-5 text-red-500"
                        }, null, _parent4, _scopeId3));
                        _push4(`<p class="font-medium"${_scopeId3}>Xác nhận xóa</p></div><p class="text-sm text-gray-600 dark:text-gray-400"${_scopeId3}> Bạn có chắc chắn muốn xóa bản ghi này? </p><div class="flex justify-end gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UButton, {
                          color: "gray",
                          variant: "soft",
                          size: "sm",
                          onClick: ($event) => {
                            var _a;
                            return (_a = _ctx.$refs.deletePopover) == null ? void 0 : _a.close();
                          }
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Hủy `);
                            } else {
                              return [
                                createTextVNode(" Hủy ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          color: "red",
                          variant: "solid",
                          size: "sm",
                          loading: unref(loading),
                          onClick: ($event) => handleDelete(row.original)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Xóa `);
                            } else {
                              return [
                                createTextVNode(" Xóa ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "p-4 space-y-4" }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(_component_UIcon, {
                                name: "i-heroicons-exclamation-triangle",
                                class: "w-5 h-5 text-red-500"
                              }),
                              createVNode("p", { class: "font-medium" }, "Xác nhận xóa")
                            ]),
                            createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, " Bạn có chắc chắn muốn xóa bản ghi này? "),
                            createVNode("div", { class: "flex justify-end gap-2" }, [
                              createVNode(_component_UButton, {
                                color: "gray",
                                variant: "soft",
                                size: "sm",
                                onClick: ($event) => {
                                  var _a;
                                  return (_a = _ctx.$refs.deletePopover) == null ? void 0 : _a.close();
                                }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Hủy ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_UButton, {
                                color: "red",
                                variant: "solid",
                                size: "sm",
                                loading: unref(loading),
                                onClick: ($event) => handleDelete(row.original)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Xóa ")
                                ]),
                                _: 2
                              }, 1032, ["loading", "onClick"])
                            ])
                          ])
                        ];
                      }
                    }),
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UButton, {
                          color: "red",
                          variant: "ghost",
                          icon: "i-heroicons-trash",
                          size: "xs"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UButton, {
                            color: "red",
                            variant: "ghost",
                            icon: "i-heroicons-trash",
                            size: "xs"
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UButton, {
                        color: "primary",
                        variant: "ghost",
                        icon: "i-heroicons-pencil-square",
                        size: "xs",
                        onClick: ($event) => openEditModal(row.original)
                      }, null, 8, ["onClick"]),
                      createVNode(_component_UPopover, {
                        dismissible: false,
                        ui: { content: "p-4" }
                      }, {
                        content: withCtx(() => [
                          createVNode("div", { class: "p-4 space-y-4" }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(_component_UIcon, {
                                name: "i-heroicons-exclamation-triangle",
                                class: "w-5 h-5 text-red-500"
                              }),
                              createVNode("p", { class: "font-medium" }, "Xác nhận xóa")
                            ]),
                            createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, " Bạn có chắc chắn muốn xóa bản ghi này? "),
                            createVNode("div", { class: "flex justify-end gap-2" }, [
                              createVNode(_component_UButton, {
                                color: "gray",
                                variant: "soft",
                                size: "sm",
                                onClick: ($event) => {
                                  var _a;
                                  return (_a = _ctx.$refs.deletePopover) == null ? void 0 : _a.close();
                                }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Hủy ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_UButton, {
                                color: "red",
                                variant: "solid",
                                size: "sm",
                                loading: unref(loading),
                                onClick: ($event) => handleDelete(row.original)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Xóa ")
                                ]),
                                _: 2
                              }, 1032, ["loading", "onClick"])
                            ])
                          ])
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_UButton, {
                            color: "red",
                            variant: "ghost",
                            icon: "i-heroicons-trash",
                            size: "xs"
                          })
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-between items-center mt-4 px-4"${_scopeId}><div class="text-sm text-gray-600 dark:text-gray-400"${_scopeId}> Tổng số: ${ssrInterpolate(unref(pagination).total)} bản ghi </div>`);
            _push2(ssrRenderComponent(_component_UPagination, {
              modelValue: unref(currentPage),
              "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
              total: unref(pagination).total,
              "per-page": unref(pagination).limit,
              "page-count": unref(pagination).totalPages,
              onChange: fetchRecords
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UTable, {
                data: unref(records),
                columns,
                loading: unref(loading),
                sort: { column: unref(sortBy), direction: unref(sortDirection) },
                onSort: handleSort,
                sticky: ""
              }, {
                "empty-state": withCtx(() => [
                  createVNode("div", { class: "text-center py-4 text-gray-500" }, [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-inbox",
                      class: "w-8 h-8 mx-auto mb-2"
                    }),
                    createVNode("p", null, "Không có dữ liệu")
                  ])
                ]),
                "loading-state": withCtx(() => [
                  createVNode("div", { class: "text-center py-4" }, [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-arrow-path",
                      class: "w-8 h-8 mx-auto mb-2 animate-spin"
                    }),
                    createVNode("p", null, "Đang tải dữ liệu...")
                  ])
                ]),
                "quantity-cell": withCtx(({ row }) => [
                  createTextVNode(toDisplayString(formatMX(row.original.quantity)), 1)
                ]),
                "amount-cell": withCtx(({ row }) => [
                  createTextVNode(toDisplayString(formatCurrency(row.original.amount)), 1)
                ]),
                "coinValue-cell": withCtx(({ row }) => [
                  createTextVNode(toDisplayString(formatCurrency(row.original.coinValue)), 1)
                ]),
                "purchaseDate-cell": withCtx(({ row }) => [
                  createTextVNode(toDisplayString(formatDate(row.original.purchaseDate)), 1)
                ]),
                "actions-cell": withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UButton, {
                      color: "primary",
                      variant: "ghost",
                      icon: "i-heroicons-pencil-square",
                      size: "xs",
                      onClick: ($event) => openEditModal(row.original)
                    }, null, 8, ["onClick"]),
                    createVNode(_component_UPopover, {
                      dismissible: false,
                      ui: { content: "p-4" }
                    }, {
                      content: withCtx(() => [
                        createVNode("div", { class: "p-4 space-y-4" }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-exclamation-triangle",
                              class: "w-5 h-5 text-red-500"
                            }),
                            createVNode("p", { class: "font-medium" }, "Xác nhận xóa")
                          ]),
                          createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, " Bạn có chắc chắn muốn xóa bản ghi này? "),
                          createVNode("div", { class: "flex justify-end gap-2" }, [
                            createVNode(_component_UButton, {
                              color: "gray",
                              variant: "soft",
                              size: "sm",
                              onClick: ($event) => {
                                var _a;
                                return (_a = _ctx.$refs.deletePopover) == null ? void 0 : _a.close();
                              }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Hủy ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              color: "red",
                              variant: "solid",
                              size: "sm",
                              loading: unref(loading),
                              onClick: ($event) => handleDelete(row.original)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Xóa ")
                              ]),
                              _: 2
                            }, 1032, ["loading", "onClick"])
                          ])
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_UButton, {
                          color: "red",
                          variant: "ghost",
                          icon: "i-heroicons-trash",
                          size: "xs"
                        })
                      ]),
                      _: 2
                    }, 1024)
                  ])
                ]),
                _: 1
              }, 8, ["data", "loading", "sort"]),
              createVNode("div", { class: "flex justify-between items-center mt-4 px-4" }, [
                createVNode("div", { class: "text-sm text-gray-600 dark:text-gray-400" }, " Tổng số: " + toDisplayString(unref(pagination).total) + " bản ghi ", 1),
                createVNode(_component_UPagination, {
                  modelValue: unref(currentPage),
                  "onUpdate:modelValue": ($event) => isRef(currentPage) ? currentPage.value = $event : null,
                  total: unref(pagination).total,
                  "per-page": unref(pagination).limit,
                  "page-count": unref(pagination).totalPages,
                  onChange: fetchRecords
                }, null, 8, ["modelValue", "onUpdate:modelValue", "total", "per-page", "page-count"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: unref(modal).isOpen,
        "onUpdate:open": ($event) => unref(modal).isOpen = $event,
        ui: { width: "max-w-xl" }
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-3"${_scopeId}><div class="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: unref(isEditing) ? "i-heroicons-pencil-square" : "i-heroicons-plus",
              class: "w-5 h-5 text-primary-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h3 class="text-lg font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(isEditing) ? "Cập nhật" : "Thêm mới")} lịch sử mua MX </h3><p class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(isEditing) ? "Chỉnh sửa thông tin giao dịch mua USDT" : "Nhập thông tin cho giao dịch mua USDT mới")}</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode("div", { class: "p-2 bg-primary-100 dark:bg-primary-900 rounded-lg" }, [
                  createVNode(_component_UIcon, {
                    name: unref(isEditing) ? "i-heroicons-pencil-square" : "i-heroicons-plus",
                    class: "w-5 h-5 text-primary-500"
                  }, null, 8, ["name"])
                ]),
                createVNode("div", null, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-900 dark:text-white" }, toDisplayString(unref(isEditing) ? "Cập nhật" : "Thêm mới") + " lịch sử mua MX ", 1),
                  createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(unref(isEditing) ? "Chỉnh sửa thông tin giao dịch mua USDT" : "Nhập thông tin cho giao dịch mua USDT mới"), 1)
                ])
              ])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-6"${_scopeId}><div class="space-y-6 p-2"${_scopeId}><div class="form-group"${_scopeId}><label class="block mb-2"${_scopeId}><span class="text-base font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-calendar-days",
              class: "w-5 h-5 text-gray-500"
            }, null, _parent2, _scopeId));
            _push2(` Ngày mua <span class="text-red-500 text-sm"${_scopeId}>*</span></span></label><div class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).purchaseDate,
              "onUpdate:modelValue": ($event) => unref(form).purchaseDate = $event,
              type: "date",
              ui: {
                width: "w-full",
                base: "h-12 transition-all duration-200 hover:border-primary-500 focus:ring-2 focus:ring-primary-500/20",
                icon: { trailing: { name: "i-heroicons-calendar" } }
              },
              placeholder: "Chọn ngày mua"
            }, null, _parent2, _scopeId));
            if (unref(validation).errors.purchaseDate) {
              _push2(`<div class="absolute -bottom-6 left-0"${_scopeId}><span class="text-sm text-red-500 flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-exclamation-circle",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(unref(validation).errors.purchaseDate)}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div class="form-group"${_scopeId}><label class="block mb-2"${_scopeId}><span class="text-base font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-currency-dollar",
              class: "w-5 h-5 text-gray-500"
            }, null, _parent2, _scopeId));
            _push2(` Số lượng MX <span class="text-red-500 text-sm"${_scopeId}>*</span></span></label><div class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).quantity,
              "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
              type: "number",
              min: "0",
              step: "0.01",
              ui: {
                width: "w-full",
                base: "h-12 transition-all duration-200 hover:border-primary-500 focus:ring-2 focus:ring-primary-500/20",
                icon: { trailing: { name: "i-heroicons-currency-dollar" } }
              },
              placeholder: "Nhập số lượng"
            }, null, _parent2, _scopeId));
            if (unref(validation).errors.quantity) {
              _push2(`<div class="absolute -bottom-6 left-0"${_scopeId}><span class="text-sm text-red-500 flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-exclamation-circle",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(unref(validation).errors.quantity)}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="form-group"${_scopeId}><label class="block mb-2"${_scopeId}><span class="text-base font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-banknotes",
              class: "w-5 h-5 text-gray-500"
            }, null, _parent2, _scopeId));
            _push2(` Số tiền (USDT) <span class="text-red-500 text-sm"${_scopeId}>*</span></span></label><div class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).amount,
              "onUpdate:modelValue": ($event) => unref(form).amount = $event,
              type: "number",
              min: "0",
              step: "0.01",
              ui: {
                width: "w-full",
                base: "h-12 transition-all duration-200 hover:border-primary-500 focus:ring-2 focus:ring-primary-500/20",
                icon: { trailing: { name: "i-heroicons-banknotes" } }
              },
              placeholder: "Nhập số tiền"
            }, null, _parent2, _scopeId));
            if (unref(validation).errors.amount) {
              _push2(`<div class="absolute -bottom-6 left-0"${_scopeId}><span class="text-sm text-red-500 flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-exclamation-circle",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(unref(validation).errors.amount)}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="form-group"${_scopeId}><label class="block mb-2"${_scopeId}><span class="text-base font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-chart-bar",
              class: "w-5 h-5 text-gray-500"
            }, null, _parent2, _scopeId));
            _push2(` Giá trị 1 MX (USDT) </span></label><div class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).coinValue,
              "onUpdate:modelValue": ($event) => unref(form).coinValue = $event,
              type: "number",
              readonly: "",
              disabled: "",
              ui: {
                width: "w-full",
                base: "h-12 bg-gray-50 dark:bg-gray-800 cursor-not-allowed",
                icon: { trailing: { name: "i-heroicons-lock-closed" } }
              },
              placeholder: unref(form).quantity && unref(form).amount ? formatMX(unref(calculatedCoinValue)) : "Được tính tự động"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(handleSubmit, ["prevent"]),
                class: "space-y-6"
              }, [
                createVNode("div", { class: "space-y-6 p-2" }, [
                  createVNode("div", { class: "form-group" }, [
                    createVNode("label", { class: "block mb-2" }, [
                      createVNode("span", { class: "text-base font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-calendar-days",
                          class: "w-5 h-5 text-gray-500"
                        }),
                        createTextVNode(" Ngày mua "),
                        createVNode("span", { class: "text-red-500 text-sm" }, "*")
                      ])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UInput, {
                        modelValue: unref(form).purchaseDate,
                        "onUpdate:modelValue": ($event) => unref(form).purchaseDate = $event,
                        type: "date",
                        ui: {
                          width: "w-full",
                          base: "h-12 transition-all duration-200 hover:border-primary-500 focus:ring-2 focus:ring-primary-500/20",
                          icon: { trailing: { name: "i-heroicons-calendar" } }
                        },
                        placeholder: "Chọn ngày mua"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      unref(validation).errors.purchaseDate ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "absolute -bottom-6 left-0"
                      }, [
                        createVNode("span", { class: "text-sm text-red-500 flex items-center gap-1" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-exclamation-circle",
                            class: "w-4 h-4"
                          }),
                          createTextVNode(" " + toDisplayString(unref(validation).errors.purchaseDate), 1)
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                    createVNode("div", { class: "form-group" }, [
                      createVNode("label", { class: "block mb-2" }, [
                        createVNode("span", { class: "text-base font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-currency-dollar",
                            class: "w-5 h-5 text-gray-500"
                          }),
                          createTextVNode(" Số lượng MX "),
                          createVNode("span", { class: "text-red-500 text-sm" }, "*")
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UInput, {
                          modelValue: unref(form).quantity,
                          "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
                          type: "number",
                          min: "0",
                          step: "0.01",
                          ui: {
                            width: "w-full",
                            base: "h-12 transition-all duration-200 hover:border-primary-500 focus:ring-2 focus:ring-primary-500/20",
                            icon: { trailing: { name: "i-heroicons-currency-dollar" } }
                          },
                          placeholder: "Nhập số lượng"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(validation).errors.quantity ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "absolute -bottom-6 left-0"
                        }, [
                          createVNode("span", { class: "text-sm text-red-500 flex items-center gap-1" }, [
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-exclamation-circle",
                              class: "w-4 h-4"
                            }),
                            createTextVNode(" " + toDisplayString(unref(validation).errors.quantity), 1)
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "form-group" }, [
                      createVNode("label", { class: "block mb-2" }, [
                        createVNode("span", { class: "text-base font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1" }, [
                          createVNode(_component_UIcon, {
                            name: "i-heroicons-banknotes",
                            class: "w-5 h-5 text-gray-500"
                          }),
                          createTextVNode(" Số tiền (USDT) "),
                          createVNode("span", { class: "text-red-500 text-sm" }, "*")
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UInput, {
                          modelValue: unref(form).amount,
                          "onUpdate:modelValue": ($event) => unref(form).amount = $event,
                          type: "number",
                          min: "0",
                          step: "0.01",
                          ui: {
                            width: "w-full",
                            base: "h-12 transition-all duration-200 hover:border-primary-500 focus:ring-2 focus:ring-primary-500/20",
                            icon: { trailing: { name: "i-heroicons-banknotes" } }
                          },
                          placeholder: "Nhập số tiền"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(validation).errors.amount ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "absolute -bottom-6 left-0"
                        }, [
                          createVNode("span", { class: "text-sm text-red-500 flex items-center gap-1" }, [
                            createVNode(_component_UIcon, {
                              name: "i-heroicons-exclamation-circle",
                              class: "w-4 h-4"
                            }),
                            createTextVNode(" " + toDisplayString(unref(validation).errors.amount), 1)
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "form-group" }, [
                    createVNode("label", { class: "block mb-2" }, [
                      createVNode("span", { class: "text-base font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1" }, [
                        createVNode(_component_UIcon, {
                          name: "i-heroicons-chart-bar",
                          class: "w-5 h-5 text-gray-500"
                        }),
                        createTextVNode(" Giá trị 1 MX (USDT) ")
                      ])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UInput, {
                        modelValue: unref(form).coinValue,
                        "onUpdate:modelValue": ($event) => unref(form).coinValue = $event,
                        type: "number",
                        readonly: "",
                        disabled: "",
                        ui: {
                          width: "w-full",
                          base: "h-12 bg-gray-50 dark:bg-gray-800 cursor-not-allowed",
                          icon: { trailing: { name: "i-heroicons-lock-closed" } }
                        },
                        placeholder: unref(form).quantity && unref(form).amount ? formatMX(unref(calculatedCoinValue)) : "Được tính tự động"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                    ])
                  ])
                ])
              ], 32)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "gray",
              variant: "soft",
              ui: {
                padding: "px-6 py-2.5",
                font: "font-medium",
                base: "transition-all duration-200 hover:opacity-80"
              },
              onClick: unref(modal).close
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-heroicons-x-mark",
                    class: "w-5 h-5 mr-1.5"
                  }, null, _parent3, _scopeId2));
                  _push3(` Hủy `);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-x-mark",
                      class: "w-5 h-5 mr-1.5"
                    }),
                    createTextVNode(" Hủy ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              loading: unref(submitting),
              ui: {
                padding: "px-6 py-2.5",
                font: "font-medium",
                base: "transition-all duration-200 hover:opacity-80"
              },
              onClick: handleSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!unref(submitting)) {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: unref(isEditing) ? "i-heroicons-pencil-square" : "i-heroicons-plus",
                      class: "w-5 h-5 mr-1.5"
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(unref(isEditing) ? "Cập nhật" : "Thêm mới")}<!--]-->`);
                  } else {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "i-heroicons-arrow-path",
                      class: "w-5 h-5 mr-1.5 animate-spin"
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(unref(isEditing) ? "Đang cập nhật..." : "Đang thêm...")}<!--]-->`);
                  }
                } else {
                  return [
                    !unref(submitting) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(_component_UIcon, {
                        name: unref(isEditing) ? "i-heroicons-pencil-square" : "i-heroicons-plus",
                        class: "w-5 h-5 mr-1.5"
                      }, null, 8, ["name"]),
                      createTextVNode(" " + toDisplayString(unref(isEditing) ? "Cập nhật" : "Thêm mới"), 1)
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-arrow-path",
                        class: "w-5 h-5 mr-1.5 animate-spin"
                      }),
                      createTextVNode(" " + toDisplayString(unref(isEditing) ? "Đang cập nhật..." : "Đang thêm..."), 1)
                    ], 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end gap-3" }, [
                createVNode(_component_UButton, {
                  color: "gray",
                  variant: "soft",
                  ui: {
                    padding: "px-6 py-2.5",
                    font: "font-medium",
                    base: "transition-all duration-200 hover:opacity-80"
                  },
                  onClick: unref(modal).close
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-x-mark",
                      class: "w-5 h-5 mr-1.5"
                    }),
                    createTextVNode(" Hủy ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_UButton, {
                  color: "primary",
                  loading: unref(submitting),
                  ui: {
                    padding: "px-6 py-2.5",
                    font: "font-medium",
                    base: "transition-all duration-200 hover:opacity-80"
                  },
                  onClick: handleSubmit
                }, {
                  default: withCtx(() => [
                    !unref(submitting) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(_component_UIcon, {
                        name: unref(isEditing) ? "i-heroicons-pencil-square" : "i-heroicons-plus",
                        class: "w-5 h-5 mr-1.5"
                      }, null, 8, ["name"]),
                      createTextVNode(" " + toDisplayString(unref(isEditing) ? "Cập nhật" : "Thêm mới"), 1)
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-arrow-path",
                        class: "w-5 h-5 mr-1.5 animate-spin"
                      }),
                      createTextVNode(" " + toDisplayString(unref(isEditing) ? "Đang cập nhật..." : "Đang thêm..."), 1)
                    ], 64))
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/coin-history/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue3.mjs.map
