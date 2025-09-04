const pat_datas = [
    {
        title: "PAT 1 (2563)",
        description: "PAT 1 (ก.พ. 2563) มีเฉลยในไฟล์",
        subject_code: "TPAT1",
        image_path: "../../images/Books/PAT.png",
        redirect_path: "https://rathcenter.com/old-web/Exam/Pat1/PAT16302.pdf",
    },
    {
        title: "PAT 1 (2562)",
        description: "PAT 1 (ก.พ. 2562) มีเฉลยในไฟล์",
        subject_code: "TPAT1",
        image_path: "../../images/Books/PAT.png",
        redirect_path: "https://rathcenter.com/old-web/Exam/Pat1/PAT16202.pdf",
    },
    {
        title: "PAT 1 (2561)",
        description: "PAT 1 (ก.พ. 2561) มีเฉลยในไฟล์",
        subject_code: "TPAT1",
        image_path: "../../images/Books/PAT.png",
        redirect_path: "https://rathcenter.com/old-web/Exam/Pat1/PAT16102.pdf",
    },
    {
        title: "PAT 1 (2560)",
        description: "PAT 1 (มี.ค. 2560) มีเฉลยในไฟล์",
        subject_code: "TPAT1",
        image_path: "../../images/Books/PAT.png",
        redirect_path: "https://rathcenter.com/old-web/Exam/Pat1/PAT15903.pdf",
    },
    {
        title: "PAT 1 (2559)",
        description: "PAT 1 (ต.ค. 2559) มีเฉลยในไฟล์",
        subject_code: "TPAT1",
        image_path: "../../images/Books/PAT.png",
        redirect_path: "https://rathcenter.com/old-web/Exam/Pat1/PAT15910.pdf",
    },
    {
        title: "PAT 1 (2558)",
        description: "PAT 1 (ต.ค. 2558) มีเฉลยในไฟล์",
        subject_code: "TPAT1",
        image_path: "../../images/Books/PAT.png",
        redirect_path: "https://rathcenter.com/old-web/Exam/Pat1/PAT15810.pdf",
    },
]

const alevel_datas = [
    {
        title: "คณิตประยุกต์ 1",
        description: "คณิตศาสตร์ประยุกต์ 1 A-Level (มีนาคม 2568)",
        subject_code: "A-Level (เฉพาะข้อสอบ)",
        image_path: "../../images/Books/math1.png",
        redirect_path: "https://drive.google.com/file/d/1mSwBLAsVwtyYvCU6myIPWVdTD-63BpNZ/view",
    },
    {
        title: "คณิตประยุกต์ 2",
        description: "คณิตศาสตร์ประยุกต์ 2 A-Level (มีนาคม 2568)",
        subject_code: "A-Level (เฉพาะข้อสอบ)",
        image_path: "../../images/Books/math2.png",
        redirect_path: "https://drive.google.com/file/d/1Sfn6mluWf3wVhptWuhseqqgUrGT5FavQ/view",
    },
    {
        title: "คณิตประยุกต์ 1",
        description: "คณิตศาสตร์ประยุกต์ 1 A-Level (มีนาคม 2567)",
        subject_code: "A-Level (เฉพาะข้อสอบ)",
        image_path: "../../images/Books/math1.png",
        redirect_path: "https://drive.google.com/file/d/1g5RcdIAlxqlS179q9cGLt1O7gT45SaVx/view",
    },
    {
        title: "ภาษาอังกฤษ",
        description: "ข้อสอบภาษาอังกฤษ A-Level (2567)",
        subject_code: "A-Level (พร้อมเฉลย)",
        image_path: "../../images/Books/english.png",
        redirect_path: "https://drive.google.com/file/d/1TIvVtAgHGkMiNFOVs6W_3L7XWsyXW6lG/view",
    },
    {
        title: "ภาษาไทย",
        description: "ข้อสอบภาษาไทย A-Level (2567)",
        subject_code: "A-Level (พร้อมเฉลย)",
        image_path: "../../images/Books/thai.png",
        redirect_path: "https://drive.google.com/file/d/1XBmdSMLL4YJ0VAO8A7dUdpxiIT_0IKJJ/view",
    },
]

function addNewTestCard(container, { title, description, subject_code, image_path, redirect_path }) {
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
    const pat = document.getElementById("pat_div");
    const a_level = document.getElementById("alevel_div");

    pat_datas.forEach(data => addNewTestCard(pat, data));
    alevel_datas.forEach(data => addNewTestCard(a_level, data));

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