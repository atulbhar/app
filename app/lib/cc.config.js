cc.Config = {
    loggingEnabled: true,
    storeCode: '53787',
    originalUrl:'http://couchcommerce.shopwaredemo.de/',
    noRedirectSuffix:'/CC/noRedirect',
    searchUrl: 'https://de7so.api.searchify.com/v1/indexes/production/search',
    apiUrl: 'http://cc1.couchcommerce.com/apiv6/products/',
    checkoutUrl:'http://couchdemoshop.couchcommerce.com/checkout/v2/',
    apiHttpMethod: 'jsonp',
    categoryJson: 'data/couchdemoshop/categories.json',
    //apiUrl: 'data/dasgibtesnureinmal/products.json',
    //apiHttpMethod: 'get',
    mediaFolder:'http://cc1.couchcommerce.com/media/couchdemoshop/img/',
    mediaImgExtension:'png',
    mediaPlaceholder:'http://cdn.couchcommerce.com/media/platzhalter.png',
    resourceUrl:'../data/pages/',
    shippingCost:5,
    shippingTax:19,
    shippingFreeFrom: null,
    currency:'EUR',
    currencySign:'€',
    showGeneralAgreement:1,
    showAgeAgreement:0,
    showAppExitLink:true,
    linkGeneralAgreement:'saturn',
    linkRecallAgreement:'neptune',
    linkAgeAgreement:'age',
    linkShippingCosts:'shipping',
    locale:'de-de',
    countries:[{"value":"DE","label":"Deutschland"},{"value":"AT","label":"\u00d6sterreich"},{"value":"AE","label":"Arabische Emirate"},{"value":"AU","label":"Australien"},{"value":"BE","label":"Belgien"},{"value":"DK","label":"D\u00e4nemark"},{"value":"FI","label":"Finnland"},{"value":"IT","label":"Italien"},{"value":"NL","label":"Niederlande"},{"value":"CH","label":"Schweiz"},{"value":"ES","label":"Spanien"}],
    aboutPages:[
            {
                title:'Neptune',
                id:'neptune'
            },
            {
                title:'Saturn',
                id:'saturn'
            },
            {
                title:'Something',
                id:'something'
            }
    ],
    injects: [
        {
            url: '*',
            template: 'some-teaser.html',
            target: 'aboveContent' //aboveContent, aboveFooter, beneathFooter
        }
    ],
    trustedShopsEnabled: true,
    trustedShopsId: 'X35A8844FD4E62A875C2C9E1C05C39CD4'
};