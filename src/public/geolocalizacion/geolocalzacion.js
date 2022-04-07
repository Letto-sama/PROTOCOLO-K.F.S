const d = document
const n = navigator

export default function getGeolocation(id) {
    const $id = d.getElementById(id),
        options = {
            enableHighAccuracy: true,
            timeOut: 5000,
            maximumAge: 0
        };
    const success = (position) => {
        let coords = position.coords
        $id.innerHTML = `<p>${coords.latitude},${coords.longitude}</p> <p>Con una precisión de ${coords.accuracy} metros</p>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},18z" target="_blank" rel="noopener">Ver en google maps</a>`
        console.log(position)
    }
    const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        console.log(`Error ${err.code}: ${err.message}`)
    }


    n.geolocation.getCurrentPosition(success, error, options);

}
