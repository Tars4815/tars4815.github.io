// Adding GIS-based projects
document.addEventListener("DOMContentLoaded", function () {
    const projectsGIS = [
        {
            title: "Mobile editing for the Piacenza road cadastre",
            duration: "2021 - ongoing",
            img: "../assets/img/catasto-pc-1.png",
            link: "catasto-strade.html",
        },
        {
            title: "Digitization of urban planning procedures",
            duration: "2020-2022",
            img: "../assets/img/bobbio-1.png",
            link: "urban-planning.html",
        },
        {
            title: "Hurricane social media geodata analysis",
            duration: "2019-2020",
            img: "../assets/img/GetisDaymod3.png",
            link: "hurricane-social-media-geodata.html",
        },
        {
            title: "Social media analysis in fair attendance",
            duration: "2017",
            img: "../assets/img/expo-preview.png",
            link: "expo2015-social-media-geodata.html",
        },
        // Add other projects similarly
    ];

    const slideshowContainer = document.getElementById("slideshow-container");

    projectsGIS.forEach((project, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");

        const content = `
            <h4 class="mb-0" style="color: #824027">${project.title}</h4>
            <p><i>${project.duration}</i></p>
            <img src=${project.img} style="display: inline-block; height:50%; width:50%; border-radius: 15px; margin: auto; border: 0.5rem solid rgba(255, 255, 255, 0.2);"><br>
            <b class="read-more"><a href="${project.link}" target="_blank">Read more</a></b>
            </p>
        `;

        slide.innerHTML = content;
        slideshowContainer.appendChild(slide);
    });

    showSlides(1);
});

let slideIndex = 1;

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Adding open mapping projects
document.addEventListener("DOMContentLoaded", function () {
    const projectsMapping = [
        {
            title: "Informal settlements in Bogotá",
            duration: "2020 - 2021",
            img: "../assets/img/slums-bogota.png",
            link: "slums-bogota.html",
        },
        {
            title: "Architecture for Smart City",
            duration: "2020",
            img: "../assets/img/piacenza-mapillary.jpeg",
            link: "architecture-for-smart-city.html",
        },
        // Add other projects similarly
    ];

    const slideshowOpenMapping = document.getElementById("mapping-slideshow-container");

    projectsMapping.forEach((project, index) => {
        const slideOpenMapping = document.createElement("div");
        slideOpenMapping.classList.add("open-mapping-slide");

        const content = `
            <h4 class="mb-0" style="color: #824027">${project.title}</h4>
            <p><i>${project.duration}</i></p>
            <img src=${project.img} style="display: inline-block; height:50%; width:50%; border-radius: 15px; margin: auto; border: 0.5rem solid rgba(255, 255, 255, 0.2);"><br>
            <b class="read-more"><a href="${project.link}" target="_blank">Read more</a></b>
            </p>
        `;

        slideOpenMapping.innerHTML = content;
        slideshowOpenMapping.appendChild(slideOpenMapping);
    });

    showSlidesOM(1);
});

let slideIndexOM = 1;

function showSlidesOM(n) {
    const slidesOM = document.getElementsByClassName("open-mapping-slide");

    if (n > slidesOM.length) {
        slideIndexOM = 1;
    }
    if (n < 1) {
        slideIndexOM = slidesOM.length;
    }

    for (let i = 0; i < slidesOM.length; i++) {
        slidesOM[i].style.display = "none";
    }

    slidesOM[slideIndexOM - 1].style.display = "block";
}

function plusSlidesOM(n) {
    showSlidesOM(slideIndexOM += n);
}

// Adding 3D surveys and mapping projects
document.addEventListener("DOMContentLoaded", function () {
    const projects3D = [
        {
            title: "Cultural Heritage Documentation",
            duration: "2021 - on going",
            img: "../assets/img/arsenale.png",
            link: "cultural-heritage.html",
        },
        {
            title: "Dams inspections",
            duration: "2021",
            img: "../assets/img/Calabria-2.png",
            link: "dams.html",
        },
        {
            title: "Bridges inspections",
            duration: "2020 - on going",
            img: "../assets/img/Bridge-1.PNG",
            link: "bridges.html",
        },
        {
            title: "Environmental monitoring",
            duration: "2021 - on going",
            img: "../assets/img/Bridge-1.PNG",
            link: "#",
        },
        // Add other projects similarly
    ];

    const slideshow3D = document.getElementById("3d-slideshow-container");

    projects3D.forEach((project, index) => {
        const slide3D = document.createElement("div");
        slide3D.classList.add("slide-3d");

        const content = `
            <h4 class="mb-0" style="color: #824027">${project.title}</h4>
            <p><i>${project.duration}</i></p>
            <img src=${project.img} style="display: inline-block; height:50%; width:50%; border-radius: 15px; margin: auto; border: 0.5rem solid rgba(255, 255, 255, 0.2);"><br>
            <b class="read-more"><a href="${project.link}" target="_blank">Read more</a></b>
            </p>
        `;

        slide3D.innerHTML = content;
        slideshow3D.appendChild(slide3D);
    });

    showSlides3D(1);
});

let slideIndex3D = 1;

function showSlides3D(n) {
    const slides3D = document.getElementsByClassName("slide-3d");

    if (n > slides3D.length) {
        slideIndex3D = 1;
    }
    if (n < 1) {
        slideIndex3D = slides3D.length;
    }

    for (let i = 0; i < slides3D.length; i++) {
        slides3D[i].style.display = "none";
    }

    slides3D[slideIndex3D - 1].style.display = "block";
}

function plusSlides3D(n) {
    showSlides3D(slideIndex3D += n);
}

// Adding Geoviz surveys and mapping projects
document.addEventListener("DOMContentLoaded", function () {
    const projectsGeoViz = [
        {
            title: "Interactive movie maps",
            duration: "2021 - on going",
            img: "../assets/img/movie-maps.jpg",
            link: "movie-maps.html",
        },
        {
            title: "Map community challenge",
            duration: "2021",
            img: "../assets/img/30-day-map-challenge.png",
            link: "https://tars4815.github.io/30DayMapChallenge/2021/",
        },
        // Add other projects similarly
    ];

    const slideshowGeoViz = document.getElementById("geoviz-slideshow-container");

    projectsGeoViz.forEach((project, index) => {
        const slideGeoViz = document.createElement("div");
        slideGeoViz.classList.add("slide-geoviz");

        const content = `
            <h4 class="mb-0" style="color: #824027">${project.title}</h4>
            <p><i>${project.duration}</i></p>
            <img src=${project.img} style="display: inline-block; height:50%; width:50%; border-radius: 15px; margin: auto; border: 0.5rem solid rgba(255, 255, 255, 0.2);"><br>
            <b class="read-more"><a href="${project.link}" target="_blank">Read more</a></b>
            </p>
        `;

        slideGeoViz.innerHTML = content;
        slideshowGeoViz.appendChild(slideGeoViz);
    });

    showSlidesGeoViz(1);
});

let slideIndexGeoViz = 1;

function showSlidesGeoViz(n) {
    const slidesGeoViz = document.getElementsByClassName("slide-geoviz");

    if (n > slidesGeoViz.length) {
        slideIndexGeoViz = 1;
    }
    if (n < 1) {
        slideIndexGeoViz = slidesGeoViz.length;
    }

    for (let i = 0; i < slidesGeoViz.length; i++) {
        slidesGeoViz[i].style.display = "none";
    }

    slidesGeoViz[slideIndexGeoViz - 1].style.display = "block";
}

function plusSlidesGeoViz(n) {
    showSlidesGeoViz(slideIndexGeoViz += n);
}