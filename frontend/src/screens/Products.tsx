const assetPathPrefix = "/assets"
const imgAb6AXuBOsZg20KNhR9DmhXm0OorfgLpyJ7KtPdWuFlZS8TIqbi9OUnvJtRvfjxXecuBt8UZ4QQxlOzvdhtK0MxobVb0F6WZjHsl7Rv1HvIbZlibApkCDf3FiKt203MlNgLj27O1AYn0Olv5J2FYczVxbWu52O1AAa22Ih7BLPrzV9GUgjTv5POReHg3YwoikaRsIu1Yiv0GVlJ6ZilMrqDy2ImEg5Lq6LRsaOebM2PPbDy5GAvvpEvg = `${assetPathPrefix}/13389.png`
const imgAb6AXuCZwyYfGPcMiuYhP3LLIi0Lr0PUorHcWDbzLlIr53VAn4Bere6T1G1YzPWnTfZg8RP3Y5IdKUTxySv4P1E2WjEjHlmXphqMomgALlLErOvqXm2RjPFu5QKvD37Xl4TqgZoTkyNdugmBeHv31OAjU7DdNPBmvctsIt43OkCiJhAxInRLWzCow0Petq9UuYaQj1SQHbzUsNUBg35Y0XB7OQ96TYcw24GaPaXm82NgjRww = `${assetPathPrefix}/785ea.png`
const imgAb6AXuA2MUqs7FbHmcyYbRxjjGoHy8NkQcayGfuOgnoUgkcDu9HyfAsK8SQbfsrUuK8LvK0N7MJYeoCTwKJcBgWIcd1Wma0N1YMrcgCGxiTdGjGj4OgTu6ErSrlg498BfRfLDqBGr7WoiUoingfqboEhDv7RJ8CbrzFGfbTbHlOq4VRtcWQg3HgPzqftCaFo1Os2HsClzsqwNxjtCcDjQoQjgTvKeqFfvua06Zg3JIzlLe4ExRjreZaA = `${assetPathPrefix}/dbb1c.png`
const imgAb6AXuBrgQ0UChdr5BT3P4CmDVthpQSgGr1LgFkvwsrEnZpj8IImHv4X8YCv2Od9MqDhxi4LGfj3WwoVqcVmhSgCx3G9TBh2UWepWn3MQen1SLaAPdufD2DctaSaLbSjjh8QtOSpbV1ODzezfZnPqZk1Vfv3Ct9NHRiZl03TnNjvalUcP1NYvZaBDez3VpXEvfdp1UwdHaczaZqJaP4Af94IQu3Z5IskEL9XO2T7XbBcKqlw8Lj3GA = `${assetPathPrefix}/c55d3.png`
const imgAucaInventoryLogo = `${assetPathPrefix}/87b33.png`
const imgProfile = `${assetPathPrefix}/fc076.png`
const imgIcon = `${assetPathPrefix}/5d302.svg`
const imgContainer = `${assetPathPrefix}/ef3a8.svg`
const imgContainer1 = `${assetPathPrefix}/1514f.svg`
const imgContainer2 = `${assetPathPrefix}/422c3.svg`
const imgContainer3 = `${assetPathPrefix}/f682f.svg`
const imgContainer4 = `${assetPathPrefix}/7819d.svg`
const imgContainer5 = `${assetPathPrefix}/dcb4c.svg`
const imgContainer6 = `${assetPathPrefix}/24f61.svg`
const imgContainer7 = `${assetPathPrefix}/182bb.svg`
const imgContainer8 = `${assetPathPrefix}/c2fde.svg`
const imgContainer9 = `${assetPathPrefix}/6cfa0.svg`
const imgContainer10 = `${assetPathPrefix}/add51.svg`
const imgContainer11 = `${assetPathPrefix}/77d9d.svg`
const imgContainer12 = `${assetPathPrefix}/04a9a.svg`
const imgContainer13 = `${assetPathPrefix}/b2f62.svg`
const imgContainer14 = `${assetPathPrefix}/b8549.svg`
const imgContainer15 = `${assetPathPrefix}/a82ef.svg`
const imgContainer16 = `${assetPathPrefix}/69a0a.svg`
const imgContainer17 = `${assetPathPrefix}/f6c1f.svg`
const imgContainer18 = `${assetPathPrefix}/894d7.svg`
const imgContainer19 = `${assetPathPrefix}/77e25.svg`
const imgContainer20 = `${assetPathPrefix}/af8f5.svg`
const imgContainer21 = `${assetPathPrefix}/f8ab5.svg`
const imgContainer22 = `${assetPathPrefix}/196c9.svg`
const imgContainer23 = `${assetPathPrefix}/422d7.svg`
const imgContainer24 = `${assetPathPrefix}/99cd9.svg`

import { useState, useEffect } from "react"
import { api } from "../api/client"
import type { ProductResponse, WarehouseResponse } from "../api/types"

