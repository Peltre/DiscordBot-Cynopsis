// banners.js
class Banner {
    constructor(id, version, star5, star4, mitad) {
        this.id = id;
        this.version = version;
        this.star5 = star5;
        this.star4 = star4;
        this.mitad = mitad;
    }
}

const banners = [
    new Banner('Banner1', 'Version 4.2', 'Furina', ['Collei', 'Beidou', 'Charlotte'], 'Primera'),
    new Banner('Banner2', 'Version 4.2', 'Baizhu', ['Collei', 'Beidou', 'Charlotte'], 'Primera'),
    new Banner('Banner3', 'Version 4.2', 'Kamisato Ayato', ['Xiangling','Kuki Shinobu','Kirara'],'Segunda'),
    new Banner('Banner4', 'Version 4.2', 'Cyno', ['Xiangling','Kuki Shinobu','Kirara'],'Segunda'),
];

module.exports = {
    banners,
};