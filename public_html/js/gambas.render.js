/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*Elementos que agregables al editor*/
var _tools = {
    file: {
        icon            : 'res/icons/file.png',
        text            : ' File',
        description     : 'Create a simple Upload File.',
        counter         : 1,
        properties: {
            _id             : 0,
            _type           : 'file',
            _accept         : 'any',
            accept          : [
                {
                    value   : "any",
                    key     : "Any"
                }
            ],
            label           : 'Upload File',
            default         : 'false',
            length          : 255,
            required        : false,
            advanced: {
                visible     : true
            }
        }
    }, checkbox: {
        icon            : 'res/icons/radio_button.png',
        text            : ' Checkbox',
        description     : 'Create a simple Checkbox.',
        counter         : 1,
        properties: {
            _id             : 0,
            _type           : 'radio',
            _accept         : 'boolean',
            accept          : [
                {
                    value   : "boolean",
                    key     : "boolean"
                }
            ],
            label           : 'Radio Button',
            default         : 'false',
            length          : 255,
            required        : false,
            advanced: {
                visible     : true
            }
        }
    }, radiobutton: {
        icon            : 'res/icons/radio_button.png',
        text            : ' Radio Button',
        description     : 'Create a simple Radio Button.',
        counter         : 1,
        properties: {
            _id             : 0,
            _type           : 'radio',
            _accept         : 'boolean',
            accept          : [
                {
                    value   : "boolean",
                    key     : "boolean"
                }
            ],
            label           : 'Radio Button',
            default         : 'false',
            length          : 255,
            required        : false,
            advanced: {
                visible     : true
            }
        }
    }, textarea: {
        icon            : 'res/icons/textarea.png',
        text            : ' Textarea',
        description     : 'Create a simple Textarea.',
        counter         : 1,
        properties: {
            _id             : 0,
            _type           : 'textarea',
            _accept         : 'any',
            accept          : [
                {
                    value   : "any",
                    key     : "Any text"
                }, {
                    value   : "alphanumeric",
                    key     : "Letters and numbers"
                }, {
                    value   : "uppercase",
                    key     : "Only Uppercase"
                }, {
                    value   : "lowercase",
                    key     : "Only lowercase"
                }
            ],
            label           : 'Textarea',
            default         : '',
            length          : 255,
            required        : false,
            advanced: {
                visible     : true
            }
        }
    }, text: {
        icon            : 'res/icons/textbox.png',
        text            : ' Text',
        description     : 'Create a simple TextBox.',
        counter         : 1,
        properties: {
            _id             : 0,
            _type           : 'text',
            _accept         : 'any',
            accept          : [
                {
                    value   : "any",
                    key     : "Any text"
                }, {
                    value   : "alphanumeric",
                    key     : "Letters and numbers"
                }, {
                    value   : "uppercase",
                    key     : "Only Uppercase"
                }, {
                    value   : "lowercase",
                    key     : "Only lowercase"
                }
            ],
            label           : 'Text',
            default         : '',
            length          : 255,
            required        : false,
            advanced: {
                visible     : true
            }
        }
    }, number: {
        icon            : 'res/icons/numberbox.png',
        text            : ' Number',
        description     : 'Create a Number TextBox. Accept: Decimals, Integers, Reals.',
        counter         : 1,
        properties: {
            _id             : 0,
            _type           : 'text',
            _accept         : "decimal",
            accept          : [
                {
                    value   : "decimal",
                    key     : "Decimal"
                }, {
                    value   : "possitive_decimal",
                    key     : "Decimal Possitive"
                }, {
                    value   : "integer",
                    key     : "Integer"
                }, {
                    value   : "possitive_integer",
                    key     : "Integer Possitive"
                }
            ],
            label           : 'Number',
            default         : 0,
            min             : -32768,
            max             : 32767,
            required        : false,
            advanced: {
                visible     : true
            }
        }
    }, checkbox: {
        icon            : 'res/icons/checkbox.png',
        text            : ' CheckBox',
        description     : 'Create a simple CheckBox.',
        counter         : 1,
        properties: {
            _id             : 0,
            _type           : 'checkbox',
            _accept         : 'any',
            label           : 'Check',
            default         : false,
            length          : 255,
            required        : false,
            advanced: {
                visible     : true
            }
        }
    }, date: {
        icon            : 'res/icons/datebox.png',
        text            : ' Date',
        description     : 'A simple DatePicker.',
        counter         : 1,
        properties: {
            _id             : 0,
            _type           : 'text',
            _accept         : "dd-mm-aa",
            accept          : [
                {
                    value   : "dd-mm-aa",
                    key     : "dd-mm-aa"
                }, {
                    value   : "dd-mm-aa HH:mm:ss",
                    key     : "dd-mm-aa HH:mm:ss"
                }, {
                    value   : "dd-mm-aaaa",
                    key     : "dd-mm-aaaa"
                }, {
                    value   : "dd-mm-aaaa HH:mm:ss",
                    key     : "dd-mm-aaaa HH:mm:ss"
                }
            ],
            label           : 'Date',
            default         : '00-00-00',
            required        : false,
            advanced: {
                visible     : true
            }
        }
    }, list: {
        icon            : 'res/icons/textbox.png',
        text            : ' List',
        description     : 'List of elements.',
        counter         : 1,
        properties: {
            _id             : 0,
            _type           : 'list',
            label           : 'List',
            default         : [],
            required        : false,
            advanced: {
                visible     : true
            }
        }
    }, label: {
        icon            : 'res/icons/textbox.png',
        text            : ' Label',
        description     : 'A simple label',
        counter         : 1,
        properties: {
            _id             : 0,
            _type           : 'label',
            label           : 'Label',
            default         : '',
            required        : false,
            advanced: {
                visible     : true
            }
        }
    }, gps: {
        icon            : 'res/icons/gps.png',
        text            : ' GPS',
        description     : 'Geolocalization System.',
        counter         : 1,
        properties: {
            _id             : 0,
            _type           : 'gps',
            label           : 'GPS',
            accuracy        : [
                {value: 10, key: 10},
                {value: 11, key: 11},
                {value: 12, key: 12}
            ],
            provider        : [
                {value: 'best', key: 'best'},
                {value: 'available', key: 'available'},
                {value: 'network', key: 'network'}
            ],
            required        : true,
            advanced: {
                visible     : true
            }
        }
    }, barcode: {
        icon            : 'res/icons/barcode.png',
        text            : ' Barcode',
        description     : 'Barcode Scanner',
        counter         : 1,
        properties: {
            _id             : 0,
            _type           : 'barcode',
            label           : 'Barcode',
            required        : false,
            advanced: {
                visible     : true
            }
        }
    }, camera: {
        icon            : 'res/icons/camera.png',
        text            : ' Camera',
        description     : 'Camera Picture',
        counter         : 1,
        properties: {
            _id             : 0,
            _type           : 'camera',
            label           : 'Camera',
            required        : false,
            advanced: {
                visible     : true
            }
        }
    }, signature: {
        icon            : 'res/icons/signature.png',
        text            : ' Signature',
        description     : 'Signature',
        counter         : 1,
        properties: {
            _id             : 0,
            _type           : 'signature',
            label           : 'Signature',
            required        : false,
            advanced: {
                visible     : true
            }
        }
    }
};