export default function ProductInventoryCatalog() {
  const [products, setProducts] = useState<ProductResponse[]>([])
  const [warehouses, setWarehouses] = useState<WarehouseResponse[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [showLowStockOnly, setShowLowStockOnly] = useState(false)

  useEffect(() => {
    async function load() {
      try {
        const [pList, wList] = await Promise.all([
          api.getProducts(),
          api.getWarehouses()
        ])
        setProducts(pList)
        setWarehouses(wList)
      } catch (e) {
        console.error("Failed to load products", e)
      }
    }
    load()
  }, [])

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.productName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLowStock = !showLowStockOnly || p.isLowStock
    return matchesSearch && matchesLowStock
  })

  return (
    <div
      className="content-stretch flex flex-col items-start relative size-full"
      data-node-id="3:311"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(253, 247, 255) 0%, rgb(253, 247, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
      data-name="Product Inventory Catalog"
    >
      <div
        className="bg-[#fdf7ff] content-stretch flex flex-col items-start pb-[96px] pt-[64px] relative shrink-0 w-full"
        data-node-id="3:312"
        data-name="Main"
      >
        <div
          className="content-stretch flex flex-col items-start px-[16px] relative shrink-0 w-full"
          data-node-id="3:313"
          data-name="Container"
        >
          <div
            className="bg-[#f8f2fa] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start p-[12px] relative rounded-[8px] shrink-0 w-full"
            data-node-id="3:314"
            data-name="Section - Search & Filter Area"
          >
            <div
              className="content-stretch flex items-center relative shrink-0 w-full"
              data-node-id="3:315"
              data-name="Search Bar"
            >
              <div
                className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip px-[40px] py-[12px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                data-node-id="3:316"
                data-name="Input"
              >
                <div
                  className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
                  data-node-id="3:317"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7582] text-[14px] w-full"
                    data-node-id="3:318"
                  >
                    <p className="leading-[normal]">
                      Search SKU or product name...
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="absolute left-[14.5px] size-[15px] top-[12.5px]"
                data-node-id="3:319"
                data-name="Icon"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgIcon}
                />
              </div>
            </div>
            <div
              className="h-[36px] overflow-auto relative shrink-0 w-full"
              data-node-id="3:320"
              data-name="Scrollable Filter Chips"
            >
              <div
                className="-translate-y-1/2 absolute bg-[#4f378a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[4px] items-center left-0 px-[12px] py-[6px] rounded-[12px] top-[calc(50%-2px)]"
                data-node-id="3:321"
                data-name="Button"
              >
                <div
                  className="content-stretch flex flex-col items-center relative shrink-0"
                  data-node-id="3:322"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap"
                    data-node-id="3:323"
                  >
                    <p className="leading-[16px]">All</p>
                  </div>
                </div>
                <div
                  className="bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-center px-[6px] py-[2px] relative rounded-[12px] shrink-0"
                  data-node-id="3:324"
                  data-name="Overlay"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white whitespace-nowrap"
                    data-node-id="3:325"
                  >
                    <p className="leading-[16px]">1,428</p>
                  </div>
                </div>
              </div>
              <div
                className="-translate-y-1/2 absolute bg-[#e6e0e9] content-stretch flex gap-[4px] items-center left-[90.03px] px-[12px] py-[6px] rounded-[12px] top-[calc(50%-2px)]"
                data-node-id="3:326"
                data-name="Button"
              >
                <div
                  className="bg-[#ba1a1a] relative rounded-[12px] shrink-0 size-[6px]"
                  data-node-id="3:327"
                  data-name="Background"
                />
                <div
                  className="content-stretch flex flex-col items-center relative shrink-0"
                  data-node-id="3:328"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] text-center whitespace-nowrap"
                    data-node-id="3:329"
                  >
                    <p className="leading-[16px]">Low Stock</p>
                  </div>
                </div>
                <div
                  className="bg-[#ded8e0] content-stretch flex flex-col items-center px-[6px] py-[2px] relative rounded-[12px] shrink-0"
                  data-node-id="3:330"
                  data-name="Background"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] text-center whitespace-nowrap"
                    data-node-id="3:331"
                  >
                    <p className="leading-[16px]">14</p>
                  </div>
                </div>
              </div>
              <div
                className="-translate-y-1/2 absolute bg-[#e6e0e9] content-stretch flex flex-col items-center justify-center left-[216.72px] px-[12px] py-[6px] rounded-[12px] top-[calc(50%-2px)]"
                data-node-id="3:332"
                data-name="Button"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] text-center whitespace-nowrap"
                  data-node-id="3:333"
                >
                  <p className="leading-[16px]">Central WH</p>
                </div>
              </div>
              <div
                className="-translate-y-1/2 absolute bg-[#e6e0e9] content-stretch flex flex-col items-center justify-center left-[313.66px] px-[12px] py-[6px] rounded-[12px] top-[calc(50%-2px)]"
                data-node-id="3:334"
                data-name="Button"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] text-center whitespace-nowrap"
                  data-node-id="3:335"
                >
                  <p className="leading-[16px]">IT Dept</p>
                </div>
              </div>
              <div
                className="-translate-y-1/2 absolute bg-[#e6e0e9] content-stretch flex flex-col items-center justify-center left-[386.13px] px-[12px] py-[6px] rounded-[12px] top-[calc(50%-2px)]"
                data-node-id="3:336"
                data-name="Button"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] text-center whitespace-nowrap"
                  data-node-id="3:337"
                >
                  <p className="leading-[16px]">Stationery</p>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex items-center justify-between pt-[4px] relative shrink-0 w-full"
              data-node-id="3:338"
              data-name="Toggle Row: Show Low Stock Only"
            >
              <div
                className="content-stretch flex gap-[8px] items-center relative shrink-0"
                data-node-id="3:339"
                data-name="Container"
              >
                <div
                  className="h-[13.5px] relative shrink-0 w-[3px]"
                  data-node-id="3:340"
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
                  data-node-id="3:342"
                  data-name="Label"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                    data-node-id="3:343"
                  >
                    <p className="leading-[16px]">Show Low Stock Only</p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex items-center relative shrink-0"
                data-node-id="3:344"
                data-name="Label"
              >
                <div
                  className="bg-[#e6e0e9] h-[24px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[40px]"
                  data-node-id="3:345"
                  data-name="Background+Shadow"
                />
                <div
                  className="absolute bg-white left-[2px] rounded-[12px] size-[20px] top-[2px]"
                  data-node-id="3:346"
                  data-name="Background"
                />
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full"
            data-node-id="3:347"
            data-name="Section - Inventory Meta Count & Sort Header:margin"
          >
            <div
              className="content-stretch flex items-center justify-between relative shrink-0 w-full"
              data-node-id="3:348"
              data-name="Section - Inventory Meta Count & Sort Header"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0"
                data-node-id="3:349"
                data-name="Container"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                  data-node-id="3:350"
                >
                  <p>
                    <span className="leading-[16px]">{`Showing `}</span>
                    <span className="[word-break:break-word] font-['Public_Sans:Bold'] font-bold leading-[16px] text-[#1d1b20]">
                      10
                    </span>
                    <span className="leading-[16px]">{` of `}</span>
                    <span className="[word-break:break-word] font-['Public_Sans:Bold'] font-bold leading-[16px] text-[#1d1b20]">
                      1,428
                    </span>
                    <span className="leading-[16px]">{` products`}</span>
                  </p>
                </div>
              </div>
              <div
                className="content-stretch flex items-center relative shrink-0"
                data-node-id="3:351"
                data-name="Container"
              >
                <div
                  className="bg-[#f2ecf4] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start justify-center pl-[8px] pr-[28px] py-[6px] relative rounded-[4px] shrink-0"
                  data-node-id="3:352"
                  data-name="Options"
                >
                  <div
                    className="content-stretch flex flex-col items-start pr-[0.61px] relative shrink-0"
                    data-node-id="3:353"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                      data-node-id="3:354"
                    >
                      <p className="leading-[16px]">
                        Sort: Stock (Low to High)
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[4.933px] right-[6px] top-[2px] w-[8px]"
                  data-node-id="3:355"
                  data-name="Container"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgContainer1}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full"
            data-node-id="3:357"
            data-name="Product Catalog Cards:margin"
          >
            <div
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
              data-node-id="3:358"
              data-name="Product Catalog Cards"
            >
              <div
                className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[14px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full"
                data-node-id="3:359"
                data-name="Article - Card 1: Epson EcoTank Ink (Low Stock Alert)"
              >
                <div
                  className="content-stretch flex items-start relative shrink-0 w-full"
                  data-node-id="3:360"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex gap-[12px] items-start relative shrink-0"
                    data-node-id="3:361"
                    data-name="Container"
                  >
                    <div
                      className="bg-[#f2ecf4] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[64px]"
                      data-node-id="3:362"
                      data-name="Background+Shadow"
                    >
                      <div
                        className="flex-[1_0_0] min-h-px relative w-full"
                        data-node-id="3:363"
                        data-name="AB6AXuBOsZg20kNhR9dmhXm0OorfgLpyJ7KtPDWuFlZ-s8TIqbi9oUNVJtRvfjxXecu_BT8uZ4qQxlOzvdhtK0MxobVb0f6WZjHsl7Rv1hvIBZlibApkCDf3fiKT203MlNGLj27O1aYn0Olv5J2f-YCZVxbWU52o1aAa22ih7bLPrzV9GUgjTv5pOReHg3ywoikaRsIU1-YIV0GVlJ6ZilMRQDy2Im_Eg5LQ6lRsaOEB_m2pPbDY-5gAvvpEvg"
                      >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img
                            alt=""
                            className="absolute h-full left-[-41.76%] max-w-none top-0 w-[183.51%]"
                            src={
                              imgAb6AXuBOsZg20KNhR9DmhXm0OorfgLpyJ7KtPdWuFlZS8TIqbi9OUnvJtRvfjxXecuBt8UZ4QQxlOzvdhtK0MxobVb0F6WZjHsl7Rv1HvIbZlibApkCDf3FiKt203MlNgLj27O1AYn0Olv5J2FYczVxbWu52O1AAa22Ih7BLPrzV9GUgjTv5POReHg3YwoikaRsIu1Yiv0GVlJ6ZilMrqDy2ImEg5Lq6LRsaOebM2PPbDy5GAvvpEvg
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative self-stretch shrink-0"
                      data-node-id="3:364"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
                        data-node-id="3:365"
                        data-name="Container"
                      >
                        <div
                          className="bg-[#ece6ee] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[2px] shrink-0"
                          data-node-id="3:366"
                          data-name="Background"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap"
                            data-node-id="3:367"
                          >
                            <p className="leading-[15px]">ST-INK-009</p>
                          </div>
                        </div>
                        <div
                          className="bg-[#ffdad6] content-stretch flex gap-[2px] items-center px-[8px] py-[2px] relative rounded-[12px] shrink-0"
                          data-node-id="3:368"
                          data-name="Background"
                        >
                          <div
                            className="h-[10.292px] relative shrink-0 w-[11.917px]"
                            data-node-id="3:369"
                            data-name="Container"
                          >
                            <img
                              alt=""
                              className="absolute block inset-0 max-w-none size-full"
                              src={imgContainer2}
                            />
                          </div>
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#93000a] text-[10px] whitespace-nowrap"
                            data-node-id="3:371"
                          >
                            <p className="leading-[15px]">LOW STOCK</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full"
                        data-node-id="3:372"
                        data-name="Heading 2:margin"
                      >
                        <div
                          className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
                          data-node-id="3:373"
                          data-name="Heading 2"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] w-full"
                            data-node-id="3:374"
                          >
                            <p className="leading-[20px]">
                              Epson L3250 EcoTank Ink (Black)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full"
                        data-node-id="3:375"
                        data-name="Margin"
                      >
                        <div
                          className="h-[20px] overflow-clip relative shrink-0 w-full"
                          data-node-id="3:376"
                          data-name="Container"
                        >
                          <div
                            className="-translate-y-1/2 absolute h-[10.5px] left-0 top-1/2 w-[11.667px]"
                            data-node-id="3:377"
                            data-name="Container"
                          >
                            <img
                              alt=""
                              className="absolute block inset-0 max-w-none size-full"
                              src={imgContainer3}
                            />
                          </div>
                          <div
                            className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] left-[18.02px] text-[#494551] text-[12px] top-1/2 whitespace-nowrap"
                            data-node-id="3:379"
                          >
                            <p className="leading-[16px]">
                              Central Warehouse Gishushu (WH-KGL-001)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#f8f2fa] content-stretch flex items-center justify-between p-[10px] relative rounded-[4px] shrink-0 w-full"
                  data-node-id="3:380"
                  data-name="Metric Visual Row"
                >
                  <div
                    className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0"
                    data-node-id="3:381"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="3:382"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                        data-node-id="3:383"
                      >
                        <p className="leading-[16.5px]">Stock Level</p>
                      </div>
                    </div>
                    <div
                      className="[word-break:break-word] content-stretch flex gap-[4px] items-baseline leading-[0] relative shrink-0 w-full whitespace-nowrap"
                      data-node-id="3:384"
                      data-name="Paragraph"
                    >
                      <div
                        className="flex flex-col font-['Public_Sans:Bold'] font-bold justify-center relative shrink-0 text-[#ba1a1a] text-[16px]"
                        data-node-id="3:385"
                      >
                        <p className="leading-[24px]">4</p>
                      </div>
                      <div
                        className="flex flex-col font-['Public_Sans:Regular'] font-normal justify-center relative shrink-0 text-[#494551] text-[11px]"
                        data-node-id="3:386"
                      >
                        <p className="leading-[16.5px]">/ 15 reorder min</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-[96px]"
                    data-node-id="3:387"
                    data-name="Micro stock meter bar"
                  >
                    <div
                      className="bg-[#e6e0e9] h-[8px] overflow-clip relative rounded-[12px] shrink-0 w-full"
                      data-node-id="3:388"
                      data-name="Background"
                    >
                      <div
                        className="absolute bg-[#ba1a1a] inset-[0_74.01%_0_0] rounded-[12px]"
                        data-node-id="3:389"
                        data-name="Background"
                      />
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:390"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[9px] whitespace-nowrap"
                        data-node-id="3:391"
                      >
                        <p className="leading-[13.5px]">26% safe range</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0"
                    data-node-id="3:392"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-end relative shrink-0 w-full"
                      data-node-id="3:393"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] text-right whitespace-nowrap"
                        data-node-id="3:394"
                      >
                        <p className="leading-[16.5px]">Unit Price</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-end relative shrink-0 w-full"
                      data-node-id="3:395"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] text-right whitespace-nowrap"
                        data-node-id="3:396"
                      >
                        <p className="leading-[20px]">$18.50</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex gap-[8px] items-center pt-[2px] relative shrink-0 w-full"
                  data-node-id="3:397"
                  data-name="Action Footer"
                >
                  <div
                    className="bg-[#4f378a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] gap-[6px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[4px]"
                    data-node-id="3:398"
                    data-name="Button"
                  >
                    <div
                      className="h-[13.333px] relative shrink-0 w-[10.667px]"
                      data-node-id="3:399"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer4}
                      />
                    </div>
                    <div
                      className="content-stretch flex flex-col items-center relative shrink-0"
                      data-node-id="3:401"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap"
                        data-node-id="3:402"
                      >
                        <p className="leading-[16px]">Restock</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#ece6ee] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0"
                    data-node-id="3:403"
                    data-name="Button"
                  >
                    <div
                      className="relative shrink-0 size-[12px]"
                      data-node-id="3:404"
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
                      data-node-id="3:406"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] text-center whitespace-nowrap"
                        data-node-id="3:407"
                      >
                        <p className="leading-[16px]">Edit</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="3:408"
                    data-name="Disabled Delete with Tooltip simulation"
                  >
                    <div
                      className="bg-[#e6e0e9] content-stretch flex items-center justify-center opacity-40 p-[8px] relative rounded-[4px] shrink-0"
                      data-node-id="3:409"
                      data-name="Button - Cannot delete: stock exists"
                    >
                      <div
                        className="h-[12px] relative shrink-0 w-[10.667px]"
                        data-node-id="3:410"
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
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full"
                data-node-id="3:412"
                data-name="Article - Card 2: Dell Latitude 5540 Core i7 (In Stock):margin"
              >
                <div
                  className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[14px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full"
                  data-node-id="3:413"
                  data-name="Article - Card 2: Dell Latitude 5540 Core i7 (In Stock)"
                >
                  <div
                    className="content-stretch flex items-start relative shrink-0 w-full"
                    data-node-id="3:414"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex gap-[12px] items-start relative shrink-0"
                      data-node-id="3:415"
                      data-name="Container"
                    >
                      <div
                        className="bg-[#f2ecf4] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[64px]"
                        data-node-id="3:416"
                        data-name="Background+Shadow"
                      >
                        <div
                          className="flex-[1_0_0] min-h-px relative w-full"
                          data-node-id="3:417"
                          data-name="AB6AXuCZwyYfGPcMIUYhP3lLIi0lr0pUORHcWDbzLLIr53vAn4BERE-6t1G1yzP_WN-TfZg8rP3y5id_kUTxySV4p1e2wjEj-HlmXPHQMomgALlLErOvqXM2rjPFu5qKvD37xl4tqgZO_TkyNdugmBEHv31oAjU7DdN_P--Bmvcts--it43OKCiJhAXIn-rLWzCow0Petq9uuYAQj1sQHbz_UsN_uBg35y0xB7oQ96TYcw24gaPAXm82NgjRww"
                        >
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img
                              alt=""
                              className="absolute h-full left-[-41.76%] max-w-none top-0 w-[183.51%]"
                              src={
                                imgAb6AXuCZwyYfGPcMiuYhP3LLIi0Lr0PUorHcWDbzLlIr53VAn4Bere6T1G1YzPWnTfZg8RP3Y5IdKUTxySv4P1E2WjEjHlmXphqMomgALlLErOvqXm2RjPFu5QKvD37Xl4TqgZoTkyNdugmBeHv31OAjU7DdNPBmvctsIt43OkCiJhAxInRLWzCow0Petq9UuYaQj1SQHbzUsNUBg35Y0XB7OQ96TYcw24GaPaXm82NgjRww
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative self-stretch shrink-0"
                        data-node-id="3:418"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
                          data-node-id="3:419"
                          data-name="Container"
                        >
                          <div
                            className="bg-[#ece6ee] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[2px] shrink-0"
                            data-node-id="3:420"
                            data-name="Background"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap"
                              data-node-id="3:421"
                            >
                              <p className="leading-[15px]">IT-LAP-042</p>
                            </div>
                          </div>
                          <div
                            className="bg-[#e9ddff] content-stretch flex gap-[2px] items-center px-[8px] py-[2px] relative rounded-[12px] shrink-0"
                            data-node-id="3:422"
                            data-name="Background"
                          >
                            <div
                              className="relative shrink-0 size-[10.833px]"
                              data-node-id="3:423"
                              data-name="Container"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgContainer7}
                              />
                            </div>
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#22005d] text-[10px] whitespace-nowrap"
                              data-node-id="3:425"
                            >
                              <p className="leading-[15px]">IN STOCK</p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full"
                          data-node-id="3:426"
                          data-name="Heading 2:margin"
                        >
                          <div
                            className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
                            data-node-id="3:427"
                            data-name="Heading 2"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] w-full"
                              data-node-id="3:428"
                            >
                              <p className="leading-[20px]">
                                Dell Latitude 5540 Core i7
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full"
                          data-node-id="3:429"
                          data-name="Margin"
                        >
                          <div
                            className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full"
                            data-node-id="3:430"
                            data-name="Container"
                          >
                            <div
                              className="h-[10.5px] relative shrink-0 w-[10.533px]"
                              data-node-id="3:431"
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
                              data-node-id="3:433"
                            >
                              <p className="leading-[16px]">{`Science & Tech Lab Depot (WH-KGL-002)`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#f8f2fa] content-stretch flex items-center justify-between p-[10px] relative rounded-[4px] shrink-0 w-full"
                    data-node-id="3:434"
                    data-name="Metric Visual Row"
                  >
                    <div
                      className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0"
                      data-node-id="3:435"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="3:436"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                          data-node-id="3:437"
                        >
                          <p className="leading-[16.5px]">Current Stock</p>
                        </div>
                      </div>
                      <div
                        className="[word-break:break-word] content-stretch flex gap-[4px] items-baseline leading-[0] relative shrink-0 w-full whitespace-nowrap"
                        data-node-id="3:438"
                        data-name="Paragraph"
                      >
                        <div
                          className="flex flex-col font-['Public_Sans:Bold'] font-bold justify-center relative shrink-0 text-[#1d1b20] text-[16px]"
                          data-node-id="3:439"
                        >
                          <p className="leading-[24px]">48</p>
                        </div>
                        <div
                          className="flex flex-col font-['Public_Sans:Regular'] font-normal justify-center relative shrink-0 text-[#494551] text-[11px]"
                          data-node-id="3:440"
                        >
                          <p className="leading-[16.5px]">units (min 10)</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-[96px]"
                      data-node-id="3:441"
                      data-name="Container"
                    >
                      <div
                        className="bg-[#e6e0e9] content-stretch flex flex-col h-[8px] items-start justify-center overflow-clip relative rounded-[12px] shrink-0 w-full"
                        data-node-id="3:442"
                        data-name="Background"
                      >
                        <div
                          className="bg-[#4f378a] flex-[1_0_0] min-h-px relative rounded-[12px] w-full"
                          data-node-id="3:443"
                          data-name="Background"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="3:444"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[9px] whitespace-nowrap"
                          data-node-id="3:445"
                        >
                          <p className="leading-[13.5px]">Optimal levels</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0"
                      data-node-id="3:446"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-end relative shrink-0 w-full"
                        data-node-id="3:447"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] text-right whitespace-nowrap"
                          data-node-id="3:448"
                        >
                          <p className="leading-[16.5px]">Unit Price</p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-end relative shrink-0 w-full"
                        data-node-id="3:449"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] text-right whitespace-nowrap"
                          data-node-id="3:450"
                        >
                          <p className="leading-[20px]">$890.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex gap-[8px] items-center pt-[2px] relative shrink-0 w-full"
                    data-node-id="3:451"
                    data-name="Action Footer"
                  >
                    <div
                      className="bg-[#ece6ee] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] gap-[6px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[4px]"
                      data-node-id="3:452"
                      data-name="Button"
                    >
                      <div
                        className="h-[10.667px] relative shrink-0 w-[13.333px]"
                        data-node-id="3:453"
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
                        data-node-id="3:455"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] text-center whitespace-nowrap"
                          data-node-id="3:456"
                        >
                          <p className="leading-[16px]">Move Stock</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-[#e9ddff] content-stretch flex flex-[1_0_0] gap-[6px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[4px]"
                      data-node-id="3:457"
                      data-name="Button"
                    >
                      <div
                        className="relative shrink-0 size-[13.333px]"
                        data-node-id="3:458"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer10}
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-center relative shrink-0"
                        data-node-id="3:460"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1f1635] text-[12px] text-center whitespace-nowrap"
                          data-node-id="3:461"
                        >
                          <p className="leading-[16px]">Details</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full"
                data-node-id="3:462"
                data-name="Article - Card 3: Logitech M185 Wireless Mouse (Out of Stock):margin"
              >
                <div
                  className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[14px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full"
                  data-node-id="3:463"
                  data-name="Article - Card 3: Logitech M185 Wireless Mouse (Out of Stock)"
                >
                  <div
                    className="content-stretch flex items-start relative shrink-0 w-full"
                    data-node-id="3:464"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex gap-[12px] items-start relative shrink-0"
                      data-node-id="3:465"
                      data-name="Container"
                    >
                      <div
                        className="bg-[#f2ecf4] content-stretch flex flex-col items-start justify-center opacity-80 overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[64px]"
                        data-node-id="3:466"
                        data-name="Background+Shadow"
                      >
                        <div
                          className="flex-[1_0_0] min-h-px relative w-full"
                          data-node-id="3:467"
                          data-name="AB6AXuA2m-Uqs7FbHmcyYbRXJJGoHY8nkQcayGFUOgnoUgkcDU9HyfAs-k8SQbfsrUuK8lvK0N7mJYeoCTwKJcBgWIcd_1wma0n1yMrcgCGxiTDGjGj4ogTu6ErSRLG498bfRfLDqBGr7WOI-uoingfqboEhDV7rJ8cbrzFGfbTBHlOq4vRtcWQg3HGPzqftCaFO1OS2HSClzsqwNxjt_CcDJQoQjg_TvKeqFfvua06ZG3jIZLLe4exRJREZaA"
                        >
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img
                              alt=""
                              className="absolute h-full left-[-41.76%] max-w-none top-0 w-[183.51%]"
                              src={
                                imgAb6AXuA2MUqs7FbHmcyYbRxjjGoHy8NkQcayGfuOgnoUgkcDu9HyfAsK8SQbfsrUuK8LvK0N7MJYeoCTwKJcBgWIcd1Wma0N1YMrcgCGxiTdGjGj4OgTu6ErSrlg498BfRfLDqBGr7WoiUoingfqboEhDv7RJ8CbrzFGfbTbHlOq4VRtcWQg3HgPzqftCaFo1Os2HsClzsqwNxjtCcDjQoQjgTvKeqFfvua06Zg3JIzlLe4ExRjreZaA
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative self-stretch shrink-0"
                        data-node-id="3:468"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
                          data-node-id="3:469"
                          data-name="Container"
                        >
                          <div
                            className="bg-[#ece6ee] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[2px] shrink-0"
                            data-node-id="3:470"
                            data-name="Background"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap"
                              data-node-id="3:471"
                            >
                              <p className="leading-[15px]">IT-ACC-028</p>
                            </div>
                          </div>
                          <div
                            className="bg-[#e6e0e9] content-stretch flex gap-[2px] items-center px-[8px] py-[2px] relative rounded-[12px] shrink-0"
                            data-node-id="3:472"
                            data-name="Background"
                          >
                            <div
                              className="relative shrink-0 size-[10.833px]"
                              data-node-id="3:473"
                              data-name="Container"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgContainer11}
                              />
                            </div>
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                              data-node-id="3:475"
                            >
                              <p className="leading-[15px]">OUT OF STOCK</p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full"
                          data-node-id="3:476"
                          data-name="Heading 2:margin"
                        >
                          <div
                            className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
                            data-node-id="3:477"
                            data-name="Heading 2"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] w-full"
                              data-node-id="3:478"
                            >
                              <p className="leading-[20px]">
                                Logitech M185 Wireless Mouse
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full"
                          data-node-id="3:479"
                          data-name="Margin"
                        >
                          <div
                            className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full"
                            data-node-id="3:480"
                            data-name="Container"
                          >
                            <div
                              className="h-[10.5px] relative shrink-0 w-[11.667px]"
                              data-node-id="3:481"
                              data-name="Container"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgContainer12}
                              />
                            </div>
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                              data-node-id="3:483"
                            >
                              <p className="leading-[16px]">
                                Central Warehouse (WH-KGL-001)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#f8f2fa] content-stretch flex items-center justify-between p-[10px] relative rounded-[4px] shrink-0 w-full"
                    data-node-id="3:484"
                    data-name="Metric Visual Row"
                  >
                    <div
                      className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0"
                      data-node-id="3:485"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="3:486"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                          data-node-id="3:487"
                        >
                          <p className="leading-[16.5px]">Current Stock</p>
                        </div>
                      </div>
                      <div
                        className="[word-break:break-word] content-stretch flex gap-[4px] items-baseline leading-[0] relative shrink-0 w-full whitespace-nowrap"
                        data-node-id="3:488"
                        data-name="Paragraph"
                      >
                        <div
                          className="flex flex-col font-['Public_Sans:Bold'] font-bold justify-center relative shrink-0 text-[#494551] text-[16px]"
                          data-node-id="3:489"
                        >
                          <p className="leading-[24px]">0</p>
                        </div>
                        <div
                          className="flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center relative shrink-0 text-[#ba1a1a] text-[11px]"
                          data-node-id="3:490"
                        >
                          <p className="leading-[16.5px]">(Threshold: 20)</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-[96px]"
                      data-node-id="3:491"
                      data-name="Container"
                    >
                      <div
                        className="bg-[#e6e0e9] h-[8px] relative rounded-[12px] shrink-0 w-full"
                        data-node-id="3:492"
                        data-name="Background"
                      />
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="3:493"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[9px] whitespace-nowrap"
                          data-node-id="3:494"
                        >
                          <p className="leading-[13.5px]">Depleted</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0"
                      data-node-id="3:495"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-end relative shrink-0 w-full"
                        data-node-id="3:496"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] text-right whitespace-nowrap"
                          data-node-id="3:497"
                        >
                          <p className="leading-[16.5px]">Unit Price</p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-end relative shrink-0 w-full"
                        data-node-id="3:498"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] text-right whitespace-nowrap"
                          data-node-id="3:499"
                        >
                          <p className="leading-[20px]">$14.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex gap-[8px] items-center pt-[2px] relative shrink-0 w-full"
                    data-node-id="3:500"
                    data-name="Action Footer"
                  >
                    <div
                      className="bg-[#765b00] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] gap-[6px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[4px]"
                      data-node-id="3:501"
                      data-name="Button"
                    >
                      <div
                        className="h-[13.333px] relative shrink-0 w-[10.667px]"
                        data-node-id="3:502"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer13}
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-center relative shrink-0"
                        data-node-id="3:504"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap"
                          data-node-id="3:505"
                        >
                          <p className="leading-[16px]">Emergency Order</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-[#ffdad6] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0"
                      data-node-id="3:506"
                      data-name="Button - Active Delete since stock === 0"
                    >
                      <div
                        className="h-[12px] relative shrink-0 w-[10.667px]"
                        data-node-id="3:507"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer14}
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-center relative shrink-0"
                        data-node-id="3:509"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#93000a] text-[12px] text-center whitespace-nowrap"
                          data-node-id="3:510"
                        >
                          <p className="leading-[16px]">Delete</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full"
                data-node-id="3:511"
                data-name="Article - Card 4: Classroom Whiteboard Markers (Box of 12):margin"
              >
                <div
                  className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[14px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full"
                  data-node-id="3:512"
                  data-name="Article - Card 4: Classroom Whiteboard Markers (Box of 12)"
                >
                  <div
                    className="content-stretch flex items-start relative shrink-0 w-full"
                    data-node-id="3:513"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex gap-[12px] items-start relative shrink-0"
                      data-node-id="3:514"
                      data-name="Container"
                    >
                      <div
                        className="bg-[#f2ecf4] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[64px]"
                        data-node-id="3:515"
                        data-name="Background+Shadow"
                      >
                        <div
                          className="flex-[1_0_0] min-h-px relative w-full"
                          data-node-id="3:516"
                          data-name="AB6AXuBrgQ0uCHDR5-bT3-p4cmDVthpQSgGr1lgFkvwsrEnZPJ8IImHV4x8_YCv2od9MQDhxi4LGfj3WwoVqcVMHSg_CX3g9t_Bh2UWepWN3mQen1SLaAPdufD2DctaSaLbSjjh8QtOSpbV1oDzezfZnPqZK1Vfv3CT9nHRiZl03TNNjvalUcP1NYvZA-bDez3vpXEvfdp1UwdHACZA-ZQJaP4Af94iQu3Z5ISK_eL9xO2T7xbBcKqlw8lj3gA"
                        >
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img
                              alt=""
                              className="absolute h-full left-[-41.76%] max-w-none top-0 w-[183.51%]"
                              src={
                                imgAb6AXuBrgQ0UChdr5BT3P4CmDVthpQSgGr1LgFkvwsrEnZpj8IImHv4X8YCv2Od9MqDhxi4LGfj3WwoVqcVmhSgCx3G9TBh2UWepWn3MQen1SLaAPdufD2DctaSaLbSjjh8QtOSpbV1ODzezfZnPqZk1Vfv3Ct9NHRiZl03TnNjvalUcP1NYvZaBDez3VpXEvfdp1UwdHaczaZqJaP4Af94IQu3Z5IskEL9XO2T7XbBcKqlw8Lj3GA
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative self-stretch shrink-0"
                        data-node-id="3:517"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
                          data-node-id="3:518"
                          data-name="Container"
                        >
                          <div
                            className="bg-[#ece6ee] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[2px] shrink-0"
                            data-node-id="3:519"
                            data-name="Background"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap"
                              data-node-id="3:520"
                            >
                              <p className="leading-[15px]">ST-MKR-004</p>
                            </div>
                          </div>
                          <div
                            className="bg-[#e9ddff] content-stretch flex gap-[1.99px] items-center px-[8px] py-[2px] relative rounded-[12px] shrink-0"
                            data-node-id="3:521"
                            data-name="Background"
                          >
                            <div
                              className="relative shrink-0 size-[10.833px]"
                              data-node-id="3:522"
                              data-name="Container"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgContainer7}
                              />
                            </div>
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#22005d] text-[10px] whitespace-nowrap"
                              data-node-id="3:524"
                            >
                              <p className="leading-[15px]">IN STOCK</p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full"
                          data-node-id="3:525"
                          data-name="Heading 2:margin"
                        >
                          <div
                            className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
                            data-node-id="3:526"
                            data-name="Heading 2"
                          >
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#1d1b20] text-[14px] text-ellipsis w-full"
                              data-node-id="3:527"
                            >
                              <p className="leading-[20px]">
                                Classroom Whiteboard Markers (Box of 12)
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full"
                          data-node-id="3:528"
                          data-name="Margin"
                        >
                          <div
                            className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full"
                            data-node-id="3:529"
                            data-name="Container"
                          >
                            <div
                              className="relative shrink-0 size-[10.5px]"
                              data-node-id="3:530"
                              data-name="Container"
                            >
                              <img
                                alt=""
                                className="absolute block inset-0 max-w-none size-full"
                                src={imgContainer15}
                              />
                            </div>
                            <div
                              className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                              data-node-id="3:532"
                            >
                              <p className="leading-[16px]">
                                Main Campus Admin (WH-KGL-004)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#f8f2fa] content-stretch flex items-center justify-between p-[10px] relative rounded-[4px] shrink-0 w-full"
                    data-node-id="3:533"
                    data-name="Metric Visual Row"
                  >
                    <div
                      className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0"
                      data-node-id="3:534"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="3:535"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                          data-node-id="3:536"
                        >
                          <p className="leading-[16.5px]">Current Stock</p>
                        </div>
                      </div>
                      <div
                        className="[word-break:break-word] content-stretch flex gap-[4px] items-baseline leading-[0] relative shrink-0 w-full whitespace-nowrap"
                        data-node-id="3:537"
                        data-name="Paragraph"
                      >
                        <div
                          className="flex flex-col font-['Public_Sans:Bold'] font-bold justify-center relative shrink-0 text-[#1d1b20] text-[16px]"
                          data-node-id="3:538"
                        >
                          <p className="leading-[24px]">120</p>
                        </div>
                        <div
                          className="flex flex-col font-['Public_Sans:Regular'] font-normal justify-center relative shrink-0 text-[#494551] text-[11px]"
                          data-node-id="3:539"
                        >
                          <p className="leading-[16.5px]">boxes (min 30)</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-[96px]"
                      data-node-id="3:540"
                      data-name="Container"
                    >
                      <div
                        className="bg-[#e6e0e9] h-[8px] overflow-clip relative rounded-[12px] shrink-0 w-full"
                        data-node-id="3:541"
                        data-name="Background"
                      >
                        <div
                          className="absolute bg-[#4f378a] inset-[0_15.01%_0_0] rounded-[12px]"
                          data-node-id="3:542"
                          data-name="Background"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="3:543"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[9px] whitespace-nowrap"
                          data-node-id="3:544"
                        >
                          <p className="leading-[13.5px]">Surplus</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0"
                      data-node-id="3:545"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-end relative shrink-0 w-full"
                        data-node-id="3:546"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] text-right whitespace-nowrap"
                          data-node-id="3:547"
                        >
                          <p className="leading-[16.5px]">Unit Price</p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-end relative shrink-0 w-full"
                        data-node-id="3:548"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] text-right whitespace-nowrap"
                          data-node-id="3:549"
                        >
                          <p className="leading-[20px]">$8.25</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex gap-[8px] items-center pt-[2px] relative shrink-0 w-full"
                    data-node-id="3:550"
                    data-name="Action Footer"
                  >
                    <div
                      className="bg-[#ece6ee] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] gap-[6px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[4px]"
                      data-node-id="3:551"
                      data-name="Button"
                    >
                      <div
                        className="h-[10.667px] relative shrink-0 w-[13.333px]"
                        data-node-id="3:552"
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
                        data-node-id="3:554"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] text-center whitespace-nowrap"
                          data-node-id="3:555"
                        >
                          <p className="leading-[16px]">Move Stock</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-[#e9ddff] content-stretch flex flex-[1_0_0] gap-[6px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[4px]"
                      data-node-id="3:556"
                      data-name="Button"
                    >
                      <div
                        className="relative shrink-0 size-[13.333px]"
                        data-node-id="3:557"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer10}
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-center relative shrink-0"
                        data-node-id="3:559"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1f1635] text-[12px] text-center whitespace-nowrap"
                          data-node-id="3:560"
                        >
                          <p className="leading-[16px]">Details</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full"
            data-node-id="3:561"
            data-name="Section - Pagination & Page Size Controls:margin"
          >
            <div
              className="bg-[#f8f2fa] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-center p-[12px] relative rounded-[8px] shrink-0 w-full"
              data-node-id="3:562"
              data-name="Section - Pagination & Page Size Controls"
            >
              <div
                className="content-stretch flex gap-[8px] items-center relative shrink-0"
                data-node-id="3:563"
                data-name="Page Size Selector"
              >
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="3:564"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                    data-node-id="3:565"
                  >
                    <p className="leading-[16px]">Rows per page:</p>
                  </div>
                </div>
                <div
                  className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center p-[2px] relative rounded-[4px] shrink-0"
                  data-node-id="3:566"
                  data-name="Background+Shadow"
                >
                  <div
                    className="bg-[#4f378a] content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative rounded-[2px] shrink-0"
                    data-node-id="3:567"
                    data-name="Button"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap"
                      data-node-id="3:568"
                    >
                      <p className="leading-[16px]">10</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative rounded-[2px] shrink-0"
                    data-node-id="3:569"
                    data-name="Button"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] text-center whitespace-nowrap"
                      data-node-id="3:570"
                    >
                      <p className="leading-[16px]">25</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative rounded-[2px] shrink-0"
                    data-node-id="3:571"
                    data-name="Button"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] text-center whitespace-nowrap"
                      data-node-id="3:572"
                    >
                      <p className="leading-[16px]">50</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[12px] items-center relative shrink-0"
                data-node-id="3:573"
                data-name="Navigation & Counter"
              >
                <div
                  className="bg-[#e6e0e9] content-stretch flex items-center justify-center opacity-40 relative rounded-[4px] shrink-0 size-[32px]"
                  data-node-id="3:574"
                  data-name="Button"
                >
                  <div
                    className="h-[8px] relative shrink-0 w-[4.933px]"
                    data-node-id="3:575"
                    data-name="Container"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgContainer16}
                    />
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="3:577"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                    data-node-id="3:578"
                  >
                    <p className="leading-[16px]">Page 1 of 143</p>
                  </div>
                </div>
                <div
                  className="bg-[#f2ecf4] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]"
                  data-node-id="3:579"
                  data-name="Button"
                >
                  <div
                    className="h-[8px] relative shrink-0 w-[4.933px]"
                    data-node-id="3:580"
                    data-name="Container"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgContainer17}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-[80px] content-stretch flex flex-col items-start right-[16px]"
        data-node-id="3:582"
        data-name="Floating Action Button for + New Product"
      >
        <div
          className="bg-[#4f378a] content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative rounded-[12px] shrink-0"
          data-node-id="3:583"
          data-name="Button - Add New Product"
        >
          <div
            className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.67px_0_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
            data-node-id="3:584"
            data-name="Button - Add New Product:shadow"
          />
          <div
            className="relative shrink-0 size-[11.667px]"
            data-node-id="3:585"
            data-name="Container"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgContainer18}
            />
          </div>
          <div
            className="content-stretch flex flex-col items-center relative shrink-0"
            data-node-id="3:587"
            data-name="Container"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap"
              data-node-id="3:588"
            >
              <p className="leading-[20px]">New Product</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(253,247,255,0.85)] content-stretch flex flex-col items-start left-0 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.04)] top-0 w-[390px]"
        data-node-id="3:589"
        data-name="Header"
      >
        <div
          className="content-stretch flex h-[64px] items-center justify-between px-[16px] relative shrink-0 w-full"
          data-node-id="3:590"
          data-name="Container"
        >
          <div
            className="content-stretch flex gap-[8px] items-center relative shrink-0"
            data-node-id="3:591"
            data-name="Container"
          >
            <div
              className="max-w-[197.1999969482422px] relative shrink-0 size-[32px]"
              data-node-id="3:592"
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
              data-node-id="3:593"
              data-name="Container"
            >
              <div
                className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
                data-node-id="3:594"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                  data-node-id="3:595"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] whitespace-nowrap"
                    data-node-id="3:596"
                  >
                    <p className="leading-[20px]">AUCA Stock</p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                  data-node-id="3:597"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                    data-node-id="3:598"
                  >
                    <p className="leading-[15px]">• Products</p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
                data-node-id="3:599"
                data-name="Container"
              >
                <div
                  className="bg-[#10b981] relative rounded-[12px] shrink-0 size-[8px]"
                  data-node-id="3:600"
                  data-name="Background"
                />
                <div
                  className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                  data-node-id="3:601"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] tracking-[-0.25px] whitespace-nowrap"
                    data-node-id="3:602"
                  >
                    <p className="leading-[15px]">API v1 Connected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[4px] items-center relative shrink-0"
            data-node-id="3:603"
            data-name="Container"
          >
            <div
              className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[44px]"
              data-node-id="3:604"
              data-name="Button - Alerts"
            >
              <div
                className="h-[18.333px] relative shrink-0 w-[14.667px]"
                data-node-id="3:605"
                data-name="Container"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgContainer19}
                />
              </div>
              <div
                className="absolute bg-[#ba1a1a] content-stretch flex flex-col items-end right-[8px] rounded-[12px] size-[8px] top-[8px]"
                data-node-id="3:607"
                data-name="Background"
              >
                <div
                  className="bg-[rgba(255,255,255,0)] relative rounded-[12px] shadow-[0px_0px_0px_2px_#fdf7ff] shrink-0 size-[8px]"
                  data-node-id="3:608"
                  data-name="Overlay+Shadow"
                />
              </div>
            </div>
            <div
              className="content-stretch flex items-center pl-[4px] relative shrink-0"
              data-node-id="3:609"
              data-name="Container"
            >
              <div
                className="max-w-[36px] relative rounded-[12px] shadow-[0px_0px_0px_2px_rgba(79,55,138,0.2)] shrink-0 size-[32px]"
                data-node-id="3:610"
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
        data-node-id="3:611"
        data-name="Nav"
      >
        <div
          className="content-stretch flex gap-[21.8px] h-[64px] items-center px-[4px] relative shrink-0 w-full"
          data-node-id="3:612"
          data-name="Container"
        >
          <div
            className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center min-w-[54px] relative shrink-0"
            data-node-id="3:613"
            data-name="Link"
          >
            <div
              className="relative shrink-0 size-[18px]"
              data-node-id="3:614"
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
              data-node-id="3:616"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                data-node-id="3:617"
              >
                <p className="leading-[13.75px]">Dashboard</p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center min-w-[54px] pl-[3.61px] pr-[3.62px] relative shrink-0"
            data-node-id="3:618"
            data-name="Link"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-node-id="3:619"
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
              data-node-id="3:621"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[11px] whitespace-nowrap"
                data-node-id="3:622"
              >
                <p className="leading-[13.75px]">Products</p>
              </div>
            </div>
          </div>
          <div
            className="h-[36px] min-w-[56px] relative shrink-0 w-[56px]"
            data-node-id="3:623"
            data-name="Link - Record Movement:margin"
          >
            <div
              className="absolute bg-[#4f378a] content-stretch drop-shadow-[0px_4px_6px_rgba(79,55,138,0.35)] flex flex-col h-[56px] items-center justify-center left-0 min-w-[56px] pl-[15.27px] pr-[15.26px] rounded-[12px] top-[-20px]"
              data-node-id="3:624"
              data-name="Link - Record Movement"
            >
              <div
                className="h-[18px] relative shrink-0 w-[20px]"
                data-node-id="3:625"
                data-name="Container"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgContainer22}
                />
              </div>
              <div
                className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0"
                data-node-id="3:627"
                data-name="Margin"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-white whitespace-nowrap"
                  data-node-id="3:628"
                >
                  <p className="leading-[10px]">Move</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center min-w-[54px] pl-[4px] pr-[4.02px] relative shrink-0"
            data-node-id="3:629"
            data-name="Link"
          >
            <div
              className="h-[18px] relative shrink-0 w-[20px]"
              data-node-id="3:630"
              data-name="Container"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgContainer23}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0"
              data-node-id="3:632"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                data-node-id="3:633"
              >
                <p className="leading-[13.75px]">Facilities</p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center min-w-[54px] pl-[11.45px] pr-[11.47px] relative shrink-0"
            data-node-id="3:634"
            data-name="Link"
          >
            <div
              className="h-[19px] relative shrink-0 w-[22px]"
              data-node-id="3:635"
              data-name="Container"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgContainer24}
              />
            </div>
            <div
              className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0"
              data-node-id="3:637"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                data-node-id="3:638"
              >
                <p className="leading-[13.75px]">Alerts</p>
              </div>
            </div>
            <div
              className="absolute bg-[#ba1a1a] right-[8px] rounded-[12px] size-[8px] top-[4px]"
              data-node-id="3:639"
              data-name="Background"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
