function gradsToDegrees(params) {
    let deg = params * 0.9;
    if (deg <= 0) {
        deg = deg % 360 + 360;
    } else if (deg >= 360) {
        deg = deg % 360;
    }
    console.log(deg); //1 Grads = 0.9 Degrees
}
gradsToDegrees(-50)