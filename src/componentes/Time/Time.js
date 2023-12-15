import { Colaborador } from "../Colaborador/Colaborador";
import "./Time.css";

export const Time = (props) => {
  const backcss = { backgroundColor: props.corSecundaria };
  const bordercss = { borderColor: props.corPrimaria };

  return (
    props.colaboradores.length > 0 && (
      <section className="time" style={backcss}>
        <h3 style={bordercss}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              corDeFundo={props.corPrimaria}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};
