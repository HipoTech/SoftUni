function coursesPrices(fundamentals, advanced, applications, form) {
    let jsFundamentalsPrice = 170;
    let jsAdvancedPrice = 180;
    let jsApplicationsPrice = 190;
    let sum = 0;
    if (advanced && fundamentals) {
        jsAdvancedPrice *= 0.9;
    }
    if (advanced && fundamentals && applications) {
        jsFundamentalsPrice *= 0.94;
        jsAdvancedPrice *= 0.94;
        jsApplicationsPrice *= 0.94;
    }
    if (form === 'online') {
        jsFundamentalsPrice *= 0.94;
        jsAdvancedPrice *= 0.94;
        jsApplicationsPrice *= 0.94;
    }

    if (advanced) {
        sum += jsAdvancedPrice;
    }
    if (fundamentals) {
        sum += jsFundamentalsPrice;
    }
    if (applications) {
        sum += jsApplicationsPrice;
    }
    console.log(Math.round(sum));
}
coursesPrices([true, false, false, "online"])