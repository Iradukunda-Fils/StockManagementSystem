const assetPathPrefix = "/assets"
const imgAb6AXuBiz0XpuG0UkYbKhUfdl0FUyKc5DSipwywNgjB6KEbm50Wk48ZTXXeJLuVnXVpVd8XUveijtxyZngP83XQkDsG1X3XzZvFdXjWXl9ZWxJwbznZuJbscBgSbWmDnFugYP5SghUlQrxCrpOlYaf1MQydYr2ZzzVC9J44WfDLbSr3XtoXFfkvEvEifQy5CsUfAqSbDGkmonzKtSsBlHpJuNYdqyUv3Jw23X0L1IMwFa3GLz77Rwg = `${assetPathPrefix}/6decb.png`
const imgAucaInventoryLogo = `${assetPathPrefix}/87b33.png`
const imgProfile = `${assetPathPrefix}/fc076.png`
const imgContainer = `${assetPathPrefix}/6efb9.svg`
const imgContainer1 = `${assetPathPrefix}/44ea0.svg`
const imgContainer2 = `${assetPathPrefix}/350f5.svg`
const imgContainer3 = `${assetPathPrefix}/8813e.svg`
const imgContainer4 = `${assetPathPrefix}/474fb.svg`
const imgContainer5 = `${assetPathPrefix}/eee2d.svg`
const imgContainer6 = `${assetPathPrefix}/0359a.svg`
const imgContainer7 = `${assetPathPrefix}/174b1.svg`
const imgContainer8 = `${assetPathPrefix}/29a12.svg`
const imgContainer9 = `${assetPathPrefix}/e4a37.svg`
const imgContainer10 = `${assetPathPrefix}/75d8f.svg`
const imgContainer11 = `${assetPathPrefix}/0d390.svg`
const imgContainer12 = `${assetPathPrefix}/378c3.svg`
const imgContainer13 = `${assetPathPrefix}/3b503.svg`
const imgContainer14 = `${assetPathPrefix}/09887.svg`
const imgContainer15 = `${assetPathPrefix}/8eef0.svg`
const imgContainer16 = `${assetPathPrefix}/34cca.svg`
const imgContainer17 = `${assetPathPrefix}/6ea85.svg`
const imgContainer18 = `${assetPathPrefix}/67ef2.svg`
const imgContainer19 = `${assetPathPrefix}/77e25.svg`
const imgContainer20 = `${assetPathPrefix}/af8f5.svg`
const imgContainer21 = `${assetPathPrefix}/5c381.svg`
const imgContainer22 = `${assetPathPrefix}/77323.svg`
const imgContainer23 = `${assetPathPrefix}/422d7.svg`
const imgContainer24 = `${assetPathPrefix}/99cd9.svg`

import { useState, useEffect } from "react"
import { api } from "../api/client"
import type { StockMovementResponse, ProductResponse, MovementType } from "../api/types"

