/*global define*/
define([
        './Batched3DModel3DTileContentProvider',
        './Composite3DTileContentProvider',
        './Empty3DTileContentProvider',
        './Instanced3DModel3DTileContentProvider',
        './Points3DTileContentProvider',
        './Tileset3DTileContentProvider'
    ], function(
        Batched3DModel3DTileContentProvider,
        Composite3DTileContentProvider,
        Empty3DTileContentProvider,
        Instanced3DModel3DTileContentProvider,
        Points3DTileContentProvider,
        Tileset3DTileContentProvider) {
    "use strict";

    /**
     * @private
     */
    var Cesium3DTileContentProviderFactory = {
        b3dm : function(tileset, tile, url) {
            return new Batched3DModel3DTileContentProvider(tileset, tile, url);
        },
        pnts : function(tileset, tile, url) {
            return new Points3DTileContentProvider(tileset, tile, url);
        },
        i3dm : function(tileset, tile, url) {
            return new Instanced3DModel3DTileContentProvider(tileset, tile, url);
        },
        cmpt : function(tileset, tile, url) {
            // Send in the factory in order to avoid a cyclical dependency
            return new Composite3DTileContentProvider(tileset, tile, url, Cesium3DTileContentProviderFactory);
        },
        json : function(tileset, tile, url) {
            return new Tileset3DTileContentProvider(tileset, tile, url);
        }
    };

    return Cesium3DTileContentProviderFactory;
});