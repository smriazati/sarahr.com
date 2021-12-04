export default function (context, inject) {
    let isLoaded = false
    let waiting = []

    addScript()
    inject('maps', {
        showMap
    })


    function addScript() {
        const script = document.createElement('script')
        script.src = `https://maps.googleapis.com/maps/api/js?key=${context.env.mapsApi}&libraries=places&callback=initGoogleMaps`
        script.async = true
        window.initGoogleMaps = initGoogleMaps
        document.head.appendChild(script)
    }

    function initGoogleMaps() {
        isLoaded = true
        waiting.forEach((item) => {
            if (typeof item.fn === 'function') {
                item.fn(...item.arguments)
            }
        })
        waiting = []
    }

    // function centerMap(lat, lng) {
    //     const position = new window.google.maps.LatLng(parseFloat(m.lat), parseFloat(m.lng))
    //     console.log(position, lat, lng, 'hi')
    // }


    function showMap(canvas, lat, lng, markers, storymapName) {
        // console.log('here comes the map', canvas, lat, lng, markers)
        if (!isLoaded) {
            waiting.push({
                fn: showMap,
                arguments,
            })
            return
        }
        const mapOptions = {
            // mapId: 'bdf928a0003b84ce',
            zoom: 8,
            center: new window.google.maps.LatLng(parseFloat(lat), parseFloat(lng)),
            disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: 'hybrid',
            styles: [{
                featureType: 'poi',
                elementType: 'labels.icon',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.icon',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'transit',
                elementType: 'labels.icon',
                stylers: [{ visibility: 'off' }]
            },
          ]
        }
        const map = new window.google.maps.Map(canvas, mapOptions)
        // console.log('map', map);

        function showMarkers() {
            
            function mapMarkerIcon(color) {
                const mapMarkerIcon = {
                    path: "M257.6,546.7C315.7,477.5,439,320.1,439,231c0-116.5-94.5-211-211-211S17,114.5,17,231c0,89.1,123.3,246.5,181.4,315.7L228,740L257.6,546.7z",
                    fillColor: color,
                    fillOpacity: 1,
                    strokeWeight: 2,
                    strokeColor: "#000",
                    // rotation: 30,
                    scale: 0.1,
                    anchor: new google.maps.Point(15, 30),
                };
                return mapMarkerIcon;
            }

            const bounds = new window.google.maps.LatLngBounds()
            const colors = [
                '#54a131',
                '#70a131',
                '#8ca131',
                '#a19a31',
                '#a17e31',
                '#a16231'
            ]
            const markerSeenColor = "#131313";

            markers.forEach((m, i) => {
                // console.log(m.id)
                console.log(i)
                const position = new window.google.maps.LatLng(parseFloat(m.lat), parseFloat(m.lng))
                const marker = new window.google.maps.Marker({
                    position,
                    icon: mapMarkerIcon(colors[i]),
                    clickable: true,
                })

                marker.setCursor('pointer')

                let markerSeen = false;

                marker.addListener("mouseover", () => {
                    if (!markerSeen) {
                        marker.setIcon(mapMarkerIcon("#fff"))
                    }
                });


                marker.addListener("mouseout", () => {
                    if (!markerSeen) {
                        marker.setIcon(mapMarkerIcon(colors[i]))
                        // console.log('mouseout', m.id);
                    }
                });

                marker.addListener("click", () => {
                    // console.log('clicked', m.id);
                    marker.setIcon(mapMarkerIcon(markerSeenColor))
                    markerSeen = true;
                    context.store.commit(`occupation/setActiveStory`, m.id);
                });

                
                // add listeners to map controls navigation
                const mapControlListItem = document.getElementById(`marker-${m.id}`);
                if (mapControlListItem) {

                    // click event
                    google.maps.event.addDomListener(mapControlListItem, "click", () => {
                        markerSeen = true;
                        marker.setIcon(mapMarkerIcon(markerSeenColor))
                    });

                    // hover event 
                    google.maps.event.addDomListener(mapControlListItem, "mouseover", () => {
                        if (!markerSeen) {
                            marker.setIcon(mapMarkerIcon("#fff"))
                        }
                    });
    
    
                    google.maps.event.addDomListener(mapControlListItem, "mouseout", () => {
                        if (!markerSeen) {
                            marker.setIcon(mapMarkerIcon(colors[i]))
                            // console.log('mouseout', m.id);
                        }
                    });
                }

                marker.setMap(map)
                bounds.extend(position)
            })

                  

            const centerButton = document.getElementById("recenterMap");
            if (centerButton) {
                google.maps.event.addDomListener(centerButton, "click", () => {
                    console.log('clicking center button')
                    map.fitBounds(bounds, 150)
                });
            }
    
            map.fitBounds(bounds, 150)


      

        }


        const panToButton = document.getElementById("panToButton");
        
        if (panToButton) {

            const zoomOutNCDuration = 3000;
            const panToUkraineDelay = zoomOutNCDuration;
            const panToUkraineDuration = 1500;
            const zoomInTuchynDelay = panToUkraineDelay  + panToUkraineDuration;
            const zoomInTuchynDuration = 1500;
            const animationDelay = 2500; // from timer in component 
            const animationDuration = zoomInTuchynDelay + zoomInTuchynDuration + animationDelay;
            
            function animateMapZoomOut(map, targetZoom) {
                var currentZoom = arguments[2] || map.getZoom();
                if (currentZoom != targetZoom) {
                    google.maps.event.addListenerOnce(map, 'zoom_changed', function (event) {
                        animateMapZoomOut(map, targetZoom, currentZoom - (targetZoom < currentZoom ? 1 : -1));
                    });
                    setTimeout(function(){ map.setZoom(currentZoom) }, 100);
                }
            }

            function zoomOutNC() {
                animateMapZoomOut(map, 3);
            }

            function panToUkraine() {
                const tuchynLatLng = new google.maps.LatLng(50.711008, 26.573502);
                setTimeout( () => { map.panTo(tuchynLatLng)}, panToUkraineDelay);
            }

            function animateMapZoomIn(map, targetZoom) {
                var currentZoom = arguments[2] || map.getZoom();
                if (currentZoom != targetZoom) {
                    google.maps.event.addListenerOnce(map, 'zoom_changed', function (event) {
                        animateMapZoomIn(map, targetZoom, currentZoom + (targetZoom > currentZoom ? 1 : -1));
                    });
                    setTimeout(function(){ map.setZoom(currentZoom) }, 300);
                }
            }
            function zoomInTuchyn() {
                setTimeout( () => { animateMapZoomIn(map, 16)}, zoomInTuchynDelay);
            }

            function animationComplete() {
                setTimeout( () => { 
                    // setTimeout (() => {showMarkers()}, 2000)
                    showMarkers();
                    context.store.commit(`occupation/setPanAnimComplete`); // animation TIMER complete
                }, animationDuration);
            }
            
            function panningAnimation() {
                context.store.commit(`occupation/resetPanAnimComplete`); // animation TIMER complete

                zoomOutNC();
                panToUkraine();
                zoomInTuchyn();
                animationComplete();
// stop this function in case of route change... 
            }
            

            google.maps.event.addDomListener(panToButton, "click", () => {
                // console.log('clicked');
                panningAnimation();
            });

            function onReturnVisit() {
                // context.store.commit(`occupation/setPanAnimComplete`);
                showMarkers();
            }
            
            const onReturnButton = document.getElementById('onReturnButton')
            google.maps.event.addDomListener(onReturnButton, "click", () => {
                // console.log('clicked it');
                onReturnVisit();
            });
        }
    }


}