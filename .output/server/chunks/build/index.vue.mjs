import { b as __nuxt_component_2, c as __nuxt_component_0$1, r as refreshNuxtData } from './server.mjs';
import { _ as __nuxt_component_0 } from './Card.vue.mjs';
import { _ as __nuxt_component_6 } from './Select.vue.mjs';
import { defineComponent, withAsyncContext, computed, ref, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { Line } from 'vue-chartjs';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
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
import 'reka-ui';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    Chart.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend,
      ArcElement
    );
    const { data: stats } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/stats", "$QD8d9NkvSp")), __temp = await __temp, __restore(), __temp);
    const { data: transactions } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/transactions", "$36R8oiM1IC")), __temp = await __temp, __restore(), __temp);
    const totalInvestment = computed(() => {
      var _a;
      return ((_a = stats.value) == null ? void 0 : _a.totalInvestment) || 0;
    });
    const totalRewards = computed(() => {
      var _a;
      return ((_a = stats.value) == null ? void 0 : _a.totalRewards) || 0;
    });
    const totalLoans = computed(() => {
      var _a;
      return ((_a = stats.value) == null ? void 0 : _a.totalLoans) || 0;
    });
    const netProfit = computed(() => {
      var _a;
      return ((_a = stats.value) == null ? void 0 : _a.netProfit) || 0;
    });
    const investmentChange = computed(() => {
      var _a;
      return ((_a = stats.value) == null ? void 0 : _a.investmentChange) || 0;
    });
    const rewardsChange = computed(() => {
      var _a;
      return ((_a = stats.value) == null ? void 0 : _a.rewardsChange) || 0;
    });
    const loansChange = computed(() => {
      var _a;
      return ((_a = stats.value) == null ? void 0 : _a.loansChange) || 0;
    });
    const profitChange = computed(() => {
      var _a;
      return ((_a = stats.value) == null ? void 0 : _a.profitChange) || 0;
    });
    const chartPeriod = ref("30d");
    ref("30d");
    const investmentRewardsData = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      return {
        labels: ((_b = (_a = stats.value) == null ? void 0 : _a.chartData) == null ? void 0 : _b.labels) || [],
        datasets: [
          {
            label: "Số lượng coin",
            data: ((_d = (_c = stats.value) == null ? void 0 : _c.chartData) == null ? void 0 : _d.coins) || [],
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            fill: true,
            yAxisID: "y1"
          },
          {
            label: "Đầu tư",
            data: ((_f = (_e = stats.value) == null ? void 0 : _e.chartData) == null ? void 0 : _f.investments) || [],
            borderColor: "#22c55e",
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            fill: true,
            yAxisID: "y"
          },
          {
            label: "Phần thưởng",
            data: ((_h = (_g = stats.value) == null ? void 0 : _g.chartData) == null ? void 0 : _h.rewards) || [],
            borderColor: "#f59e0b",
            backgroundColor: "rgba(245, 158, 11, 0.1)",
            fill: true,
            yAxisID: "y"
          }
        ]
      };
    });
    computed(() => {
      var _a, _b, _c, _d, _e, _f;
      return {
        labels: ["Kickstarter", "Coin", "Khoản vay"],
        datasets: [
          {
            data: [
              ((_b = (_a = stats.value) == null ? void 0 : _a.distribution) == null ? void 0 : _b.kickstarter) || 0,
              ((_d = (_c = stats.value) == null ? void 0 : _c.distribution) == null ? void 0 : _d.coin) || 0,
              ((_f = (_e = stats.value) == null ? void 0 : _e.distribution) == null ? void 0 : _f.loans) || 0
            ],
            backgroundColor: [
              "#3b82f6",
              "#22c55e",
              "#f59e0b"
            ]
          }
        ]
      };
    });
    computed(() => transactions.value || []);
    function formatNumber(number) {
      return new Intl.NumberFormat("vi-VN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(number);
    }
    async function refreshData() {
      await refreshNuxtData();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2;
      const _component_UCard = __nuxt_component_0;
      const _component_UIcon = __nuxt_component_0$1;
      const _component_USelect = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex justify-between items-center"><h1 class="text-2xl font-bold">Tổng quan</h1><div class="flex gap-2">`);
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
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><h3 class="text-lg font-semibold"${_scopeId}>Tổng đầu tư</h3>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-banknotes",
              class: "w-6 h-6 text-primary-500"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("h3", { class: "text-lg font-semibold" }, "Tổng đầu tư"),
                createVNode(_component_UIcon, {
                  name: "i-heroicons-banknotes",
                  class: "w-6 h-6 text-primary-500"
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-2"${_scopeId}><div class="text-3xl font-bold"${_scopeId}>${ssrInterpolate(formatNumber(unref(totalInvestment)))} USDT </div><div class="flex items-center gap-2 text-sm"${_scopeId}><span class="${ssrRenderClass(unref(investmentChange) >= 0 ? "text-success-500" : "text-error-500")}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: unref(investmentChange) >= 0 ? "i-heroicons-arrow-trending-up" : "i-heroicons-arrow-trending-down"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(Math.abs(unref(investmentChange)))}% </span><span class="text-gray-500"${_scopeId}>so với tháng trước</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-2" }, [
                createVNode("div", { class: "text-3xl font-bold" }, toDisplayString(formatNumber(unref(totalInvestment))) + " USDT ", 1),
                createVNode("div", { class: "flex items-center gap-2 text-sm" }, [
                  createVNode("span", {
                    class: unref(investmentChange) >= 0 ? "text-success-500" : "text-error-500"
                  }, [
                    createVNode(_component_UIcon, {
                      name: unref(investmentChange) >= 0 ? "i-heroicons-arrow-trending-up" : "i-heroicons-arrow-trending-down"
                    }, null, 8, ["name"]),
                    createTextVNode(" " + toDisplayString(Math.abs(unref(investmentChange))) + "% ", 1)
                  ], 2),
                  createVNode("span", { class: "text-gray-500" }, "so với tháng trước")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><h3 class="text-lg font-semibold"${_scopeId}>Tổng phần thưởng</h3>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-gift",
              class: "w-6 h-6 text-success-500"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("h3", { class: "text-lg font-semibold" }, "Tổng phần thưởng"),
                createVNode(_component_UIcon, {
                  name: "i-heroicons-gift",
                  class: "w-6 h-6 text-success-500"
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-2"${_scopeId}><div class="text-3xl font-bold"${_scopeId}>${ssrInterpolate(formatNumber(unref(totalRewards)))} USDT </div><div class="flex items-center gap-2 text-sm"${_scopeId}><span class="${ssrRenderClass(unref(rewardsChange) >= 0 ? "text-success-500" : "text-error-500")}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: unref(rewardsChange) >= 0 ? "i-heroicons-arrow-trending-up" : "i-heroicons-arrow-trending-down"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(Math.abs(unref(rewardsChange)))}% </span><span class="text-gray-500"${_scopeId}>so với tháng trước</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-2" }, [
                createVNode("div", { class: "text-3xl font-bold" }, toDisplayString(formatNumber(unref(totalRewards))) + " USDT ", 1),
                createVNode("div", { class: "flex items-center gap-2 text-sm" }, [
                  createVNode("span", {
                    class: unref(rewardsChange) >= 0 ? "text-success-500" : "text-error-500"
                  }, [
                    createVNode(_component_UIcon, {
                      name: unref(rewardsChange) >= 0 ? "i-heroicons-arrow-trending-up" : "i-heroicons-arrow-trending-down"
                    }, null, 8, ["name"]),
                    createTextVNode(" " + toDisplayString(Math.abs(unref(rewardsChange))) + "% ", 1)
                  ], 2),
                  createVNode("span", { class: "text-gray-500" }, "so với tháng trước")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><h3 class="text-lg font-semibold"${_scopeId}>Tổng khoản vay</h3>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-currency-dollar",
              class: "w-6 h-6 text-warning-500"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("h3", { class: "text-lg font-semibold" }, "Tổng khoản vay"),
                createVNode(_component_UIcon, {
                  name: "i-heroicons-currency-dollar",
                  class: "w-6 h-6 text-warning-500"
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-2"${_scopeId}><div class="text-3xl font-bold"${_scopeId}>${ssrInterpolate(formatNumber(unref(totalLoans)))} VNĐ </div><div class="flex items-center gap-2 text-sm"${_scopeId}><span class="${ssrRenderClass(unref(loansChange) >= 0 ? "text-success-500" : "text-error-500")}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: unref(loansChange) >= 0 ? "i-heroicons-arrow-trending-up" : "i-heroicons-arrow-trending-down"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(Math.abs(unref(loansChange)))}% </span><span class="text-gray-500"${_scopeId}>so với tháng trước</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-2" }, [
                createVNode("div", { class: "text-3xl font-bold" }, toDisplayString(formatNumber(unref(totalLoans))) + " VNĐ ", 1),
                createVNode("div", { class: "flex items-center gap-2 text-sm" }, [
                  createVNode("span", {
                    class: unref(loansChange) >= 0 ? "text-success-500" : "text-error-500"
                  }, [
                    createVNode(_component_UIcon, {
                      name: unref(loansChange) >= 0 ? "i-heroicons-arrow-trending-up" : "i-heroicons-arrow-trending-down"
                    }, null, 8, ["name"]),
                    createTextVNode(" " + toDisplayString(Math.abs(unref(loansChange))) + "% ", 1)
                  ], 2),
                  createVNode("span", { class: "text-gray-500" }, "so với tháng trước")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><h3 class="text-lg font-semibold"${_scopeId}>Lợi nhuận ròng</h3>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-chart-bar",
              class: "w-6 h-6 text-info-500"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("h3", { class: "text-lg font-semibold" }, "Lợi nhuận ròng"),
                createVNode(_component_UIcon, {
                  name: "i-heroicons-chart-bar",
                  class: "w-6 h-6 text-info-500"
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-2"${_scopeId}><div class="${ssrRenderClass([unref(netProfit) >= 0 ? "text-success-500" : "text-error-500", "text-3xl font-bold"])}"${_scopeId}>${ssrInterpolate(formatNumber(unref(netProfit)))} USDT </div><div class="flex items-center gap-2 text-sm"${_scopeId}><span class="${ssrRenderClass(unref(profitChange) >= 0 ? "text-success-500" : "text-error-500")}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: unref(profitChange) >= 0 ? "i-heroicons-arrow-trending-up" : "i-heroicons-arrow-trending-down"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(Math.abs(unref(profitChange)))}% </span><span class="text-gray-500"${_scopeId}>so với tháng trước</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-2" }, [
                createVNode("div", {
                  class: ["text-3xl font-bold", unref(netProfit) >= 0 ? "text-success-500" : "text-error-500"]
                }, toDisplayString(formatNumber(unref(netProfit))) + " USDT ", 3),
                createVNode("div", { class: "flex items-center gap-2 text-sm" }, [
                  createVNode("span", {
                    class: unref(profitChange) >= 0 ? "text-success-500" : "text-error-500"
                  }, [
                    createVNode(_component_UIcon, {
                      name: unref(profitChange) >= 0 ? "i-heroicons-arrow-trending-up" : "i-heroicons-arrow-trending-down"
                    }, null, 8, ["name"]),
                    createTextVNode(" " + toDisplayString(Math.abs(unref(profitChange))) + "% ", 1)
                  ], 2),
                  createVNode("span", { class: "text-gray-500" }, "so với tháng trước")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><h3 class="text-lg font-semibold"${_scopeId}>Đầu tư vs Phần thưởng</h3>`);
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: unref(chartPeriod),
              "onUpdate:modelValue": ($event) => isRef(chartPeriod) ? chartPeriod.value = $event : null,
              options: [
                { label: "7 ngày", value: "7d" },
                { label: "30 ngày", value: "30d" },
                { label: "90 ngày", value: "90d" }
              ],
              class: "w-32"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("h3", { class: "text-lg font-semibold" }, "Đầu tư vs Phần thưởng"),
                createVNode(_component_USelect, {
                  modelValue: unref(chartPeriod),
                  "onUpdate:modelValue": ($event) => isRef(chartPeriod) ? chartPeriod.value = $event : null,
                  options: [
                    { label: "7 ngày", value: "7d" },
                    { label: "30 ngày", value: "30d" },
                    { label: "90 ngày", value: "90d" }
                  ],
                  class: "w-32"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-80"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Line), {
              data: unref(investmentRewardsData),
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "top"
                  }
                },
                scales: {
                  y: {
                    type: "linear",
                    display: true,
                    position: "left",
                    beginAtZero: true,
                    ticks: {
                      callback: (value) => formatNumber(value) + " USDT"
                    }
                  },
                  y1: {
                    type: "linear",
                    display: true,
                    position: "right",
                    beginAtZero: true,
                    ticks: {
                      callback: (value) => formatNumber(value) + " MX"
                    }
                  }
                }
              }
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "h-80" }, [
                createVNode(unref(Line), {
                  data: unref(investmentRewardsData),
                  options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "top"
                      }
                    },
                    scales: {
                      y: {
                        type: "linear",
                        display: true,
                        position: "left",
                        beginAtZero: true,
                        ticks: {
                          callback: (value) => formatNumber(value) + " USDT"
                        }
                      },
                      y1: {
                        type: "linear",
                        display: true,
                        position: "right",
                        beginAtZero: true,
                        ticks: {
                          callback: (value) => formatNumber(value) + " MX"
                        }
                      }
                    }
                  }
                }, null, 8, ["data", "options"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
