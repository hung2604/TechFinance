import { _ as __nuxt_component_5 } from './Input.vue.mjs';
import { x as useRoute, b as __nuxt_component_2, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, resolveComponent, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'reka-ui';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "reset-password",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const loading = ref(false);
    const form = ref({
      password: "",
      confirmPassword: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFormGroup = resolveComponent("UFormGroup");
      const _component_UInput = __nuxt_component_5;
      const _component_UButton = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><form class="space-y-6">`);
      _push(ssrRenderComponent(_component_UFormGroup, {
        label: "Mật khẩu mới",
        name: "password"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              placeholder: "Nhập mật khẩu mới",
              autocomplete: "new-password",
              required: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: unref(form).password,
                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                type: "password",
                placeholder: "Nhập mật khẩu mới",
                autocomplete: "new-password",
                required: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormGroup, {
        label: "Xác nhận mật khẩu",
        name: "confirmPassword"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).confirmPassword,
              "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
              type: "password",
              placeholder: "Nhập lại mật khẩu mới",
              autocomplete: "new-password",
              required: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: unref(form).confirmPassword,
                "onUpdate:modelValue": ($event) => unref(form).confirmPassword = $event,
                type: "password",
                placeholder: "Nhập lại mật khẩu mới",
                autocomplete: "new-password",
                required: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        type: "submit",
        color: "primary",
        block: "",
        loading: unref(loading)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Đặt lại mật khẩu `);
          } else {
            return [
              createTextVNode(" Đặt lại mật khẩu ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-center text-sm text-gray-600 dark:text-gray-400">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Quay lại đăng nhập `);
          } else {
            return [
              createTextVNode(" Quay lại đăng nhập ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reset-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=reset-password.vue.mjs.map
