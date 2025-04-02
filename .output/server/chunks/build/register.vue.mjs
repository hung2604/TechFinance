import { c as __nuxt_component_0, b as __nuxt_component_2, a as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_5 } from './Input.vue.mjs';
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
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    reactive({});
    ref("");
    const loading = ref(false);
    const showPassword = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = __nuxt_component_0;
      const _component_UFormGroup = resolveComponent("UFormGroup");
      const _component_UInput = __nuxt_component_5;
      const _component_UButton = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4" }, _attrs))}><div class="w-full max-w-md"><div class="text-center mb-8"><div class="flex items-center justify-center gap-3 mb-4"><div class="relative">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-banknotes",
        class: "w-12 h-12 text-primary-500"
      }, null, _parent));
      _push(`<div class="absolute -inset-1 bg-primary-500 rounded-full animate-ping opacity-20"></div></div><span class="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text"> TechFinance </span></div><h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-2">Đăng ký</h1><p class="text-gray-600 dark:text-gray-400">Tạo tài khoản mới để bắt đầu</p></div><div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden"><div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-bl-full opacity-10 transform rotate-12"></div><div class="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary-500 to-primary-600 rounded-tr-full opacity-10 transform -rotate-12"></div><form class="space-y-8 relative"><div class="space-y-[25px]">`);
      _push(ssrRenderComponent(_component_UFormGroup, {
        label: "Họ và tên",
        name: "name",
        class: "mb-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              type: "text",
              placeholder: "Nhập họ và tên",
              autocomplete: "name",
              required: "",
              class: "w-full h-[32px] text-base mb-2"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: unref(form).name,
                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                type: "text",
                placeholder: "Nhập họ và tên",
                autocomplete: "name",
                required: "",
                class: "w-full h-[32px] text-base mb-2"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormGroup, {
        label: "Email",
        name: "email",
        class: "mb-0"
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
              class: "w-full h-[32px] text-base mb-2"
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
                class: "w-full h-[32px] text-base mb-2"
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
              autocomplete: "new-password",
              required: "",
              class: "w-full h-[32px] mb-2 text-base"
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
                autocomplete: "new-password",
                required: "",
                class: "w-full h-[32px] mb-2 text-base"
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
      _push(ssrRenderComponent(_component_UFormGroup, {
        label: "Xác nhận mật khẩu",
        name: "confirmPassword",
        class: "mb-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).confirmPassword,
              "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
              type: unref(showPassword) ? "text" : "password",
              placeholder: "Nhập lại mật khẩu",
              autocomplete: "new-password",
              required: "",
              class: "w-full h-[32px] text-base"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: unref(form).confirmPassword,
                "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
                type: unref(showPassword) ? "text" : "password",
                placeholder: "Nhập lại mật khẩu",
                autocomplete: "new-password",
                required: "",
                class: "w-full h-[32px] text-base"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "type"])
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
            _push2(` Đăng ký `);
          } else {
            return [
              createTextVNode(" Đăng ký ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-center text-sm text-gray-600 dark:text-gray-400"> Đã có tài khoản? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors duration-200"
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
      _push(`</div></form><div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"><h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-6">Tính năng nổi bật:</h3><div class="grid grid-cols-2 gap-6"><div class="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-3">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-shield-check",
        class: "w-5 h-5 text-green-500 flex-shrink-0"
      }, null, _parent));
      _push(`<span>Bảo mật tối đa</span></div><div class="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-3">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-bolt",
        class: "w-5 h-5 text-yellow-500 flex-shrink-0"
      }, null, _parent));
      _push(`<span>Giao dịch nhanh chóng</span></div><div class="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-3">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-clock",
        class: "w-5 h-5 text-blue-500 flex-shrink-0"
      }, null, _parent));
      _push(`<span>Hỗ trợ 24/7</span></div><div class="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-3">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-heroicons-chart-bar",
        class: "w-5 h-5 text-purple-500 flex-shrink-0"
      }, null, _parent));
      _push(`<span>Báo cáo chi tiết</span></div></div></div></div></div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register.vue.mjs.map
