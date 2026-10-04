const assetPathPrefix = "/assets"
const imgAucaInventoryLogo = `${assetPathPrefix}/87b33.png`
const imgProfile = `${assetPathPrefix}/fc076.png`
const imgContainer = `${assetPathPrefix}/4b4ae.svg`
const imgContainer1 = `${assetPathPrefix}/a4ebe.svg`
const imgContainer2 = `${assetPathPrefix}/f269e.svg`
const imgContainer3 = `${assetPathPrefix}/60f30.svg`
const imgContainer4 = `${assetPathPrefix}/634f1.svg`
const imgContainer5 = `${assetPathPrefix}/2c16c.svg`
const imgContainer6 = `${assetPathPrefix}/fe4ce.svg`
const imgContainer7 = `${assetPathPrefix}/7819d.svg`
const imgContainer8 = `${assetPathPrefix}/3b149.svg`
const imgContainer9 = `${assetPathPrefix}/45d24.svg`
const imgContainer10 = `${assetPathPrefix}/b6d68.svg`
const imgContainer11 = `${assetPathPrefix}/4f9c4.svg`
const imgContainer12 = `${assetPathPrefix}/0c7d8.svg`
const imgContainer13 = `${assetPathPrefix}/2323e.svg`
const imgContainer14 = `${assetPathPrefix}/92f55.svg`
const imgContainer15 = `${assetPathPrefix}/eba77.svg`
const imgContainer16 = `${assetPathPrefix}/77e25.svg`
const imgContainer17 = `${assetPathPrefix}/22961.svg`
const imgContainer18 = `${assetPathPrefix}/5c381.svg`
const imgContainer19 = `${assetPathPrefix}/196c9.svg`
const imgContainer20 = `${assetPathPrefix}/422d7.svg`
const imgContainer21 = `${assetPathPrefix}/99cd9.svg`

import { useState, useEffect } from "react"
import { api } from "../api/client"
import type { WarehouseResponse, ProductResponse, StockMovementResponse } from "../api/types"

