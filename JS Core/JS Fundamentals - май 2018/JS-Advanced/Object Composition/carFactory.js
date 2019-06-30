function carFactory(order) {

    let parts = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
        { type: 'hatchback', color: order.color },
        { type: 'coupe', color: order.color }
    ]

    if (order.wheelsize % 2 === 0) {
        order.wheelsize = Math.floor(order.wheelsize - 1);
    }

    const weels = [];
    for (let i = 0; i < 4; i++) {
        weels.push(order.wheelsize);
    }

    const newCar = {
        model: order.model,
        engine: parts.find(e => e.power >= order.power),
        carriage: parts.find(e => e.type === order.carriage),
        wheels: weels
    }

    return newCar

}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
)