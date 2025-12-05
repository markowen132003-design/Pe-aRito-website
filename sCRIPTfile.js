// Replace with your Geoapify API key
const GEOAPIFY_KEY = '5c2cf273c0034d2e92c305c6d770c7b3Y';

// Initialize the map
const map = L.map('map').setView([15.3513, 121.0022], 15); // Centered on Peñaranda

// Save initial map center + zoom
const initialCenter = map.getCenter();
const initialZoom = map.getZoom();
const returnBtn = document.getElementById("return-map");

// Function for the return button
function returnToPenaranda() {
    // Move map back to start
    map.setView(initialCenter, initialZoom);

    // Hide button after clicking
    returnBtn.style.display = "none";
}

// Show return button when the user moves the map
map.on("moveend", () => {
    const currentCenter = map.getCenter();

    // Only show button if map center is different from starting center
    if (currentCenter.lat !== initialCenter.lat || currentCenter.lng !== initialCenter.lng) {
        returnBtn.style.display = "block";
    }
});

// Add Geoapify tiles
let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?apiKey=' + GEOAPIFY_KEY, {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);

/* Optional marker example:
L.marker([15.3508, 121.0050], {
    radius: 10,
    color: "red",
    fillColor: "red",
    fillOpacity: 0.8
}).addTo(map)
  .bindPopup('Peñaranda, Nueva Ecija');
*/

// Custom icons
const icons = {
    church: L.icon({ iconUrl: "IMGs/Church.png", iconSize: [40, 60], iconAnchor: [20, 50], popupAnchor: [0, -35] }),
    food: L.icon({ iconUrl: 'IMGs/RestoFood.png', iconSize: [40, 60], iconAnchor: [20, 50], popupAnchor: [0, -35] }),
    resort: L.icon({ iconUrl: 'IMGs/Resort.png', iconSize: [40, 60], iconAnchor: [20, 50], popupAnchor: [0, -35] }),
    landmark: L.icon({ iconUrl: 'IMGs/Landmarks.png', iconSize: [40, 60], iconAnchor: [20, 50], popupAnchor: [0, -35] })
};

