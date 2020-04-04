window.onload = () => {
    window.map = new mapcube.Map({
        bundle: 'data',
        local: true,
        container: 'map',
        mask: true,
        flyToIndoor: false,
        maxZoom: 22,
    });

    var floor = new mapcube.control.FloorSwitch({
        autoHeight: true,
        showSwitchButton: true,
    });
    map.addControl(floor);
    const hotelName = new mapcube.control.Attribution({
        pos: mapcube.control.ControlPos.topleft,
        classes: ['custom-attribute'],
    });
    map.addControl(hotelName);
    map.on('loadedBundle', function() {
        floor.adapter.display = function(i) {
            return i.name;
        };
        map.on('changeStoreyCollection', function(storeyCollectionInfo) {
            if (!storeyCollectionInfo) {
                floor.hide();
                return;
            }
            floor.show();
            const storeyCollection = storeyCollectionInfo.storeyCollection;
            const items = [...storeyCollection.storeys].reverse();
            hotelName.attribs = [storeyCollection.name];
            floor.adapter.items = items;
            floor.select(storeyCollectionInfo.currentStorey, false);
        });
    });
};