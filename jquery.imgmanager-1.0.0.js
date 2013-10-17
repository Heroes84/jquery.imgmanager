;(function($, window, document, undefined) {
    var pluginName = 'imgmanager',
        defaults = {
            urlGetFolders: undefined,
            urlGetImg: undefined,
            urlUploadImg: undefined,
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.$element = $(element);
        this.settings = $.extend({}, defaults, options);
        this._name = pluginName;
        this.init();
    }

    //collection of public methods
    Plugin.prototype.init = function() {
        this.$element.on('click', function(e) {
            this.view = new View(this.$element)
        });
    }
    Plugin.prototype.open = function() {
        this.view.render();
    }
    
    //Rendering data to DOM
    function View($element) {
        this.$element = $element;
        this.$view = undefined;//rember reference for rendering view for later use
    }
    //Collection view public methods
    View.prototype.render = function() {
        
    }
    
    //View template
    View.prototype.dialog = '<div class="imgmanager"> </div>';

    $.fn[pluginName] = function(options) {
        if(options === undefined || typeof options === 'object') {
            return this.each(function() {
                if (!$.data(this, "plugin_" + pluginName)) {
                    $.data(this, "plugin_" + pluginName, new Plugin(this, options));
                }
            });
        } else if (typeof options === 'string' && typeof $.data(this, 'plugin_' + pluginName)[options] === 'function') {
            return this.each(function() {
                //call the plugin public method
                $.data(this, 'plugin_' + pluginName)[options].call(Array.prototype.slice.call(args, 1));
            });
        } else {
            $.error(pluginName + ' method not exists !');
        }
    };

})(jQuery, window, document);
