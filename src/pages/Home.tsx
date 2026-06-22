export function Home() {


function fechar(){

  window.electron.fechar()

}


function minimizar(){

  window.electron.minimizar()

}



return (

<main>


<header>

<div>
Resetfy
</div>


<section>

<button onClick={minimizar}>
_
</button>


<button onClick={fechar}>
×
</button>


</section>


</header>



<p>
Seu assistente de pausas inteligentes
</p>


<button>
Iniciar
</button>



</main>

)

}