export default function StockMovementAuditTrail() {
  const [movements, setMovements] = useState<StockMovementResponse[]>([])
  const [products, setProducts] = useState<ProductResponse[]>([])
  const [selectedProductId, setSelectedProductId] = useState("")
  const [movementType, setMovementType] = useState<MovementType>("STOCK_IN")
  const [quantity, setQuantity] = useState(10)
  const [referenceCode, setReferenceCode] = useState("")
  const [notes, setNotes] = useState("")
  const [feedback, setFeedback] = useState<{ message: string; type: "success" | "error" | "conflict" } | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const [mList, pList] = await Promise.all([
          api.getMovements(),
          api.getProducts()
        ])
        setMovements(mList)
        setProducts(pList)
        if (pList.length > 0) setSelectedProductId(pList[0].id)
      } catch (e) {
        console.error("Failed to load movements", e)
      }
    }
    load()
  }, [])

  return (
    <div
      className="content-stretch flex flex-col items-start relative size-full"
      data-node-id="3:640"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(253, 247, 255) 0%, rgb(253, 247, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
      data-name="Stock Movement & Audit Trail"
    >
      <div
        className="bg-[#fdf7ff] content-stretch flex flex-col items-start pb-[96px] pt-[64px] relative shrink-0 w-full"
        data-node-id="3:641"
        data-name="Main"
      >
        <div
          className="content-stretch flex flex-col gap-[20px] items-start px-[16px] py-[12px] relative shrink-0 w-full"
          data-node-id="3:642"
          data-name="Interactive Stock Movement Wizard & Real-time Ledger"
        >
          <div
            className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full"
            data-node-id="3:643"
            data-name="Top Transactional Sheet / Wizard Card"
          >
            <div
              className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
              data-node-id="3:644"
              data-name="Top Transactional Sheet / Wizard Card:shadow"
            />
            <div
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
              data-node-id="3:645"
              data-name="Modal Header with API Spec Banner"
            >
              <div
                className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                data-node-id="3:646"
                data-name="Container"
              >
                <div
                  className="content-stretch flex gap-[8px] items-center relative shrink-0"
                  data-node-id="3:647"
                  data-name="Container"
                >
                  <div
                    className="bg-[#e1d4fd] content-stretch flex h-[36px] items-center justify-center relative rounded-[12px] shrink-0 w-[31.63px]"
                    data-node-id="3:648"
                    data-name="Background"
                  >
                    <div
                      className="h-[13.333px] relative shrink-0 w-[16.667px]"
                      data-node-id="3:649"
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
                    data-node-id="3:651"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="3:652"
                      data-name="Heading 2"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] whitespace-nowrap"
                        data-node-id="3:653"
                      >
                        <p className="leading-[20px] mb-0">Record Stock</p>
                        <p className="leading-[20px]">Movement</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="3:654"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                        data-node-id="3:655"
                      >
                        <p className="leading-[16.5px] mb-0">{`AUCA Academic & Office Inventory`}</p>
                        <p className="leading-[16.5px]">Flow</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#f2ecf4] content-stretch flex flex-col items-start pl-[8px] pr-[46.86px] py-[2px] relative rounded-[12px] shrink-0"
                  data-node-id="3:656"
                  data-name="Background"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap"
                    data-node-id="3:657"
                  >
                    <p className="leading-[15px] mb-0">V1 STATE</p>
                    <p className="leading-[15px]">MACHINE</p>
                  </div>
                </div>
              </div>
              <div
                className="bg-[#f8f2fa] content-stretch flex flex-col gap-[4px] items-start p-[8px] relative rounded-[4px] shrink-0 w-full"
                data-node-id="3:658"
                data-name="System Debug & Header Metadata Pill"
              >
                <div
                  className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                  data-node-id="3:659"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="3:660"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-mono font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4f378a] text-[11px] whitespace-nowrap"
                      data-node-id="3:661"
                    >
                      <p className="leading-[16.5px]">
                        POST /api/v1/stock-movements
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#d1fae5] content-stretch flex flex-col items-start px-[6px] relative rounded-[2px] shrink-0"
                    data-node-id="3:662"
                    data-name="Background"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-mono font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[10px] whitespace-nowrap"
                      data-node-id="3:663"
                    >
                      <p className="leading-[15px]">Ready</p>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-full"
                  data-node-id="3:664"
                  data-name="Container"
                >
                  <div
                    className="h-[10.833px] relative shrink-0 w-[8.667px]"
                    data-node-id="3:665"
                    data-name="Container"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgContainer1}
                    />
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="3:667"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#7a7582] text-[10px] whitespace-nowrap"
                      data-node-id="3:668"
                    >
                      <p className="leading-[15px]">X-User-Id:</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start overflow-clip pr-[2.91px] relative shrink-0"
                    data-node-id="3:669"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-mono font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1d1b20] text-[10px] text-ellipsis whitespace-nowrap"
                      data-node-id="3:670"
                    >
                      <p className="leading-[15px]">operator@auca.ac.rw</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="3:671"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#7a7582] text-[10px] whitespace-nowrap"
                      data-node-id="3:672"
                    >
                      <p className="leading-[15px]">• Dept: Central Stores</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full"
              data-node-id="3:673"
              data-name="Step 1: Product Selector with Rich Context"
            >
              <div
                className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                data-node-id="3:674"
                data-name="Label"
              >
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="3:675"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                    data-node-id="3:676"
                  >
                    <p className="leading-[16px]">Target Item / SKU</p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="3:677"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[11px] whitespace-nowrap"
                    data-node-id="3:678"
                  >
                    <p className="leading-[16px]">Browse Catalog</p>
                  </div>
                </div>
              </div>
              <div
                className="bg-[#f8f2fa] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[12px] items-center p-[10px] relative rounded-[8px] shrink-0 w-full"
                data-node-id="3:679"
                data-name="Background+Shadow"
              >
                <div
                  className="max-w-[326px] relative rounded-[4px] shrink-0 size-[48px]"
                  data-node-id="3:680"
                  data-name="AB6AXuBiz0xpuG0_ukYbKhUFDL0f-UyKc5dSIPWYWNgjB6kEBM50WK48Z-tXXeJLuVnXVpVd8X-UVEIJTXYZngP83xQKDsG1x3xzZVFdXjWXl9zWxJwbznZUJbscBGSbWmDnFugY_P5sghULQrxCRPOlYAF1mQydYR2ZzzV_c9J44WfDLbSr3XtoXFfkvEvEifQY5csUfAQSbDGkmonzKTSsBlHpJuN_YDQYUv3Jw23X0l1iMWFa3gLz_77Rwg"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none rounded-[4px]"
                  >
                    <div className="absolute bg-[#f2ecf4] inset-0 rounded-[4px]" />
                    <div className="absolute inset-0 overflow-hidden rounded-[4px]">
                      <img
                        alt=""
                        className="absolute h-full left-[-41.76%] max-w-none top-0 w-[183.51%]"
                        src={
                          imgAb6AXuBiz0XpuG0UkYbKhUfdl0FUyKc5DSipwywNgjB6KEbm50Wk48ZTXXeJLuVnXVpVd8XUveijtxyZngP83XQkDsG1X3XzZvFdXjWXl9ZWxJwbznZuJbscBgSbWmDnFugYP5SghUlQrxCrpOlYaf1MQydYr2ZzzVC9J44WfDLbSr3XtoXFfkvEvEifQy5CsUfAqSbDGkmonzKtSsBlHpJuNYdqyUv3Jw23X0L1IMwFa3GLz77Rwg
                        }
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
                  data-node-id="3:681"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                    data-node-id="3:682"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start overflow-clip pr-[5.7px] relative shrink-0"
                      data-node-id="3:683"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#1d1b20] text-[12px] text-ellipsis whitespace-nowrap"
                        data-node-id="3:684"
                      >
                        <p className="leading-[16px]">
                          Epson L3250 EcoTank Ink (Black)
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-[#e6e0e9] content-stretch flex flex-col items-start pl-[6px] pr-[11.14px] py-[2px] relative rounded-[2px] shrink-0"
                      data-node-id="3:685"
                      data-name="Background"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                        data-node-id="3:686"
                      >
                        <p className="leading-[15px] mb-0">ST-INK-</p>
                        <p className="leading-[15px]">009</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full"
                    data-node-id="3:687"
                    data-name="Margin"
                  >
                    <div
                      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                      data-node-id="3:688"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex gap-[2px] items-center relative shrink-0"
                        data-node-id="3:689"
                        data-name="Container"
                      >
                        <div
                          className="h-[10.833px] relative shrink-0 w-[10.59px]"
                          data-node-id="3:690"
                          data-name="Container"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgContainer2}
                          />
                        </div>
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                          data-node-id="3:692"
                        >
                          <p className="leading-[16.5px]">Current:</p>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start pl-[2px] relative shrink-0"
                          data-node-id="3:693"
                          data-name="Strong:margin"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[11px] whitespace-nowrap"
                            data-node-id="3:694"
                          >
                            <p className="leading-[16.5px] mb-0">4</p>
                            <p className="leading-[16.5px]">units</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="3:695"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7582] text-[10px] whitespace-nowrap"
                          data-node-id="3:696"
                        >
                          <p className="leading-[15px]">•</p>
                        </div>
                      </div>
                      <div
                        className="h-[16.5px] overflow-clip relative shrink-0 w-[106.22px]"
                        data-node-id="3:697"
                        data-name="Container"
                      >
                        <div
                          className="-translate-y-1/2 absolute h-[9.75px] left-0 top-1/2 w-[10.833px]"
                          data-node-id="3:698"
                          data-name="Container"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgContainer3}
                          />
                        </div>
                        <div
                          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] left-[15.01px] text-[#494551] text-[11px] top-[calc(50%-0.25px)] whitespace-nowrap"
                          data-node-id="3:700"
                        >
                          <p className="leading-[16.5px]">
                            WH-KGL-001 (Main Campus)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex h-[28px] items-center justify-center relative rounded-[12px] shrink-0 w-[21.56px]"
                  data-node-id="3:701"
                  data-name="Button"
                >
                  <div
                    className="h-[5.55px] relative shrink-0 w-[9px]"
                    data-node-id="3:702"
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
            <div
              className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full"
              data-node-id="3:704"
              data-name="Step 2: Movement Type Segmented Selector"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                data-node-id="3:705"
                data-name="Label"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] w-full"
                  data-node-id="3:706"
                >
                  <p className="leading-[16px]">Movement Type</p>
                </div>
              </div>
              <div
                className="bg-[#f2ecf4] content-stretch flex gap-[6px] items-start p-[4px] relative rounded-[8px] shrink-0 w-full"
                data-node-id="3:707"
                data-name="Background"
              >
                <div
                  className="bg-[#4f378a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[2px] items-center justify-center pl-[22.72px] pr-[22.73px] py-[8px] relative rounded-[4px] shrink-0"
                  data-node-id="3:708"
                  data-name="Button - STOCK_IN"
                >
                  <div
                    className="relative shrink-0 size-[15px]"
                    data-node-id="3:709"
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
                    data-node-id="3:711"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white whitespace-nowrap"
                      data-node-id="3:712"
                    >
                      <p className="leading-[11px]">STOCK_IN</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-center opacity-80 relative shrink-0"
                    data-node-id="3:713"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[9px] text-center text-white whitespace-nowrap"
                      data-node-id="3:714"
                    >
                      <p className="leading-[16px]">Restock</p>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col gap-[2px] items-center justify-center pl-[18.06px] pr-[18.08px] py-[8px] relative rounded-[4px] shrink-0"
                  data-node-id="3:715"
                  data-name="Button - STOCK_OUT"
                >
                  <div
                    className="relative shrink-0 size-[15px]"
                    data-node-id="3:716"
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
                    data-node-id="3:718"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] text-center whitespace-nowrap"
                      data-node-id="3:719"
                    >
                      <p className="leading-[11px]">STOCK_OUT</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-center opacity-80 relative shrink-0"
                    data-node-id="3:720"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[9px] text-center whitespace-nowrap"
                      data-node-id="3:721"
                    >
                      <p className="leading-[16px]">Deplete</p>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col gap-[2px] items-center justify-center px-[30.08px] py-[8px] relative rounded-[4px] shrink-0"
                  data-node-id="3:722"
                  data-name="Button - ADJUSTMENT"
                >
                  <div
                    className="relative shrink-0 size-[13.5px]"
                    data-node-id="3:723"
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
                    data-node-id="3:725"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] text-center whitespace-nowrap"
                      data-node-id="3:726"
                    >
                      <p className="leading-[11px]">ADJUST</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-center opacity-80 relative shrink-0"
                    data-node-id="3:727"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[9px] text-center whitespace-nowrap"
                      data-node-id="3:728"
                    >
                      <p className="leading-[16px]">Audit Fix</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
              data-node-id="3:729"
              data-name="Step 3: Quantity Input & Live Deficit Protection Guard"
            >
              <div
                className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                data-node-id="3:730"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="3:731"
                  data-name="Label"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                    data-node-id="3:732"
                  >
                    <p className="leading-[16px]">Quantity to Move</p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="3:733"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                    data-node-id="3:734"
                  >
                    <p className="leading-[16.5px]">Available: 4</p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                data-node-id="3:735"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
                  data-node-id="3:736"
                  data-name="Container"
                >
                  <div
                    className="bg-[#f8f2fa] content-stretch flex items-start justify-center overflow-clip px-[12px] py-[10px] relative rounded-[4px] shrink-0 w-full"
                    data-node-id="3:737"
                    data-name="Input"
                  >
                    <div
                      className="content-stretch flex flex-[1_0_0] items-center min-w-px relative"
                      data-node-id="3:738"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
                        data-node-id="3:739"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full"
                          data-node-id="3:740"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-mono font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1b20] text-[16px] w-full"
                            data-node-id="3:741"
                          >
                            <p className="leading-[24px]">25</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex flex-row items-center self-stretch"
                        data-node-id="3:742"
                      >
                        <div
                          className="content-stretch flex h-full items-start relative shrink-0"
                          data-name="Rectangle:align-stretch"
                        >
                          <div
                            className="h-full min-w-[15px] opacity-0 relative shrink-0 w-[15px]"
                            data-node-id="3:743"
                            data-name="Rectangle"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute content-stretch flex flex-col items-start right-[12px] top-[10px]"
                    data-node-id="3:744"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                      data-node-id="3:745"
                    >
                      <p className="leading-[16px]">units</p>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex gap-[4px] items-center relative shrink-0"
                  data-node-id="3:746"
                  data-name="Quick Presets"
                >
                  <div
                    className="bg-[#f2ecf4] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[4px] shrink-0"
                    data-node-id="3:747"
                    data-name="Button"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] text-center whitespace-nowrap"
                      data-node-id="3:748"
                    >
                      <p className="leading-[16px]">+5</p>
                    </div>
                  </div>
                  <div
                    className="bg-[#f2ecf4] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[4px] shrink-0"
                    data-node-id="3:749"
                    data-name="Button"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] text-center whitespace-nowrap"
                      data-node-id="3:750"
                    >
                      <p className="leading-[16px]">+10</p>
                    </div>
                  </div>
                  <div
                    className="bg-[#f2ecf4] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[4px] shrink-0"
                    data-node-id="3:751"
                    data-name="Button"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] text-center whitespace-nowrap"
                      data-node-id="3:752"
                    >
                      <p className="leading-[16px]">+25</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-[#f8f2fa] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-between p-[10px] relative rounded-[4px] shrink-0 w-full"
                data-node-id="3:753"
                data-name="Interactive Stock Preview Simulator Bar"
              >
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="3:754"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="3:755"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                      data-node-id="3:756"
                    >
                      <p className="leading-[15px]">Current Stock</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="3:757"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                      data-node-id="3:758"
                    >
                      <p className="leading-[16px]">4 units</p>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex gap-[2px] items-center relative shrink-0"
                  data-node-id="3:759"
                  data-name="Container"
                >
                  <div
                    className="h-[5.25px] relative shrink-0 w-[11.083px]"
                    data-node-id="3:760"
                    data-name="Container"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgContainer8}
                    />
                  </div>
                  <div
                    className="bg-[#d1fae5] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[2px] shrink-0"
                    data-node-id="3:762"
                    data-name="Background"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-mono font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[11px] whitespace-nowrap"
                      data-node-id="3:763"
                    >
                      <p className="leading-[16px]">+25 (Restock)</p>
                    </div>
                  </div>
                  <div
                    className="h-[5.25px] relative shrink-0 w-[11.083px]"
                    data-node-id="3:764"
                    data-name="Container"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgContainer8}
                    />
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-end relative shrink-0"
                  data-node-id="3:766"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="3:767"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                      data-node-id="3:768"
                    >
                      <p className="leading-[15px]">Resulting Stock</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="3:769"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-mono font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4f378a] text-[12px] whitespace-nowrap"
                      data-node-id="3:770"
                    >
                      <p className="leading-[16px]">29 units</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full"
              data-node-id="3:771"
              data-name="Step 4: Reference Code & Auto Generator"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                data-node-id="3:772"
                data-name="Label"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] w-full"
                  data-node-id="3:773"
                >
                  <p className="leading-[16px]">
                    Reference Code / Procurement Ref
                  </p>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                data-node-id="3:774"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
                  data-node-id="3:775"
                  data-name="Container"
                >
                  <div
                    className="bg-[#f8f2fa] content-stretch flex items-start justify-center overflow-clip px-[12px] py-[8px] relative rounded-[4px] shrink-0 w-full"
                    data-node-id="3:776"
                    data-name="Input"
                  >
                    <div
                      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-auto relative"
                      data-node-id="3:777"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#1d1b20] text-[12px] w-full"
                        data-node-id="3:778"
                      >
                        <p className="leading-[16px]">PO-2026-10-884</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#f2ecf4] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[4px] items-center px-[10px] py-[8px] relative rounded-[4px] shrink-0"
                  data-node-id="3:779"
                  data-name="Button"
                >
                  <div
                    className="relative shrink-0 size-[12.833px]"
                    data-node-id="3:780"
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
                    data-node-id="3:782"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[12px] text-center whitespace-nowrap"
                      data-node-id="3:783"
                    >
                      <p className="leading-[16px]">Auto-Gen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full"
              data-node-id="3:784"
              data-name="Step 5: Notes & Justification"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                data-node-id="3:785"
                data-name="Label"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] w-full"
                  data-node-id="3:786"
                >
                  <p className="leading-[16px]">
                    Movement Justification / Notes
                  </p>
                </div>
              </div>
              <div
                className="bg-[#f8f2fa] content-stretch flex flex-col items-start overflow-auto pb-[10px] pt-[9.25px] px-[10px] relative rounded-[4px] shrink-0 w-full"
                data-node-id="3:787"
                data-name="Textarea"
              >
                <div
                  className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full"
                  data-node-id="3:788"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] w-full whitespace-pre-wrap"
                    data-node-id="3:789"
                  >
                    <p className="leading-[19.5px] mb-0">{`Emergency quarterly replenishment for Admin exams `}</p>
                    <p className="leading-[19.5px]">office printing hub.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-[#f8f2fa] content-stretch flex flex-col gap-[6px] items-start p-[10px] relative rounded-[8px] shrink-0 w-full"
              data-node-id="3:790"
              data-name="Step 6: Warehouse Capacity Gauge Preview"
            >
              <div
                className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                data-node-id="3:791"
                data-name="Container"
              >
                <div
                  className="content-stretch flex gap-[4px] items-center relative shrink-0"
                  data-node-id="3:792"
                  data-name="Container"
                >
                  <div
                    className="h-[10.5px] relative shrink-0 w-[11.667px]"
                    data-node-id="3:793"
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
                    data-node-id="3:795"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                      data-node-id="3:796"
                    >
                      <p className="leading-[16px]">WH-KGL-001 Capacity</p>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#d1fae5] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[2px] shrink-0"
                  data-node-id="3:797"
                  data-name="Background"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap"
                    data-node-id="3:798"
                  >
                    <p className="leading-[16px]">84.5% Capacity Safe</p>
                  </div>
                </div>
              </div>
              <div
                className="bg-[#f2ecf4] h-[8px] overflow-clip relative rounded-[12px] shrink-0 w-full"
                data-node-id="3:799"
                data-name="Progress track"
              >
                <div
                  className="absolute bg-[#4f378a] inset-[0_15.55%_0_0] rounded-[12px]"
                  data-node-id="3:800"
                  data-name="Background"
                />
              </div>
              <div
                className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                data-node-id="3:801"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="3:802"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                    data-node-id="3:803"
                  >
                    <p className="leading-[15px]">8,420 → 8,445 units stored</p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="3:804"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                    data-node-id="3:805"
                  >
                    <p className="leading-[15px]">Max: 10,000 units</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[8px] items-center pt-[4px] relative shrink-0 w-full"
              data-node-id="3:806"
              data-name="Action Buttons"
            >
              <div
                className="bg-[#f2ecf4] content-stretch flex flex-col items-center justify-center py-[10px] relative rounded-[8px] shrink-0 w-[106px]"
                data-node-id="3:807"
                data-name="Button"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] text-center whitespace-nowrap"
                  data-node-id="3:808"
                >
                  <p className="leading-[16px]">Cancel</p>
                </div>
              </div>
              <div
                className="bg-[#4f378a] content-stretch flex gap-[6px] items-center justify-center py-[10px] relative rounded-[8px] shrink-0 w-[212px]"
                data-node-id="3:809"
                data-name="Button"
              >
                <div
                  className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
                  data-node-id="3:810"
                  data-name="Button:shadow"
                />
                <div
                  className="relative shrink-0 size-[13.333px]"
                  data-node-id="3:811"
                  data-name="Container"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgContainer11}
                  />
                </div>
                <div
                  className="content-stretch flex flex-col items-center relative shrink-0"
                  data-node-id="3:813"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap"
                    data-node-id="3:814"
                  >
                    <p className="leading-[16px]">Submit Movement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full"
            data-node-id="3:815"
            data-name="Bottom Segment: Real-time Movement Audit Ledger"
          >
            <div
              className="content-stretch flex items-center justify-between px-[2px] relative shrink-0 w-full"
              data-node-id="3:816"
              data-name="Section Header with CSV Export"
            >
              <div
                className="content-stretch flex gap-[6px] items-center relative shrink-0"
                data-node-id="3:817"
                data-name="Container"
              >
                <div
                  className="h-[15px] relative shrink-0 w-[13.5px]"
                  data-node-id="3:818"
                  data-name="Container"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgContainer12}
                  />
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="3:820"
                  data-name="Heading 3"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap"
                    data-node-id="3:821"
                  >
                    <p className="leading-[16px]">MOVEMENT AUDIT LEDGER</p>
                  </div>
                </div>
              </div>
              <div
                className="bg-[#e6e0e9] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[3.99px] items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0"
                data-node-id="3:822"
                data-name="Button"
              >
                <div
                  className="relative shrink-0 size-[9.333px]"
                  data-node-id="3:823"
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
                  data-node-id="3:825"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[11px] text-center whitespace-nowrap"
                    data-node-id="3:826"
                  >
                    <p className="leading-[16.5px]">Export CSV</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
              data-node-id="3:827"
              data-name="Ledger Cards Container"
            >
              <div
                className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0 w-full"
                data-node-id="3:828"
                data-name="Record 1"
              >
                <div
                  className="content-stretch flex items-start justify-between relative shrink-0 w-full"
                  data-node-id="3:829"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex gap-[8px] items-center relative shrink-0"
                    data-node-id="3:830"
                    data-name="Container"
                  >
                    <div
                      className="bg-[#d1fae5] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[2px] shrink-0"
                      data-node-id="3:831"
                      data-name="Background"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-mono font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[10px] whitespace-nowrap"
                        data-node-id="3:832"
                      >
                        <p className="leading-[15px]">+25 STOCK_IN</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:833"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-mono font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                        data-node-id="3:834"
                      >
                        <p className="leading-[16px]">PO-2026-10-884</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                    data-node-id="3:835"
                  >
                    <p className="leading-[15px]">Just now</p>
                  </div>
                </div>
                <div
                  className="bg-[#f8f2fa] content-stretch flex items-center justify-between p-[8px] relative rounded-[4px] shrink-0 w-full"
                  data-node-id="3:836"
                  data-name="Background"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="3:837"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="3:838"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7582] text-[10px] whitespace-nowrap"
                        data-node-id="3:839"
                      >
                        <p className="leading-[15px]">Product SKU</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
                      data-node-id="3:840"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[11px] whitespace-nowrap"
                        data-node-id="3:841"
                      >
                        <p className="leading-[16.5px]">
                          Epson L3250 EcoTank (ST-INK-009)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex gap-[6px] items-center relative shrink-0"
                    data-node-id="3:842"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:843"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                        data-node-id="3:844"
                      >
                        <p className="leading-[16px]">4</p>
                      </div>
                    </div>
                    <div
                      className="relative shrink-0 size-[9.587px]"
                      data-node-id="3:845"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer14}
                      />
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:847"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-mono font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] whitespace-nowrap"
                        data-node-id="3:848"
                      >
                        <p className="leading-[16px]">29 units</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex items-center justify-between pt-[2px] relative shrink-0 w-full"
                  data-node-id="3:849"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0"
                    data-node-id="3:850"
                    data-name="Container"
                  >
                    <div
                      className="relative shrink-0 size-[10px]"
                      data-node-id="3:851"
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
                      data-node-id="3:853"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#7a7582] text-[10px] whitespace-nowrap"
                        data-node-id="3:854"
                      >
                        <p className="leading-[15px]">operator@auca.ac.rw</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#f2ecf4] h-[13.5px] relative rounded-[2px] shrink-0 w-[66.02px]"
                    data-node-id="3:855"
                    data-name="Background"
                  >
                    <div
                      className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-mono justify-center leading-[0] left-[6px] not-italic text-[#494551] text-[9px] top-[6px] whitespace-nowrap"
                      data-node-id="3:856"
                    >
                      <p className="leading-[13.5px]">WH-KGL-001</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0 w-full"
                data-node-id="3:857"
                data-name="Record 2"
              >
                <div
                  className="content-stretch flex items-start justify-between relative shrink-0 w-full"
                  data-node-id="3:858"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex gap-[8px] items-center relative shrink-0"
                    data-node-id="3:859"
                    data-name="Container"
                  >
                    <div
                      className="bg-[#ffdad6] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[2px] shrink-0"
                      data-node-id="3:860"
                      data-name="Background"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-mono font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#93000a] text-[10px] whitespace-nowrap"
                        data-node-id="3:861"
                      >
                        <p className="leading-[15px]">-12 STOCK_OUT</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:862"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-mono font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                        data-node-id="3:863"
                      >
                        <p className="leading-[16px]">REQ-2026-04-129</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                    data-node-id="3:864"
                  >
                    <p className="leading-[15px]">2h 15m ago</p>
                  </div>
                </div>
                <div
                  className="bg-[#f8f2fa] content-stretch flex items-center justify-between p-[8px] relative rounded-[4px] shrink-0 w-full"
                  data-node-id="3:865"
                  data-name="Background"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="3:866"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="3:867"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7582] text-[10px] whitespace-nowrap"
                        data-node-id="3:868"
                      >
                        <p className="leading-[15px]">Product SKU</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
                      data-node-id="3:869"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[11px] whitespace-nowrap"
                        data-node-id="3:870"
                      >
                        <p className="leading-[16.5px]">
                          A4 Navigator Paper 80g (PP-A4-001)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex gap-[6px] items-center relative shrink-0"
                    data-node-id="3:871"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:872"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                        data-node-id="3:873"
                      >
                        <p className="leading-[16px]">60</p>
                      </div>
                    </div>
                    <div
                      className="relative shrink-0 size-[9.587px]"
                      data-node-id="3:874"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer16}
                      />
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:876"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-mono font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                        data-node-id="3:877"
                      >
                        <p className="leading-[16px]">48 boxes</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex items-center justify-between pt-[2px] relative shrink-0 w-full"
                  data-node-id="3:878"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0"
                    data-node-id="3:879"
                    data-name="Container"
                  >
                    <div
                      className="relative shrink-0 size-[10px]"
                      data-node-id="3:880"
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
                      data-node-id="3:882"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#7a7582] text-[10px] whitespace-nowrap"
                        data-node-id="3:883"
                      >
                        <p className="leading-[15px]">
                          clerk.stores@auca.ac.rw
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#f2ecf4] h-[13.5px] relative rounded-[2px] shrink-0 w-[66.02px]"
                    data-node-id="3:884"
                    data-name="Background"
                  >
                    <div
                      className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-mono justify-center leading-[0] left-[6px] not-italic text-[#494551] text-[9px] top-[6px] whitespace-nowrap"
                      data-node-id="3:885"
                    >
                      <p className="leading-[13.5px]">WH-KGL-002</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0 w-full"
                data-node-id="3:886"
                data-name="Record 3"
              >
                <div
                  className="content-stretch flex items-start justify-between relative shrink-0 w-full"
                  data-node-id="3:887"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex gap-[8px] items-center relative shrink-0"
                    data-node-id="3:888"
                    data-name="Container"
                  >
                    <div
                      className="bg-[#ffdf93] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[2px] shrink-0"
                      data-node-id="3:889"
                      data-name="Background"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-mono font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#241a00] text-[10px] whitespace-nowrap"
                        data-node-id="3:890"
                      >
                        <p className="leading-[15px]">ADJUSTMENT (-2)</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:891"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-mono font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                        data-node-id="3:892"
                      >
                        <p className="leading-[16px]">AUD-2026-Q1-09</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#494551] text-[10px] whitespace-nowrap"
                    data-node-id="3:893"
                  >
                    <p className="leading-[15px]">Yesterday</p>
                  </div>
                </div>
                <div
                  className="bg-[#f8f2fa] content-stretch flex items-center justify-between p-[8px] relative rounded-[4px] shrink-0 w-full"
                  data-node-id="3:894"
                  data-name="Background"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="3:895"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="3:896"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7582] text-[10px] whitespace-nowrap"
                        data-node-id="3:897"
                      >
                        <p className="leading-[15px]">Product SKU</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
                      data-node-id="3:898"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[11px] whitespace-nowrap"
                        data-node-id="3:899"
                      >
                        <p className="leading-[16.5px]">
                          Dell USB-C 65W Charger (ACC-PWR-04)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex gap-[6px] items-center relative shrink-0"
                    data-node-id="3:900"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:901"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                        data-node-id="3:902"
                      >
                        <p className="leading-[16px]">18</p>
                      </div>
                    </div>
                    <div
                      className="relative shrink-0 size-[9.587px]"
                      data-node-id="3:903"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer17}
                      />
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="3:905"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-mono font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1b20] text-[12px] whitespace-nowrap"
                        data-node-id="3:906"
                      >
                        <p className="leading-[16px]">16 units</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex items-center justify-between pt-[2px] relative shrink-0 w-full"
                  data-node-id="3:907"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0"
                    data-node-id="3:908"
                    data-name="Container"
                  >
                    <div
                      className="h-[10.5px] relative shrink-0 w-[11px]"
                      data-node-id="3:909"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer18}
                      />
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                      data-node-id="3:911"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-mono justify-center leading-[0] not-italic relative shrink-0 text-[#7a7582] text-[10px] whitespace-nowrap"
                        data-node-id="3:912"
                      >
                        <p className="leading-[15px]">
                          auditor.external@auca.ac.rw
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#f2ecf4] h-[13.5px] relative rounded-[2px] shrink-0 w-[66.02px]"
                    data-node-id="3:913"
                    data-name="Background"
                  >
                    <div
                      className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-mono justify-center leading-[0] left-[6px] not-italic text-[#494551] text-[9px] top-[6px] whitespace-nowrap"
                      data-node-id="3:914"
                    >
                      <p className="leading-[13.5px]">WH-KGL-001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-[#f8f2fa] content-stretch flex items-center justify-between p-[10px] relative rounded-[8px] shrink-0 w-full"
              data-node-id="3:915"
              data-name="Ledger Summary Footnote"
            >
              <div
                className="content-stretch flex gap-[4px] items-center relative shrink-0"
                data-node-id="3:916"
                data-name="Container"
              >
                <div
                  className="bg-[#10b981] relative rounded-[12px] shrink-0 size-[6px]"
                  data-node-id="3:917"
                  data-name="Background"
                />
                <div
                  className="[word-break:break-word] h-[18px] leading-[0] relative shrink-0 text-[#494551] w-[214.84px] whitespace-nowrap"
                  data-node-id="3:918"
                  data-name="Paragraph"
                >
                  <div
                    className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:Regular'] font-normal justify-center left-0 text-[12px] top-[8px]"
                    data-node-id="3:919"
                  >
                    <p className="leading-[16px]">{`Immutable Ledger hash: `}</p>
                  </div>
                  <div
                    className="-translate-y-1/2 absolute flex flex-col font-mono font-bold justify-center left-[136.83px] not-italic text-[10px] top-[9.5px]"
                    data-node-id="3:920"
                  >
                    <p className="leading-[16px]">#0x889a..f421</p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-center justify-center relative shrink-0"
                data-node-id="3:921"
                data-name="Button"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[11px] text-center whitespace-nowrap"
                  data-node-id="3:922"
                >
                  <p className="leading-[16px]">View All 420 Records</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(253,247,255,0.85)] content-stretch flex flex-col items-start left-0 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.04)] top-0 w-[390px]"
        data-node-id="3:923"
        data-name="Header"
      >
        <div
          className="content-stretch flex h-[64px] items-center justify-between px-[16px] relative shrink-0 w-full"
          data-node-id="3:924"
          data-name="Container"
        >
          <div
            className="content-stretch flex gap-[8px] items-center relative shrink-0"
            data-node-id="3:925"
            data-name="Container"
          >
            <div
              className="max-w-[211.72000122070312px] relative shrink-0 size-[32px]"
              data-node-id="3:926"
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
              data-node-id="3:927"
              data-name="Container"
            >
              <div
                className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
                data-node-id="3:928"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                  data-node-id="3:929"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[16px] whitespace-nowrap"
                    data-node-id="3:930"
                  >
                    <p className="leading-[20px]">AUCA Stock</p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                  data-node-id="3:931"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#494551] text-[12px] whitespace-nowrap"
                    data-node-id="3:932"
                  >
                    <p className="leading-[15px]">• Movements</p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full"
                data-node-id="3:933"
                data-name="Container"
              >
                <div
                  className="bg-[#10b981] relative rounded-[12px] shrink-0 size-[8px]"
                  data-node-id="3:934"
                  data-name="Background"
                />
                <div
                  className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
                  data-node-id="3:935"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[10px] tracking-[-0.25px] whitespace-nowrap"
                    data-node-id="3:936"
                  >
                    <p className="leading-[15px]">API v1 Connected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[4px] items-center relative shrink-0"
            data-node-id="3:937"
            data-name="Container"
          >
            <div
              className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[44px]"
              data-node-id="3:938"
              data-name="Button - Alerts"
            >
              <div
                className="h-[18.333px] relative shrink-0 w-[14.667px]"
                data-node-id="3:939"
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
                data-node-id="3:941"
                data-name="Background"
              >
                <div
                  className="bg-[rgba(255,255,255,0)] relative rounded-[12px] shadow-[0px_0px_0px_2px_#fdf7ff] shrink-0 size-[8px]"
                  data-node-id="3:942"
                  data-name="Overlay+Shadow"
                />
              </div>
            </div>
            <div
              className="content-stretch flex items-center pl-[4px] relative shrink-0"
              data-node-id="3:943"
              data-name="Container"
            >
              <div
                className="max-w-[36px] relative rounded-[12px] shadow-[0px_0px_0px_2px_rgba(79,55,138,0.2)] shrink-0 size-[32px]"
                data-node-id="3:944"
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
        data-node-id="3:945"
        data-name="Nav"
      >
        <div
          className="content-stretch flex gap-[21.8px] h-[64px] items-center px-[4px] relative shrink-0 w-full"
          data-node-id="3:946"
          data-name="Container"
        >
          <div
            className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center min-w-[54px] relative shrink-0"
            data-node-id="3:947"
            data-name="Link"
          >
            <div
              className="relative shrink-0 size-[18px]"
              data-node-id="3:948"
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
              data-node-id="3:950"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                data-node-id="3:951"
              >
                <p className="leading-[13.75px]">Dashboard</p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center min-w-[54px] px-[4.03px] relative shrink-0"
            data-node-id="3:952"
            data-name="Link"
          >
            <div
              className="relative shrink-0 size-[20px]"
              data-node-id="3:953"
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
              data-node-id="3:955"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                data-node-id="3:956"
              >
                <p className="leading-[13.75px]">Products</p>
              </div>
            </div>
          </div>
          <div
            className="h-[36px] min-w-[56px] relative shrink-0 w-[56px]"
            data-node-id="3:957"
            data-name="Link - Record Movement:margin"
          >
            <div
              className="absolute bg-[#4f378a] content-stretch drop-shadow-[0px_4px_6px_rgba(79,55,138,0.35)] flex flex-col h-[56px] items-center justify-center left-0 min-w-[56px] pl-[15.27px] pr-[15.26px] rounded-[12px] top-[-20px]"
              data-node-id="3:958"
              data-name="Link - Record Movement"
            >
              <div
                className="h-[18px] relative shrink-0 w-[20px]"
                data-node-id="3:959"
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
                data-node-id="3:961"
                data-name="Margin"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Public_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#4f378a] text-[10px] whitespace-nowrap"
                  data-node-id="3:962"
                >
                  <p className="leading-[10px]">Move</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center min-w-[54px] pl-[4px] pr-[4.02px] relative shrink-0"
            data-node-id="3:963"
            data-name="Link"
          >
            <div
              className="h-[18px] relative shrink-0 w-[20px]"
              data-node-id="3:964"
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
              data-node-id="3:966"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                data-node-id="3:967"
              >
                <p className="leading-[13.75px]">Facilities</p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center min-w-[54px] pl-[11.45px] pr-[11.47px] relative shrink-0"
            data-node-id="3:968"
            data-name="Link"
          >
            <div
              className="h-[19px] relative shrink-0 w-[22px]"
              data-node-id="3:969"
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
              data-node-id="3:971"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Public_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#494551] text-[11px] whitespace-nowrap"
                data-node-id="3:972"
              >
                <p className="leading-[13.75px]">Alerts</p>
              </div>
            </div>
            <div
              className="absolute bg-[#ba1a1a] right-[8px] rounded-[12px] size-[8px] top-[4px]"
              data-node-id="3:973"
              data-name="Background"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
