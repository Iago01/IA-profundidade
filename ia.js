let grafo = [
    {
      'nome':"A",
      'filhos' : ["B","C","D"],
      'escolhido':false
    },
    {
      'nome':"B",
      'filhos' : ["E","F"],
      'escolhido':false
    },
    {
      'nome':"C",
      'filhos' : ["F","G"],
      'escolhido':false
    },
    {
      'nome':"D",
      'filhos' : [],
      'escolhido':false
    },
    {
      'nome':"E",
      'filhos' : ["H","I"],
      'escolhido':false
    },
    {
      'nome':"F",
      'filhos' : ["J"],
      'escolhido':false
    },
    {
      'nome':"G",
      'filhos' : [""],
      'escolhido': true
    },{
      'nome':"H",
      'filhos' : [],
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
      'escolhido': false
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
        return true
      }
      else{
        for(let i = 0;i< noAlterado.filhos.length;i++){
          for(let j = 0; j < LE.length ; j++){
            if(noAlterado.filhos[i]==LE[j].nome){
              let myIndex = noAlterado.filhos.indexOf(noAlterado.filhos[i]);
              noAlterado.filhos.splice(myIndex,1);
              
            }
          }
          for(let l = 0; l < LNE.length ; l++ ){
            if(noAlterado.filhos[i]==LNE[l].nome){
              let myIndex = noAlterado.filhos.indexOf(noAlterado.filhos[i]);
              noAlterado.filhos.splice(myIndex,1);
              
            }
          }
          if(BSS.length != 0){
            for(let m = 0; m < BSS.length ; m++){
              if(noAlterado.filhos[i]==BSS[m].nome){
                let myIndex = noAlterado.filhos.indexOf(noAlterado.filhos[i]);
                noAlterado.filhos.splice(myIndex,1);
              
              }
            }
          } 
        }
        if(noAlterado.length == 0){
          
          return true;
        }
        else{
          
          return noAlterado.filhos;
        }
      }
    }
    function imprimirDados(dados){
      let texto = "";
      for(let i = 0;i<dados.length;i++){
        texto = texto + " " + dados[i].nome
      }
      return texto
    }
    function procurarNo(grafo){
      let LE = [grafo[0]];
      let LNE = [grafo[0]];
      let BSS = [];
      let EC = grafo[0];
      let iteracao = 0
      while(LE.length != 0 ){
        console.log("ITERAÇÃO " + iteracao)
        console.log("LE : " + imprimirDados(LE))
        console.log("LNE : " + imprimirDados(LNE))
        console.log("BSS : " + imprimirDados(BSS))
        console.log("EC : " + EC.nome)
        console.log("")
        iteracao++
        if(EC.escolhido == true){
          return LE
        }
        let filhosEC= semFilhos(EC,LE,LNE,BSS);
        if(filhosEC == true){
          
          while(LE.length != 0 && EC.nome == LE[0].nome){
            BSS.unshift(EC);
            LE.shift();
            LNE.shift();
            EC= LNE[0];
          }
          LE.unshift(EC);
        }
        else{
       
          for(let k = filhosEC.length-1;k>=0;k--){
            let filho = retornaNoPorNome(filhosEC[k],grafo);
            LNE.unshift(filho);
            
          }
          EC=LNE[0];
          LE.unshift(EC)
        }
       
      }
       console.log("nó escolhido não encontrado")
        return false
    }
    let caminho = procurarNo(grafo);
   imprimirDados(caminho)
  
