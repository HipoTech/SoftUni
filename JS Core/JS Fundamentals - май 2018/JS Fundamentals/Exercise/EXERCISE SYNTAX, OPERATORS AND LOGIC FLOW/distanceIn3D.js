function distanceIn3D(params) {
    let [ax, ay, az, bx, by, bz] = params;
    let dx = Math.max(ax, bx) - Math.min(ax, bx);
    let dy = Math.max(ay, by) - Math.min(ay, by);
    let dz = Math.max(az, bz) - Math.min(az, bz);
    let ans = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2))
    console.log(ans);
}

distanceIn3D([1, 1, 0, 5, 4, 0])