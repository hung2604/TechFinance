import { _ as __nuxt_component_0 } from './Card.vue.mjs';
import { h as useFormField, t as tv, d as _appConfig, s as looseToNumber, b as __nuxt_component_2$1 } from './server.mjs';
import { _ as __nuxt_component_2 } from './Table.vue.mjs';
import { _ as __nuxt_component_3 } from './Badge.vue.mjs';
import { _ as __nuxt_component_4 } from './Modal.vue.mjs';
import { _ as __nuxt_component_5 } from './Input.vue.mjs';
import { _ as __nuxt_component_6 } from './Select.vue.mjs';
import { defineComponent, mergeModels, useModel, computed, ref, watch, nextTick, unref, mergeProps, withCtx, createVNode, renderSlot, useSSRContext, reactive, createTextVNode, toDisplayString, isRef, withModifiers, createBlock, createCommentVNode, openBlock } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { u as useFetch } from './fetch.mjs';
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
    "root": "relative inline-flex items-center",
    "base": [
      "w-full rounded-[calc(var(--ui-radius)*1.5)] border-0 placeholder:text-(--ui-text-dimmed) focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-(--ui-text-dimmed)",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-(--ui-text-dimmed)"
  },
  "variants": {
    "buttonGroup": {
      "horizontal": {
        "root": "group",
        "base": "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"
      },
      "vertical": {
        "root": "group",
        "base": "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"
      }
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-xs gap-1",
        "leading": "ps-2",
        "trailing": "pe-2",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-xs gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-sm gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "lg": {
        "base": "px-3 py-2 text-sm gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6"
      }
    },
    "variant": {
      "outline": "text-(--ui-text-highlighted) bg-(--ui-bg) ring ring-inset ring-(--ui-border-accented)",
      "soft": "text-(--ui-text-highlighted) bg-(--ui-bg-elevated)/50 hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-(--ui-bg-elevated)/50",
      "subtle": "text-(--ui-text-highlighted) bg-(--ui-bg-elevated) ring ring-inset ring-(--ui-border-accented)",
      "ghost": "text-(--ui-text-highlighted) bg-transparent hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-(--ui-text-highlighted) bg-transparent"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "type": {
      "file": "file:me-1.5 file:font-medium file:text-(--ui-text-muted) file:outline-none"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary)"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-secondary)"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-success)"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-info)"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-warning)"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-primary)"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-secondary)"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-success)"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-info)"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-warning)"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-error)"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-border-inverted)"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-border-inverted)"
    },
    {
      "leading": true,
      "size": "xs",
      "class": "ps-7"
    },
    {
      "leading": true,
      "size": "sm",
      "class": "ps-8"
    },
    {
      "leading": true,
      "size": "md",
      "class": "ps-9"
    },
    {
      "leading": true,
      "size": "lg",
      "class": "ps-10"
    },
    {
      "leading": true,
      "size": "xl",
      "class": "ps-11"
    },
    {
      "trailing": true,
      "size": "xs",
      "class": "pe-7"
    },
    {
      "trailing": true,
      "size": "sm",
      "class": "pe-8"
    },
    {
      "trailing": true,
      "size": "md",
      "class": "pe-9"
    },
    {
      "trailing": true,
      "size": "lg",
      "class": "pe-10"
    },
    {
      "trailing": true,
      "size": "xl",
      "class": "pe-11"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};

