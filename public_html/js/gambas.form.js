/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Forms = {
    _info: {},
    load: function () {
        uget({
            type: 'GET',
            url: LinkServer.Url('form', 'get', [])
        }).done(function (data) {
            //Lista en tab de slides
            var list = $(".idform"),
                table = $("#table-forms tbody"),
                form2 = $("#form-submitions");

            list.html("");
            table.empty();
            form2.empty();
            
            for (var i=0; i<data._response.length; i++) {
                (function (ob) {
                    list.append("<option value='" + ob.idform + "'>" 
                            + ob.name + "</option>");

                    var tr = $("<tr/>", {
                        id: ob.idform,
                        class: 'gradeA'
                    });

                    $("<td/>", {
                        class: 'i_name'
                    }).html(
                        $("<a/>", {
                            href: '#',
                            html: ob.name
                        }).click(function (e) {
                            e.preventDefault();

                            Forms.information(ob.idform, ob.name);
                        })
                    ).appendTo(tr);

                    $("<td/>", {
                        class: 'i_type'
                    }).html(
                        $("<select/>").append(
                            $("<option/>", {
                                text: ob.status,
                                value: ob.status
                            })
                        ).append(
                            $("<optgroup/>", {
                                label: 'Cambiar Estado'
                            }).append(
                                $("<option/>", {
                                    text: 'Publicado',
                                    value: 'Publicado'
                                })
                            ).append(
                                $("<option/>", {
                                    text: 'Pendiente',
                                    value: 'Pendiente'
                                })
                            ).append(
                                $("<option/>", {
                                    text: 'Finalizado',
                                    value: 'Finalizado'
                                })
                            )
                        ).change(function (e) {
                            uget({
                                type: 'put',
                                url: LinkServer.Url('form', 'status'),
                                data: {
                                    idform: ob.idform,
                                    status: $(this).val()
                                }
                            }).done(function (data) {
                                if(data._code !== 200) {
                                    alert(data._message);
                                }
                            });
                        })
                    ).appendTo(tr);

                    $("<td/>", {
                        class: 'i_arch',
                        html: ob.consecutivo
                    }).appendTo(tr);
                    
                    $("<td/>", {
                        class: 'i_arch',
                        html: ob.creation
                    }).appendTo(tr);

                    $("<td/>", {
                        class: 'i_status'
                    }).css({
                        'text-align': 'center'
                    }).html(
                        $("<span/>", {
                            class: 'st-16 icon-edit'
                        }).click(function () {
                            R.edit_form(ob);
                        })
                    ).appendTo(tr);
            
                    $("<td/>", {
                        class: 'i_status'
                    }).css({
                        'text-align': 'center'
                    }).html(
                        $("<span/>", {
                            class: 'st-16 icon-eye-open'
                        }).click(function () {
                            Forms.get(ob.idform);
                        })
                    ).appendTo(tr);

                    $("<td/>", {
                        class: 'i_launch'
                    }).css({
                        'text-align': 'center'
                    }).html(
                        $("<span/>", {
                            class: 'st-48 icon-remove'
                        }).click(function () {
                            Forms.delete(ob.idform);
                        })
                    ).appendTo(tr);

                    tr.appendTo(table);
                    
                    form2.append(
                        $("<li/>").html(
                            $("<a/>", {
                                href: '#',
                                html: ob.name
                            }).click(function (e) {
                                e.preventDefault();
                                
                                Forms.information(ob.idform, ob.name);
                            })
                        )
                    );
                })(data._response[i]);
            }
            
            $("#table-forms").tablesorter();
        });
    }, delete: function (id) {
        var del = confirm("Desea eliminar el formulario?");

        if(del) {
            uget({
                type: 'DELETE',
                url: LinkServer.Url('form', 'remove', []),
                data: {
                    idform: id
                }
            }).done(function (data) {
                if(data._code === 200) {
                    Forms.load();
                } else {
                    alert("Hubo un error al eliminar. " + data._message);
                }
            });
        }
    }, get: function (id) {
        uget({
            type: 'GET',
            url: LinkServer.Url('form', 'get', {
                idform: id
            })
        }).done(function (data) {
            if(data._code === 200) {
                $('.section').css({
                    display: 'none'
                });
                
                $('#edit-form').css({
                    display: 'block'
                });
                
                var info = JSON.parse(data._response.value);
                
                $("#form-title").html(info.name);
                R.load(data._response.value);
            } else {
                alert("Hubo un error al cargar el proyecto: " + data._message);
            }
        });
    }, information: function (id, name) {
        uget({
            type: 'GET',
            url: LinkServer.Url('screens', 'get', {
                idform: id
            })
        }).done(function (data) {
            $(".submit-name").html(name);

            $('.section').css({
                display: 'none'
            });

            $('#list-submitions').css({
                display: 'block'
            });

            var table = $("#table-submitions tbody").empty();
            
            if(data._code === 200) {
                for(var i in data._response) {

                    (function (ob) {
                        Forms._info[ob._id] = ob.screens;
                        console.log(ob);

                        var tr = $("<tr/>", {
                            id: ob._id,
                            class: 'gradeA'
                        });

                        $("<td/>", {
                            class: 'i_name',
                            html: ob.consecutivo
                        }).appendTo(tr);

                        $("<td/>", {
                            class: 'i_type',
                            html: ob.user
                        }).appendTo(tr);

                        $("<td/>", {
                            class: 'i_arch',
                            html: ob.date
                        }).appendTo(tr);

                        $("<td/>", {
                            class: 'i_status'
                        }).css({
                            'text-align': 'center'
                        }).html(
                            $("<span/>", {
                                class: 'st-16 icon-eye-open'
                            }).click(function () {
                                Forms.show(ob._id);
                            })
                        ).appendTo(tr);

                        $("<td/>", {
                            class: 'i_launch'
                        }).css({
                            'text-align': 'center'
                        }).html(
                            $("<span/>", {
                                class: 'st-48 icon-remove'
                            }).click(function () {
                                Forms.remove(ob._id, id, name);
                            })
                        ).appendTo(tr);

                        tr.appendTo(table);
                    })(data._response[i]);
                }
                
                //$("#table-submitions").tablesorter();
            }
        });
    }, show : function (_id) {
        var e = Forms._info[_id],
            information = $("#loadInformation .information");
    
        $('.section').css({
            display: 'none'
        });

        $('#submition-view').css({
            display: 'block'
        });
        
        $("#submition-title").html(_id);

        information.empty();
        
        var screenSubmition = $("#screen-submition").empty();

        if(e) {
            for(var name in e) {
                var table_ = $("<table/>");
                
                for(var comp in e[name]) {
                    var obj = null;
                    
                    if(/^data:image\/.+;base64,.*/g.exec(e[name][comp])) {
                        obj = $("<img/>", {
                            src: e[name][comp]
                        });
                    } else if(/^\([\d\-\.]+,[\d\-\.]+\)$/g.exec(e[name][comp])) {
                        obj = $("<a/>", {
                            target: 'blank',
                            href: "http://maps.google.com/?q=" + e[name][comp].substring(1, e[name][comp].length-1)
                        }).html(
                            $("<img/>", {
                                src: "http://maps.googleapis.com/maps/api/staticmap?center=" + e[name][comp].substring(1, e[name][comp].length-1) + "&zoom=15&size=200x150&sensor=false"
                            })
                        );
                    } else {
                        obj = e[name][comp];
                    }
                    
                    $("<tr/>").html(
                        $("<th/>").html(comp)
                    ).append(
                        $("<td/>").html(obj)
                    ).appendTo(table_);
                }
                
                $("<div/>", {
                    class: 'col-lg-6'
                }).html(
                    $("<div/>", {
                        class: 'panel panel-default'
                    }).html(
                        $("<div/>", {
                            class: 'panel-heading',
                            html: name
                        })
                    ).append(
                        $("<div/>", {
                            class: 'panel-body infomaniac'
                        }).html(table_)
                    )
                ).appendTo(screenSubmition);
                /*var table = $("<table/>"),
                    tbody = $("<tbody/>");

                $("<thead/>").html(
                    $("<tr/>").html(
                        $("<th/>", {
                            colspan: 2
                        }).html(name)
                    )
                ).appendTo(table);

                for(var comp in e[name]) {
                    $("<tr/>").html(
                        $("<th/>").html(comp)
                    ).append(
                        $("<td/>").html(e[name][comp])
                    ).appendTo(tbody);
                }

                table.append(tbody);
                information.append(table);*/
            }

            $("#loadInformation").css({
                display: 'block'
            });
        } else {
            alert("No se ha encontrado el formulario.");
        }
    }, remove: function (_id, id, name) {
        var yes = confirm("Desea eliminar " + _id + "?");

        if(yes) {
            uget({
                type: 'DELETE',
                url: LinkServer.Url('screens', 'remove'),
                data: {
                    _id: _id
                }
            }).done(function (data) {
                if(data._code === 200) {
                    Forms.information(id, name);
                } else {
                    alert(data._message);
                }
            });
        }
    }, close: function () {
        $("#loadInformation").css({
            display: 'none'
        });
    }
};