/*
 * Estructura básica del archivo _forms. Esta es solo de ejemplo
 */
var _forms = {
    version         : "1.0",
    name            : "default",
    description     : "",
    components      : {},       //Componentes agregados con id de referencia
    counter         : 1,
    screens         : {         //Paginas de formularios
        889876756566: {
            orders  : []        //Orden de los componentes
        }
    }
};
    
/*Clase de Render*/
var R = null;

$(function () {
    R = new (function () {
        var _window = {
            create: $("<div/>", {
                title: 'Configurar Elemento'
            })
            .appendTo('body')
            .html($("<div />", {
                id: 'load_config'
            }))
            .dialog({
                modal: true,
                autoOpen: false,
                buttons: {
                    Ok: function() {
                        //Obtener todos los valores del formulario
                        var tmp = $( this ).find("form").serializeArray(),
                            params = {};
                        for(var i in tmp) {
                            params[tmp[i].name] = tmp[i].value;
                        }
                        
                        //Obtener el elemento a editar y recorrerlo
                        var comp = _forms.components[params._id];
                        
                        for(var i in comp) {
                            var isTypeOf = typeof comp[i];
                            
                            if(i.indexOf("_") === 0) { //Buscar si es un elemento oculto (_)
                                if(params[i.substr(1)]) {
                                    if(comp[i] instanceof RegExp) {
                                        comp[i] = new RegExp(params[i.substr(1)]);
                                    } else {
                                        comp[i] = params[i.substr(1)];
                                    }
                                }
                            } else { //Si no es un elemento oculto, se edita su valor
                                if(params[i]) {
                                    switch(isTypeOf) {
                                        case "string":
                                            comp[i] = params[i];
                                            break;
                                        case "number":
                                            comp[i] = parseInt(params[i]);
                                            break;
                                        case "boolean":
                                            comp[i] = true;
                                            break;
                                        case "object":
                                            if(Array.isArray(comp[i])) {
                                                if(comp[i].length < 1) {
                                                    var replacer = params[i].replace(/\n\r|\r\n|\r|\n/g, ';');
                                                    comp[i] = replacer.split(';');
                                                } else if(typeof comp[i][0] === "string") {
                                                    var replacer = params[i].replace(/\n\r|\r\n|\r|\n/g, ';');
                                                    comp[i] = replacer.split(';');
                                                }
                                            }
                                            break;
                                    }
                                } else {
                                    if(isTypeOf === "boolean") {
                                        comp[i] = false;
                                    }
                                }
                            }
                        }
                        
                        generate($(".ref_id-" + comp._id), comp);
                        $( this ).dialog( "close" );
                    }
                }
            }),
            form: $("<div/>", {
                title: 'Configurar Formulario'
            })
            .appendTo('body')
            .html($("<div />", {
                id: 'load_form'
            }))
            .dialog({
                modal: true,
                autoOpen: false,
                buttons: {
                    Crear: function () {
                        var form = $(this).find("form"),
                            name = form.find("[name=nombre]").val(),
                            consecutivo = form.find("[name=consecutivo]").val(),
                            emailers = form.find("[name=emailers]").val(),
                            descripcion = form.find("[name=descripcion]").val();
                    
                        _forms = {
                            version         : "1.0",
                            name            : name,
                            description     : descripcion,
                            components      : {},       //Componentes agregados con id de referencia
                            counter         : 1,
                            screens         : {}
                        };
                        
                        R.utils.screens.clear();
                        $(this).dialog("close");
                        R.save();
                    }
                }
            }),
            edit: $("<div/>", {
                title: 'Editar Formulario'
            })
            .appendTo('body')
            .html($("<div />", {
                id: 'edit_form'
            }))
            .dialog({
                modal: true,
                autoOpen: false,
                buttons: {
                    Editar: function () {
                        var form = $(this).find("form"),
                            name = form.find("[name=nombre]").val(),
                            consecutivo = form.find("[name=consecutivo]").val(),
                            emailers = form.find("[name=emailers]").val(),
                            descripcion = form.find("[name=descripcion]").val(),
                            value = form.find("[name=value]").val(),
                            idform = form.find("[name=idform]").val();
                    
                        var obj = JSON.parse(value);
                        obj.description = descripcion;
                        obj.name = name;
                        
                        $(this).dialog("close");
                    
                        uget({
                            type: 'POST',
                            url: LinkServer.Url('form', 'save', []),
                            data: {
                                name: name,
                                value: JSON.stringify(obj),
                                emailers: emailers,
                                idform: idform,
                                consecutivo: consecutivo
                            }
                        }).done(function (data) {
                            if(data._code === 200) {
                                alert("Changes Saved!");
                                Forms.load();
                            } else {
                                alert(data._message);
                            }
                        });
                    }
                }
            })
        };
        
        this.utils = {
            elements: {
                new: {
                    element: function (type) {
                        var prop = R.utils.elements.new.properties(type);

                        prop.label += _tools[type].counter;
                        prop._id = _forms.counter;
                        _tools[type].counter++;
                        _forms.counter++;

                        return prop;
                    },
                    properties: function (type) {
                        return $.extend(true, {}, _tools[type].properties);
                    }
                }
            },
            screens: {
                new: function (name) {
                    var id = name.replace(/\s/g, '_')
                      , screen = $("<div/>", {
                        class: 'screen',
                        id: id
                    }).html(
                        $("<h3/>", {
                            class: 'title'
                        }).html("<i class='icon-file-text'></i> Screen: " + name)
                        .append(
                            $("<button/>", {
                                class: 'remove'
                            }).html("<i class='icon-remove'></i>")
                            .click(function () {
                                var del = confirm("Desea eliminar la pantalla " + name + "?");
                                if(del) {
                                    delete _forms.screens[name];
                                    $("#" + id).remove();
                                }
                            })
                        )
                    );
                    
                    $("<li/>", {
                        class: 'element add',
                        text: 'Agregar elemento'
                    }).droppable({
                        accept: '._row',
                        hoverClass: 'hovered',
                        drop: R.Drop.Tool
                    }).appendTo(
                        $("<ul/>").sortable({
                            revert: true,
                            axis: 'y'
                        }).appendTo(screen)
                    );
                    
                    $("#containner .component .screens").append(screen);
                    
                    return screen;
                },
                clear: function () {
                    $("#containner .component").html(
                        $("<div />", {
                            class: 'screens'
                        })
                    ).append(
                        $("<button/>",{
                            id: 'createScreen'
                        }).html("<i class='icon-plus-sign'></i>")
                        .click(function () {
                            var str = prompt("Nombre de la pantalla:");
                    
                            if(str.length > 0) {
                                str = str.replace(/\s/, "_");
                                str = str.replace(/[\.,\(\)\[\]\?:;]/, "");
                                
                                if(!_forms.screens[str]) {
                                    _forms.screens[str] = {
                                        orders: []
                                    };

                                    R.utils.screens.new(str);
                                } else {
                                    alert("Ya existe una pantalla con ese nombre");
                                }
                            } else {
                                alert("El nombre no puede ser vacio.");
                            }
                        })
                    );
                }
            }
        };
        
        this.Drop = {
            /*Evento cuando se inserta un elemento nuevo en una screen
             * 
             * Los pasos son los siguientes:
             * 1. Del elemento arrastrado al área de la screen se toma el type del 
             *    data del elemento arrastrado que estan previamente creados
             * 2. Con esta información se saca de la pila de elementos el tipo de
             *    objeto a crear.
             * 5. Se insertan a la pila de elementos de la screen 
             * 6. Se llama a render para que lo almacene en el array de elementos y abra
             *    la ventana de edición.
             * */
            Tool: function (ev, ui) {
                var elements = $(this).parent().find(".element"),
                    index = elements.index($(this)),
                    type = ui.draggable.data('type'), //1
                    comp = R.utils.elements.new.element(type); //2
                    
                elements.eq(index).before(  //5
                    $("<li/>", {
                        class: 'element organizable ref_id-' + comp._id
                    }).droppable({
                        accept: '._row',
                        hoverClass: 'hovered',
                        drop: R.Drop.Tool
                    })
                );
                
                generate($(".ref_id-" + comp._id), comp);    //3
                R.create(comp);  //4
            }
        };
        
        /*
         *  Al agregar un elemento al screen estos son los eventos:
         * 3. Se generan los elementos necesarios para insertar en la screen
         * 4. Si es un elemento especial como una lista se edita para que salga bien
         */
        var generate = function (container, comp) {
            var button = $("<button/>").click(function () { //3
                R.edit(comp._id);
            }).html("<i class='icon-edit'></i>"),
            del = $("<button/>", {
                class: 'remove'
            }).html("<i class='icon-remove'></i>")
            .click(function () {
                if(_forms.components[comp._id]) {
                    $(".ref_id-" + comp._id).remove();
                    delete _forms.components[comp._id];
                }
            }),
            label = $("<b/>", {
                title: comp.label
            }).html(comp.label),
            _id = $("<input/>", {
                class   : '_id',
                type    : 'hidden',
                value   : comp._id
            }), element = $("<input/>", {
                type: comp._type,
                value: comp.default,
                name: comp.label
            });
                 
            switch (comp._type) { //4
                case "list":
                    element = $("<select/>", {
                        name: comp.label
                    });
                    for(var i in comp.default) {
                        $("<option/>", {
                            value: comp.default[i]
                        }).text(comp.default[i])
                        .appendTo(element);
                    }

                    break;
                case "label":
                    element = $("<label/>", {
                        name: comp.label
                    }).html(comp.default);

                case "textarea":
                    element = $("<textarea/>", {
                        name: comp.label
                    }).html(comp.default);
            }
            
            container.html("")
                .append(_id)
                .append(label)
                .append(element)
                .append(button)
                .append(del);
        };
        
        /*
         * Genera los componentes de la ventana de configuracion.
         */
        var renderize = function (component) {
            var form = $("<form />");
            
            for (var key in component) {
                if(key != "advanced") {
                    var valuable = typeof component[key],
                        showable = true;
                    var insertable = $("<input />", {
                        type: 'text',
                        name: key,
                        value: component[key]
                    });
                    
                    switch(valuable.toLowerCase()) {
                        case "boolean":
                            insertable = $("<input />", {
                                type: 'checkbox',
                                name: key,
                                value: 'true',
                                checked: component[key]
                            });
                            break;
                        case "object":
                            if(Array.isArray(component[key])) {
                                if(component[key].length === 0) {
                                    insertable = $("<textarea/>", {
                                        name: key
                                    });
                                } else {
                                    var isTypeOf = typeof component[key][0];
                                    switch (isTypeOf) {
                                        case "string":
                                            var str = "";
                                            for(var i in component[key]) {
                                                str += component[key][i] + "\n";
                                            }

                                            insertable = $("<textarea/>", {
                                                name: key
                                            }).html(str);
                                            break;
                                        case "object":
                                            insertable = $("<select/>", {
                                                name: key
                                            });
                                            for(var i in component[key]) {
                                                insertable.append($("<option/>", {
                                                    value: component[key][i].value
                                                }).text(component[key][i].key));
                                                
                                                if(component['_' + key]) {
                                                    insertable.val(component['_' + key]);
                                                }
                                            }
                                            break;
                                    }
                                }
                            } else {
                                showable = false;
                            }
                            break;
                    }
                    
                    if(showable) {
                        $("<p/>")
                        .append("<label>" + key + ":</label>")
                        .append(insertable)
                        .addClass((key.indexOf("_") === 0)? 'hidden' : 'visible')
                        .appendTo(form);
                    }
                }
            }
            
            return form;
        };
        
        this.save = function () {
            $("#containner .component .screen").each(function (i) {
                var idscreen = $(this).attr("id");
                
                _forms.screens[idscreen].orders.length = 0;
                
                $(this).find(".element.organizable").each(function (j) {
                    _forms.screens[idscreen].orders.push($(this).find('._id').val());
                });
            });
            
            var file = JSON.stringify(_forms);
            uget({
                type: 'POST',
                url: LinkServer.Url('form', 'save', []),
                data: {
                    name: _forms.name,
                    value: file
                }
            }).done(function (data) {
                if(data._code === 200) {
                    alert("Changes Saved!");
                    Forms.load();
                } else {
                    alert(data._message);
                }
            });
        };
        
        this.load = function (str) {
            if(str) {
                _forms = JSON.parse(str);
            }
            
            R.utils.screens.clear();
            
            for(var name in _forms.screens) {
                var container = R.utils.screens.new(name),
                    screen = _forms.screens[name];
                
                for(var i=0; i<screen.orders.length; i++) {
                    var elements = container.find(".element"),
                        index = elements.index(container.find(".element.add")),
                        comp = _forms.components[screen.orders[i]]; //2

                    elements.eq(index).before(  //5
                        $("<li/>", {
                            class: 'element organizable ref_id-' + comp._id
                        }).droppable({
                            accept: '._row',
                            hoverClass: 'hovered',
                            drop: R.Drop.Tool
                        })
                    );

                    generate($(".ref_id-" + comp._id), comp);    //3
                }
            }
        };
        
        this.new_form = function () {
            var form = $("<form />");
            $("<label/>")
                .html("Nombre: ")
                .appendTo(form);
            $("<input/>", {
                type: "text",
                name: "nombre"
            }).appendTo(form);
            
            $("<label/>")
                .html("Descripcion: ")
                .appendTo(form);
            $("<textarea/>", {
                name: "descripcion"
            }).appendTo(form);
            
            _window.form.html(form);
            _window.form.dialog("open");
        };
        
        this.edit_form = function (obj) {
            var form = $("<form />");
            $("<input/>", {
                type: "hidden",
                name: "idform",
                value: obj.idform
            }).appendTo(form);
            
            $("<input/>", {
                type: "hidden",
                name: "value",
                value: obj.value
            }).appendTo(form);
            
            $("<label/>")
                .html("Nombre: ")
                .appendTo(form);
            $("<input/>", {
                type: "text",
                name: "nombre",
                value: obj.name
            }).appendTo(form);
            
            $("<label/>")
                .html("Consecutivo: ")
                .appendTo(form);
            $("<input/>", {
                type: "text",
                name: "consecutivo",
                value: obj.consecutivo
            }).appendTo(form);
            
            $("<label/>")
                .html("Descripcion: ")
                .appendTo(form);
            $("<textarea/>", {
                name: "descripcion",
                html: JSON.parse(obj.value).description
            }).appendTo(form);
            
            $("<label/>")
                .html("Recipientes: ")
                .appendTo(form);
            $("<textarea/>", {
                name: "emailers",
                html: obj.emailers
            }).appendTo(form);
            
            _window.edit.html(form);
            _window.edit.dialog("open");
        };

        this.create = function (component) {
            _forms.components[component._id] = component;
            _window.create.html(renderize(component));
            _window.create.dialog("open");
        };
        
        this.edit = function (id) {
            var component = _forms.components[id];
            _window.create.html(renderize(component));
            _window.create.dialog("open");
        };
    })();
});