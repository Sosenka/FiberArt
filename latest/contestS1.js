    window.socketService = window.injector.get('socketService'); window.routeProvider = window.injector.get('routeProvider');
    socketService.emit(routeProvider.GET_CHARACTER_VILLAGES, {}, function(data){
        for (i = 0; i < data.villages.length; i++){
            if (data.villages[i].character_name == null){
                    var lista = new Array(data.villages.length);
                    lista[i] = data.villages[i].id;
                        injector.get('socketService').emit({type:'Scouting/recruit' }, {village_id: lista[i], slot:1} ); 
            }
        }
    });