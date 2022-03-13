let grafo = [
    {
      'nome':"A",
      'filhos' : ["B","C","D"],
      'escolhido':false
    },
    {
      'nome':"B",
      'filhos' : ["E","F","C"],
      'escolhido':false
    },
    {
      'nome':"C",
      'filhos' : ["G"],
      'escolhido':false
    },
    {
      'nome':"D",
      'filhos' : [],
      'escolhido':false
    },
    {
      'nome':"E",
      'filhos' : [],
      'escolhido':false
    },
    {
      'nome':"F",
      'filhos' : [],
      'escolhido':false
    },
    {
      'nome':"G",
      'filhos' : ["H"],
      'escolhido': false
    },{
      'nome':"H",
      'filhos' : ["I","J"],
      'escolhido': false
    },
    {
      'nome':"I",
      'filhos' : [],
      'escolhido': false
    },
    {
      'nome':"J",
      'filhos' : [],
      'escolhido': true
    },
    ]; 
    function retornaNoPorNome(nome,grafo){
      for(let i=0;grafo.length > i;i++){
        if(grafo[i].nome == nome){
          return grafo[i]
        }
      }
    };
    function semFilhos(no,LE,LNE,BSS){
      let noAlterado = no;
      if(noAlterado.filhos.length == 0){
        console.log("retornou true de primeira");
        return true
      }
      else{
        console.log(noAlterado);
        for(let i = 0;i< noAlterado.filhos.length;i++){
          for(let j = 0; j < LE.length ; j++){
            if(noAlterado.filhos[i]==LE[j].nome){
              let myIndex = noAlterado.filhos.indexOf(noAlterado.filhos[i]);
              noAlterado.filhos.splice(myIndex,1);
              console.log(noAlterado);
            }
          }
          for(let l = 0; l < LNE.length ; l++ ){
            if(noAlterado.filhos[i]==LNE[l].nome){
              console.log(noAlterado.filhos.indexOf(noAlterado.filhos[i]))
              let myIndex = noAlterado.filhos.indexOf(noAlterado.filhos[i]);
              noAlterado.filhos.splice(myIndex,1);
              console.log(noAlterado);
            }
          }
          if(BSS.length != 0){
            for(let m = 0; m < BSS.length ; m++){
              if(noAlterado.filhos[i]==BSS[m].nome){
                let myIndex = noAlterado.filhos.indexOf(noAlterado.filhos[i]);
                noAlterado.filhos.splice(myIndex,1);
                console.log(noAlterado);
              }
            }
          } 
        }
        if(noAlterado.length == 0){
          console.log("retornou true de segunda");
          return true;
        }
        else{
          console.log("retornou false");
          return noAlterado.filhos;
        }
      }
    }
    function procurarNo(grafo){
      let LE = [grafo[0]];
      let LNE = [grafo[0]];
      let BSS = [];
      let EC = grafo[0];
      while(LE.length != 0 ){
        console.log("PRIMEIRO DE LE: " + LE[0].nome)
        console.log("PRIMEIRO DE LNE: "+LNE[0].nome)
        console.log("EC ESCOLHIDO: " + EC.nome)
        if(EC.escolhido == true){
          return LE
        }
        let filhosEC= semFilhos(EC,LE,LNE,BSS);
        if(filhosEC == true){
          console.log("EC NÃO TEM FILHOS");
          while(LE.length != 0 && EC.nome == LE[0].nome){
            BSS.unshift(EC);
            LE.shift();
            LNE.shift();
            EC= LNE[0];
          }
          LE.unshift(EC);
        }
        else{
          console.log("primeiro filho de EC: " + filhosEC.length)
          for(let k = filhosEC.length-1;k>=0;k--){
            let filho = retornaNoPorNome(filhosEC[k],grafo);
            LNE.unshift(filho);
            console.log("FILHO DE EC: "+ filho.nome)
          }
          EC=LNE[0];
          LE.unshift(EC)
        }
      }
      console.log("nó escolhido não encontrado")
      return false
    }
    let caminho = procurarNo(grafo);
    for(let i=0;i<caminho.length;i++){
      console.log(caminho[i].nome)
    }
  