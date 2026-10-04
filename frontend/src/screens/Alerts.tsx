const assetPathPrefix = "/assets"
const imgAb6AXuDvwWm7QOobdGdYuv17EzjZdIq4EqTElcRzFxbFOtK8Z6YxdEylu2EY9LLHpD8KsPxvZhVhpFFrUQxTpEEdLoBkZzc7WtRqm8SK0Ryiu1NAfQeNmKf1E12TAKlcV83LtTlqAalghdjPqOIUoIdKshcE4TqlKxeTvu6SXhCg0BFc8WbOzmrAhBvbWHxp77Cj5SQuLaxAfSmevWoFqEb6E9RvWj7Dd10Z8A6KOwwiT6OvEtpeSzphUesbA = `${assetPathPrefix}/38e89.png`
const imgAb6AXuC4EYml9TId6UcYk3I8OTpgz4R0DrAplbgbSxH5XFGYkuYaspo9D6IwKgPUwGgduWvWn4MSUeTwa1FHeuVcKeJrnhvO4VuSl1Si6NpDJ9Aa5O3JmjQ9GnY5U7IpAjRbaRx46KUXo6BTwEVwxmt7InWnEh5Xabzhh8Weh3TuPrJlBVtEbhOtWgwclJceJql279Hl8VKAe7OvgZwdz4Gxw5C2Swmo2OvJrzA72Tv5A2UhQh4OOb3A = `${assetPathPrefix}/d0637.png`
const imgAb6AXuCNh6Hszd6AzCtqQe5MIo2F7RilGez6BdNtwMoZu4Pnff8DvLbfgKvOylBaZgz0Hn2UeIk0BwplpkFXnX2N2PlYe3YxFm1A3BX1Jqgv2IXoYgFgXUdsVpQxFcFlrEgwPf2HSdSoibsJrESvVLbM2ZytppEsfW6LWvvN96Y9VizNToJKtZWqdyysfF8XLc0MEYfO9XTuffx8Enw7UBIrrGqai7JfOin2FhPcPap6EvRmj7Vea = `${assetPathPrefix}/61dde.png`
const imgAucaInventoryLogo = `${assetPathPrefix}/87b33.png`
const imgProfile = `${assetPathPrefix}/fc076.png`
const imgContainer = `${assetPathPrefix}/d00bf.svg`
const imgContainer1 = `${assetPathPrefix}/5a8fa.svg`
const imgContainer2 = `${assetPathPrefix}/6d685.svg`
const imgContainer3 = `${assetPathPrefix}/a3364.svg`
const imgContainer4 = `${assetPathPrefix}/91ead.svg`
const imgContainer5 = `${assetPathPrefix}/b6c18.svg`
const imgContainer6 = `${assetPathPrefix}/7b679.svg`
const imgContainer7 = `${assetPathPrefix}/d5616.svg`
const imgContainer8 = `${assetPathPrefix}/2a386.svg`
const imgContainer9 = `${assetPathPrefix}/9bfef.svg`
const imgContainer10 = `${assetPathPrefix}/a9851.svg`
const imgContainer11 = `${assetPathPrefix}/6de89.svg`
const imgContainer12 = `${assetPathPrefix}/0df6f.svg`
const imgContainer13 = `${assetPathPrefix}/08295.svg`
const imgContainer14 = `${assetPathPrefix}/77e25.svg`
const imgContainer15 = `${assetPathPrefix}/af8f5.svg`
const imgContainer16 = `${assetPathPrefix}/5c381.svg`
const imgContainer17 = `${assetPathPrefix}/196c9.svg`
const imgContainer18 = `${assetPathPrefix}/422d7.svg`
const imgContainer19 = `${assetPathPrefix}/7e3bf.svg`

import { useState, useEffect } from "react"
import { api } from "../api/client"
import type { ProductResponse, WarehouseResponse } from "../api/types"

