function createmap(e) {
    let n = document.getElementsByClassName(e.title),
        t = document.getElementsByClassName(e.latitude),
        s = document.getElementsByClassName(e.longitude),
        i = document.getElementsByClassName(e.listingimage),
        o = document.getElementsByClassName(e.listingdescription),
        l = [],
        a = [];

    for (M = 0; M < n.length; M++) {
        var m = i[M].src;
        if (t[M].innerHTML !== "" && s[M].innerHTML !== "") {
            a.push({
                tittle: n[M].innerHTML,
                lat: Number(t[M].innerHTML),
                lng: Number(s[M].innerHTML),
                icon: "https://cdn.prod.website-files.com/65806d348e62b54ace7108bb/67ace756c6eeee9f65e16f19_TVCR_Location_Marker64.png", // Custom marker
                contdiv: '<div class="info-box"><img class="projimg" src="' + m + 
                         '"/><p class="projname">' + n[M].innerHTML + 
                         '</p><p class="projdesc">' + o[M].innerHTML + "</p></div>"
            });
        }
    }

    // Initialize the map with greyscale styles
    const g = new google.maps.Map(document.getElementById("map-div"), {
        zoom: 9,
        center: a[0],
        styles: [
            { elementType: "geometry", stylers: [{ saturation: -100 }] }, // Full greyscale
            { elementType: "labels.icon", stylers: [{ visibility: "off" }] }, // Hides Google icons
            { featureType: "road", elementType: "geometry", stylers: [{ saturation: -100 }] } // Greyscale roads
        ]
    });

    const p = new google.maps.InfoWindow;

    for (M = 0; M < a.length; M++) {
        let u = new google.maps.Marker({
            position: a[M],
            map: g,
            title: a[M].tittle,
            icon: {
                url: a[M].icon, // Custom icon
                scaledSize: new google.maps.Size(40, 40) // Adjust the size if needed
            }
        });

        l.push(u);
        v(u, a[M].contdiv);
    }

    function v(e, n) {
        e.addListener("click", () => {
            p.setContent(n);
            p.open({
                anchor: e,
                map: g,
                shouldFocus: false
            });
        });
    }

    $(".w-dyn-items .w-dyn-item").click(() => {});
}