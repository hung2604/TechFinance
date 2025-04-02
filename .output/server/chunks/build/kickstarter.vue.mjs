import { b as __nuxt_component_2 } from './server.mjs';
import { _ as __nuxt_component_0 } from './Card.vue.mjs';
import { _ as __nuxt_component_6$1 } from './Select.vue.mjs';
import { _ as __nuxt_component_2$1 } from './Table.vue.mjs';
import { _ as __nuxt_component_3 } from './Badge.vue.mjs';
import { _ as __nuxt_component_6 } from './Pagination.vue.mjs';
import { _ as __nuxt_component_4 } from './Modal.vue.mjs';
import { _ as __nuxt_component_5 } from './Input.vue.mjs';
import { _ as __nuxt_component_8 } from './Checkbox.vue.mjs';
import { defineComponent, ref, watch, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import '@tanstack/vue-table';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "kickstarter",
  __ssrInlineRender: true,
  setup(__props) {
    const columns = [
      {
        key: "projectId",
        id: "projectId",
        header: "ID",
        accessorKey: "projectId"
      },
      {
        key: "name",
        id: "name",
        header: "Tên dự án",
        accessorKey: "name"
      },
      {
        key: "status",
        id: "status",
        header: "Trạng thái",
        accessorKey: "status"
      },
      {
        key: "startTime",
        formatter: (value) => formatDate(value),
        id: "startTime",
        header: "Bắt đầu",
        accessorKey: "startTime"
      },
      {
        key: "endTime",
        formatter: (value) => formatDate(value),
        id: "endTime",
        header: "Kết thúc",
        accessorKey: "endTime"
      },
      {
        key: "reward",
        id: "reward",
        header: "Phần thưởng",
        accessorKey: "reward"
      },
      {
        key: "actions",
        id: "actions",
        header: "Thao tác",
        accessorKey: "actions"
      }
    ];
    const loading = ref(false);
    const projects = ref([]);
    const total = ref(0);
    const page = ref(1);
    const limit = ref(10);
    const status = ref("");
    const showEditModal = ref(false);
    ref(false);
    const editingProject = ref({
      projectId: "",
      name: "",
      description: "",
      startTime: "",
      endTime: "",
      status: "upcoming",
      reward: 0,
      claimed: false,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    });
    const syncing = ref(false);
    const showDeleteModal = ref(false);
    const deletingProject = ref(null);
    const deleting = ref(false);
    async function fetchProjects() {
      loading.value = true;
      try {
        const response = await fetch(`/api/kickstarter?page=${page.value}&limit=${limit.value}&status=${status.value}`);
        const data = await response.json();
        projects.value = data.projects;
        total.value = data.pagination.total;
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        loading.value = false;
      }
    }
    function refreshData() {
      fetchProjects();
    }
    function getStatusColor(status2) {
      switch (status2) {
        case "upcoming":
          return "info";
        case "ongoing":
          return "success";
        case "ended":
          return "neutral";
        default:
          return "neutral";
      }
    }
    function getStatusLabel(status2) {
      switch (status2) {
        case "upcoming":
          return "Sắp tới";
        case "ongoing":
          return "Đang diễn ra";
        case "ended":
          return "Đã kết thúc";
        default:
          return status2;
      }
    }
    function formatDate(date) {
      return new Date(date).toLocaleString("vi-VN");
    }
    function formatNumber(number) {
      return new Intl.NumberFormat("vi-VN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(number);
    }
    function editProject(project) {
      editingProject.value = { ...project };
      console.log(editingProject.value);
      showEditModal.value = true;
    }
    async function saveRewards() {
      try {
        await fetch(`/api/kickstarter/${editingProject.value.projectId}/rewards`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            reward: editingProject.value.reward,
            claimed: editingProject.value.claimed
          })
        });
        showEditModal.value = false;
        refreshData();
      } catch (error) {
        console.error("Error saving rewards:", error);
      }
    }
    async function syncProjects() {
      syncing.value = true;
      try {
        await fetch("/api/kickstarter/sync", {
          method: "POST"
        });
        await refreshData();
      } catch (error) {
        console.error("Error syncing projects:", error);
      } finally {
        syncing.value = false;
      }
    }
    function confirmDelete(project) {
      deletingProject.value = project;
      showDeleteModal.value = true;
    }
    async function deleteProject() {
      if (!deletingProject.value) return;
      deleting.value = true;
      try {
        await fetch(`/api/kickstarter/${deletingProject.value.projectId}`, {
          method: "DELETE"
        });
        showDeleteModal.value = false;
        refreshData();
      } catch (error) {
        console.error("Error deleting project:", error);
      } finally {
        deleting.value = false;
        deletingProject.value = null;
      }
    }
    watch([status, page, limit], () => {
      refreshData();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2;
      const _component_UCard = __nuxt_component_0;
      const _component_USelect = __nuxt_component_6$1;
      const _component_UTable = __nuxt_component_2$1;
      const _component_UBadge = __nuxt_component_3;
      const _component_UPagination = __nuxt_component_6;
      const _component_UModal = __nuxt_component_4;
      const _component_UFormGroup = resolveComponent("UFormGroup");
      const _component_UInput = __nuxt_component_5;
      const _component_UCheckbox = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><div class="flex justify-between items-center mb-6"><h1 class="text-2xl font-bold">Quản lý Kickstarter</h1><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        icon: "i-heroicons-arrow-path",
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
        color: "primary",
        icon: "i-heroicons-arrow-path",
        loading: unref(syncing),
        onClick: syncProjects
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Đồng bộ `);
          } else {
            return [
              createTextVNode(" Đồng bộ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center"${_scopeId}><h2 class="text-lg font-semibold"${_scopeId}>Danh sách dự án</h2><div class="flex gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: unref(status),
              "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
              options: [
                { label: "Tất cả", value: "" },
                { label: "Sắp tới", value: "upcoming" },
                { label: "Đang diễn ra", value: "ongoing" },
                { label: "Đã kết thúc", value: "ended" }
              ],
              class: "w-40"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center" }, [
                createVNode("h2", { class: "text-lg font-semibold" }, "Danh sách dự án"),
                createVNode("div", { class: "flex gap-2" }, [
                  createVNode(_component_USelect, {
                    modelValue: unref(status),
                    "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                    options: [
                      { label: "Tất cả", value: "" },
                      { label: "Sắp tới", value: "upcoming" },
                      { label: "Đang diễn ra", value: "ongoing" },
                      { label: "Đã kết thúc", value: "ended" }
                    ],
                    class: "w-40"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UPagination, {
              modelValue: unref(page),
              "onUpdate:modelValue": [($event) => isRef(page) ? page.value = $event : null, refreshData],
              total: unref(total),
              "per-page": unref(limit)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: unref(limit),
              "onUpdate:modelValue": [($event) => isRef(limit) ? limit.value = $event : null, refreshData],
              options: [10, 20, 50, 100],
              class: "w-24"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center" }, [
                createVNode(_component_UPagination, {
                  modelValue: unref(page),
                  "onUpdate:modelValue": [($event) => isRef(page) ? page.value = $event : null, refreshData],
                  total: unref(total),
                  "per-page": unref(limit)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "total", "per-page"]),
                createVNode(_component_USelect, {
                  modelValue: unref(limit),
                  "onUpdate:modelValue": [($event) => isRef(limit) ? limit.value = $event : null, refreshData],
                  options: [10, 20, 50, 100],
                  class: "w-24"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UTable, {
              columns,
              data: unref(projects),
              loading: unref(loading)
            }, {
              "status-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: getStatusColor(row.original.status),
                    label: getStatusLabel(row.original.status)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UBadge, {
                      color: getStatusColor(row.original.status),
                      label: getStatusLabel(row.original.status)
                    }, null, 8, ["color", "label"])
                  ];
                }
              }),
              "rewards-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UBadge, {
                    color: row.original.claimed ? "success" : "neutral",
                    label: row.original.claimed ? "Đã nhận" : "Chưa nhận"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>${ssrInterpolate(formatNumber(row.original.reward))} USDT</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UBadge, {
                        color: row.original.claimed ? "success" : "neutral",
                        label: row.original.claimed ? "Đã nhận" : "Chưa nhận"
                      }, null, 8, ["color", "label"]),
                      createVNode("span", null, toDisplayString(formatNumber(row.original.reward)) + " USDT", 1)
                    ])
                  ];
                }
              }),
              "actions-cell": withCtx(({ row }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    variant: "ghost",
                    icon: "i-heroicons-pencil-square",
                    onClick: ($event) => editProject(row.original)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "error",
                    variant: "ghost",
                    icon: "i-heroicons-trash",
                    onClick: ($event) => confirmDelete(row.original)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode(_component_UButton, {
                        color: "primary",
                        variant: "ghost",
                        icon: "i-heroicons-pencil-square",
                        onClick: ($event) => editProject(row.original)
                      }, null, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        color: "error",
                        variant: "ghost",
                        icon: "i-heroicons-trash",
                        onClick: ($event) => confirmDelete(row.original)
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UTable, {
                columns,
                data: unref(projects),
                loading: unref(loading)
              }, {
                "status-cell": withCtx(({ row }) => [
                  createVNode(_component_UBadge, {
                    color: getStatusColor(row.original.status),
                    label: getStatusLabel(row.original.status)
                  }, null, 8, ["color", "label"])
                ]),
                "rewards-cell": withCtx(({ row }) => [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UBadge, {
                      color: row.original.claimed ? "success" : "neutral",
                      label: row.original.claimed ? "Đã nhận" : "Chưa nhận"
                    }, null, 8, ["color", "label"]),
                    createVNode("span", null, toDisplayString(formatNumber(row.original.reward)) + " USDT", 1)
                  ])
                ]),
                "actions-cell": withCtx(({ row }) => [
                  createVNode("div", { class: "flex gap-2" }, [
                    createVNode(_component_UButton, {
                      color: "primary",
                      variant: "ghost",
                      icon: "i-heroicons-pencil-square",
                      onClick: ($event) => editProject(row.original)
                    }, null, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      color: "error",
                      variant: "ghost",
                      icon: "i-heroicons-trash",
                      onClick: ($event) => confirmDelete(row.original)
                    }, null, 8, ["onClick"])
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
        open: unref(showEditModal),
        "onUpdate:open": ($event) => isRef(showEditModal) ? showEditModal.value = $event : null
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-between items-center"${_scopeId2}><h3 class="text-lg font-semibold"${_scopeId2}>Chỉnh sửa phần thưởng</h3>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "i-heroicons-x-mark",
                    onClick: ($event) => showEditModal.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-between items-center" }, [
                      createVNode("h3", { class: "text-lg font-semibold" }, "Chỉnh sửa phần thưởng"),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        icon: "i-heroicons-x-mark",
                        onClick: ($event) => showEditModal.value = false
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-end gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    onClick: ($event) => showEditModal.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Hủy `);
                      } else {
                        return [
                          createTextVNode(" Hủy ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "primary",
                    onClick: saveRewards
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Lưu `);
                      } else {
                        return [
                          createTextVNode(" Lưu ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-end gap-2" }, [
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        onClick: ($event) => showEditModal.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Hủy ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        color: "primary",
                        onClick: saveRewards
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Lưu ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, { label: "Số lượng USDT" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(editingProject).reward,
                          "onUpdate:modelValue": ($event) => unref(editingProject).reward = $event,
                          type: "number",
                          step: "0.01"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(editingProject).reward,
                            "onUpdate:modelValue": ($event) => unref(editingProject).reward = $event,
                            type: "number",
                            step: "0.01"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, { label: "Trạng thái" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UCheckbox, {
                          modelValue: unref(editingProject).claimed,
                          "onUpdate:modelValue": ($event) => unref(editingProject).claimed = $event,
                          label: "Đã nhận"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UCheckbox, {
                            modelValue: unref(editingProject).claimed,
                            "onUpdate:modelValue": ($event) => unref(editingProject).claimed = $event,
                            label: "Đã nhận"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode(_component_UFormGroup, { label: "Số lượng USDT" }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(editingProject).reward,
                            "onUpdate:modelValue": ($event) => unref(editingProject).reward = $event,
                            type: "number",
                            step: "0.01"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, { label: "Trạng thái" }, {
                        default: withCtx(() => [
                          createVNode(_component_UCheckbox, {
                            modelValue: unref(editingProject).claimed,
                            "onUpdate:modelValue": ($event) => unref(editingProject).claimed = $event,
                            label: "Đã nhận"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, null, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("h3", { class: "text-lg font-semibold" }, "Chỉnh sửa phần thưởng"),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "i-heroicons-x-mark",
                      onClick: ($event) => showEditModal.value = false
                    }, null, 8, ["onClick"])
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode("div", { class: "flex justify-end gap-2" }, [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      onClick: ($event) => showEditModal.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Hủy ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      color: "primary",
                      onClick: saveRewards
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Lưu ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode(_component_UFormGroup, { label: "Số lượng USDT" }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(editingProject).reward,
                          "onUpdate:modelValue": ($event) => unref(editingProject).reward = $event,
                          type: "number",
                          step: "0.01"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormGroup, { label: "Trạng thái" }, {
                      default: withCtx(() => [
                        createVNode(_component_UCheckbox, {
                          modelValue: unref(editingProject).claimed,
                          "onUpdate:modelValue": ($event) => unref(editingProject).claimed = $event,
                          label: "Đã nhận"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: unref(showDeleteModal),
        "onUpdate:open": ($event) => isRef(showDeleteModal) ? showDeleteModal.value = $event : null
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-between items-center"${_scopeId2}><h3 class="text-lg font-semibold"${_scopeId2}>Xác nhận xóa</h3>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "i-heroicons-x-mark",
                    onClick: ($event) => showDeleteModal.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-between items-center" }, [
                      createVNode("h3", { class: "text-lg font-semibold" }, "Xác nhận xóa"),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        icon: "i-heroicons-x-mark",
                        onClick: ($event) => showDeleteModal.value = false
                      }, null, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex justify-end gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    onClick: ($event) => showDeleteModal.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Hủy `);
                      } else {
                        return [
                          createTextVNode(" Hủy ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "error",
                    loading: unref(deleting),
                    onClick: deleteProject
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Xóa `);
                      } else {
                        return [
                          createTextVNode(" Xóa ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex justify-end gap-2" }, [
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        onClick: ($event) => showDeleteModal.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Hủy ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        color: "error",
                        loading: unref(deleting),
                        onClick: deleteProject
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Xóa ")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<div class="p-4"${_scopeId2}><p${_scopeId2}>Bạn có chắc chắn muốn xóa dự án &quot;${ssrInterpolate((_a = unref(deletingProject)) == null ? void 0 : _a.name)}&quot; không?</p><p class="text-sm text-gray-500 mt-2"${_scopeId2}>Hành động này không thể hoàn tác.</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4" }, [
                      createVNode("p", null, 'Bạn có chắc chắn muốn xóa dự án "' + toDisplayString((_b = unref(deletingProject)) == null ? void 0 : _b.name) + '" không?', 1),
                      createVNode("p", { class: "text-sm text-gray-500 mt-2" }, "Hành động này không thể hoàn tác.")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, null, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("h3", { class: "text-lg font-semibold" }, "Xác nhận xóa"),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "i-heroicons-x-mark",
                      onClick: ($event) => showDeleteModal.value = false
                    }, null, 8, ["onClick"])
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode("div", { class: "flex justify-end gap-2" }, [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      onClick: ($event) => showDeleteModal.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Hủy ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      color: "error",
                      loading: unref(deleting),
                      onClick: deleteProject
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Xóa ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])
                ]),
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode("div", { class: "p-4" }, [
                      createVNode("p", null, 'Bạn có chắc chắn muốn xóa dự án "' + toDisplayString((_a = unref(deletingProject)) == null ? void 0 : _a.name) + '" không?', 1),
                      createVNode("p", { class: "text-sm text-gray-500 mt-2" }, "Hành động này không thể hoàn tác.")
                    ])
                  ];
                }),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/kickstarter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=kickstarter.vue.mjs.map
