import { q as useToast, c as __nuxt_component_0, b as __nuxt_component_2, a as __nuxt_component_0$1, _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_5 } from './Input.vue.mjs';
import { _ as __nuxt_component_8 } from './Checkbox.vue.mjs';
import { defineComponent, ref, reactive, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import 'reka-ui';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useToast();
    const form = ref({
      email: "",
      password: "",
      remember: false
    });
    reactive({});
    const loading = ref(false);
    const showPassword = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0;
      const _component_UFormGroup = resolveComponent("UFormGroup");
      const _component_UInput = __nuxt_component_5;
      const _component_UButton = __nuxt_component_2;
      const _component_UCheckbox = __nuxt_component_8;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4" }, _attrs))} data-v-d45b871e><div class="w-full max-w-md" data-v-d45b871e><div class="text-center mb-8" data-v-d45b871e><div class="flex items-center justify-center gap-3 mb-4" data-v-d45b871e><div class="relative" data-v-d45b871e>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-banknotes",
        class: "w-12 h-12 text-primary-500"
      }, null, _parent));
      _push(`<div class="absolute -inset-1 bg-primary-500 rounded-full animate-ping opacity-20" data-v-d45b871e></div></div><span class="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text" data-v-d45b871e> TechFinance </span></div><h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-2" data-v-d45b871e>Đăng nhập</h1><p class="text-gray-600 dark:text-gray-400" data-v-d45b871e>Chào mừng bạn trở lại với TechFinance</p></div><div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden" data-v-d45b871e><div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-bl-full opacity-10 transform rotate-12" data-v-d45b871e></div><div class="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary-500 to-primary-600 rounded-tr-full opacity-10 transform -rotate-12" data-v-d45b871e></div><form class="space-y-8 relative" data-v-d45b871e><div class="space-y-[25px]" data-v-d45b871e>`);
      _push(ssrRenderComponent(_component_UFormGroup, {
        label: "Email",
        name: "email",
        class: "h-[32px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              placeholder: "Nhập email",
              autocomplete: "email",
              required: "",
              class: "w-full h-[46px] text-base mb-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: unref(form).email,
                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                type: "email",
                placeholder: "Nhập email",
                autocomplete: "email",
                required: "",
                class: "w-full h-[46px] text-base mb-4"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormGroup, {
        label: "Mật khẩu",
        name: "password",
        class: "mb-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: unref(showPassword) ? "text" : "password",
              placeholder: "Nhập mật khẩu",
              autocomplete: "current-password",
              required: "",
              class: "w-full h-[32px] text-base"
            }, {
              trailing: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "i-heroicons-eye",
                    onClick: ($event) => showPassword.value = !unref(showPassword)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "i-heroicons-eye",
                      onClick: ($event) => showPassword.value = !unref(showPassword)
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: unref(form).password,
                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                type: unref(showPassword) ? "text" : "password",
                placeholder: "Nhập mật khẩu",
                autocomplete: "current-password",
                required: "",
                class: "w-full h-[32px] text-base"
              }, {
                trailing: withCtx(() => [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "i-heroicons-eye",
                    onClick: ($event) => showPassword.value = !unref(showPassword)
                  }, null, 8, ["onClick"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "type"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between py-2" data-v-d45b871e>`);
      _push(ssrRenderComponent(_component_UCheckbox, {
        modelValue: unref(form).remember,
        "onUpdate:modelValue": ($event) => unref(form).remember = $event,
        label: "Ghi nhớ đăng nhập",
        class: "text-sm"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/forgot-password",
        class: "text-sm text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Quên mật khẩu? `);
          } else {
            return [
              createTextVNode(" Quên mật khẩu? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UButton, {
        type: "submit",
        color: "primary",
        block: "",
        loading: unref(loading),
        class: "h-[32px] text-base font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Đăng nhập `);
          } else {
            return [
              createTextVNode(" Đăng nhập ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-center text-sm text-gray-600 dark:text-gray-400" data-v-d45b871e> Chưa có tài khoản? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/register",
        class: "text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Đăng ký ngay `);
          } else {
            return [
              createTextVNode(" Đăng ký ngay ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form><div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700" data-v-d45b871e><h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-6" data-v-d45b871e>Tính năng nổi bật:</h3><div class="grid grid-cols-2 gap-6" data-v-d45b871e><div class="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-3" data-v-d45b871e>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-shield-check",
        class: "w-5 h-5 text-green-500 flex-shrink-0"
      }, null, _parent));
      _push(`<span data-v-d45b871e>Bảo mật tối đa</span></div><div class="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-3" data-v-d45b871e>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-bolt",
        class: "w-5 h-5 text-yellow-500 flex-shrink-0"
      }, null, _parent));
      _push(`<span data-v-d45b871e>Giao dịch nhanh chóng</span></div><div class="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-3" data-v-d45b871e>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-clock",
        class: "w-5 h-5 text-blue-500 flex-shrink-0"
      }, null, _parent));
      _push(`<span data-v-d45b871e>Hỗ trợ 24/7</span></div><div class="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-3" data-v-d45b871e>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-chart-bar",
        class: "w-5 h-5 text-purple-500 flex-shrink-0"
      }, null, _parent));
      _push(`<span data-v-d45b871e>Báo cáo chi tiết</span></div></div></div></div></div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d45b871e"]]);

export { login as default };
//# sourceMappingURL=login.vue.mjs.map