// Landmark data
const landmarks = [
    { 
        title: "Irrigation Dam", 
        lat: 15.3480753, lng: 121.0098773,
        address: "Peñaranda Water Dam, Banaoang, Peñaranda", 
        icon: icons.landmark, 
        image: ["IMGs/Irrigation Dam.jpg","IMGs/Irrigation Dam side view.png","IMGs/Irrigation Dam side view 2.png","IMGs/Irrigation_Dam_2.jpg","IMGs/Irrigation Dam3.jpg"],
        description: "The Peñaranda Dam supplies irrigation to surrounding rice fields and serves as an important water source for farmers.",
        history: "Constructed during the mid-1900s, the dam played a major role in improving agricultural output in Nueva Ecija. It remains a vital facility for local farmers, especially during dry seasons.",
    },
    { 
        title: "Razon Farm and Resort", 
        lat: 15.372670, 
        lng: 121.002891, 
        icon: icons.resort, 
        image: ["IMGs/Razon.webp", "IMGs/RazonGarden.webp", "IMGs/RazonPool.jpg", "IMGs/RazonKiddiePool.webp", "IMGs/RazonRoom.webp"],
        description: "Razon Farm is a charming getaway located in Liwasan, opposite Barangay Hall, Peñaranda, Nueva Ecija. The resort offers a peaceful ambiance, clean accommodations, and scenic surroundings, making it ideal for family outings, events, and even team-building activities.<br><br> Guests have praised its mountain-fed cold-water swimming area, which is refreshing and perfect for hot days. The rooms are described as clean and comfortable, although some reviews note that the mattresses could be improved.<br><br> Visitors also appreciate the farm's eco-tourism efforts, such as maintaining clean facilities and hosting minimal crowds for a more intimate experience.",
        history: "Razon Farm is a lively, community-centered resort in Peñaranda, Nueva Ecija — a place for gatherings, relaxation, and memorable moments. Though it lacks a long recorded history, it thrives today as a trusted spot for families and friends to enjoy time together."
    },
    { 
        title: "Jerry De Alicia", 
        lat: 15.365190, 
        lng: 120.998029, 
        icon: icons.resort, 
        image: ["IMGs/JerryDeAlicia.webp", "IMGs/jerry1.jpg", "IMGs/jerry2.jpg", "IMGs/jerry3.jpg", "IMGs/jerry4.jpg", ],
        description: "Jerry De Alicia Farm & Resort is a peaceful and highly-rated getaway located in Las Piñas, Peñaranda, Nueva Ecija. It's a unique combination of a farm and resort, making it an ideal spot for relaxation and connecting with nature. <br><br>The resort offers a serene environment surrounded by lush greenery, making it perfect for families, couples, or groups looking to escape the hustle and bustle of city life.",
        history: "There is currently no documented historical background available for Jerry De Alicia Resort."
    },
    { 
        title: "Public Food Market", 
        lat: 15.351572, 
        lng: 121.003094, 
        icon: icons.food, 
        image: ["IMGs/FoodMARKET.jpg","IMGs/foodMark2.jpg","IMGs/foodMark1.jpg","IMGs/foodMark3.jpg","IMGs/foodMark5.jpg",],
        description: "It is a Food Market filled with various street foods like Kwek-kwek, Fishball, Takoyaki, Milktea, Fries, Burger, and Beef Pares where many Novo Ecijanos gather to devour. An All-you-can-EAT-Area.",
        history: "According to the “Brief Profile of Peñaranda” from the local government, the Peñaranda Public Market is located in Barangay Poblacion I. The profile does not provide detailed information about the exact date the market was established, but it is part of the town’s main commercial activity.",
    },
    { 
        title: "Balong's Kitchenette", 
        lat: 15.356905, 
        lng: 120.986949, 
        icon: icons.food, 
        image: ["IMGs/Balongs.png","IMGs/Balong4.webp","IMGs/Balong2.webp","IMGs/Balong5.jpg","IMGs/Balong6.webp",],
        description: "Balong’s Kitchenette is a well-loved restaurant located on Rizal Street, Peñaranda, Nueva Ecija (3103). Known for its cozy and welcoming atmosphere, it offers both dine-in and takeaway options, making it a convenient spot for locals and visitors alike. The restaurant operates from 5:30 AM to 1:00 AM daily, ensuring you can grab a meal almost any time of the day.",
        history: "While detailed records about Balong's Kitchenette are limited, we do find bits of Information about the Place.<br><br>According to residents, it all began with a dream shared by a husband and wife, Roy 'Balong' and Marilyn Ramos, to open a restaurant.<br><br>Before that, Balong was working on his farmland while Marlin was delivering vegetables. They plan on starting a kitchenette using the savings they earned from delivering vegetables and harvesting crops which definitely paid off and in 2022, they've finally opened their dream Restaurant.<br><br>Balong's Kitchenette received glowing reviews for its authentic Filipino cuisine, featuring delicious home-cooked meals like kalderetang Kambing, Sisig, and their most requested soup 'Papaitan', paired with a warm atmosphere and exceptional customer service.<br><br>After a few months, Marilyn died of an illness and left only their children to run and manage the place to continue its legacy and keep it thriving for future generations."
    },
    { 
        title: "Awap's Ihawan at Sizzligan", 
        lat: 15.350528, 
        lng: 121.005364, 
        icon: icons.food, 
        image: ["IMGs/AWAPS.jpg","IMGs/awapPic1.jpg","IMGs/awapsisig.jpg","IMGs/awapPic3.jpg","IMGs/awapPic2.jpg","IMGs/awap_Pic5.jpg",],
        description: "Awap’s Ihawan at Sizzlingan is a grill / sizzling-style restaurant. It is to be a popular “ihawan / sizzling” joint in town — a place where grilled meats and sizzling dishes (likely sisig and other Filipino grill specialties) are served. On its social media page, they highlight “crispy sizzling sisig” as one of their signature offerings.",
        history: "Awap’s is a relatively recent local business, operating for about seven years. It is not a long-established or heritage restaurant, but rather a small-to-medium eatery typical of many Filipino towns, known and supported mainly through community word-of-mouth rather than any formal historical record."
    },
    { 
        title: "San Agustin Parish Church", 
        lat: 15.353610, lng: 121.001982,
        icon: icons.church, 
        image: ["IMGs/FvfPenarandaNEChurch.JPG","IMGs/church inside 2.jpg","IMGs/churchside.JPG","IMGs/ChurchIn2.JPG","IMGs/Old Church.jpg",],
        description: "The San Agustin Parish Church is the main Catholic church in Peñaranda and the center of many religious festivities.",
        history: "Built during the Spanish colonial period, the church has undergone numerous restorations. Its structure reflects Spanish-era architectural influences. It has long been a spiritual landmark for Peñarandeños and remains active in community religious life.",
    },
    { 
        title: "Peñaranda Arch", 
        lat: 15.354085, lng: 120.981480,
        address: "Welcome Arch, Peñaranda", 
        icon: icons.landmark, 
        image: ["IMGs/Arch.jpg","IMGs/Arch BG.png","IMGs/PenArch4.png","IMGs/PenArch1.png","IMGs/PenArch3.png",],
        description: "The Peñaranda Welcome Arch greets visitors entering the municipality. It is one of the town’s most recognizable symbols.",
        history: "The arch was built to represent local pride and identity, and has been repainted and maintained throughout the years as a landmark for travelers and residents.",
    },
    { 
        title: "Peñaranda Plaza", 
        lat: 15.3536556, lng: 121.0024071,
        address:"Peñaranda Plaza, Poblacion I, Peñaranda", 
        icon: icons.landmark, 
        image: ["IMGs/plaza4.jpg","IMGs/brightPlaza.jpg","IMGs/plaza3.jpg","IMGs/plaza4.jpg","IMGs/plaza2.png"],
        description: "The Peñaranda Town Plaza serves as the community’s central gathering space. It is commonly used for local celebrations, public events, and municipal activities.",
        history: "The plaza dates back to the Spanish colonial era, where plazas were traditionally placed at the heart of every town beside the church and municipal hall. It has been renovated several times but continues to be a symbol of community unity.",
    }
];

