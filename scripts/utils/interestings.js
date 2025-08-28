const main = document.getElementById("interesting_main");

const datas = [
    {
        title: "ตรรกศาสตร์",
        description: "คณิตศาสตร์ชั้นมัธยมศึกษาปีที่ 4",
        subject_code: "ค31101",
        image_path: "images/placeholder.png",
        redirect_path: "#",
    },
    {
        title: "จำนวนจริง",
        description: "คณิตศาสตร์ชั้นมัธยมศึกษาปีที่ 4",
        subject_code: "ค31101",
        image_path: "images/placeholder.png",
        redirect_path: "#",
    },
    {
        title: "การเคลื่อนที่แนวดิ่ง",
        description: "วิทยาศาสตร์ชั้นมัธยมศึกษาปีที่ 4",
        subject_code: "ว31101",
        image_path: "images/placeholder.png",
        redirect_path: "#",
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
    image.classList.add("w-[100%]", "h-[75px]");
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
    bottom_div.appendChild(redirect);

    main_div.appendChild(image_div);
    main_div.appendChild(bottom_div);

    container.appendChild(main_div);
}

window.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("interesting_main");

    datas.forEach(data => addNewCard(main, data));

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