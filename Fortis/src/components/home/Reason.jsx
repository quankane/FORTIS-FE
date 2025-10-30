import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const Reason = () => {
    return (
        <div className="w-full px-[20px]  md:px-[50px] lg:px-[130px] py-[50px] flex flex-col lg:flex-row gap-[50px] bg-[#c8b7ad] bg-opacity-45 items-center justify-between">
            <div
                data-aos="fade-right"
                className="w-full lg:w-1/2 flex flex-col gap-[20px]"
            >
                <p className="w-fit text-[18px] text-[#ad7555] font-semibold py-2 border-b-[2px] border-[#ad7555] leading-[120%]">
                    VÌ SAO CHỌN FORTIS ?
                </p>
                <p className="text-[35px] md:text-[42px] font-semibold leading-[140%]">
                    FORTIS luôn ưu tiên sự hài lòng khách hàng
                </p>
                <p className="text-[#757F95] leading-[140%]">
                    FORTIS cam kết Chất lượng âm thanh, Hiệu năng trình diễn và
                    sự Hài lòng. Với đội ngũ giàu kinh nghiệm, sản phẩm cao cấp
                    và dịch vụ tận tâm, chúng tôi mang đến giải pháp âm nhạc và
                    trình diễn hoàn hảo cho niềm đam mê của bạn.
                </p>
                <div className="flex items-start gap-[10px] py-[20px] border-b-[1px] border-[#bababa]">
                    <div className="p-1 flex items-center justify-center rounded-full border-4 border-[#ad7555] bg-transparent">
                        <div className="p-2 rounded-full bg-[#ad7555] flex items-center justify-center">
                            <FiCheckCircle className="text-[30px] text-[#dfc6b8]" />
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-[10px]">
                        <p className="text-[22px] break-words font-semibold leading-[140%]">
                            Chất lượng và thẩm mỹ vượt trội
                        </p>
                        <p className="text-[#757F95] break-words leading-[140%]">
                            Fortis cam kết mang đến các sản phẩm nhạc cụ và
                            thiết bị âm thanh cao cấp với chất lượng âm thanh
                            trung thực, công nghệ hiện đại, đảm bảo độ bền bỉ và
                            hiệu năng trình diễn cao, phù hợp với mọi sân khấu
                            và phòng thu.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-[10px] py-[20px] ">
                    <div className="p-1 flex items-center justify-center rounded-full border-4 border-[#ad7555] bg-transparent">
                        <div className="p-2 rounded-full bg-[#ad7555] flex items-center justify-center">
                            <FiCheckCircle className="text-[30px] text-[#dfc6b8]" />
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-[10px]">
                        <p className="text-[22px] break-words font-semibold leading-[140%]">
                            Dịch vụ chuyên nghiệp, tận tâm
                        </p>
                        <p className="text-[#757F95] break-words leading-[140%]">
                            Chúng tôi luôn lắng nghe nhu cầu của khách hàng, tư
                            vấn tận tình và thi công tỉ mỉ, đảm bảo mang đến
                            trải nghiệm hài lòng từ thiết kế đến hoàn thiện.
                        </p>
                    </div>
                </div>
            </div>

            <div
                data-aos="flip-right"
                className="w-full lg:w-1/2 flex items-center lg:justify-end justify-center"
            >
                <div className="w-[570px] h-[570px] border-[5px] border-[#ad7555] relative">
                    <img
                        src="https://res.cloudinary.com/dgwnoquie/image/upload/v1761806207/unnamed_15_jfjwhq.jpg"
                        className="absolute z-5 w-[600px] h-[500px] object-cover top-[30px] right-[30px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Reason;
