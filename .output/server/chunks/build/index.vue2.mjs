import { _ as __nuxt_component_0 } from './Card.vue.mjs';
import { b as __nuxt_component_2$1 } from './server.mjs';
import { _ as __nuxt_component_2 } from './Table.vue.mjs';
import { _ as __nuxt_component_3 } from './Badge.vue.mjs';
import { _ as __nuxt_component_4 } from './Modal.vue.mjs';
import { _ as __nuxt_component_5 } from './Input.vue.mjs';
import { _ as __nuxt_component_6 } from './Select.vue.mjs';
import { defineComponent, ref, reactive, watch, withCtx, unref, createVNode, createTextVNode, toDisplayString, isRef, withModifiers, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useFetch } from './fetch.mjs';
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
import '@tanstack/vue-table';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isModalOpen = ref(false);
    const isLoading = ref(true);
    const isSubmitting = ref(false);
    const isDeleting = ref(false);
    const users = ref([]);
    const editingUser = ref(null);
    const form = reactive({
      name: "",
      email: "",
      password: "",
      role: ""
    });
    const roleOptions = [
      { label: "Admin", value: "ADMIN" },
      { label: "User", value: "USER" }
    ];
    const columns = [
      {
        accessorKey: "name",
        header: "Tên thành viên",
        sortable: true
      },
      {
        accessorKey: "email",
        header: "Email",
        sortable: true
      },
      {
        accessorKey: "role",
        header: "Vai trò"
      },
      {
        accessorKey: "actions",
        header: "Thao tác"
      }
    ];
    const { data: usersList, refresh: refreshUsers } = useFetch("/api/users", "$ZYMt2gV0Sx");
    watch(usersList, (newValue) => {
      users.value = newValue || [];
      isLoading.value = false;
    }, { immediate: true });
    const fetchUsers = async () => {
      try {
        isLoading.value = true;
        await refreshUsers();
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        isLoading.value = false;
      }
    };
    const editUser = (user) => {
      editingUser.value = user;
      Object.assign(form, {
        name: user.name,
        email: user.email,
        role: user.role || "USER",
        password: ""
      });
      isModalOpen.value = true;
    };
    const deleteUser = async (id) => {
      try {
        isDeleting.value = true;
        await $fetch(`/api/users/${id}`, {
          method: "DELETE"
        });
        await fetchUsers();
        closePopover();
      } catch (error) {
        console.error("Error deleting user:", error);
      } finally {
        isDeleting.value = false;
      }
    };
    const handleSubmit = async () => {
      try {
        isSubmitting.value = true;
        const payload = { ...form };
        if (editingUser.value && !payload.password) {
          delete payload.password;
        }
        if (editingUser.value) {
          await $fetch(`/api/users/${editingUser.value._id}`, {
            method: "PATCH",
            body: payload
          });
        } else {
          await $fetch("/api/users", {
            method: "POST",
            body: payload
          });
        }
        await fetchUsers();
        closeModal();
      } catch (error) {
        console.error("Error submitting user:", error);
      } finally {
        isSubmitting.value = false;
      }
    };
    const closeModal = () => {
      isModalOpen.value = false;
      editingUser.value = null;
      Object.assign(form, {
        name: "",
        email: "",
        password: "",
        role: ""
      });
    };
    const closePopover = () => {
      const popover = (void 0).querySelector(".u-popover");
      if (popover == null ? void 0 : popover.close) popover.close();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0;
      const _component_UButton = __nuxt_component_2$1;
      const _component_UTable = __nuxt_component_2;
      const _component_UBadge = __nuxt_component_3;
      const _component_UModal = __nuxt_component_4;
      const _component_UInput = __nuxt_component_5;
      const _component_USelect = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><h2 class="text-xl font-semibold"${_scopeId}>Quản lý người dùng</h2>`);
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-plus",
              color: "primary",
              onClick: ($event) => isModalOpen.value = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Thêm người dùng `);
                } else {
                  return [
                    createTextVNode(" Thêm người dùng ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("h2", { class: "text-xl font-semibold" }, "Quản lý người dùng"),
                createVNode(_component_UButton, {
                  icon: "i-heroicons-plus",
                  color: "primary",
                  onClick: ($event) => isModalOpen.value = true
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Thêm người dùng ")
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
              data: unref(users),
              columns,
              loading: unref(isLoading)
            }, {
              "name-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(row.original.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(row.original.name), 1)
                  ];
                }
              }),
              "email-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(row.original.email)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(row.original.email), 1)
                  ];
                }
              }),
              "role-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: row.original.role === "ADMIN" ? "red" : "blue",
                    variant: "subtle",
                    size: "sm"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(row.original.role || "USER")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(row.original.role || "USER"), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UBadge, {
                      color: row.original.role === "ADMIN" ? "red" : "blue",
                      variant: "subtle",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.original.role || "USER"), 1)
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
                    onClick: ($event) => editUser(row.original)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "red",
                    variant: "ghost",
                    icon: "i-heroicons-trash",
                    size: "xs",
                    loading: unref(isDeleting),
                    onClick: ($event) => deleteUser(row.original._id)
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
                        onClick: ($event) => editUser(row.original)
                      }, null, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        color: "red",
                        variant: "ghost",
                        icon: "i-heroicons-trash",
                        size: "xs",
                        loading: unref(isDeleting),
                        onClick: ($event) => deleteUser(row.original._id)
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
                data: unref(users),
                columns,
                loading: unref(isLoading)
              }, {
                "name-cell": withCtx(({ row }) => [
                  createTextVNode(toDisplayString(row.original.name), 1)
                ]),
                "email-cell": withCtx(({ row }) => [
                  createTextVNode(toDisplayString(row.original.email), 1)
                ]),
                "role-cell": withCtx(({ row }) => [
                  createVNode(_component_UBadge, {
                    color: row.original.role === "ADMIN" ? "red" : "blue",
                    variant: "subtle",
                    size: "sm"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(row.original.role || "USER"), 1)
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
                      onClick: ($event) => editUser(row.original)
                    }, null, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      color: "red",
                      variant: "ghost",
                      icon: "i-heroicons-trash",
                      size: "xs",
                      loading: unref(isDeleting),
                      onClick: ($event) => deleteUser(row.original._id)
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
            _push2(`<div class="text-xl font-semibold"${_scopeId}>${ssrInterpolate(unref(editingUser) ? "Cập nhật người dùng" : "Thêm người dùng mới")}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(unref(editingUser) ? "Cập nhật người dùng" : "Thêm người dùng mới"), 1)
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-6"${_scopeId}><div class="grid grid-cols-2 gap-6"${_scopeId}><div class="space-y-2"${_scopeId}><label class="block text-sm font-medium text-gray-700 dark:text-gray-200"${_scopeId}> Tên thành viên <span class="text-red-500"${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              placeholder: "Nhập tên thành viên",
              ui: {
                base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input",
                padding: "pl-4 pr-4",
                inner: "relative block w-full rounded-md h-[38px]"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-2"${_scopeId}><label class="block text-sm font-medium text-gray-700 dark:text-gray-200"${_scopeId}> Email <span class="text-red-500"${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              placeholder: "Nhập địa chỉ email",
              ui: {
                base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input",
                padding: "pl-4 pr-4",
                inner: "relative block w-full rounded-md h-[38px]"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-2"${_scopeId}><label class="block text-sm font-medium text-gray-700 dark:text-gray-200"${_scopeId}> Mật khẩu `);
            if (!unref(editingUser)) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              placeholder: "Nhập mật khẩu",
              ui: {
                base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input",
                padding: "pl-4 pr-4",
                inner: "relative block w-full rounded-md h-[38px]"
              }
            }, null, _parent2, _scopeId));
            if (unref(editingUser)) {
              _push2(`<div class="text-xs text-gray-500"${_scopeId}> Để trống nếu không muốn thay đổi mật khẩu </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="space-y-2"${_scopeId}><label class="block text-sm font-medium text-gray-700 dark:text-gray-200"${_scopeId}> Vai trò <span class="text-red-500"${_scopeId}>*</span></label>`);
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: unref(form).role,
              "onUpdate:modelValue": ($event) => unref(form).role = $event,
              items: roleOptions,
              placeholder: "Chọn vai trò",
              ui: {
                select: {
                  base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-select",
                  inner: "relative block w-full rounded-md h-[38px]"
                }
              }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(handleSubmit, ["prevent"]),
                class: "space-y-6"
              }, [
                createVNode("div", { class: "grid grid-cols-2 gap-6" }, [
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 dark:text-gray-200" }, [
                      createTextVNode(" Tên thành viên "),
                      createVNode("span", { class: "text-red-500" }, "*")
                    ]),
                    createVNode(_component_UInput, {
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      placeholder: "Nhập tên thành viên",
                      ui: {
                        base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input",
                        padding: "pl-4 pr-4",
                        inner: "relative block w-full rounded-md h-[38px]"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 dark:text-gray-200" }, [
                      createTextVNode(" Email "),
                      createVNode("span", { class: "text-red-500" }, "*")
                    ]),
                    createVNode(_component_UInput, {
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      type: "email",
                      placeholder: "Nhập địa chỉ email",
                      ui: {
                        base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input",
                        padding: "pl-4 pr-4",
                        inner: "relative block w-full rounded-md h-[38px]"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 dark:text-gray-200" }, [
                      createTextVNode(" Mật khẩu "),
                      !unref(editingUser) ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-red-500"
                      }, "*")) : createCommentVNode("", true)
                    ]),
                    createVNode(_component_UInput, {
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      type: "password",
                      placeholder: "Nhập mật khẩu",
                      ui: {
                        base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input",
                        padding: "pl-4 pr-4",
                        inner: "relative block w-full rounded-md h-[38px]"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    unref(editingUser) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-xs text-gray-500"
                    }, " Để trống nếu không muốn thay đổi mật khẩu ")) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700 dark:text-gray-200" }, [
                      createTextVNode(" Vai trò "),
                      createVNode("span", { class: "text-red-500" }, "*")
                    ]),
                    createVNode(_component_USelect, {
                      modelValue: unref(form).role,
                      "onUpdate:modelValue": ($event) => unref(form).role = $event,
                      items: roleOptions,
                      placeholder: "Chọn vai trò",
                      ui: {
                        select: {
                          base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-select",
                          inner: "relative block w-full rounded-md h-[38px]"
                        }
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  _push3(`${ssrInterpolate(unref(editingUser) ? "Cập nhật" : "Thêm mới")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(editingUser) ? "Cập nhật" : "Thêm mới"), 1)
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
                    createTextVNode(toDisplayString(unref(editingUser) ? "Cập nhật" : "Thêm mới"), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
