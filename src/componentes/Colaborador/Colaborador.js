import "./Colaborador.css";

export const Colaborador = (props) => {
  const frontcss = { backgroundColor: props.corDeFundo };

  return (
    <div className="colaborador">
      <div className="cabecalho" style={frontcss}>
        <img src={props.imagem} alt={props.nome}></img>
      </div>
      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  );
};
