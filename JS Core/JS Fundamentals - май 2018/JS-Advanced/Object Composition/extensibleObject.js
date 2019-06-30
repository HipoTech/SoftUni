function extensibleObject() {
    return {
        extend(objectToExtend) {
            for (let atribute in objectToExtend) {
                if (typeof objectToExtend[atribute] === 'function') {
                    Object.getPrototypeOf(this)[atribute] = objectToExtend[atribute];
                } else {
                    this[atribute] = objectToExtend[atribute];
                }
            }
        }
    }
}

