
export function Welcome() {
  function handleClick () {
    console.log('clicou');
  }

  return (
    <div className="minhadiv">
      <div>oi</div>
      <input></input>
      <input></input>
      <button className="botao" onClick={handleClick}>teste</button>

      <div className="container">
        <CartaoDeVisita name="maria" age={23}/>
        <CartaoDeVisita name="duilio" age={33} />
        <CartaoDeVisita name="maria" age={23}/>
        
        
      </div>
    </div>

  );
}

function CartaoDeVisita ({ name, age }) {
  return (
    <div className="borda">
      <div>{name}</div>
      <div>{age}</div> 
    </div>
  );
}
