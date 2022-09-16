({
	addCont : function(component, event, helper) {
        let cttLst = component.get('v.cttLst');
        if(!cttLst){
            cttLst = [];
        }
        cttLst.push({
            FirstName: "",
            LastName: "",
            Phone: ""
        });
        console.log(cttLst);
        component.set('v.cttLst', cttLst);
	},
    
    saveCont : function(component, event, helper){
        helper.salvarContato(component, event);
        helper.deletarContato(component, event);
    }, 
    
    deletarLinhaContato : function(component, event, helper){
            let index = event.getSource().get('v.name');
        	let cttLst = component.get('v.cttLst');
        	console.log(JSON.stringify(cttLst));
            let lix = component.get('v.lixeira');
            if(cttLst[index].Id != null){
                console.log(index);
                lix.push(cttLst[index]);
            }	
            console.log(JSON.stringify(lix) + ' oi eu sou a lix');
            cttLst.splice(index,1);
            component.set('v.cttLst', cttLst);
            component.set('v.lixeira', lix);
    },
    
    /*delB : function(component, event, helper){
            let index = event.getSource().get('v.name');
        	let cttLst = component.get('v.cttLst');
         	let lix = component.get('v.lixeira');
            lix.push(cttLst.indexOf(index));
        	cttLst.splice(index,1);
        	component.set('v.cttLst', cttLst);
    },*/
    
    doInit : function(component, event, helper){
        helper.getContactShow(component);
    }
})
