//dom

const url = document.querySelector('#url')
const botao = document.querySelector('#botao')
const qr = document.querySelector('#qrcode')

//eventos

botao.addEventListener('click',gerador)
url.addEventListener('keydown', (event)=>{
    if(event.key == 'Enter'){
        gerador()
    }

})

function gerador(){
    texto = url.value 
    if(texto){
        qr.innerHTML = ''
        code = new QRCode(qr,{
            text: texto,
            width:400,
            height:400,
            colorDark: 'rgba(0,0,0,0)',
            colorLight:'black'
        }
        )
    }else{
        qr.innerHTML = ''
    }
}