export default function LowStockCommandWarehouses() {
  const [warehouses, setWarehouses] = useState<WarehouseResponse[]>([])
  const [lowStockProducts, setLowStockProducts] = useState<ProductResponse[]>([])

  useEffect(() => {
    async function load() {
      try {
        const [wList, pList] = await Promise.all([
          api.getWarehouses(),
          api.getProducts()
        ])
        setWarehouses(wList)
        setLowStockProducts(pList.filter(p => p.isLowStock))
      } catch (e) {
        console.error("Failed to load facilities & alerts", e)
      }
    }
    load()
  }, [])

  return (
    <div
      className="content-stretch flex flex-col items-start relative size-full"
      data-node-id="3:974"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(253, 247, 255) 0%, rgb(253, 247, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
      data-name="Low Stock Command & Warehouses"
    >
      <div
        className="bg-[#fdf7ff] content-stretch flex flex-col items-start pb-[96px] pt-[64px] relative shrink-0 w-full"
        data-node-id="3:975"
        data-name="Main"
      >
        <div
          className="content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-full"
          data-node-id="3:976"
          data-name="Container"
        >
          <div
            className="bg-[#ece6ee] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-between px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full"
            data-node-id="3:977"
            data-name="Backend Resilient Sync / Optimistic Locking Banner"
          >
            <div
              className="content-stretch flex gap-[8px] items-center relative shrink-0"
              data-node-id="3:978"
              data-name="Container"
            >
              <div
                className="bg-[#e1d4fd] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]"
                data-node-id="3:979"
                data-name="Background"
              >
                <div
                  className="h-[14.667px] relative shrink-0 w-[12.667px]"
                  data-node-id="3:980"
                  data-name="Container"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgContainer}
                  />
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0"
                data-node-id="3:982"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
                  data-node-id="3:983"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                    data-node-id="3:984"
                  >
                    <p className="leading-[16px]">Optimistic Locking Active</p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
                  data-node-id="3:985"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#494551] text-[10px] text-ellipsis whitespace-nowrap"
                    data-node-id="3:986"
                  >
                    <p className="leading-[15px]">
                      Versioned concurrency • HTTP 409 conflict-safe
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-white content-stretch flex gap-[4px] items-center pl-[8px] pr-[29.56px] py-[2px] relative rounded-[12px] shrink-0"
              data-node-id="3:987"
              data-name="Background"
            >
              <div
                className="bg-[#10b981] h-[6px] relative rounded-[12px] shrink-0 w-[5.91px]"
                data-node-id="3:988"
                data-name="Background"
              />
              <div
                className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[10px] whitespace-nowrap"
                data-node-id="3:989"
              >
                <p className="leading-[15px] mb-0">Synced</p>
                <p className="leading-[15px]">v2.4</p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full"
            data-node-id="3:990"
            data-name="Low Stock Command Banner:margin"
          >
            <div
              className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full"
              data-node-id="3:991"
              style={{
                backgroundImage:
                  "linear-gradient(160.3259014277494deg, rgb(186, 26, 26) 0%, rgba(186, 26, 26, 0.9) 100%)",
              }}
              data-name="Low Stock Command Banner"
            >
              <div
                className="absolute bg-[rgba(255,255,255,0.1)] blur-[12px] bottom-[-24px] right-[-24px] rounded-[12px] size-[112px]"
                data-node-id="3:992"
                data-name="Decorative background elements"
              />
              <div
                className="absolute h-[87px] right-[48px] top-[8px] w-[78.2px]"
                data-node-id="3:993"
                data-name="Container"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgContainer1}
                />
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                data-node-id="3:995"
                data-name="Container"
              >
                <div
                  className="content-stretch flex items-start relative shrink-0 w-full"
                  data-node-id="3:996"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex gap-[10px] items-center relative shrink-0"
                    data-node-id="3:997"
                    data-name="Container"
                  >
                    <div
                      className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]"
                      data-node-id="3:998"
                      data-name="Overlay+OverlayBlur"
                    >
                      <div
                        className="h-[20px] relative shrink-0 w-[16px]"
                        data-node-id="3:999"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer2}
                        />
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0"
                      data-node-id="3:1001"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="3:1002"
                        data-name="Heading 2"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap"
                          data-node-id="3:1003"
                        >
                          <p className="leading-[20px]">
                            14 Products Below Reorder Level
                          </p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-full"
                        data-node-id="3:1004"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-white whitespace-nowrap"
                          data-node-id="3:1005"
                        >
                          <p className="leading-[16px]">
                            Automated Restock PO Generator ready
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full"
                  data-node-id="3:1006"
                  data-name="Margin"
                >
                  <div
                    className="content-stretch flex gap-[8px] items-center pt-[4px] relative shrink-0 w-full"
                    data-node-id="3:1007"
                    data-name="Container"
                  >
                    <div
                      className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] gap-[6px] items-center justify-center min-w-px px-[12px] py-[10px] relative rounded-[8px]"
                      data-node-id="3:1008"
                      data-name="Button"
                    >
                      <div
                        className="h-[13.333px] relative shrink-0 w-[10.667px]"
                        data-node-id="3:1009"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer3}
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-center relative shrink-0"
                        data-node-id="3:1011"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[12px] text-center whitespace-nowrap"
                          data-node-id="3:1012"
                        >
                          <p className="leading-[16px]">
                            Quick Restock All Critical
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]"
                      data-node-id="3:1013"
                      data-name="Button - Auto PO Config"
                    >
                      <div
                        className="relative shrink-0 size-[15px]"
                        data-node-id="3:1014"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer4}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full"
            data-node-id="3:1016"
            data-name="Critical Products List:margin"
          >
            <div
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
              data-node-id="3:1017"
              data-name="Critical Products List"
            >
              <div
                className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                data-node-id="3:1018"
                data-name="Container"
              >
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0"
                  data-node-id="3:1019"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="3:1020"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] whitespace-nowrap"
                      data-node-id="3:1021"
                    >
                      <p className="leading-[20px]">Critical Action Required</p>
                    </div>
                  </div>
                  <div
                    className="bg-[#ffdad6] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[12px] shrink-0"
                    data-node-id="3:1022"
                    data-name="Background"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#93000a] text-[11px] whitespace-nowrap"
                      data-node-id="3:1023"
                    >
                      <p className="leading-[16.5px]">Top Deficits</p>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-center justify-center relative shrink-0"
                  data-node-id="3:1024"
                  data-name="Button"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[12px] text-center whitespace-nowrap"
                    data-node-id="3:1025"
                  >
                    <p className="leading-[16px]">Batch PO (3)</p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full"
                data-node-id="3:1026"
                data-name="Product 1:margin"
              >
                <div
                  className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start p-[14px] relative rounded-[8px] shrink-0 w-full"
                  data-node-id="3:1027"
                  data-name="Product 1"
                >
                  <div
                    className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
                    data-node-id="3:1028"
                    data-name="Container"
                  >
                    <div
                      className="bg-[#f2ecf4] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] shrink-0 size-[56px]"
                      data-node-id="3:1029"
                      data-name="Background"
                    >
                      <div
                        className="flex-[1_0_0] min-h-px relative w-full"
                        data-node-id="3:1030"
                        data-name="AB6AXuDVWWm7QOobdGdYUV17ezjZdIQ4eqTElcRzFxbFOtK8z6yxdEYLU2eY9lLHpD8KsPXVZhVhpFFrUQxTpEEdLOBkZzc7wtRQM8sK0ryiu1nAFQeNmKf1E12tAKlcV83LtTlqAALGHDJPqO_IUoIDKshcE4TQLKxeTVU6sXhCG0bFc8WbOzmrAHBvbWHxp77cj5sQuLAXAfSmevWoFqEB6E9RvWJ7Dd10Z8A6KOwwiT6OvETPESzphUesbA"
                      >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img
                            alt=""
                            className="absolute h-full left-[-41.76%] max-w-none top-0 w-[183.51%]"
                            src={
                              imgAb6AXuDvwWm7QOobdGdYuv17EzjZdIq4EqTElcRzFxbFOtK8Z6YxdEylu2EY9LLHpD8KsPxvZhVhpFFrUQxTpEEdLoBkZzc7WtRqm8SK0Ryiu1NAfQeNmKf1E12TAKlcV83LtTlqAalghdjPqOIUoIdKshcE4TqlKxeTvu6SXhCg0BFc8WbOzmrAhBvbWHxp77Cj5SQuLaxAfSmevWoFqEb6E9RvWj7Dd10Z8A6KOwwiT6OvEtpeSzphUesbA
                            }
                          />
                        </div>
                      </div>
                      <div
                        className="absolute bg-[#ba1a1a] content-stretch flex flex-col items-start left-[4px] px-[6px] rounded-[2px] top-[4px]"
                        data-node-id="3:1031"
                        data-name="Background"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[9px] text-white whitespace-nowrap"
                          data-node-id="3:1032"
                        >
                          <p className="leading-[13.5px]">-73%</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative"
                      data-node-id="3:1033"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex items-start justify-between relative shrink-0 w-full"
                        data-node-id="3:1034"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                          data-node-id="3:1035"
                          data-name="Heading 3"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                            data-node-id="3:1036"
                          >
                            <p className="leading-[16px]">
                              Epson L3250 Ink (Black)
                            </p>
                          </div>
                        </div>
                        <div
                          className="bg-[#ffdad6] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[2px] shrink-0"
                          data-node-id="3:1037"
                          data-name="Background"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#93000a] text-[10px] tracking-[-0.25px] whitespace-nowrap"
                            data-node-id="3:1038"
                          >
                            <p className="leading-[15px]">CRITICAL</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="3:1039"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] w-full"
                          data-node-id="3:1040"
                        >
                          <p className="leading-[16.5px]">
                            SKU: EPS-L32-BK • Gishushu WH
                          </p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex gap-[8px] items-center pt-[4px] relative shrink-0 w-full"
                        data-node-id="3:1041"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="3:1042"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[12px] whitespace-nowrap"
                            data-node-id="3:1043"
                          >
                            <p className="leading-[16px]">4 in stock</p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="3:1044"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7582] text-[11px] whitespace-nowrap"
                            data-node-id="3:1045"
                          >
                            <p className="leading-[16.5px]">
                              / 15 reorder level
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#ece6ee] h-[6px] overflow-clip relative rounded-[12px] shrink-0 w-full"
                    data-node-id="3:1046"
                    data-name="Deficit progress indicator"
                  >
                    <div
                      className="absolute bg-[#ba1a1a] inset-[0_73.4%_0_0] rounded-[12px]"
                      data-node-id="3:1047"
                      data-name="Background"
                    />
                  </div>
                  <div
                    className="content-stretch flex items-center justify-between pt-[4px] relative shrink-0 w-full"
                    data-node-id="3:1048"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:1049"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                        data-node-id="3:1050"
                      >
                        <p className="leading-[16.5px]">Deficit: 11 units</p>
                      </div>
                    </div>
                    <div
                      className="bg-[#4f378a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[4px] items-center px-[12px] py-[6px] relative rounded-[4px] shrink-0"
                      data-node-id="3:1051"
                      data-name="Button"
                    >
                      <div
                        className="h-[13.125px] relative shrink-0 w-[12.938px]"
                        data-node-id="3:1052"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer5}
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-center relative shrink-0"
                        data-node-id="3:1054"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap"
                          data-node-id="3:1055"
                        >
                          <p className="leading-[16px]">Order 25 Units</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full"
                data-node-id="3:1056"
                data-name="Product 2:margin"
              >
                <div
                  className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start p-[14px] relative rounded-[8px] shrink-0 w-full"
                  data-node-id="3:1057"
                  data-name="Product 2"
                >
                  <div
                    className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
                    data-node-id="3:1058"
                    data-name="Container"
                  >
                    <div
                      className="bg-[#f2ecf4] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] shrink-0 size-[56px]"
                      data-node-id="3:1059"
                      data-name="Background"
                    >
                      <div
                        className="flex-[1_0_0] min-h-px relative w-full"
                        data-node-id="3:1060"
                        data-name="AB6AXuC4eYML9tId6UcYk3i8oTpgz4r0drAplbgbSxH5xF-GYkuYaspo9d6iwKgPUwGGDUWvWn4mSUeTwa1fHEUVcKEJrnhvO4vuSL1si6np-dJ9aa5O3JmjQ9GnY5U7ipAJRbaRX46kUXo6BTwEVwxmt7inWNEh5xabzhh8WEH3_TU-PRJlBVtEbhOTWgwclJCEJql279hl8vK-AE7ovgZWDZ4gxw5c2SWMO2ov_jrzA72TV5a2uhQH4oOb3A"
                      >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img
                            alt=""
                            className="absolute h-full left-[-41.76%] max-w-none top-0 w-[183.51%]"
                            src={
                              imgAb6AXuC4EYml9TId6UcYk3I8OTpgz4R0DrAplbgbSxH5XFGYkuYaspo9D6IwKgPUwGgduWvWn4MSUeTwa1FHeuVcKeJrnhvO4VuSl1Si6NpDJ9Aa5O3JmjQ9GnY5U7IpAjRbaRx46KUXo6BTwEVwxmt7InWnEh5Xabzhh8Weh3TuPrJlBVtEbhOtWgwclJceJql279Hl8VKAe7OvgZwdz4Gxw5C2Swmo2OvJrzA72Tv5A2UhQh4OOb3A
                            }
                          />
                        </div>
                      </div>
                      <div
                        className="absolute bg-[#ba1a1a] content-stretch flex flex-col items-start left-[4px] px-[6px] rounded-[2px] top-[4px]"
                        data-node-id="3:1061"
                        data-name="Background"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[9px] text-white whitespace-nowrap"
                          data-node-id="3:1062"
                        >
                          <p className="leading-[13.5px]">-84%</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative"
                      data-node-id="3:1063"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex items-start justify-between relative shrink-0 w-full"
                        data-node-id="3:1064"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                          data-node-id="3:1065"
                          data-name="Heading 3"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                            data-node-id="3:1066"
                          >
                            <p className="leading-[16px]">
                              A4 Printing Paper Reams
                            </p>
                          </div>
                        </div>
                        <div
                          className="bg-[#ffdad6] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[2px] shrink-0"
                          data-node-id="3:1067"
                          data-name="Background"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#93000a] text-[10px] tracking-[-0.25px] whitespace-nowrap"
                            data-node-id="3:1068"
                          >
                            <p className="leading-[15px]">CRITICAL</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="3:1069"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] w-full"
                          data-node-id="3:1070"
                        >
                          <p className="leading-[16.5px]">
                            SKU: PPR-A4-80G • Central Depot
                          </p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex gap-[8px] items-center pt-[4px] relative shrink-0 w-full"
                        data-node-id="3:1071"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="3:1072"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[12px] whitespace-nowrap"
                            data-node-id="3:1073"
                          >
                            <p className="leading-[16px]">8 in stock</p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="3:1074"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7582] text-[11px] whitespace-nowrap"
                            data-node-id="3:1075"
                          >
                            <p className="leading-[16.5px]">
                              / 50 reorder level
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#ece6ee] h-[6px] overflow-clip relative rounded-[12px] shrink-0 w-full"
                    data-node-id="3:1076"
                    data-name="Deficit progress indicator"
                  >
                    <div
                      className="absolute bg-[#ba1a1a] inset-[0_84%_0_0] rounded-[12px]"
                      data-node-id="3:1077"
                      data-name="Background"
                    />
                  </div>
                  <div
                    className="content-stretch flex items-center justify-between pt-[4px] relative shrink-0 w-full"
                    data-node-id="3:1078"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:1079"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                        data-node-id="3:1080"
                      >
                        <p className="leading-[16.5px]">Deficit: 42 reams</p>
                      </div>
                    </div>
                    <div
                      className="bg-[#4f378a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[4px] items-center px-[12px] py-[6px] relative rounded-[4px] shrink-0"
                      data-node-id="3:1081"
                      data-name="Button"
                    >
                      <div
                        className="h-[13.125px] relative shrink-0 w-[12.938px]"
                        data-node-id="3:1082"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer5}
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-center relative shrink-0"
                        data-node-id="3:1084"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap"
                          data-node-id="3:1085"
                        >
                          <p className="leading-[16px]">Order 100 Units</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full"
                data-node-id="3:1086"
                data-name="Product 3:margin"
              >
                <div
                  className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start p-[14px] relative rounded-[8px] shrink-0 w-full"
                  data-node-id="3:1087"
                  data-name="Product 3"
                >
                  <div
                    className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
                    data-node-id="3:1088"
                    data-name="Container"
                  >
                    <div
                      className="bg-[#f2ecf4] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] shrink-0 size-[56px]"
                      data-node-id="3:1089"
                      data-name="Background"
                    >
                      <div
                        className="flex-[1_0_0] min-h-px relative w-full"
                        data-node-id="3:1090"
                        data-name="AB6AXuCNh6Hszd_6AZCtqQE5MIo2F7RILGez6bdNtwMOZu4pnff8dvLBFGKvOylBAZgz0hn2UeIK0BwplpkFXnX2_n2PlYe3yxFM1A3_bX1Jqgv2IXoYgFgXUdsVpQXFcFlrEgwPF2HSdSoibs_jrESvVLbM2zytppEsfW6LWvvN96Y9Viz_N_toJKtZWqdyysfF8_xLC0mEYfO9XTuffx8Enw7uB_irrGQAI7jfOIN2fhPcPAP6EvRMJ7_VEA"
                      >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img
                            alt=""
                            className="absolute h-full left-[-41.76%] max-w-none top-0 w-[183.51%]"
                            src={
                              imgAb6AXuCNh6Hszd6AzCtqQe5MIo2F7RilGez6BdNtwMoZu4Pnff8DvLbfgKvOylBaZgz0Hn2UeIk0BwplpkFXnX2N2PlYe3YxFm1A3BX1Jqgv2IXoYgFgXUdsVpQxFcFlrEgwPf2HSdSoibsJrESvVLbM2ZytppEsfW6LWvvN96Y9VizNToJKtZWqdyysfF8XLc0MEYfO9XTuffx8Enw7UBIrrGqai7JfOin2FhPcPap6EvRmj7Vea
                            }
                          />
                        </div>
                      </div>
                      <div
                        className="absolute bg-[#ba1a1a] content-stretch flex flex-col items-start left-[4px] px-[6px] rounded-[2px] top-[4px]"
                        data-node-id="3:1091"
                        data-name="Background"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[9px] text-white whitespace-nowrap"
                          data-node-id="3:1092"
                        >
                          <p className="leading-[13.5px]">-80%</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative"
                      data-node-id="3:1093"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex items-start justify-between relative shrink-0 w-full"
                        data-node-id="3:1094"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                          data-node-id="3:1095"
                          data-name="Heading 3"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                            data-node-id="3:1096"
                          >
                            <p className="leading-[16px]">
                              Projector Lamps Optoma
                            </p>
                          </div>
                        </div>
                        <div
                          className="bg-[#ffdad6] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[2px] shrink-0"
                          data-node-id="3:1097"
                          data-name="Background"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#93000a] text-[10px] tracking-[-0.25px] whitespace-nowrap"
                            data-node-id="3:1098"
                          >
                            <p className="leading-[15px]">CRITICAL</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="3:1099"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] w-full"
                          data-node-id="3:1100"
                        >
                          <p className="leading-[16.5px]">
                            SKU: OPT-BLB-X34 • Sci-Tech WH
                          </p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex gap-[8px] items-center pt-[4px] relative shrink-0 w-full"
                        data-node-id="3:1101"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="3:1102"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[12px] whitespace-nowrap"
                            data-node-id="3:1103"
                          >
                            <p className="leading-[16px]">1 in stock</p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="3:1104"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7582] text-[11px] whitespace-nowrap"
                            data-node-id="3:1105"
                          >
                            <p className="leading-[16.5px]">
                              / 5 reorder level
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#ece6ee] h-[6px] overflow-clip relative rounded-[12px] shrink-0 w-full"
                    data-node-id="3:1106"
                    data-name="Deficit progress indicator"
                  >
                    <div
                      className="absolute bg-[#ba1a1a] inset-[0_80%_0_0] rounded-[12px]"
                      data-node-id="3:1107"
                      data-name="Background"
                    />
                  </div>
                  <div
                    className="content-stretch flex items-center justify-between pt-[4px] relative shrink-0 w-full"
                    data-node-id="3:1108"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:1109"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                        data-node-id="3:1110"
                      >
                        <p className="leading-[16.5px]">Deficit: 4 units</p>
                      </div>
                    </div>
                    <div
                      className="bg-[#4f378a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[4px] items-center px-[12px] py-[6px] relative rounded-[4px] shrink-0"
                      data-node-id="3:1111"
                      data-name="Button"
                    >
                      <div
                        className="h-[13.125px] relative shrink-0 w-[12.938px]"
                        data-node-id="3:1112"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer5}
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-center relative shrink-0"
                        data-node-id="3:1114"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap"
                          data-node-id="3:1115"
                        >
                          <p className="leading-[16px]">Order 5 Units</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full"
            data-node-id="3:1116"
            data-name="Warehouse Facilities Directory Section:margin"
          >
            <div
              className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full"
              data-node-id="3:1117"
              data-name="Warehouse Facilities Directory Section"
            >
              <div
                className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                data-node-id="3:1118"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="3:1119"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="3:1120"
                    data-name="Heading 2"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] whitespace-nowrap"
                      data-node-id="3:1121"
                    >
                      <p className="leading-[20px]">{`Campus Warehouses & Capacities`}</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="3:1122"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                      data-node-id="3:1123"
                    >
                      <p className="leading-[16.5px]">
                        Total 6 registered AUCA facilities
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#63597c] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[3.99px] items-center px-[12px] py-[6px] relative rounded-[4px] shrink-0"
                  data-node-id="3:1124"
                  data-name="Button"
                >
                  <div
                    className="relative shrink-0 size-[8.167px]"
                    data-node-id="3:1125"
                    data-name="Container"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgContainer6}
                    />
                  </div>
                  <div
                    className="content-stretch flex flex-col items-center relative shrink-0"
                    data-node-id="3:1127"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap"
                      data-node-id="3:1128"
                    >
                      <p className="leading-[16px]">Add Facility</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full"
                data-node-id="3:1129"
                data-name="Facility Card 1: Central Warehouse Gishushu:margin"
              >
                <div
                  className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[14px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full"
                  data-node-id="3:1130"
                  data-name="Facility Card 1: Central Warehouse Gishushu"
                >
                  <div
                    className="content-stretch flex items-start relative shrink-0 w-full"
                    data-node-id="3:1131"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex gap-[10px] items-center relative shrink-0"
                      data-node-id="3:1132"
                      data-name="Container"
                    >
                      <div
                        className="bg-[rgba(79,55,138,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]"
                        data-node-id="3:1133"
                        data-name="Overlay"
                      >
                        <div
                          className="h-[18px] relative shrink-0 w-[20px]"
                          data-node-id="3:1134"
                          data-name="Container"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgContainer7}
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0"
                        data-node-id="3:1136"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                          data-node-id="3:1137"
                          data-name="Container"
                        >
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0"
                            data-node-id="3:1138"
                            data-name="Heading 3"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] whitespace-nowrap"
                              data-node-id="3:1139"
                            >
                              <p className="leading-[20px]">
                                Central Warehouse Gishushu
                              </p>
                            </div>
                          </div>
                          <div
                            className="bg-[#d1fae5] content-stretch flex flex-col items-start px-[6px] relative rounded-[12px] shrink-0"
                            data-node-id="3:1140"
                            data-name="Background"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap"
                              data-node-id="3:1141"
                            >
                              <p className="leading-[15px]">Active</p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
                          data-node-id="3:1142"
                          data-name="Container"
                        >
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0"
                            data-node-id="3:1143"
                            data-name="Container"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-mono font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4f378a] text-[11px] whitespace-nowrap"
                              data-node-id="3:1144"
                            >
                              <p className="leading-[16px]">WH-KGL-001</p>
                            </div>
                          </div>
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0"
                            data-node-id="3:1145"
                            data-name="Container"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                              data-node-id="3:1146"
                            >
                              <p className="leading-[16px]">•</p>
                            </div>
                          </div>
                          <div
                            className="content-stretch flex gap-[1.99px] items-center relative shrink-0"
                            data-node-id="3:1147"
                            data-name="Container"
                          >
                            <div
                              className="h-[10.833px] relative shrink-0 w-[8.667px]"
                              data-node-id="3:1148"
                              data-name="Container"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgContainer8}
                              />
                            </div>
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                              data-node-id="3:1150"
                            >
                              <p className="leading-[16px]">
                                Main Campus Block A
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#f8f2fa] content-stretch flex flex-col gap-[6px] items-start p-[10px] relative rounded-[4px] shrink-0 w-full"
                    data-node-id="3:1151"
                    data-name="Capacity Gauge"
                  >
                    <div
                      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                      data-node-id="3:1152"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="3:1153"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                          data-node-id="3:1154"
                        >
                          <p className="leading-[16px]">Capacity Occupancy</p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="3:1155"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                          data-node-id="3:1156"
                        >
                          <p>
                            <span className="leading-[16px]">{`8,420 `}</span>
                            <span className="[word-break:break-word] font-['Public_Sans:Regular'] font-normal leading-[16px] text-[#7a7582]">
                              / 10,000 units
                            </span>
                            <span className="leading-[16px]">{` (84.2%)`}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-[#e6e0e9] h-[8px] overflow-clip relative rounded-[12px] shrink-0 w-full"
                      data-node-id="3:1157"
                      data-name="Background"
                    >
                      <div
                        className="absolute bg-[#c9a74d] inset-[0_15.8%_0_0] rounded-[12px]"
                        data-node-id="3:1158"
                        data-name="Background"
                      />
                    </div>
                    <div
                      className="content-stretch flex items-start justify-between pt-[2px] relative shrink-0 w-full"
                      data-node-id="3:1159"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative self-stretch shrink-0"
                        data-node-id="3:1160"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                          data-node-id="3:1161"
                        >
                          <p className="leading-[15px]">
                            Threshold: 85% Warning
                          </p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative self-stretch shrink-0"
                        data-node-id="3:1162"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#765b00] text-[10px] whitespace-nowrap"
                          data-node-id="3:1163"
                        >
                          <p className="leading-[15px]">
                            1,580 Units Remaining
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex items-center justify-between pt-[4px] relative shrink-0 w-full"
                    data-node-id="3:1164"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex gap-[4px] items-center relative shrink-0"
                      data-node-id="3:1165"
                      data-name="Container"
                    >
                      <div
                        className="h-[9.333px] relative shrink-0 w-[11.667px]"
                        data-node-id="3:1166"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer9}
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start max-w-[140px] overflow-clip pr-[1.56px] relative shrink-0"
                        data-node-id="3:1168"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#494551] text-[11px] text-ellipsis whitespace-nowrap"
                          data-node-id="3:1169"
                        >
                          <p className="leading-[16.5px]">
                            warehouse.central@auca.ac.rw
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-[#f2ecf4] content-stretch flex gap-[3.99px] items-center px-[12px] py-[6px] relative rounded-[4px] shrink-0"
                      data-node-id="3:1170"
                      data-name="Button"
                    >
                      <div
                        className="content-stretch flex flex-col items-center pl-[2.75px] pr-[2.77px] relative shrink-0"
                        data-node-id="3:1171"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[12px] text-center whitespace-nowrap"
                          data-node-id="3:1172"
                        >
                          <p className="leading-[16px] mb-0">
                            View Stored Products
                          </p>
                          <p className="leading-[16px]">(842)</p>
                        </div>
                      </div>
                      <div
                        className="relative shrink-0 size-[8px]"
                        data-node-id="3:1173"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer10}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full"
                data-node-id="3:1175"
                data-name="Facility Card 2: Science & Technology Lab Depot:margin"
              >
                <div
                  className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[14px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full"
                  data-node-id="3:1176"
                  data-name="Facility Card 2: Science & Technology Lab Depot"
                >
                  <div
                    className="content-stretch flex items-start relative shrink-0 w-full"
                    data-node-id="3:1177"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex gap-[10px] items-center relative shrink-0"
                      data-node-id="3:1178"
                      data-name="Container"
                    >
                      <div
                        className="bg-[#e1d4fd] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]"
                        data-node-id="3:1179"
                        data-name="Background"
                      >
                        <div
                          className="h-[18px] relative shrink-0 w-[18.057px]"
                          data-node-id="3:1180"
                          data-name="Container"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgContainer11}
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0"
                        data-node-id="3:1182"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                          data-node-id="3:1183"
                          data-name="Container"
                        >
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0"
                            data-node-id="3:1184"
                            data-name="Heading 3"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] whitespace-nowrap"
                              data-node-id="3:1185"
                            >
                              <p className="leading-[20px]">{`Science & Technology Lab Depot`}</p>
                            </div>
                          </div>
                          <div
                            className="bg-[#d1fae5] content-stretch flex flex-col items-start px-[6px] relative rounded-[12px] shrink-0"
                            data-node-id="3:1186"
                            data-name="Background"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap"
                              data-node-id="3:1187"
                            >
                              <p className="leading-[15px]">Active</p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
                          data-node-id="3:1188"
                          data-name="Container"
                        >
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0"
                            data-node-id="3:1189"
                            data-name="Container"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-mono font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4f378a] text-[11px] whitespace-nowrap"
                              data-node-id="3:1190"
                            >
                              <p className="leading-[16px]">WH-KGL-002</p>
                            </div>
                          </div>
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0"
                            data-node-id="3:1191"
                            data-name="Container"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                              data-node-id="3:1192"
                            >
                              <p className="leading-[16px]">•</p>
                            </div>
                          </div>
                          <div
                            className="content-stretch flex gap-[1.99px] items-center relative shrink-0"
                            data-node-id="3:1193"
                            data-name="Container"
                          >
                            <div
                              className="h-[10.833px] relative shrink-0 w-[8.667px]"
                              data-node-id="3:1194"
                              data-name="Container"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgContainer8}
                              />
                            </div>
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                              data-node-id="3:1196"
                            >
                              <p className="leading-[16px]">
                                Science Complex Basement
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#f8f2fa] content-stretch flex flex-col gap-[6px] items-start p-[10px] relative rounded-[4px] shrink-0 w-full"
                    data-node-id="3:1197"
                    data-name="Capacity Gauge"
                  >
                    <div
                      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                      data-node-id="3:1198"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="3:1199"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                          data-node-id="3:1200"
                        >
                          <p className="leading-[16px]">Capacity Occupancy</p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="3:1201"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                          data-node-id="3:1202"
                        >
                          <p>
                            <span className="leading-[16px]">{`3,150 `}</span>
                            <span className="[word-break:break-word] font-['Public_Sans:Regular'] font-normal leading-[16px] text-[#7a7582]">
                              / 5,000 units
                            </span>
                            <span className="leading-[16px]">{` (63.0%)`}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-[#e6e0e9] h-[8px] overflow-clip relative rounded-[12px] shrink-0 w-full"
                      data-node-id="3:1203"
                      data-name="Background"
                    >
                      <div
                        className="absolute bg-[#4f378a] inset-[0_37%_0_0] rounded-[12px]"
                        data-node-id="3:1204"
                        data-name="Background"
                      />
                    </div>
                    <div
                      className="content-stretch flex items-start justify-between pt-[2px] relative shrink-0 w-full"
                      data-node-id="3:1205"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative self-stretch shrink-0"
                        data-node-id="3:1206"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                          data-node-id="3:1207"
                        >
                          <p className="leading-[15px]">Healthy buffer</p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative self-stretch shrink-0"
                        data-node-id="3:1208"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[10px] whitespace-nowrap"
                          data-node-id="3:1209"
                        >
                          <p className="leading-[15px]">
                            1,850 Units Remaining
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex items-center justify-between pt-[4px] relative shrink-0 w-full"
                    data-node-id="3:1210"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex gap-[4px] items-center relative shrink-0"
                      data-node-id="3:1211"
                      data-name="Container"
                    >
                      <div
                        className="h-[9.333px] relative shrink-0 w-[11.667px]"
                        data-node-id="3:1212"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer9}
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start max-w-[140px] overflow-clip relative shrink-0"
                        data-node-id="3:1214"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                          data-node-id="3:1215"
                        >
                          <p className="leading-[16.5px]">
                            scitech.store@auca.ac.rw
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-[#f2ecf4] content-stretch flex gap-[3.99px] items-center px-[12px] py-[6px] relative rounded-[4px] shrink-0"
                      data-node-id="3:1216"
                      data-name="Button"
                    >
                      <div
                        className="content-stretch flex flex-col items-center pl-[8.2px] pr-[8.22px] relative shrink-0"
                        data-node-id="3:1217"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[12px] text-center whitespace-nowrap"
                          data-node-id="3:1218"
                        >
                          <p className="leading-[16px] mb-0">
                            View Stored Products
                          </p>
                          <p className="leading-[16px]">(319)</p>
                        </div>
                      </div>
                      <div
                        className="relative shrink-0 size-[8px]"
                        data-node-id="3:1219"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer10}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full"
                data-node-id="3:1221"
                data-name="Facility Card 3: Library & Archive Storage:margin"
              >
                <div
                  className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[14px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full"
                  data-node-id="3:1222"
                  data-name="Facility Card 3: Library & Archive Storage"
                >
                  <div
                    className="content-stretch flex items-start relative shrink-0 w-full"
                    data-node-id="3:1223"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex gap-[10px] items-center relative shrink-0"
                      data-node-id="3:1224"
                      data-name="Container"
                    >
                      <div
                        className="bg-[#ffdad6] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]"
                        data-node-id="3:1225"
                        data-name="Background"
                      >
                        <div
                          className="h-[21.5px] relative shrink-0 w-[18px]"
                          data-node-id="3:1226"
                          data-name="Container"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgContainer12}
                          />
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0"
                        data-node-id="3:1228"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                          data-node-id="3:1229"
                          data-name="Container"
                        >
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0"
                            data-node-id="3:1230"
                            data-name="Heading 3"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] whitespace-nowrap"
                              data-node-id="3:1231"
                            >
                              <p className="leading-[20px]">{`Library & Archive Storage`}</p>
                            </div>
                          </div>
                          <div
                            className="bg-[#ffdad6] content-stretch flex flex-col items-start px-[6px] relative rounded-[12px] shrink-0"
                            data-node-id="3:1232"
                            data-name="Background"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[10px] whitespace-nowrap"
                              data-node-id="3:1233"
                            >
                              <p className="leading-[15px]">Near Cap</p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
                          data-node-id="3:1234"
                          data-name="Container"
                        >
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0"
                            data-node-id="3:1235"
                            data-name="Container"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-mono font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4f378a] text-[11px] whitespace-nowrap"
                              data-node-id="3:1236"
                            >
                              <p className="leading-[16px]">WH-KGL-003</p>
                            </div>
                          </div>
                          <div
                            className="content-stretch flex flex-col items-start relative shrink-0"
                            data-node-id="3:1237"
                            data-name="Container"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                              data-node-id="3:1238"
                            >
                              <p className="leading-[16px]">•</p>
                            </div>
                          </div>
                          <div
                            className="content-stretch flex gap-[1.99px] items-center relative shrink-0"
                            data-node-id="3:1239"
                            data-name="Container"
                          >
                            <div
                              className="h-[10.833px] relative shrink-0 w-[8.667px]"
                              data-node-id="3:1240"
                              data-name="Container"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgContainer8}
                              />
                            </div>
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                              data-node-id="3:1242"
                            >
                              <p className="leading-[16px]">
                                Library Wing East
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#f8f2fa] content-stretch flex flex-col gap-[6px] items-start p-[10px] relative rounded-[4px] shrink-0 w-full"
                    data-node-id="3:1243"
                    data-name="Capacity Gauge"
                  >
                    <div
                      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                      data-node-id="3:1244"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="3:1245"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                          data-node-id="3:1246"
                        >
                          <p className="leading-[16px]">Capacity Occupancy</p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="3:1247"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[12px] whitespace-nowrap"
                          data-node-id="3:1248"
                        >
                          <p>
                            <span className="leading-[16px]">{`1,890 `}</span>
                            <span className="[word-break:break-word] font-['Public_Sans:Regular'] font-normal leading-[16px] text-[#7a7582]">
                              / 2,000 units
                            </span>
                            <span className="leading-[16px]">{` (94.5%)`}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-[#e6e0e9] h-[8px] overflow-clip relative rounded-[12px] shrink-0 w-full"
                      data-node-id="3:1249"
                      data-name="Background"
                    >
                      <div
                        className="absolute bg-[#ba1a1a] inset-[0_5.5%_0_0] rounded-[12px]"
                        data-node-id="3:1250"
                        data-name="Background"
                      />
                    </div>
                    <div
                      className="content-stretch flex items-center justify-between pt-[2px] relative shrink-0 w-full"
                      data-node-id="3:1251"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex gap-[4px] items-center relative shrink-0"
                        data-node-id="3:1252"
                        data-name="Container"
                      >
                        <div
                          className="h-[9.5px] relative shrink-0 w-[11px]"
                          data-node-id="3:1253"
                          data-name="Container"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgContainer13}
                          />
                        </div>
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[10px] whitespace-nowrap"
                          data-node-id="3:1255"
                        >
                          <p className="leading-[15px]">
                            Critical: Almost Full
                          </p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="3:1256"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[10px] whitespace-nowrap"
                          data-node-id="3:1257"
                        >
                          <p className="leading-[15px]">
                            110 Units Available Only
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex items-center justify-between pt-[4px] relative shrink-0 w-full"
                    data-node-id="3:1258"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex gap-[4px] items-center relative shrink-0"
                      data-node-id="3:1259"
                      data-name="Container"
                    >
                      <div
                        className="h-[9.333px] relative shrink-0 w-[11.667px]"
                        data-node-id="3:1260"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer9}
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start max-w-[140px] overflow-clip pr-[1.09px] relative shrink-0"
                        data-node-id="3:1262"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#494551] text-[11px] text-ellipsis whitespace-nowrap"
                          data-node-id="3:1263"
                        >
                          <p className="leading-[16.5px]">
                            library.inventory@auca.ac.rw
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-[#f2ecf4] content-stretch flex gap-[3.99px] items-center px-[12px] py-[6px] relative rounded-[4px] shrink-0"
                      data-node-id="3:1264"
                      data-name="Button"
                    >
                      <div
                        className="content-stretch flex flex-col items-center relative shrink-0"
                        data-node-id="3:1265"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[12px] text-center whitespace-nowrap"
                          data-node-id="3:1266"
                        >
                          <p className="leading-[16px]">
                            Relocate / View (184)
                          </p>
                        </div>
                      </div>
                      <div
                        className="relative shrink-0 size-[8px]"
                        data-node-id="3:1267"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer10}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(253,247,255,0.85)] content-stretch flex flex-col items-start left-0 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.04)] top-0 w-[390px]"
        data-node-id="3:1269"
        data-name="Header"
      >
        <div
          className="content-stretch flex h-[64px] items-center justify-between px-[16px] relative shrink-0 w-full"
          data-node-id="3:1270"
          data-name="Container"
        >
          <div
            className="content-stretch flex gap-[8px] items-center relative shrink-0"
            data-node-id="3:1271"
            data-name="Container"
          >
            <div
              className="max-w-[180.91000366210938px] relative shrink-0 size-[32px]"
              data-node-id="3:1272"
              data-name="AUCA Inventory Logo"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute left-0 max-w-none size-full top-0"
                  src={imgAucaInventoryLogo}
                />
              </div>
            </div>
            <div
              className="content-stretch flex flex-col items-start relative shrink-0"
              data-node-id="3:1273"
              data-name="Container"
            >
              <div
                className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
                data-node-id="3:1274"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                  data-node-id="3:1275"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] whitespace-nowrap"
                    data-node-id="3:1276"
                  >
                    <p className="leading-[20px]">AUCA Stock</p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                  data-node-id="3:1277"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                    data-node-id="3:1278"
                  >
                    <p className="leading-[15px]">• Alerts</p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
                data-node-id="3:1279"
                data-name="Container"
              >
                <div
                  className="bg-[#10b981] relative rounded-[12px] shrink-0 size-[8px]"
                  data-node-id="3:1280"
                  data-name="Background"
                />
                <div
                  className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                  data-node-id="3:1281"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] tracking-[-0.25px] whitespace-nowrap"
                    data-node-id="3:1282"
                  >
                    <p className="leading-[15px]">API v1 Connected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[4px] items-center relative shrink-0"
            data-node-id="3:1283"
            data-name="Container"
          >
            <div
              className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[44px]"
              data-node-id="3:1284"
              data-name="Button - Alerts"
            >
              <div
                className="h-[18.333px] relative shrink-0 w-[14.667px]"
                data-node-id="3:1285"
                data-name="Container"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgContainer14}
                />
              </div>
              <div
                className="absolute bg-[#ba1a1a] content-stretch flex flex-col items-end right-[8px] rounded-[12px] size-[8px] top-[8px]"
                data-node-id="3:1287"
                data-name="Background"
              >
                <div
                  className="bg-[rgba(255,255,255,0)] relative rounded-[12px] shadow-[0px_0px_0px_2px_#fdf7ff] shrink-0 size-[8px]"
                  data-node-id="3:1288"
                  data-name="Overlay+Shadow"
                />
              </div>
            </div>
            <div
              className="content-stretch flex items-center pl-[4px] relative shrink-0"
              data-node-id="3:1289"
              data-name="Container"
            >
              <div
                className="max-w-[36px] relative rounded-[12px] shadow-[0px_0px_0px_2px_rgba(79,55,138,0.2)] shrink-0 size-[32px]"
                data-node-id="3:1290"
                data-name="Profile"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgProfile}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(253,247,255,0.9)] bottom-0 content-stretch flex flex-col items-start left-0 shadow-[0px_-2px_12px_0px_rgba(0,0,0,0.05)] w-[390px]"
        data-node-id="3:1291"
        data-name="Nav"
      >
        <div
          className="content-stretch flex gap-[21.8px] h-[64px] items-center px-[4px] relative shrink-0 w-full"
          data-node-id="3:1292"
          data-name="Container"
        >
          <div
            className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center min-w-[54px] relative shrink-0"
            data-node-id="3:1293"
            data-name="Link"
          >
            <div
              className="relative shrink-0 size-[18px]"
              data-node-id="3:1294"
              data-name="Container"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgContainer15}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0"
              data-node-id="3:1296"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                data-node-id="3:1297"
              >
                <p className="leading-[13.75px]">Dashboard</p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center min-w-[54px] px-[4.03px] relative shrink-0"
            data-node-id="3:1298"
            data-name="Link"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-node-id="3:1299"
              data-name="Container"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgContainer16}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0"
              data-node-id="3:1301"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                data-node-id="3:1302"
              >
                <p className="leading-[13.75px]">Products</p>
              </div>
            </div>
          </div>
          <div
            className="h-[36px] min-w-[56px] relative shrink-0 w-[56px]"
            data-node-id="3:1303"
            data-name="Link - Record Movement:margin"
          >
            <div
              className="absolute bg-[#4f378a] content-stretch drop-shadow-[0px_4px_6px_rgba(79,55,138,0.35)] flex flex-col h-[56px] items-center justify-center left-0 min-w-[56px] pl-[15.27px] pr-[15.26px] rounded-[12px] top-[-20px]"
              data-node-id="3:1304"
              data-name="Link - Record Movement"
            >
              <div
                className="h-[18px] relative shrink-0 w-[20px]"
                data-node-id="3:1305"
                data-name="Container"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgContainer17}
                />
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0"
                data-node-id="3:1307"
                data-name="Margin"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-white whitespace-nowrap"
                  data-node-id="3:1308"
                >
                  <p className="leading-[10px]">Move</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center min-w-[54px] pl-[4px] pr-[4.02px] relative shrink-0"
            data-node-id="3:1309"
            data-name="Link"
          >
            <div
              className="h-[18px] relative shrink-0 w-[20px]"
              data-node-id="3:1310"
              data-name="Container"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgContainer18}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0"
              data-node-id="3:1312"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                data-node-id="3:1313"
              >
                <p className="leading-[13.75px]">Facilities</p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center min-w-[54px] pl-[11.08px] pr-[11.09px] relative shrink-0"
            data-node-id="3:1314"
            data-name="Link"
          >
            <div
              className="h-[19px] relative shrink-0 w-[22px]"
              data-node-id="3:1315"
              data-name="Container"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgContainer19}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0"
              data-node-id="3:1317"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[11px] whitespace-nowrap"
                data-node-id="3:1318"
              >
                <p className="leading-[13.75px]">Alerts</p>
              </div>
            </div>
            <div
              className="absolute bg-[#ba1a1a] right-[8px] rounded-[12px] size-[8px] top-[4px]"
              data-node-id="3:1319"
              data-name="Background"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
