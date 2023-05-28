function Rating({children}) {
    let stars = ""
    if (Math.round(children) === 0) {
        stars = "☆☆☆☆☆"
    } else if (Math.round(children) === 1) {
        stars = "★☆☆☆☆"
    } else if (Math.round(children) === 2) {
        stars = "★★☆☆☆"
    } else if (Math.round(children) === 3) {
        stars = "★★★☆☆"
    } else if (Math.round(children) === 4) {
        stars = "★★★★☆"
    }  else if (Math.round(children) === 5) {
        stars = "★★★★★"
    }

    return(
        <p>{stars}</p>
    )
}

export default Rating