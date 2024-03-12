import ButtonValue from "../ButtonValue";
import "./styleCards.css";
import { FC } from "react";


interface Coffee {
  id: number; 
  tipo: string;
  tipo2?: string;
  tipo3?: string;
  titulo: string;
  texto: string;
  img: string;
}

interface CardsProps {
  post: Coffee;
  onSelectItem?: (title: string, quantity: number) => void;
}

const Cards: FC<CardsProps> = ({ post }) => {
  const hasTipo2 = post.tipo2 !== undefined && post.tipo2.trim() !== "";
  const hasTipo3 = post.tipo3 !== undefined && post.tipo3.trim() !== "";

  return (
    <>
     <img
          className="capa"
          src={post.img}
          alt="Café"
        />
      <div
        className={`flex-container ${
          hasTipo2 || hasTipo3 ? "background-color" : ""
        }`}
      >
        <div className="flex-itemm">
          <div className="post-tipo ">
            <p
              className={`post-tipo tipo1 ${
                post.tipo.trim() === "" ? "hidden" : ""
              }`}
            >
              {" "}
              {post.tipo}{" "}
            </p>
            <p className={`post-tipo tipo2 ${!hasTipo2 ? "hidden" : ""}`}>
              {" "}
              {post.tipo2}{" "}
            </p>
            <p className={`post-tipo tipo3 ${!hasTipo3 ? "hidden" : ""}`}>
              {" "}
              {post.tipo3}{" "}
            </p>
          </div>
          <h2 className="title"> {post.titulo} </h2>
          <p className="paragraph"> {post.texto} </p>
        </div>
        <div className="container-button">
            <p className="money">R$</p>
            <p className="price">9,90</p>
          <div className="button-value">
            <ButtonValue
              id={post.id}
              name={post.titulo}
              img={post.img}
            />
          </div>
        </div> 
      </div>
    </>
  );
};

export default Cards;
