import React from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Contact = () => {
    return (
        <div className="h-[500px] w-full">
            <div
                data-aos="fade-up"
                style={{
                    backgroundImage: `url("https://res.cloudinary.com/dgwnoquie/image/upload/v1761805534/98vnhc7brwtz_n6wvdg.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                className="w-full h-[700px] sm:h-[303px] relative"
            >
                <div
                    data-aos="fade-down"
                    className="mx-[20px]  md:mx-[50px] xl:mx-[130px] bg-[#ad7555] rounded-md p-[40px] flex flex-col sm:flex-row items-center justify-between absolute top-[250px]"
                >
                    <div className="w-2/3 lg:w-3/4 flex flex-col gap-[20px] text-[#ffffff]">
                        <p className="text-[20px] lg:text-[26px] xl:text-[30px] font-semibold leading-[120%]">
                            Liên hệ với Fortis để được tư vấn
                        </p>
                        <p className="leading-[140%] break-words">
                            Bạn cần chọn cây đàn phù hợp, nâng cấp âm thanh hay
                            tìm kiếm phụ kiện trình diễn chuyên nghiệp? Đội ngũ
                            chuyên gia của Fortis luôn sẵn sàng tư vấn và hỗ trợ
                            tận tình.
                        </p>
                    </div>
                    <div className="w-1/3 lg:w-1/4 flex flex-col gap-[20px] items-center justify-center">
                        <span className="text-[#ffffff] leading-[120%] text-[25px] lg:text-[30px] font-bold flex items-center gap-2">
                            <TfiHeadphoneAlt /> 19067500
                        </span>
                        <button className="bg-[#ffffff] hover:bg-[#ffe0ce] text-[16px] md:text-[20px] leading-[120%] font-semibold py-[10px] px-[20px]  rounded-lg">
                            LIÊN HỆ NGAY
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
