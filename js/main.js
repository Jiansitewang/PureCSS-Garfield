let result = `
/*Hi，我是王凯。
 *今天给大家用纯css来画一只加菲猫
 */
 
/*首先准备一些样式*/

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  transition: all 1s;
}

*::after {
  box-sizing: border-box;
}

*::before {
  box-sizing: border-box;
}

/*来一点代码高亮*/


/*把我们写代码和画画的地方分开*/
.code-wrapper{
  border: 10px solid #36383F;
  flex: 1;
  height: 50%;
  width: 100%;
  background: #2D2D2D;
  box-shadow: 10px 10px 29px 1px rgba(173,164,173,0.58);
  color: white;
}
.preview-wrapper{
  border: 10px solid #36383F;
  flex: 1;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FBA91A;
  box-shadow: 10px 10px 29px 1px rgba(173,164,173,0.58);
}
`
let domCode = document.querySelector('#code')
let domStyle = document.querySelector('#styleTag')
let n = 0
let id = setInterval(()=> {
  n += 1
  domCode.innerHTML = Prism.highlight(result.substring(0,n), Prism.languages.css, 'css')
  domStyle.innerHTML = result.substring(0,n)
  if (n >= result.length){
    window.clearInterval(id)
    fn2()
  }
},50)

function fn2(){
  let drawBoard = document.createElement('pre')
  drawBoard.id = 'drawBoard'
  
}
