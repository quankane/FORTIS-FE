import React from "react";
import Counter from "./Counter";

const About = () => {
    const listInventory = [
        {
            total: 1600,
            title: "Dự án hoàn thành",
        },
        {
            total: 180,
            title: "Nhân sự chuyên môn cao",
        },
        {
            total: 38,
            title: "Đối tác uy tín toàn quốc",
        },
    ];
    return (
        <div className="w-full px-[20px]  md:px-[50px] lg:px-[130px] py-[20px] flex flex-col lg:flex-row items-center justify-between gap-[100px]">
            <div
                data-aos="fade-down"
                className="w-full lg:w-3/5 flex flex-col gap-5"
            >
                <p className="w-fit text-[#ad7555] text-[18px] md:text-[20px] py-2 border-b-[2px] border-[#ad7555] font-semibold">
                    VỀ CHÚNG TÔI
                </p>
                <p className="text-[30px] md:text-[40px] lg:text-[48px] font-bold leading-[140%]">
                    Giải pháp nhạc cụ hoàn hảo cho đam mê của bạn.
                </p>
                <p className="text-[16px] text-[#757F95] leading-[140%]">
                    Fortis là đơn vị chuyên cung cấp và lắp đặt hệ thống âm
                    thanh trọn gói, đồng thời phân phối các sản phẩm nhạc cụ cao
                    cấp dành cho phòng thu cá nhân, sân khấu biểu diễn, trường
                    nhạc, phòng karaoke gia đình và studio chuyên nghiệp. Với sứ
                    mệnh tạo ra không gian âm nhạc lý tưởng và nâng tầm trải
                    nghiệm trình diễn, mang đậm dấu ấn và cá tính của mỗi nghệ
                    sĩ, chúng tôi luôn đặt chất lượng âm thanh và sự thỏa mãn
                    niềm đam mê của khách hàng làm giá trị cốt lõi trong mọi
                    hoạt động.
                </p>
                <div className="w-full flex flex-col sm:flex-row items-center justify-between flex-wrap gap-[20px]">
                    {listInventory.map((item, index) => (
                        <Counter
                            key={index}
                            total={item.total}
                            title={item.title}
                        />
                    ))}
                </div>
            </div>
            <div data-aos="flip-left" className="w-full lg:w-2/5">
                <img
                    src="https://images.stockcake.com/public/0/7/c/07cb0684-a5e4-4d01-b928-e46d5e126d82_large/mystical-guitar-solo-stockcake.jpg"
                    alt="About Us"
                    className="w-full rounded-xl object-cover h-[500px]"
                />
            </div>
        </div>
    );
};

export default About;