export default function ExecutiveOverviewDashboard() {
  const [warehouses, setWarehouses] = useState<WarehouseResponse[]>([])
  const [products, setProducts] = useState<ProductResponse[]>([])
  const [movements, setMovements] = useState<StockMovementResponse[]>([])

  useEffect(() => {
    async function load() {
      try {
        const [wList, pList, mList] = await Promise.all([
          api.getWarehouses(),
          api.getProducts(),
          api.getMovements(),
        ])
        setWarehouses(wList)
        setProducts(pList)
        setMovements(mList)
      } catch (e) {
        console.error("Failed to load dashboard metrics", e)
      }
    }
    load()
  }, [])

  const totalStockUnits = products.reduce((acc, p) => acc + (p.quantityInStock || 0), 0)
  const totalStockValue = products.reduce((acc, p) => acc + ((p.quantityInStock || 0) * (p.price || 0)), 0)
  const lowStockCount = products.filter(p => p.isLowStock).length

  return (
    <div
      className="content-stretch flex flex-col items-start relative size-full"
      data-node-id="3:4"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(253, 247, 255) 0%, rgb(253, 247, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
      data-name="Executive Overview Dashboard"
    >
      <div
        className="bg-[#fdf7ff] content-stretch flex flex-col items-start pb-[96px] pt-[64px] relative shrink-0 w-full"
        data-node-id="3:5"
        data-name="Main"
      >
        <div
          className="content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-full"
          data-node-id="3:6"
          data-name="Container"
        >
          <div
            className="bg-[#f2ecf4] content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[16px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full"
            data-node-id="3:7"
            data-name="Executive Context & Greeting Card"
          >
            <div
              className="content-stretch flex items-start justify-between relative shrink-0 w-full"
              data-node-id="3:8"
              data-name="Container"
            >
              <div
                className="content-stretch flex gap-[12px] items-center relative shrink-0"
                data-node-id="3:9"
                data-name="Container"
              >
                <div
                  className="bg-[#e1d4fd] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[12px] shrink-0 size-[44px]"
                  data-node-id="3:10"
                  data-name="Background+Shadow"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="3:11"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[14px] whitespace-nowrap"
                      data-node-id="3:12"
                    >
                      <p className="leading-[20px]">IF</p>
                    </div>
                  </div>
                  <div
                    className="absolute bg-[#4f378a] bottom-0 content-stretch flex flex-col items-end justify-end right-0 rounded-[12px] size-[12px]"
                    data-node-id="3:13"
                    data-name="Background"
                  >
                    <div
                      className="bg-[rgba(255,255,255,0)] relative rounded-[12px] shadow-[0px_0px_0px_2px_#f2ecf4] shrink-0 size-[12px]"
                      data-node-id="3:14"
                      data-name="Overlay+Shadow"
                    />
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="3:15"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0 w-full"
                    data-node-id="3:16"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:17"
                      data-name="Heading 1"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] tracking-[-0.4px] whitespace-nowrap"
                        data-node-id="3:18"
                      >
                        <p className="leading-[24px]">Welcome back, Iradukunda Fils</p>
                      </div>
                    </div>
                    <div
                      className="bg-[#e9ddff] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[12px] shrink-0"
                      data-node-id="3:19"
                      data-name="Background"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#22005d] text-[10px] whitespace-nowrap"
                        data-node-id="3:20"
                      >
                        <p className="leading-[15px]">Student ID: 29853</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
                    data-node-id="3:21"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                      data-node-id="3:22"
                    >
                      <p className="leading-[16px]">iradukunda@auca.ac.rw • Group B</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[12px] shrink-0"
                data-node-id="3:23"
                data-name="Background+Shadow"
              >
                <div
                  className="bg-[#10b981] relative rounded-[12px] shrink-0 size-[6px]"
                  data-node-id="3:24"
                  data-name="Background"
                />
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="3:25"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                    data-node-id="3:26"
                  >
                    <p className="leading-[15px]">SB 3.4 • :8080</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-[#f8f2fa] content-stretch flex items-center justify-between pb-[6px] pt-[8px] px-[12px] relative rounded-[4px] shrink-0 w-full"
              data-node-id="3:27"
              data-name="Background"
            >
              <div
                className="content-stretch flex gap-[6px] items-center relative shrink-0"
                data-node-id="3:28"
                data-name="Container"
              >
                <div
                  className="relative shrink-0 size-[12.5px]"
                  data-node-id="3:29"
                  data-name="Container"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgContainer}
                  />
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="3:31"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                    data-node-id="3:32"
                  >
                    <p className="leading-[16.5px]">
                      Sun, Oct 4, 12:55 AM • Kigali
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[2px] items-center relative shrink-0"
                data-node-id="3:33"
                data-name="Container"
              >
                <div
                  className="relative shrink-0 size-[8.667px]"
                  data-node-id="3:34"
                  data-name="Container"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgContainer1}
                  />
                </div>
                <div
                  className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[11px] whitespace-nowrap"
                  data-node-id="3:36"
                >
                  <p className="leading-[16.5px]">Live sync</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full"
            data-node-id="3:37"
            data-name="KPI Grid (2x2):margin"
          >
            <div
              className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__112.50px_112.50px] relative shrink-0 w-full"
              data-node-id="3:38"
              data-name="KPI Grid (2x2)"
            >
              <div
                className="bg-white col-1 content-stretch flex flex-col items-start justify-between justify-self-stretch overflow-clip p-[14px] relative rounded-[8px] row-1 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
                data-node-id="3:39"
                data-name="Stat 1: Warehouses"
              >
                <div
                  className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                  data-node-id="3:40"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="3:41"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                      data-node-id="3:42"
                    >
                      <p className="leading-[16px]">Warehouses</p>
                    </div>
                  </div>
                  <div
                    className="bg-[#f2ecf4] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[28px]"
                    data-node-id="3:43"
                    data-name="Background"
                  >
                    <div
                      className="h-[13.5px] relative shrink-0 w-[15px]"
                      data-node-id="3:44"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer2}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full"
                  data-node-id="3:46"
                  data-name="Margin"
                >
                  <div
                    className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
                    data-node-id="3:47"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="3:48"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[20px] tracking-[-0.5px] w-full"
                        data-node-id="3:49"
                      >
                        <p className="leading-[28px]">{warehouses.length > 0 ? `${warehouses.length} Active` : "Loading..."}</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full"
                      data-node-id="3:50"
                      data-name="Container"
                    >
                      <div
                        className="relative shrink-0 size-[9.587px]"
                        data-node-id="3:51"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer3}
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="3:53"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#047857] text-[11px] whitespace-nowrap"
                          data-node-id="3:54"
                        >
                          <p className="leading-[16.5px]">+1 this month</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-white col-2 content-stretch flex flex-col items-start justify-between justify-self-stretch overflow-clip p-[14px] relative rounded-[8px] row-1 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
                data-node-id="3:55"
                data-name="Stat 2: Products Cataloged"
              >
                <div
                  className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                  data-node-id="3:56"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="3:57"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                      data-node-id="3:58"
                    >
                      <p className="leading-[16px]">Cataloged</p>
                    </div>
                  </div>
                  <div
                    className="bg-[#f2ecf4] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[28px]"
                    data-node-id="3:59"
                    data-name="Background"
                  >
                    <div
                      className="h-[15px] relative shrink-0 w-[14.25px]"
                      data-node-id="3:60"
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
                <div
                  className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full"
                  data-node-id="3:62"
                  data-name="Margin"
                >
                  <div
                    className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
                    data-node-id="3:63"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="3:64"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[20px] tracking-[-0.5px] w-full"
                        data-node-id="3:65"
                      >
                        <p className="leading-[28px]">{products.length.toLocaleString()} SKUs</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full"
                      data-node-id="3:66"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="3:67"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[11px] whitespace-nowrap"
                          data-node-id="3:68"
                        >
                          <p className="leading-[16.5px]">98.4%</p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="3:69"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                          data-node-id="3:70"
                        >
                          <p className="leading-[16.5px]">active tracking</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-white col-1 content-stretch flex flex-col items-start justify-between justify-self-stretch overflow-clip p-[14px] relative rounded-[8px] row-2 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
                data-node-id="3:71"
                data-name="Stat 3: Total Physical Units"
              >
                <div
                  className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                  data-node-id="3:72"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="3:73"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                      data-node-id="3:74"
                    >
                      <p className="leading-[16px]">Total Volume</p>
                    </div>
                  </div>
                  <div
                    className="bg-[#f2ecf4] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[28px]"
                    data-node-id="3:75"
                    data-name="Background"
                  >
                    <div
                      className="relative shrink-0 size-[15px]"
                      data-node-id="3:76"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer5}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full"
                  data-node-id="3:78"
                  data-name="Margin"
                >
                  <div
                    className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
                    data-node-id="3:79"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="3:80"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[20px] tracking-[-0.5px] w-full"
                        data-node-id="3:81"
                      >
                        <p className="leading-[28px]">{totalStockUnits.toLocaleString()}</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full"
                      data-node-id="3:82"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="3:83"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[11px] whitespace-nowrap"
                          data-node-id="3:84"
                        >
                          <p className="leading-[16.5px]">${totalStockValue.toLocaleString()}</p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="3:85"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                          data-node-id="3:86"
                        >
                          <p className="leading-[16.5px]">val.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-[rgba(255,218,214,0.4)] col-2 content-stretch flex flex-col items-start justify-between justify-self-stretch overflow-clip p-[14px] relative rounded-[8px] row-2 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
                data-node-id="3:87"
                data-name="Stat 4: Low Stock Alert"
              >
                <div
                  className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                  data-node-id="3:88"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="3:89"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[12px] whitespace-nowrap"
                      data-node-id="3:90"
                    >
                      <p className="leading-[16px]">Low Stock</p>
                    </div>
                  </div>
                  <div
                    className="bg-[#ffdad6] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[28px]"
                    data-node-id="3:91"
                    data-name="Background"
                  >
                    <div
                      className="h-[15px] relative shrink-0 w-[12px]"
                      data-node-id="3:92"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer6}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full"
                  data-node-id="3:94"
                  data-name="Margin"
                >
                  <div
                    className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
                    data-node-id="3:95"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="3:96"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#93000a] text-[20px] tracking-[-0.5px] w-full"
                        data-node-id="3:97"
                      >
                        <p className="leading-[28px]">{lowStockCount} Critical</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full"
                      data-node-id="3:98"
                      data-name="Container"
                    >
                      <div
                        className="bg-[#ba1a1a] relative rounded-[12px] shrink-0 size-[6px]"
                        data-node-id="3:99"
                        data-name="Background"
                      />
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="3:100"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[11px] whitespace-nowrap"
                          data-node-id="3:101"
                        >
                          <p className="leading-[16.5px]">Action required</p>
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
            data-node-id="3:102"
            data-name="Quick Action Shortcuts:margin"
          >
            <div
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
              data-node-id="3:103"
              data-name="Quick Action Shortcuts"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                data-node-id="3:104"
                data-name="Container"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] tracking-[0.6px] uppercase w-full"
                  data-node-id="3:105"
                >
                  <p className="leading-[16px]">QUICK OPERATIONS</p>
                </div>
              </div>
              <div
                className="h-[48px] relative shrink-0 w-full"
                data-node-id="3:106"
                data-name="Margin"
              >
                <div
                  className="absolute h-[48px] left-[-16px] overflow-auto right-[-16px] top-0"
                  data-node-id="3:107"
                  data-name="Container"
                >
                  <div
                    className="absolute bg-[#4f378a] content-stretch flex gap-[8px] items-center left-[16px] px-[14px] py-[10px] rounded-[8px] top-0"
                    data-node-id="3:108"
                    data-name="Button"
                  >
                    <div
                      className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.33px_0_0] rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
                      data-node-id="3:109"
                      data-name="Button:shadow"
                    />
                    <div
                      className="h-[13.333px] relative shrink-0 w-[10.667px]"
                      data-node-id="3:110"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer7}
                      />
                    </div>
                    <div
                      className="content-stretch flex flex-col items-center relative shrink-0"
                      data-node-id="3:112"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap"
                        data-node-id="3:113"
                      >
                        <p className="leading-[16px]">Record Movement</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute bg-[#e6e0e9] content-stretch flex gap-[8px] items-center left-[178.44px] px-[14px] py-[10px] rounded-[8px] top-0"
                    data-node-id="3:114"
                    data-name="Button"
                  >
                    <div
                      className="relative shrink-0 size-[12px]"
                      data-node-id="3:115"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer8}
                      />
                    </div>
                    <div
                      className="content-stretch flex flex-col items-center relative shrink-0"
                      data-node-id="3:117"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] text-center whitespace-nowrap"
                        data-node-id="3:118"
                      >
                        <p className="leading-[16px]">New Product</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute bg-[#e6e0e9] content-stretch flex gap-[8px] items-center left-[311.27px] px-[14px] py-[10px] rounded-[8px] top-0"
                    data-node-id="3:119"
                    data-name="Button"
                  >
                    <div
                      className="h-[13.333px] relative shrink-0 w-[14.667px]"
                      data-node-id="3:120"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer9}
                      />
                    </div>
                    <div
                      className="content-stretch flex flex-col items-center relative shrink-0"
                      data-node-id="3:122"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] text-center whitespace-nowrap"
                        data-node-id="3:123"
                      >
                        <p className="leading-[16px]">New Warehouse</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full"
            data-node-id="3:124"
            data-name="Warehouse Capacity Utilization:margin"
          >
            <div
              className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
              data-node-id="3:125"
              data-name="Warehouse Capacity Utilization"
            >
              <div
                className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                data-node-id="3:126"
                data-name="Container"
              >
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0"
                  data-node-id="3:127"
                  data-name="Container"
                >
                  <div
                    className="relative shrink-0 size-[15px]"
                    data-node-id="3:128"
                    data-name="Container"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgContainer10}
                    />
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="3:130"
                    data-name="Heading 2"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] whitespace-nowrap"
                      data-node-id="3:131"
                    >
                      <p className="leading-[20px]">Capacity Utilization</p>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-center justify-center relative shrink-0"
                  data-node-id="3:132"
                  data-name="Button"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[12px] text-center whitespace-nowrap"
                    data-node-id="3:133"
                  >
                    <p className="leading-[16px]">All Depots</p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full"
                data-node-id="3:134"
                data-name="Container"
              >
                <div
                  className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[10px] items-start p-[14px] relative rounded-[8px] shrink-0 w-full"
                  data-node-id="3:135"
                  data-name="Warehouse 1"
                >
                  <div
                    className="content-stretch flex items-start justify-between relative shrink-0 w-full"
                    data-node-id="3:136"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col gap-[5.5px] items-start pb-[3.5px] relative shrink-0"
                      data-node-id="3:137"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                        data-node-id="3:138"
                        data-name="Heading 3"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                          data-node-id="3:139"
                        >
                          <p className="leading-[16px]">
                            Central Warehouse Gishushu
                          </p>
                        </div>
                      </div>
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap"
                        data-node-id="3:140"
                      >
                        <p className="leading-[15px]">
                          WH-KGL-001 • PRIMARY HUB
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-[#ffdf93] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[12px] shrink-0"
                      data-node-id="3:141"
                      data-name="Background"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#241a00] text-[10px] whitespace-nowrap"
                        data-node-id="3:142"
                      >
                        <p className="leading-[15px]">84.2% Capacity</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#e6e0e9] content-stretch flex h-[8px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full"
                    data-node-id="3:143"
                    data-name="Background"
                  >
                    <div
                      className="bg-[#c9a74d] h-full relative rounded-[12px] shrink-0 w-[277.86px]"
                      data-node-id="3:144"
                      data-name="Background"
                    />
                  </div>
                  <div
                    className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                    data-node-id="3:145"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:146"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                        data-node-id="3:147"
                      >
                        <p className="leading-[16.5px]">8,420 units stocked</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:148"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[11px] whitespace-nowrap"
                        data-node-id="3:149"
                      >
                        <p className="leading-[16.5px]">10,000 max capacity</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[10px] items-start p-[14px] relative rounded-[8px] shrink-0 w-full"
                  data-node-id="3:150"
                  data-name="Warehouse 2"
                >
                  <div
                    className="content-stretch flex items-start justify-between relative shrink-0 w-full"
                    data-node-id="3:151"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col gap-[5.5px] items-start pb-[3.5px] relative shrink-0"
                      data-node-id="3:152"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
                        data-node-id="3:153"
                        data-name="Heading 3"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                          data-node-id="3:154"
                        >
                          <p className="leading-[16px]">{`Science & Tech Lab Depot`}</p>
                        </div>
                      </div>
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap"
                        data-node-id="3:155"
                      >
                        <p className="leading-[15px]">
                          WH-KGL-002 • MASORO CAMPUS
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-[#e9ddff] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[12px] shrink-0"
                      data-node-id="3:156"
                      data-name="Background"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1635] text-[10px] whitespace-nowrap"
                        data-node-id="3:157"
                      >
                        <p className="leading-[15px]">63.0% Normal</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#e6e0e9] content-stretch flex h-[8px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full"
                    data-node-id="3:158"
                    data-name="Background"
                  >
                    <div
                      className="bg-[#4f378a] h-full relative rounded-[12px] shrink-0 w-[207.89px]"
                      data-node-id="3:159"
                      data-name="Background"
                    />
                  </div>
                  <div
                    className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                    data-node-id="3:160"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:161"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                        data-node-id="3:162"
                      >
                        <p className="leading-[16.5px]">3,150 units stocked</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:163"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[11px] whitespace-nowrap"
                        data-node-id="3:164"
                      >
                        <p className="leading-[16.5px]">5,000 max capacity</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[10px] items-start p-[14px] relative rounded-[8px] shrink-0 w-full"
                  data-node-id="3:165"
                  data-name="Warehouse 3"
                >
                  <div
                    className="content-stretch flex items-start justify-between relative shrink-0 w-full"
                    data-node-id="3:166"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col gap-[5.5px] items-start pb-[3.5px] relative shrink-0"
                      data-node-id="3:167"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                        data-node-id="3:168"
                        data-name="Heading 3"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                          data-node-id="3:169"
                        >
                          <p className="leading-[16px]">{`Library & Media Archive`}</p>
                        </div>
                      </div>
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap"
                        data-node-id="3:170"
                      >
                        <p className="leading-[15px]">WH-KGL-003 • LEVEL B1</p>
                      </div>
                    </div>
                    <div
                      className="bg-[#ffdad6] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[12px] shrink-0"
                      data-node-id="3:171"
                      data-name="Background"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#93000a] text-[10px] whitespace-nowrap"
                        data-node-id="3:172"
                      >
                        <p className="leading-[15px]">94.5% Near Full</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#e6e0e9] content-stretch flex h-[8px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full"
                    data-node-id="3:173"
                    data-name="Background"
                  >
                    <div
                      className="bg-[#ba1a1a] h-full relative rounded-[12px] shrink-0 w-[311.84px]"
                      data-node-id="3:174"
                      data-name="Background"
                    />
                  </div>
                  <div
                    className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                    data-node-id="3:175"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:176"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                        data-node-id="3:177"
                      >
                        <p className="leading-[16.5px]">1,890 units stocked</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:178"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[11px] whitespace-nowrap"
                        data-node-id="3:179"
                      >
                        <p className="leading-[16.5px]">2,000 max capacity</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full"
            data-node-id="3:180"
            data-name="Recent Movements Ledger:margin"
          >
            <div
              className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
              data-node-id="3:181"
              data-name="Recent Movements Ledger"
            >
              <div
                className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                data-node-id="3:182"
                data-name="Container"
              >
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0"
                  data-node-id="3:183"
                  data-name="Container"
                >
                  <div
                    className="h-[12px] relative shrink-0 w-[15px]"
                    data-node-id="3:184"
                    data-name="Container"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgContainer11}
                    />
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="3:186"
                    data-name="Heading 2"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] whitespace-nowrap"
                      data-node-id="3:187"
                    >
                      <p className="leading-[20px]">Recent Stock Ledger</p>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#f2ecf4] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[2px] shrink-0"
                  data-node-id="3:188"
                  data-name="Background"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                    data-node-id="3:189"
                  >
                    <p className="leading-[16.5px]">Live REST v1</p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                data-node-id="3:190"
                data-name="Container"
              >
                <div
                  className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full"
                  data-node-id="3:191"
                  data-name="Movement 1"
                >
                  <div
                    className="content-stretch flex gap-[12px] items-center relative shrink-0"
                    data-node-id="3:192"
                    data-name="Container"
                  >
                    <div
                      className="bg-[#d1fae5] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]"
                      data-node-id="3:193"
                      data-name="Background"
                    >
                      <div
                        className="relative shrink-0 size-[12.5px]"
                        data-node-id="3:194"
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
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:196"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
                        data-node-id="3:197"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                          data-node-id="3:198"
                        >
                          <p className="leading-[16px]">
                            Dell Latitude 5540 Laptop
                          </p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
                        data-node-id="3:199"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="3:200"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                            data-node-id="3:201"
                          >
                            <p className="leading-[15px]">IT-LAP-042</p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="3:202"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                            data-node-id="3:203"
                          >
                            <p className="leading-[15px]">•</p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                          data-node-id="3:204"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                            data-node-id="3:205"
                          >
                            <p className="leading-[15px]">PO-2026-089</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-end relative shrink-0"
                    data-node-id="3:206"
                    data-name="Container"
                  >
                    <div
                      className="bg-[#d1fae5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[12px] shrink-0"
                      data-node-id="3:207"
                      data-name="Background"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#065f46] text-[11px] whitespace-nowrap"
                        data-node-id="3:208"
                      >
                        <p className="leading-[16.5px]">+25 units</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0"
                      data-node-id="3:209"
                      data-name="Margin"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                        data-node-id="3:210"
                      >
                        <p className="leading-[15px]">Just now</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full"
                  data-node-id="3:211"
                  data-name="Movement 2"
                >
                  <div
                    className="content-stretch flex gap-[12px] items-center relative shrink-0"
                    data-node-id="3:212"
                    data-name="Container"
                  >
                    <div
                      className="bg-[#fef3c7] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]"
                      data-node-id="3:213"
                      data-name="Background"
                    >
                      <div
                        className="relative shrink-0 size-[12.5px]"
                        data-node-id="3:214"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer13}
                        />
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:216"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
                        data-node-id="3:217"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                          data-node-id="3:218"
                        >
                          <p className="leading-[16px]">
                            A4 Printing Paper Ream
                          </p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
                        data-node-id="3:219"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="3:220"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                            data-node-id="3:221"
                          >
                            <p className="leading-[15px]">ST-PPR-011</p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="3:222"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                            data-node-id="3:223"
                          >
                            <p className="leading-[15px]">•</p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                          data-node-id="3:224"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                            data-node-id="3:225"
                          >
                            <p className="leading-[15px]">REQ-AUCA-412</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-end relative shrink-0"
                    data-node-id="3:226"
                    data-name="Container"
                  >
                    <div
                      className="bg-[#fef3c7] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[12px] shrink-0"
                      data-node-id="3:227"
                      data-name="Background"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#92400e] text-[11px] whitespace-nowrap"
                        data-node-id="3:228"
                      >
                        <p className="leading-[16.5px]">-40 units</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0"
                      data-node-id="3:229"
                      data-name="Margin"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                        data-node-id="3:230"
                      >
                        <p className="leading-[15px]">14m ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full"
                  data-node-id="3:231"
                  data-name="Movement 3"
                >
                  <div
                    className="content-stretch flex gap-[12px] items-center relative shrink-0"
                    data-node-id="3:232"
                    data-name="Container"
                  >
                    <div
                      className="bg-[#e9ddff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]"
                      data-node-id="3:233"
                      data-name="Background"
                    >
                      <div
                        className="relative shrink-0 size-[15px]"
                        data-node-id="3:234"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer14}
                        />
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:236"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
                        data-node-id="3:237"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                          data-node-id="3:238"
                        >
                          <p className="leading-[16px]">
                            Ethernet Patch Cable CAT6
                          </p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
                        data-node-id="3:239"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="3:240"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                            data-node-id="3:241"
                          >
                            <p className="leading-[15px]">IT-CAB-102</p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="3:242"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                            data-node-id="3:243"
                          >
                            <p className="leading-[15px]">•</p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                          data-node-id="3:244"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                            data-node-id="3:245"
                          >
                            <p className="leading-[15px]">AUD-2026-03</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-end relative shrink-0"
                    data-node-id="3:246"
                    data-name="Container"
                  >
                    <div
                      className="bg-[#e9ddff] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[12px] shrink-0"
                      data-node-id="3:247"
                      data-name="Background"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1635] text-[11px] whitespace-nowrap"
                        data-node-id="3:248"
                      >
                        <p className="leading-[16.5px]">+5 units</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0"
                      data-node-id="3:249"
                      data-name="Margin"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                        data-node-id="3:250"
                      >
                        <p className="leading-[15px]">1h ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full"
            data-node-id="3:251"
            data-name="System Health Micro-Banner:margin"
          >
            <div
              className="bg-[#f8f2fa] content-stretch flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full"
              data-node-id="3:252"
              data-name="System Health Micro-Banner"
            >
              <div
                className="content-stretch flex gap-[8px] items-center relative shrink-0"
                data-node-id="3:253"
                data-name="Container"
              >
                <div
                  className="h-[10.667px] relative shrink-0 w-[14.667px]"
                  data-node-id="3:254"
                  data-name="Container"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgContainer15}
                  />
                </div>
                <div
                  className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                  data-node-id="3:256"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                    data-node-id="3:257"
                  >
                    <p className="leading-[16px]">
                      Kigali Central DB Cluster: Synced
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-[#f2ecf4] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[2px] shrink-0"
                data-node-id="3:258"
                data-name="Background"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                  data-node-id="3:259"
                >
                  <p className="leading-[16px]">Latency: 12ms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(253,247,255,0.85)] content-stretch flex flex-col items-start left-0 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.04)] top-0 w-[390px]"
        data-node-id="3:260"
        data-name="Header"
      >
        <div
          className="content-stretch flex h-[64px] items-center justify-between px-[16px] relative shrink-0 w-full"
          data-node-id="3:261"
          data-name="Container"
        >
          <div
            className="content-stretch flex gap-[8px] items-center relative shrink-0"
            data-node-id="3:262"
            data-name="Container"
          >
            <div
              className="max-w-[207.33999633789062px] relative shrink-0 size-[32px]"
              data-node-id="3:263"
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
              data-node-id="3:264"
              data-name="Container"
            >
              <div
                className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
                data-node-id="3:265"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                  data-node-id="3:266"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] whitespace-nowrap"
                    data-node-id="3:267"
                  >
                    <p className="leading-[20px]">AUCA Stock</p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                  data-node-id="3:268"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                    data-node-id="3:269"
                  >
                    <p className="leading-[15px]">• Dashboard</p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
                data-node-id="3:270"
                data-name="Container"
              >
                <div
                  className="bg-[#10b981] relative rounded-[12px] shrink-0 size-[8px]"
                  data-node-id="3:271"
                  data-name="Background"
                />
                <div
                  className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                  data-node-id="3:272"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] tracking-[-0.25px] whitespace-nowrap"
                    data-node-id="3:273"
                  >
                    <p className="leading-[15px]">API v1 Connected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[4px] items-center relative shrink-0"
            data-node-id="3:274"
            data-name="Container"
          >
            <div
              className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[44px]"
              data-node-id="3:275"
              data-name="Button - Alerts"
            >
              <div
                className="h-[18.333px] relative shrink-0 w-[14.667px]"
                data-node-id="3:276"
                data-name="Container"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgContainer16}
                />
              </div>
              <div
                className="absolute bg-[#ba1a1a] content-stretch flex flex-col items-end right-[8px] rounded-[12px] size-[8px] top-[8px]"
                data-node-id="3:278"
                data-name="Background"
              >
                <div
                  className="bg-[rgba(255,255,255,0)] relative rounded-[12px] shadow-[0px_0px_0px_2px_#fdf7ff] shrink-0 size-[8px]"
                  data-node-id="3:279"
                  data-name="Overlay+Shadow"
                />
              </div>
            </div>
            <div
              className="content-stretch flex items-center pl-[4px] relative shrink-0"
              data-node-id="3:280"
              data-name="Container"
            >
              <div
                className="max-w-[36px] relative rounded-[12px] shadow-[0px_0px_0px_2px_rgba(79,55,138,0.2)] shrink-0 size-[32px]"
                data-node-id="3:281"
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
        className="absolute backdrop-blur-[12px] bg-[rgba(253,247,255,0.9)] bottom-[0.5px] content-stretch flex flex-col items-start left-0 shadow-[0px_-2px_12px_0px_rgba(0,0,0,0.05)] w-[390px]"
        data-node-id="3:282"
        data-name="Nav"
      >
        <div
          className="content-stretch flex gap-[21.6px] h-[64px] items-center px-[4px] relative shrink-0 w-full"
          data-node-id="3:283"
          data-name="Container"
        >
          <div
            className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center min-w-[54px] relative shrink-0"
            data-node-id="3:284"
            data-name="Link"
          >
            <div
              className="relative shrink-0 size-[18px]"
              data-node-id="3:285"
              data-name="Container"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgContainer17}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0"
              data-node-id="3:287"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[11px] whitespace-nowrap"
                data-node-id="3:288"
              >
                <p className="leading-[13.75px]">Dashboard</p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center min-w-[54px] px-[4.03px] relative shrink-0"
            data-node-id="3:289"
            data-name="Link"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-node-id="3:290"
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
              data-node-id="3:292"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                data-node-id="3:293"
              >
                <p className="leading-[13.75px]">Products</p>
              </div>
            </div>
          </div>
          <div
            className="h-[36px] min-w-[56px] relative shrink-0 w-[56px]"
            data-node-id="3:294"
            data-name="Link - Record Movement:margin"
          >
            <div
              className="absolute bg-[#4f378a] content-stretch drop-shadow-[0px_4px_6px_rgba(79,55,138,0.35)] flex flex-col h-[56px] items-center justify-center left-0 min-w-[56px] pl-[15.26px] pr-[15.27px] rounded-[12px] top-[-20px]"
              data-node-id="3:295"
              data-name="Link - Record Movement"
            >
              <div
                className="h-[18px] relative shrink-0 w-[20px]"
                data-node-id="3:296"
                data-name="Container"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgContainer19}
                />
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0"
                data-node-id="3:298"
                data-name="Margin"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-white whitespace-nowrap"
                  data-node-id="3:299"
                >
                  <p className="leading-[10px]">Move</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center min-w-[54px] pl-[4px] pr-[4.02px] relative shrink-0"
            data-node-id="3:300"
            data-name="Link"
          >
            <div
              className="h-[18px] relative shrink-0 w-[20px]"
              data-node-id="3:301"
              data-name="Container"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgContainer20}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0"
              data-node-id="3:303"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                data-node-id="3:304"
              >
                <p className="leading-[13.75px]">Facilities</p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center min-w-[54px] pl-[11.45px] pr-[11.47px] relative shrink-0"
            data-node-id="3:305"
            data-name="Link"
          >
            <div
              className="h-[19px] relative shrink-0 w-[22px]"
              data-node-id="3:306"
              data-name="Container"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgContainer21}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0"
              data-node-id="3:308"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                data-node-id="3:309"
              >
                <p className="leading-[13.75px]">Alerts</p>
              </div>
            </div>
            <div
              className="absolute bg-[#ba1a1a] right-[8px] rounded-[12px] size-[8px] top-[4px]"
              data-node-id="3:310"
              data-name="Background"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
