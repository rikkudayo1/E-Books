const math_datas = [
    {
        title: "ตรรกศาสตร์",
        description: "คณิตศาสตร์ชั้นมัธยมศึกษาปีที่ 4",
        subject_code: "ค31101",
        image_path: "../../images/placeholder.png",
        redirect_path: "https://rathcenter.com/old-web/Sheet/Logic.pdf",
    },
    {
        title: "การให้เหตุผล",
        description: "คณิตศาสตร์ชั้นมัธยมศึกษาปีที่ 4",
        subject_code: "ค31101",
        image_path: "../../images/placeholder.png",
        redirect_path: "https://rathcenter.com/old-web/Sheet/Resnng.pdf",
    },
    {
        title: "เลขยกกำลัง",
        description: "คณิตศาสตร์ชั้นมัธยมศึกษาปีที่ 4",
        subject_code: "ค31101",
        image_path: "../../images/placeholder.png",
        redirect_path: "https://rathcenter.com/old-web/Sheet/PowrNm.pdf",
    },
    {
        title: "จำนวนจริง",
        description: "คณิตศาสตร์ชั้นมัธยมศึกษาปีที่ 4",
        subject_code: "ค31101",
        image_path: "../../images/placeholder.png",
        redirect_path: "https://rathcenter.com/old-web/Sheet/RealNm.pdf",
    },
    {
        title: "ฟังก์ชัน",
        description: "คณิตศาสตร์ชั้นมัธยมศึกษาปีที่ 4",
        subject_code: "ค31101",
        image_path: "../../images/placeholder.png",
        redirect_path: "https://rathcenter.com/old-web/Sheet/RelFnc.pdf",
    },
    {
        title: "อัตราส่วนตรีโกณมิติ",
        description: "คณิตศาสตร์ชั้นมัธยมศึกษาปีที่ 4",
        subject_code: "ค31101",
        image_path: "../../images/placeholder.png",
        redirect_path: "https://rathcenter.com/old-web/Sheet/TrgnRt.pdf",
    },
]

const sci_datas = [
    {
        title: "แรงและการเคลื่อนที่",
        description: "ฟิสิกส์ชั้นมัธยมศึกษาตอนปลาย",
        subject_code: "ว31101",
        image_path: "../../images/placeholder.png",
        redirect_path: "http://www.krukird.com/L03_1_61.pdf",
    },
    {
        title: "การเคลื่อนที่แนวตรง",
        description: "ฟิสิกส์ชั้นมัธยมศึกษาปีที่ 4",
        subject_code: "ว31101",
        image_path: "../../images/placeholder.png",
        redirect_path: "http://www.krukird.com/L02_1_65.pdf",
    },
    {
        title: "สมดุลกล",
        description: "ฟิสิกส์ชั้นมัธยมศึกษาปีที่ 4",
        subject_code: "ว31101",
        image_path: "../../images/placeholder.png",
        redirect_path: "http://www.krukird.com/L04_2_62.pdf",
    },
    {
        title: "งานและพลังงาน",
        description: "ฟิสิกส์ชั้นมัธยมศึกษาปีที่ 4",
        subject_code: "ว31101",
        image_path: "../../images/placeholder.png",
        redirect_path: "http://www.krukird.com/L05_2_62.pdf",
    },
    {
        title: "การเคลื่อนที่แนวโค้ง",
        description: "ฟิสิกส์ชั้นมัธยมศึกษาปีที่ 4",
        subject_code: "ว31101",
        image_path: "../../images/placeholder.png",
        redirect_path: "http://www.krukird.com/L07_2_62.pdf",
    },
    {
        title: "โมเมนตัม & การชน",
        description: "ฟิสิกส์ชั้นมัธยมศึกษาปีที่ 4",
        subject_code: "ว31101",
        image_path: "../../images/placeholder.png",
        redirect_path: "http://www.krukird.com/L06_2_62.pdf",
    },
]

function addNewCard(container, { title, description, subject_code, image_path, redirect_path }) {
    const main_div = document.createElement("div");
    main_div.classList.add(
        "swiper-slide",
        "flex",
        "flex-col",
        "rounded-[7px]",
        "overflow-hidden",
        "bg-white",
        "shadow-[0px_0px_3px_2px_rgba(0,_0,_0,_0.1)]",
        "max-w-[150px]",
        "h-[200px]"
    );

    // image part
    const image_div = document.createElement("div");
    const image = document.createElement("img");
    image.classList.add("w-[100%]", "h-[85px]");
    image.src = image_path;
    image_div.appendChild(image);

    // bottom part
    const bottom_div = document.createElement("div");
    bottom_div.classList.add("flex", "flex-col", "ml-2", "mr-1", "mt-1");

    const title_text = document.createElement("h1");
    title_text.innerText = title;
    title_text.classList.add("font-bold");
    bottom_div.appendChild(title_text);

    const description_text = document.createElement("h1");
    description_text.innerText = description;
    description_text.classList.add("text-[14px]");
    bottom_div.appendChild(description_text);

    const subject = document.createElement("h1");
    subject.innerText = subject_code;
    subject.classList.add("text-[14px]", "text-blue-400");
    bottom_div.appendChild(subject);

    const redirect = document.createElement("a");
    redirect.innerText = "อ่าน";
    redirect.classList.add("bg-orange-400", "p-1", "rounded-[5px]", "text-center", "max-w-[75px]", "mt-2", "mb-2");
    redirect.href = redirect_path;
    redirect.target = "blank";
    bottom_div.appendChild(redirect);

    main_div.appendChild(image_div);
    main_div.appendChild(bottom_div);

    container.appendChild(main_div);
}

window.addEventListener("DOMContentLoaded", () => {
    const math = document.getElementById("math_div");
    const sci = document.getElementById("sci_div");

    math_datas.forEach(data => addNewCard(math, data));
    sci_datas.forEach(data => addNewCard(sci, data))

    const swiper = new Swiper('.interestings-swiper', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 15,
        breakpoints: {
            1024: { spaceBetween: 30 },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            el: '.autoplay',
            delay: 5000,
        },
    });

    swiper.update();
});