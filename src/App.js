import "./App.css";

function App() {
    return (
        <div className="m-0 h-screen bg-[#E6EEFF] flex justify-center items-center">
            <div className="m-0 h-[550px] w-[250px] rounded-[10px] bg-white p-[1px] flex flex-col justify-between">
                {/* Header */}
                <div className="h-[60px] bg-[#EFF3FD] rounded-[10px] p-[10px] flex justify-between items-center m-1">
                    {/* <div className="flex items-center"> */}
                    <div className="flex relative">
                        <div className="bg-white rounded-full h-[40px] w-[40px] mr-2">
                            <img
                                className="rounded-full h-full w-full"
                                src="https://s3-alpha-sig.figma.com/img/6baa/a9c9/7cbb691d0bf8e4efbb09d8e91c2e986c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eVKRkgBouutMMUdNZ4ueKNPi9bMhMMLnISqKPW-dU~MBc42xjue~8j9hjcAqiIuzuss-XINFsTsBr3j3uYZDwiAg15nW1A6AFCj0dZFYt30YWmdEiODBg3FC3k~HdvMl18054D9LgeKrHAXqWUv4HmMsAIgytLrj7gdFK4vxRO1lXauNiVREtHHOM8PW768rYkYpoTkZc-excULb67QdJIr3rcTV-G4jUKPQjo5j9HDZr-fdphQ8APPByY75NO7uCpCwD9oZbGkJmKs6vuvoljm6Xyg7V0bDIoqte8kAnPTya7nVvumDK2an5YZcLGJtCwajrUFoTlmHjTu2gFSmBA__"
                                alt="Avatar"
                            />
                        </div>
                        <div className=" absolute h-[7px] w-[7px] top-[32px] left-[29px] bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-end justify-between w-full">
                        <div className="text-[#4C82EF]">
                            <div className="flex">
                                <h4 className="text-sm pb-[1.5px] font-bold">
                                    <span>Timpu</span>
                                </h4>
                                <img
                                    className="object-contain ml-1"
                                    width="15"
                                    height="15"
                                    src="https://img.icons8.com/material-rounded/24/f2cf18/ok--v1.png"
                                    alt="ok--v1"
                                />
                            </div>
                            <p className="text-[10px] font-semibold">
                                <span>Chat assistant</span>
                            </p>
                        </div>
                        {/* </div> */}
                        <div className="flex items-baseline pr-1">
                            <div className="h-[7px]  w-[7px] bg-green-500 rounded-full"></div>

                            <p className="text-[12px] text-[#4C82EF] ml-1 font-semibold">
                                <span>Online</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="mx-3 my-2">
                    <div className="my-2">
                        <div className="h-auto max-w-[170px] bg-gradient-to-r from-[#E5EEFF] to-[#fcfcfd]  rounded-lg px-3 py-1 text-[10px]">
                            <p>
                                <span>
                                    Hi Sam! I am your personal shopping
                                    assistant, how can i help you today
                                </span>
                            </p>
                        </div>
                        <p className="leading-3 pl-1">
                            <span className="uppercase text-[7px]">
                                4:45 PM
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col items-end my-2">
                        <div className="h-auto max-w-[170px] bg-[#DCF7C5] rounded-lg px-3 py-1 text-[10px]">
                            <p>
                                <span>
                                    I am looking for a hand bag, with long
                                    strap.
                                </span>
                            </p>
                        </div>
                        <p className="leading-3 pr-1">
                            <span className="uppercase text-[7px]">
                                4:46 PM
                            </span>
                        </p>
                    </div>
                    <div className="leading-[2px]">
                        <p>
                            <span className="text-[#949494] text-[10px]">
                                Popular tags for handbags
                            </span>
                        </p>
                        <div className=" flex justify-between items-center mt-1">
                            <img
                                className="pr-1"
                                width="10"
                                height="10"
                                src="https://img.icons8.com/ios-filled/50/737373/back.png"
                                alt="back"
                            />
                            <div className="flex overflow-x-scroll  w-full  hide-scroll-bar my-2">
                                <div className="flex flex-col  w-full ">
                                    <div className="flex gap-1 text-[#4C82EF]">
                                        <div className="border-[1px] border-[#4C82EF] p-2 text-[10px] w-auto rounded-md cursor-pointer">
                                            <p>Clutch</p>
                                        </div>
                                        <div className="border-[1px] border-[#4C82EF] p-2 text-[10px] w-auto rounded-md cursor-pointer">
                                            <p>Fabric_lining</p>
                                        </div>
                                        <div className="border-[1px] border-[#4C82EF] p-2 text-[10px] w-auto rounded-md cursor-pointer">
                                            <p>Baggit</p>
                                        </div>
                                        <div className="border-[1px] border-[#4C82EF] p-2 text-[10px] w-auto rounded-md cursor-pointer">
                                            <p>Multi_Compartment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="pl-1"
                                width="10"
                                height="10"
                                src="https://img.icons8.com/ios-filled/50/737373/forward--v1.png"
                                alt="forward--v1"
                            />
                        </div>
                    </div>
                    <div className="my-2">
                        <div className="h-auto max-w-[175px] bg-gradient-to-r from-[#E5EEFF] to-[#fcfcfd]  rounded-lg px-2 py-1 text-[10px]">
                            <div className="h-[50px] rounded-md mt-1 mb-1 bg-white w-full flex gap-2 items-center px-2">
                                <img
                                    className="h-[35px] w-[40px] rounded-md"
                                    src="https://s3-alpha-sig.figma.com/img/689e/2faf/68cf127f505e43e548e19296947c8d09?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvJHNTJnVTam5IbdgovtdJjs~9a8CoaetZ9TxA04XJcYBUZm1NceknHk1t7HmanN27TDiDVXjVQFTExU1nuugTqpCmV3TBzPvCClYwB1CK3X5M8J0WJox6-hRVZ4Cy8LqNcuMaR3MXuJxKbOgBYzqlqlnkL0eALLnh0C9nyMlzkoGrIRO-V6pOxocffZoGWw6M3-PFbA83NbfA-Qt9Sc4I8MWZ-QVjeTjuFvBim04A6I1amF4biHstH3OlSpJnd0wMkcj-dz5~6Lv8dBYLe6R32Hy9xGLSRHLU9WGKtKuvnuZzjlKpF~HK37yqkVCFl4XPjlzeIBWm6Udx8zBOTgtw__"
                                    alt="bag-image"
                                />
                                <div>
                                    <div className="flex">
                                        <h4 className="font-semibold">
                                            Bags on Timpu
                                        </h4>
                                        <img
                                            className="object-contain ml-1"
                                            width="12"
                                            height="12"
                                            src="https://img.icons8.com/material-rounded/24/f2cf18/ok--v1.png"
                                            alt="ok--v1"
                                        />
                                    </div>
                                    <p className="text-gray-500">
                                        1123 products
                                    </p>
                                </div>
                            </div>
                            <p>
                                <span>
                                    Or set filter and help us choose the best
                                    bag for you.
                                </span>
                            </p>
                        </div>
                        <p className="leading-3 pl-1">
                            <span className="uppercase text-[7px]">
                                4:48 PM
                            </span>
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-between mx-1">
                            <p className="text-gray-500 text-[10px]">
                                Select filters
                            </p>
                            <div className="flex gap-[3px]">
                                <img
                                    className="object-contain"
                                    width="12"
                                    height="12"
                                    src="https://img.icons8.com/ios-filled/50/737373/horizontal-settings-mixer--v1.png"
                                    alt="horizontal-settings-mixer--v1"
                                />
                                <p className="text-gray-500 text-[9px] ">
                                    Filter
                                </p>
                            </div>
                        </div>

                        <div className="w-[220px] mt-2">
                            <ul className="flex gap-2 flex-wrap w-full text-[10px] text-gray-500">
                                <li className="bg-gray-100 py-[2px] px-[7px] rounded-md flex gap-2 ">
                                    <p>Strap-long</p>
                                    <img
                                        className="object-contain"
                                        width="10"
                                        height="10"
                                        src="https://img.icons8.com/ios-glyphs/30/737373/multiply.png"
                                        alt="multiply"
                                    />
                                </li>
                                <li className="bg-gray-100 py-[2px] px-[7px] rounded-md flex gap-2 ">
                                    <p>Colour</p>
                                    <img
                                        className="object-contain"
                                        width="10"
                                        height="10"
                                        src="https://img.icons8.com/ios-glyphs/30/737373/multiply.png"
                                        alt="multiply"
                                    />
                                </li>
                                <li className="bg-gray-100 py-[2px] px-[7px] rounded-md flex gap-2 ">
                                    <p>Size</p>
                                    <img
                                        className="object-contain"
                                        width="10"
                                        height="10"
                                        src="https://img.icons8.com/ios-glyphs/30/737373/multiply.png"
                                        alt="multiply"
                                    />
                                </li>
                                <li className="bg-gray-100 py-[2px] px-[7px] rounded-md flex gap-2 ">
                                    <p>Brand</p>
                                    <img
                                        className="object-contain"
                                        width="10"
                                        height="10"
                                        src="https://img.icons8.com/ios-glyphs/30/737373/multiply.png"
                                        alt="multiply"
                                    />
                                </li>
                                <li className="bg-gray-100 py-[2px] px-[7px] rounded-md flex gap-2 ">
                                    <p>Material</p>
                                    <img
                                        className="object-contain"
                                        width="10"
                                        height="10"
                                        src="https://img.icons8.com/ios-glyphs/30/737373/multiply.png"
                                        alt="multiply"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="h-[60px] bg-[#EFF3FD] rounded-[10px] pt-1 pl-[6px] pr-[5px] pb-1  m-1">
                    <div className="flex justify-between">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Type your message"
                                className="p-2 w-[180px] h-[30px] rounded-lg text-[12px] border border-gray-100"
                            />
                            <img
                                className="absolute top-[7px] left-[155px]"
                                width="18"
                                height="18"
                                src="https://img.icons8.com/external-others-amoghdesign/24/000000/external-attach-multimedia-solid-30px-others-amoghdesign.png"
                                alt="external-attach-multimedia-solid-30px-others-amoghdesign"
                            />
                        </div>
                        <button className="w-[45px] h-[30px] bg-blue-500 flex justify-center items-center text-white rounded-lg">
                            <img
                                width="20"
                                height="20"
                                src="https://img.icons8.com/ios/50/FFFFFF/more-than.png"
                                alt="more-than"
                            />
                        </button>
                    </div>
                    <div className="relative flex">
                        <div className="text-gray-500 text-[10px] mt-2 absolute left-[52px]">
                            Powered by{" "}
                            <span className="text-gray-600 font-semibold ml-1">
                                Krunk.ai
                            </span>
                        </div>
                        <img
                            className="grayscale h-[30px] object-contain text-gray-500 absolute top-[0.1px] left-[145px]"
                            src="https://s3-alpha-sig.figma.com/img/5892/49d3/6a1a3489e0ba38aabde99ead2c795714?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M8AKgOqoKnzpIPr6rqevkApH3w0zB8IEZQQVMtMTWaTegk9coUDtupQ4Ihl60lyzmMPtaAtSwr6usk1vSD-nTRr1jYFRXvKhgCHOEFZXgmFRtGPi4taBQ0E7sGYbwn0BF-671WAoGLEmCeikM0I6whxJYu1mYbFYZI5O3ILPO-eJd7ANrmNUT0DBKNlBLxY8-gqPrET-BtkhhO~LdNad3OwCeISr5PIDaRmRiikEt49os3BL47L7f986yyd2qXfYvLsdI9mlXY4dSXItlDdFkuntsj3KCHxZHUXVFsREM9Opm8mv0J3OdgB8oYayMQuxCYvCAhagCPGsNlvDfkNyRg__"
                            alt="logo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
