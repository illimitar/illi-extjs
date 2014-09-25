Ext.define('Illi.store.Bis',{
    extend      : 'Illi.store.AbstractStore',
    require     : 'Illi.store.AbstractStore',
    model       : 'Illi.model.Bi',
    baseUrl     : '../fluxo/bi/iJson/',
    storeId     : 'Bis',
    remoteSort:true,
    remoteFilter:true,
    remoteGroup:true,
    pageSize : 250
    

});