// Function to get address from coordinates
async function getAddressFromCoords(lat, lng) {
    const apiKey = "1b4d272565f544eabbebfab04f59efbb"; // your Geoapify key
    const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.features && data.features.length > 0) {
            return data.features[0].properties.formatted;
        }
    } catch (error) {
        console.error("Reverse geocoding error:", error);
    }
    return "Address not found";
}

// ⭐ ASIDE MANAGER — unify side panels and buttons
function openAside(type) {
    const sideNav = document.getElementById("side-nav");
    const landList = document.getElementById("land-List");
    const rightCard = document.getElementById("right-card");
    const mapContainer = document.querySelector(".map-container");
    const locateBtn = document.querySelector(".locate-btn-map");
    const resetBtn = document.querySelector(".return-btn-map");

    // Close everything first
    sideNav.style.width = "0";
    //landList.style.width = "0";
    rightCard.style.display = "none";
    mapContainer.classList.remove("shrink");
    locateBtn.classList.remove("shift-buttons");
    resetBtn.classList.remove("shift-buttons");

    // Open the one you want
    if(type === "sideNav") sideNav.style.width = "209px";
    if(type === "landList") {
        landList.style.width = "350px";   //Adjust the Landmark List's width
        //locateBtn.classList.add("shift-buttons");
        //resetBtn.classList.add("shift-buttons");
    }
    if(type === "rightCard") {
        rightCard.style.display = "block";
        mapContainer.classList.add("shrink");
    };
}

// Attach markers dynamically and Display Right Card

//The [0] in the ${lm.image} determines which photo goes first.
const markersArray = [];
landmarks.forEach(async lm => {
    const marker = L.marker([lm.lat, lm.lng], { icon: lm.icon }).addTo(map);
    markersArray.push(marker);

    marker.on("mouseover", async function () {
        const address = await getAddressFromCoords(lm.lat, lm.lng);
        marker.bindPopup(`
            <center>
            <b>${lm.title}</b><br>
            <img src="${lm.image[0]}" width="120" height="100" style="border-radius:5px;"><br>
            </center>
            ${address}
        `, {
            closeButton: false,
            autoclose: false,
            maxWidth: 100,
            minWidth: 150
        }).openPopup();
    });

    marker.on("mouseout", function () { this.closePopup(); });

    marker.on("click", async function () {
        // Close popup if it's open
        marker.closePopup();

        // Zoom map smoothly
        map.setView([lm.lat, lm.lng], 18, { animate: true });

        // Get address asynchronously
        const address = await getAddressFromCoords(lm.lat, lm.lng);

        // Fill the right-side card
        const card = document.getElementById("right-card");
        card.innerHTML = `
            <button id="close-card" style="float: right; border: none; background: transparent; font-size: 20px; cursor: pointer;">&times;</button>
            <h3>${lm.title}</h3>
            <img src="${lm.image[0]}" width="60%" style="border-radius:5px; margin-bottom:10px;">
            <p>${address}</p><br>
            <b>Details:</b>
            <p>${lm.description}</p>
            <b>History:</b>
            <p>${lm.history}</p><br><br>
            <img src="${lm.image[0]}" width="100%" style="border-radius:5px; margin-bottom:10px;">
            <img src="${lm.image[1]}" width="100%" style="border-radius:5px; margin-bottom:10px;">
            <img src="${lm.image[2]}" width="100%" style="border-radius:5px; margin-bottom:10px;">
            <img src="${lm.image[3]}" width="100%" style="border-radius:5px; margin-bottom:10px;">
            <img src="${lm.image[4]}" width="100%" style="border-radius:5px; margin-bottom:10px;">
        `;

        // Open right card using aside manager
        openAside("rightCard");

        // Close card button handler
        document.getElementById("close-card").onclick = () => {
            card.style.display = "none";
            document.querySelector(".map-container").classList.remove("shrink");
        };
    });
});