var _a;
const appConfigTextarea = _appConfig;
const textarea = tv({ extend: tv(theme), ...((_a = appConfigTextarea.ui) == null ? void 0 : _a.textarea) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "Textarea",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: {},
    id: {},
    name: {},
    placeholder: {},
    color: {},
    variant: {},
    size: {},
    required: { type: Boolean },
    autofocus: { type: Boolean },
    autofocusDelay: { default: 0 },
    disabled: { type: Boolean },
    class: {},
    rows: { default: 3 },
    maxrows: { default: 0 },
    autoresize: { type: Boolean },
    highlight: { type: Boolean },
    ui: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "blur", "change"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const [modelValue, modelModifiers] = useModel(__props, "modelValue");
    const { emitFormFocus, emitFormBlur, emitFormInput, emitFormChange, size, color, id, name, highlight, disabled, ariaAttrs } = useFormField(props, { deferInputValidation: true });
    const ui = computed(() => textarea({
      color: color.value,
      variant: props.variant,
      size: size == null ? void 0 : size.value,
      highlight: highlight.value
    }));
    const textareaRef = ref(null);
    function updateInput(value) {
      if (modelModifiers.trim) {
        value = (value == null ? void 0 : value.trim()) ?? null;
      }
      if (modelModifiers.number) {
        value = looseToNumber(value);
      }
      if (modelModifiers.nullify) {
        value || (value = null);
      }
      modelValue.value = value;
      emitFormInput();
    }
    function onInput(event) {
      autoResize();
      if (!modelModifiers.lazy) {
        updateInput(event.target.value);
      }
    }
    function onChange(event) {
      const value = event.target.value;
      if (modelModifiers.lazy) {
        updateInput(value);
      }
      if (modelModifiers.trim) {
        event.target.value = value.trim();
      }
      emitFormChange();
      emits("change", event);
    }
    function onBlur(event) {
      emitFormBlur();
      emits("blur", event);
    }
    function autoResize() {
      if (props.autoresize) {
        if (!textareaRef.value) {
          return;
        }
        textareaRef.value.rows = props.rows;
        const overflow = textareaRef.value.style.overflow;
        textareaRef.value.style.overflow = "hidden";
        const styles = (void 0).getComputedStyle(textareaRef.value);
        const paddingTop = Number.parseInt(styles.paddingTop);
        const paddingBottom = Number.parseInt(styles.paddingBottom);
        const padding = paddingTop + paddingBottom;
        const lineHeight = Number.parseInt(styles.lineHeight);
        const { scrollHeight } = textareaRef.value;
        const newRows = (scrollHeight - padding) / lineHeight;
        if (newRows > props.rows) {
          textareaRef.value.rows = props.maxrows ? Math.min(newRows, props.maxrows) : newRows;
        }
        textareaRef.value.style.overflow = overflow;
      }
    }
    watch(modelValue, () => {
      nextTick(autoResize);
    });
    __expose({
      textareaRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      let _temp0;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b;
          if (_push2) {
            _push2(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({
              id: unref(id),
              ref_key: "textareaRef",
              ref: textareaRef,
              value: unref(modelValue),
              name: unref(name),
              rows: _ctx.rows,
              placeholder: _ctx.placeholder,
              class: ui.value.base({ class: (_a3 = props.ui) == null ? void 0 : _a3.base }),
              disabled: unref(disabled),
              required: _ctx.required
            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }), "textarea")}${_scopeId}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("textarea", mergeProps({
                id: unref(id),
                ref_key: "textareaRef",
                ref: textareaRef,
                value: unref(modelValue),
                name: unref(name),
                rows: _ctx.rows,
                placeholder: _ctx.placeholder,
                class: ui.value.base({ class: (_b = props.ui) == null ? void 0 : _b.base }),
                disabled: unref(disabled),
                required: _ctx.required
              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                onInput,
                onBlur,
                onChange,
                onFocus: unref(emitFormFocus)
              }), null, 16, ["id", "value", "name", "rows", "placeholder", "disabled", "required", "onFocus"]),
              renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$1, { __name: "UTextarea" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isModalOpen = ref(false);
    const isLoading = ref(true);
    const isSubmitting = ref(false);
    const isDeleting = ref(false);
    const loans = ref([]);
    const editingLoan = ref(null);
    const { data: usersList, refresh: refreshUsers } = useFetch("/api/users", "$D43zP0MEy-");
    const users = computed(() => {
      return (usersList.value || []).map((user) => ({
        label: `${user.name} (${user.email})`,
        value: user._id
      }));
    });
    const form = reactive({
      amountVND: null,
      term: "",
      interestRate: null,
      borrowerId: "",
      loanDate: "",
      interestStartDate: "",
      description: ""
    });
    const termOptions = [
      { label: "3 tháng", value: "3_MONTHS" },
      { label: "6 tháng", value: "6_MONTHS" },
      { label: "1 năm", value: "1_YEAR" }
    ];
    const columns = [
      {
        accessorKey: "amount",
        header: "Số tiền"
      },
      {
        accessorKey: "usage",
        header: "Sử dụng"
      },
      {
        accessorKey: "term",
        header: "Kỳ hạn"
      },
      {
        accessorKey: "interestRate",
        header: "Lãi suất"
      },
      {
        accessorKey: "borrower",
        header: "Người vay"
      },
      {
        accessorKey: "dates",
        header: "Thời gian"
      },
      {
        accessorKey: "status",
        header: "Trạng thái"
      },
      {
        accessorKey: "actions",
        header: "Thao tác"
      }
    ];
    const formatDateForInput = (date) => {
      if (!date) return "";
      return new Date(date).toISOString().split("T")[0];
    };
    const calculateLoanStatus = (interestStartDate, term) => {
      if (!interestStartDate) return "NOT_STARTED";
      const today = /* @__PURE__ */ new Date();
      const startDate = new Date(interestStartDate);
      let endDate = new Date(startDate);
      switch (term) {
        case "3_MONTHS":
          endDate.setMonth(startDate.getMonth() + 3);
          break;
        case "6_MONTHS":
          endDate.setMonth(startDate.getMonth() + 6);
          break;
        case "1_YEAR":
          endDate.setFullYear(startDate.getFullYear() + 1);
          break;
      }
      if (today < startDate) return "NOT_STARTED";
      if (today > endDate) return "COMPLETED";
      return "IN_PROGRESS";
    };
    const { data: loansList, refresh: refreshLoans } = useFetch("/api/loans", "$c8-PWuVdq0");
    watch(loansList, (newValue) => {
      loans.value = (newValue || []).map((loan) => ({
        ...loan,
        status: calculateLoanStatus(loan.interestStartDate, loan.term)
      }));
      isLoading.value = false;
    }, { immediate: true });
    const fetchLoans = async () => {
      try {
        isLoading.value = true;
        await refreshLoans();
      } catch (error) {
        console.error("Error fetching loans:", error);
      } finally {
        isLoading.value = false;
      }
    };
    const editLoan = (loan) => {
      var _a;
      editingLoan.value = loan;
      Object.assign(form, {
        amountVND: loan.amountVND,
        term: loan.term,
        interestRate: loan.interestRate,
        borrowerId: (_a = loan.borrowerId) == null ? void 0 : _a._id,
        loanDate: formatDateForInput(loan.loanDate),
        interestStartDate: formatDateForInput(loan.interestStartDate),
        description: loan.description
      });
      isModalOpen.value = true;
    };
    const deleteLoan = async (id) => {
      try {
        isDeleting.value = true;
        await $fetch(`/api/loans/${id}`, {
          method: "DELETE"
        });
        await fetchLoans();
      } catch (error) {
        console.error("Error deleting loan:", error);
      } finally {
        isDeleting.value = false;
      }
    };
    const handleSubmit = async () => {
      try {
        isSubmitting.value = true;
        const payload = { ...form };
        if (editingLoan.value) {
          await $fetch(`/api/loans/${editingLoan.value._id}`, {
            method: "PATCH",
            body: payload
          });
        } else {
          await $fetch("/api/loans", {
            method: "POST",
            body: payload
          });
        }
        await fetchLoans();
        closeModal();
      } catch (error) {
        console.error("Error submitting loan:", error);
      } finally {
        isSubmitting.value = false;
      }
    };
    const closeModal = () => {
      isModalOpen.value = false;
      editingLoan.value = null;
      Object.assign(form, {
        amountVND: null,
        term: "",
        interestRate: null,
        borrowerId: "",
        loanDate: "",
        interestStartDate: "",
        description: ""
      });
    };
    const formatCurrency = (value) => {
      return new Intl.NumberFormat("vi-VN").format(value);
    };
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("vi-VN");
    };
    const formatTerm = (term) => {
      const termMap = {
        "3_MONTHS": "3 tháng",
        "6_MONTHS": "6 tháng",
        "1_YEAR": "1 năm"
      };
      return termMap[term] || term;
    };
    const formatStatus = (status) => {
      const statusMap = {
        "NOT_STARTED": "Chưa tính lãi",
        "IN_PROGRESS": "Đang tính lãi",
        "COMPLETED": "Đã kết thúc"
      };
      return statusMap[status] || status;
    };
    const getStatusColor = (status) => {
      const colorMap = {
        "NOT_STARTED": "yellow",
        "IN_PROGRESS": "blue",
        "COMPLETED": "green"
      };
      return colorMap[status] || "gray";
    };
    const calculateUSDT = (amountVND) => {
      const rate = 24500;
      return (amountVND / rate).toFixed(2);
    };
    const calculateInterestToDate = (loan) => {
      if (!loan.interestStartDate || !loan.term || !loan.amountVND || !loan.interestRate) return 0;
      const today = /* @__PURE__ */ new Date();
      const startDate = new Date(loan.interestStartDate);
      if (today < startDate) return 0;
      let endDate = new Date(startDate);
      switch (loan.term) {
        case "3_MONTHS":
          endDate.setMonth(startDate.getMonth() + 3);
          break;
        case "6_MONTHS":
          endDate.setMonth(startDate.getMonth() + 6);
          break;
        case "1_YEAR":
          endDate.setFullYear(startDate.getFullYear() + 1);
          break;
      }
      const dailyInterestRate = loan.interestRate / 100 / 365;
      if (today > endDate) {
        const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1e3 * 60 * 60 * 24));
        return loan.amountVND * dailyInterestRate * totalDays;
      }
      const daysDiff = Math.ceil((today.getTime() - startDate.getTime()) / (1e3 * 60 * 60 * 24));
      return loan.amountVND * dailyInterestRate * daysDiff;
    };
    const calculateProfitLoss = (loan) => {
      if (!loan.purchasedMX || !loan.totalRewards) return 0;
      const rewardsInVND = loan.totalRewards * 25e3;
      const investmentInVND = calculateInterestToDate(loan);
      return rewardsInVND - investmentInVND;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0;
      const _component_UButton = __nuxt_component_2$1;
      const _component_UTable = __nuxt_component_2;
      const _component_UBadge = __nuxt_component_3;
      const _component_UModal = __nuxt_component_4;
      const _component_UInput = __nuxt_component_5;
      const _component_USelect = __nuxt_component_6;
      const _component_UTextarea = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><h2 class="text-xl font-semibold"${_scopeId}>Quản lý khoản vay</h2>`);
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-plus",
              color: "primary",
              onClick: ($event) => isModalOpen.value = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Thêm khoản vay `);
                } else {
                  return [
                    createTextVNode(" Thêm khoản vay ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("h2", { class: "text-xl font-semibold" }, "Quản lý khoản vay"),
                createVNode(_component_UButton, {
                  icon: "i-heroicons-plus",
                  color: "primary",
                  onClick: ($event) => isModalOpen.value = true
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Thêm khoản vay ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTable, {
              data: unref(loans),
              columns,
              loading: unref(isLoading)
            }, {
              "amount-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(formatCurrency(row.original.amountVND))} VND <div class="text-sm text-gray-500"${_scopeId2}> ≈ ${ssrInterpolate(row.original.amountUSDT)} USDT </div><div class="text-sm text-blue-500"${_scopeId2}> Lãi phải trả: ${ssrInterpolate(formatCurrency(calculateInterestToDate(row.original)))} VND </div>`);
                } else {
                  return [
                    createTextVNode(toDisplayString(formatCurrency(row.original.amountVND)) + " VND ", 1),
                    createVNode("div", { class: "text-sm text-gray-500" }, " ≈ " + toDisplayString(row.original.amountUSDT) + " USDT ", 1),
                    createVNode("div", { class: "text-sm text-blue-500" }, " Lãi phải trả: " + toDisplayString(formatCurrency(calculateInterestToDate(row.original))) + " VND ", 1)
                  ];
                }
              }),
              "usage-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  _push3(`<div class="space-y-1"${_scopeId2}><div class="text-sm"${_scopeId2}> Đã sử dụng: ${ssrInterpolate(formatCurrency(row.original.usedAmount))} USDT </div><div class="text-sm text-gray-500"${_scopeId2}> Còn lại: ${ssrInterpolate(formatCurrency(row.original.remainingAmount))} USDT </div><div class="text-sm text-blue-500"${_scopeId2}> Đã mua: ${ssrInterpolate(((_a = row.original.purchaseHistory) == null ? void 0 : _a.length) || 0)} lần </div><div class="text-sm text-green-500"${_scopeId2}> Số MX đã mua: ${ssrInterpolate(((_b = row.original.purchasedMX) == null ? void 0 : _b.toFixed(2)) || "0")} MX </div><div class="text-sm text-green-500"${_scopeId2}> Số tiền đã thu về: ${ssrInterpolate(formatCurrency(row.original.totalRewards))} USDT </div><div class="${ssrRenderClass([calculateProfitLoss(row.original) >= 0 ? "text-success-500" : "text-error-500", "text-sm"])}"${_scopeId2}> Lời/Lỗ: ${ssrInterpolate(formatCurrency(calculateProfitLoss(row.original)))} VND </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-1" }, [
                      createVNode("div", { class: "text-sm" }, " Đã sử dụng: " + toDisplayString(formatCurrency(row.original.usedAmount)) + " USDT ", 1),
                      createVNode("div", { class: "text-sm text-gray-500" }, " Còn lại: " + toDisplayString(formatCurrency(row.original.remainingAmount)) + " USDT ", 1),
                      createVNode("div", { class: "text-sm text-blue-500" }, " Đã mua: " + toDisplayString(((_c = row.original.purchaseHistory) == null ? void 0 : _c.length) || 0) + " lần ", 1),
                      createVNode("div", { class: "text-sm text-green-500" }, " Số MX đã mua: " + toDisplayString(((_d = row.original.purchasedMX) == null ? void 0 : _d.toFixed(2)) || "0") + " MX ", 1),
                      createVNode("div", { class: "text-sm text-green-500" }, " Số tiền đã thu về: " + toDisplayString(formatCurrency(row.original.totalRewards)) + " USDT ", 1),
                      createVNode("div", {
                        class: ["text-sm", calculateProfitLoss(row.original) >= 0 ? "text-success-500" : "text-error-500"]
                      }, " Lời/Lỗ: " + toDisplayString(formatCurrency(calculateProfitLoss(row.original))) + " VND ", 3)
                    ])
                  ];
                }
              }),
              "term-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(formatTerm(row.original.term))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(formatTerm(row.original.term)), 1)
                  ];
                }
              }),
              "interest-rate-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center"${_scopeId2}>${ssrInterpolate(row.original.interestRate)} <span class="text-gray-500 ml-0.5"${_scopeId2}>%</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createTextVNode(toDisplayString(row.original.interestRate) + " ", 1),
                      createVNode("span", { class: "text-gray-500 ml-0.5" }, "%")
                    ])
                  ];
                }
              }),
              "borrower-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`${ssrInterpolate(((_a = row.original.borrowerId) == null ? void 0 : _a.name) ? `${row.original.borrowerId.name} (${row.original.borrowerId.email})` : "N/A")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(((_b = row.original.borrowerId) == null ? void 0 : _b.name) ? `${row.original.borrowerId.name} (${row.original.borrowerId.email})` : "N/A"), 1)
                  ];
                }
              }),
              "dates-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>Ngày vay: ${ssrInterpolate(formatDate(row.original.loanDate))}</div><div class="text-sm text-gray-500"${_scopeId2}> Bắt đầu tính lãi: ${ssrInterpolate(formatDate(row.original.interestStartDate))}</div>`);
                } else {
                  return [
                    createVNode("div", null, "Ngày vay: " + toDisplayString(formatDate(row.original.loanDate)), 1),
                    createVNode("div", { class: "text-sm text-gray-500" }, " Bắt đầu tính lãi: " + toDisplayString(formatDate(row.original.interestStartDate)), 1)
                  ];
                }
              }),
              "status-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: getStatusColor(row.original.status),
                    variant: "subtle",
                    size: "sm"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(formatStatus(row.original.status))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(formatStatus(row.original.status)), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UBadge, {
                      color: getStatusColor(row.original.status),
                      variant: "subtle",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(formatStatus(row.original.status)), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
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
                    onClick: ($event) => editLoan(row.original)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "red",
                    variant: "ghost",
                    icon: "i-heroicons-trash",
                    size: "xs",
                    loading: unref(isDeleting),
                    onClick: ($event) => deleteLoan(row.original._id)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UButton, {
                        color: "primary",
                        variant: "ghost",
                        icon: "i-heroicons-pencil-square",
                        size: "xs",
                        onClick: ($event) => editLoan(row.original)
                      }, null, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        color: "red",
                        variant: "ghost",
                        icon: "i-heroicons-trash",
                        size: "xs",
                        loading: unref(isDeleting),
                        onClick: ($event) => deleteLoan(row.original._id)
                      }, null, 8, ["loading", "onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTable, {
                data: unref(loans),
                columns,
                loading: unref(isLoading)
              }, {
                "amount-cell": withCtx(({ row }) => [
                  createTextVNode(toDisplayString(formatCurrency(row.original.amountVND)) + " VND ", 1),
                  createVNode("div", { class: "text-sm text-gray-500" }, " ≈ " + toDisplayString(row.original.amountUSDT) + " USDT ", 1),
                  createVNode("div", { class: "text-sm text-blue-500" }, " Lãi phải trả: " + toDisplayString(formatCurrency(calculateInterestToDate(row.original))) + " VND ", 1)
                ]),
                "usage-cell": withCtx(({ row }) => {
                  var _a, _b;
                  return [
                    createVNode("div", { class: "space-y-1" }, [
                      createVNode("div", { class: "text-sm" }, " Đã sử dụng: " + toDisplayString(formatCurrency(row.original.usedAmount)) + " USDT ", 1),
                      createVNode("div", { class: "text-sm text-gray-500" }, " Còn lại: " + toDisplayString(formatCurrency(row.original.remainingAmount)) + " USDT ", 1),
                      createVNode("div", { class: "text-sm text-blue-500" }, " Đã mua: " + toDisplayString(((_a = row.original.purchaseHistory) == null ? void 0 : _a.length) || 0) + " lần ", 1),
                      createVNode("div", { class: "text-sm text-green-500" }, " Số MX đã mua: " + toDisplayString(((_b = row.original.purchasedMX) == null ? void 0 : _b.toFixed(2)) || "0") + " MX ", 1),
                      createVNode("div", { class: "text-sm text-green-500" }, " Số tiền đã thu về: " + toDisplayString(formatCurrency(row.original.totalRewards)) + " USDT ", 1),
                      createVNode("div", {
                        class: ["text-sm", calculateProfitLoss(row.original) >= 0 ? "text-success-500" : "text-error-500"]
                      }, " Lời/Lỗ: " + toDisplayString(formatCurrency(calculateProfitLoss(row.original))) + " VND ", 3)
                    ])
                  ];
                }),
                "term-cell": withCtx(({ row }) => [
                  createTextVNode(toDisplayString(formatTerm(row.original.term)), 1)
                ]),
                "interest-rate-cell": withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center" }, [
                    createTextVNode(toDisplayString(row.original.interestRate) + " ", 1),
                    createVNode("span", { class: "text-gray-500 ml-0.5" }, "%")
                  ])
                ]),
                "borrower-cell": withCtx(({ row }) => {
                  var _a;
                  return [
                    createTextVNode(toDisplayString(((_a = row.original.borrowerId) == null ? void 0 : _a.name) ? `${row.original.borrowerId.name} (${row.original.borrowerId.email})` : "N/A"), 1)
                  ];
                }),
                "dates-cell": withCtx(({ row }) => [
                  createVNode("div", null, "Ngày vay: " + toDisplayString(formatDate(row.original.loanDate)), 1),
                  createVNode("div", { class: "text-sm text-gray-500" }, " Bắt đầu tính lãi: " + toDisplayString(formatDate(row.original.interestStartDate)), 1)
                ]),
                "status-cell": withCtx(({ row }) => [
                  createVNode(_component_UBadge, {
                    color: getStatusColor(row.original.status),
                    variant: "subtle",
                    size: "sm"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(formatStatus(row.original.status)), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ]),
                "actions-cell": withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UButton, {
                      color: "primary",
                      variant: "ghost",
                      icon: "i-heroicons-pencil-square",
                      size: "xs",
                      onClick: ($event) => editLoan(row.original)
                    }, null, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      color: "red",
                      variant: "ghost",
                      icon: "i-heroicons-trash",
                      size: "xs",
                      loading: unref(isDeleting),
                      onClick: ($event) => deleteLoan(row.original._id)
                    }, null, 8, ["loading", "onClick"])
                  ])
                ]),
                _: 1
              }, 8, ["data", "loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: unref(isModalOpen),
        "onUpdate:open": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : null,
        "prevent-close": ""
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-xl font-semibold"${_scopeId}>${ssrInterpolate(unref(editingLoan) ? "Cập nhật khoản vay" : "Thêm khoản vay mới")}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(unref(editingLoan) ? "Cập nhật khoản vay" : "Thêm khoản vay mới"), 1)
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-6"${_scopeId}><div class="grid grid-cols-2 gap-6"${_scopeId}><div class="space-y-2"${_scopeId}><label class="block text-sm font-medium text-gray-700 dark:text-gray-200"${_scopeId}> Số tiền vay (VND) <span class="text-red-500"${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).amountVND,
              "onUpdate:modelValue": ($event) => unref(form).amountVND = $event,
              type: "number",
              placeholder: "Nhập số tiền VND",
              ui: {
                base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input",
                padding: "pl-11 pr-4",
                leading: "absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400",
                inner: "relative block w-full rounded-md h-[38px]"
              }
            }, null, _parent2, _scopeId));
            if (unref(form).amountVND) {
              _push2(`<div class="text-sm text-gray-500"${_scopeId}> ≈ ${ssrInterpolate(calculateUSDT(unref(form).amountVND))} USDT </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="space-y-2"${_scopeId}><label class="block text-sm font-medium text-gray-700 dark:text-gray-200"${_scopeId}> Kỳ hạn <span class="text-red-500"${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: unref(form).term,
              "onUpdate:modelValue": ($event) => unref(form).term = $event,
              items: termOptions,
              placeholder: "Chọn kỳ hạn",
              ui: {
                select: {
                  base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-select",
                  inner: "relative block w-full rounded-md h-[38px]"
                }
              }
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-2"${_scopeId}><label class="block text-sm font-medium text-gray-700 dark:text-gray-200"${_scopeId}> Lãi suất (%) <span class="text-red-500"${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).interestRate,
              "onUpdate:modelValue": ($event) => unref(form).interestRate = $event,
              type: "number",
              min: "0",
              max: "20",
              step: "0.1",
              placeholder: "Nhập lãi suất",
              ui: {
                base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input",
                inner: "relative block w-full rounded-md h-[38px]"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-2"${_scopeId}><label class="block text-sm font-medium text-gray-700 dark:text-gray-200"${_scopeId}> Người vay <span class="text-red-500"${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: unref(form).borrowerId,
              "onUpdate:modelValue": ($event) => unref(form).borrowerId = $event,
              items: unref(users),
              searchable: "",
              placeholder: "Chọn người vay",
              ui: {
                select: {
                  base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-select",
                  inner: "relative block w-full rounded-md h-[38px]"
                }
              }
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-2"${_scopeId}><label class="block text-sm font-medium text-gray-700 dark:text-gray-200"${_scopeId}> Ngày vay <span class="text-red-500"${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).loanDate,
              "onUpdate:modelValue": ($event) => unref(form).loanDate = $event,
              type: "date",
              ui: {
                base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input",
                inner: "relative block w-full rounded-md h-[38px]"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-2"${_scopeId}><label class="block text-sm font-medium text-gray-700 dark:text-gray-200"${_scopeId}> Ngày bắt đầu tính lãi <span class="text-red-500"${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).interestStartDate,
              "onUpdate:modelValue": ($event) => unref(form).interestStartDate = $event,
              type: "date",
              ui: {
                base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input",
                inner: "relative block w-full rounded-md h-[38px]"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="space-y-2"${_scopeId}><label class="block text-sm font-medium text-gray-700 dark:text-gray-200"${_scopeId}> Mô tả <span class="text-red-500"${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(_component_UTextarea, {
              modelValue: unref(form).description,
              "onUpdate:modelValue": ($event) => unref(form).description = $event,
              placeholder: "Nhập mô tả khoản vay",
              ui: {
                base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-textarea",
                padding: "py-2 px-3",
                inner: "relative block w-full rounded-md"
              },
              rows: 3
            }, null, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(handleSubmit, ["prevent"]),
                class: "space-y-6"
              }, [
                createVNode("div", { class: "grid grid-cols-2 gap-6" }, [
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 dark:text-gray-200" }, [
                      createTextVNode(" Số tiền vay (VND) "),
                      createVNode("span", { class: "text-red-500" }, "*")
                    ]),
                    createVNode(_component_UInput, {
                      modelValue: unref(form).amountVND,
                      "onUpdate:modelValue": ($event) => unref(form).amountVND = $event,
                      type: "number",
                      placeholder: "Nhập số tiền VND",
                      ui: {
                        base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input",
                        padding: "pl-11 pr-4",
                        leading: "absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400",
                        inner: "relative block w-full rounded-md h-[38px]"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    unref(form).amountVND ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-sm text-gray-500"
                    }, " ≈ " + toDisplayString(calculateUSDT(unref(form).amountVND)) + " USDT ", 1)) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 dark:text-gray-200" }, [
                      createTextVNode(" Kỳ hạn "),
                      createVNode("span", { class: "text-red-500" }, "*")
                    ]),
                    createVNode(_component_USelect, {
                      modelValue: unref(form).term,
                      "onUpdate:modelValue": ($event) => unref(form).term = $event,
                      items: termOptions,
                      placeholder: "Chọn kỳ hạn",
                      ui: {
                        select: {
                          base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-select",
                          inner: "relative block w-full rounded-md h-[38px]"
                        }
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 dark:text-gray-200" }, [
                      createTextVNode(" Lãi suất (%) "),
                      createVNode("span", { class: "text-red-500" }, "*")
                    ]),
                    createVNode(_component_UInput, {
                      modelValue: unref(form).interestRate,
                      "onUpdate:modelValue": ($event) => unref(form).interestRate = $event,
                      type: "number",
                      min: "0",
                      max: "20",
                      step: "0.1",
                      placeholder: "Nhập lãi suất",
                      ui: {
                        base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input",
                        inner: "relative block w-full rounded-md h-[38px]"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 dark:text-gray-200" }, [
                      createTextVNode(" Người vay "),
                      createVNode("span", { class: "text-red-500" }, "*")
                    ]),
                    createVNode(_component_USelect, {
                      modelValue: unref(form).borrowerId,
                      "onUpdate:modelValue": ($event) => unref(form).borrowerId = $event,
                      items: unref(users),
                      searchable: "",
                      placeholder: "Chọn người vay",
                      ui: {
                        select: {
                          base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-select",
                          inner: "relative block w-full rounded-md h-[38px]"
                        }
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ]),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 dark:text-gray-200" }, [
                      createTextVNode(" Ngày vay "),
                      createVNode("span", { class: "text-red-500" }, "*")
                    ]),
                    createVNode(_component_UInput, {
                      modelValue: unref(form).loanDate,
                      "onUpdate:modelValue": ($event) => unref(form).loanDate = $event,
                      type: "date",
                      ui: {
                        base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input",
                        inner: "relative block w-full rounded-md h-[38px]"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 dark:text-gray-200" }, [
                      createTextVNode(" Ngày bắt đầu tính lãi "),
                      createVNode("span", { class: "text-red-500" }, "*")
                    ]),
                    createVNode(_component_UInput, {
                      modelValue: unref(form).interestStartDate,
                      "onUpdate:modelValue": ($event) => unref(form).interestStartDate = $event,
                      type: "date",
                      ui: {
                        base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input",
                        inner: "relative block w-full rounded-md h-[38px]"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "space-y-2" }, [
                  createVNode("label", { class: "block text-sm font-medium text-gray-700 dark:text-gray-200" }, [
                    createTextVNode(" Mô tả "),
                    createVNode("span", { class: "text-red-500" }, "*")
                  ]),
                  createVNode(_component_UTextarea, {
                    modelValue: unref(form).description,
                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                    placeholder: "Nhập mô tả khoản vay",
                    ui: {
                      base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-textarea",
                      padding: "py-2 px-3",
                      inner: "relative block w-full rounded-md"
                    },
                    rows: 3
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              onClick: closeModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Hủy `);
                } else {
                  return [
                    createTextVNode(" Hủy ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              loading: unref(isSubmitting),
              onClick: handleSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(editingLoan) ? "Cập nhật" : "Thêm mới")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(editingLoan) ? "Cập nhật" : "Thêm mới"), 1)
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
                  onClick: closeModal
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Hủy ")
                  ]),
                  _: 1
                }),
                createVNode(_component_UButton, {
                  color: "primary",
                  loading: unref(isSubmitting),
                  onClick: handleSubmit
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(editingLoan) ? "Cập nhật" : "Thêm mới"), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/loan-packages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue4.mjs.map