// Populate landmarks list dynamically and make clickable
const landmarksUl = document.getElementById("landmarks");
landmarksUl.innerHTML = ""; // Clear existing static items


landmarks.forEach((lm, index) => {
    const li = document.createElement("li");
    li.textContent = lm.title;
    
    // Optional: add an icon inside the li
    const iconImg = document.createElement("img");
    iconImg.src = lm.image[0];
    iconImg.width = 50;
    iconImg.height = 50;
    li.prepend(iconImg);

    li.addEventListener("click", async () => {
        // Zoom map to landmark
        map.setView([lm.lat, lm.lng], 20, { animate: true });

        // Trigger marker click programmatically to open right-card and popup
        const marker = markersArray[index];
        marker.fire("click");
    });

    landmarksUl.appendChild(li);
});  


// MENU BTN
function toggleNav() {
    const nav = document.getElementById("side-nav");
    const isOpen = nav.style.width === "209px";
    if(isOpen) nav.style.width = "0";
    else openAside("sideNav");
}

// Landmark List toggle
function viewlist() {/*
    const landList = document.getElementById("land-List");
    const isOpen = landList.style.width === "450px";
    if(isOpen) {
        landList.style.width = "0";
        document.querySelector(".locate-btn-map").classList.remove("shift-buttons");
        document.querySelector(".return-btn-map").classList.remove("shift-buttons");
    } else {*/
        openAside("landList");
    }
//}

/* Close landmark list when clicking outside
document.addEventListener("click", function(e) {
    const landList = document.getElementById("land-List");
    const sideNav = document.getElementById("side-nav");
    const locateBtn = document.querySelector(".locate-btn-map");
    const resetBtn  = document.querySelector(".return-btn-map");

    if (landList.style.width !== "450px") return;
    if (landList.contains(e.target)) return;
    if (e.target.closest("a[href='#landmarks-list']")) return;
    if (locateBtn.contains(e.target) || resetBtn.contains(e.target)) return;

    landList.style.width = "0";
    locateBtn.classList.remove("shift-buttons");
    resetBtn.classList.remove("shift-buttons");
});*/

// LOCATE ME BUTTON FUNCTION
function requestLocation() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        // Move the map to user's location
        map.setView([lat, lng], 16);

        // Put this syntax to display the coordinates to address
        let addressText = "Address not found";
        try {
            const apiKey = '1b4d272565f544eabbebfab04f59efbb'; 
            const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${apiKey}`;
            const response = await fetch(url);
            const data = await response.json();
            if (data.features && data.features.length > 0) {
                addressText = data.features[0].properties.formatted;
            }
        } catch (error) {
            console.error("Reverse geocoding failed:", error);
        }

        // Add a marker at user's location
        L.marker([lat, lng])
            .addTo(map)
            .bindPopup(`You are here at<br><b>${addressText}</b>`)
            .openPopup();    

            openAside(null); // safely closes everything
    }, () => {
        alert("Unable to retrieve your location.");
    });
}

// Close landmark list button
document.getElementById("close-landlist").onclick = () => {
    const landList = document.getElementById("land-List");
    landList.style.width = "0";
    document.querySelector(".locate-btn-map").classList.remove("shift-buttons");
    document.querySelector(".return-btn-map").classList.remove("shift-buttons");
//Open ABOUT Section

};
function openAbout() {
    document.getElementById("about-popup").style.display = "flex";
    toggleNav(); // optional: auto-close nav menu
}

function closeAbout() {
    document.getElementById("about-popup").style.display = "none";

}
