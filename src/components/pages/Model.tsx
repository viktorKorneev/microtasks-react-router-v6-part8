import {adidasArr, type AdidasItem} from "./Adidas";
import {useParams} from "react-router-dom";
import {pumaArr, type PumaItem} from "./Puma.tsx";

type CrossModels = {
  [key: string]: (AdidasItem[] | PumaItem[]);
}

const crossModels: CrossModels = {
  puma: pumaArr,
  adidas: adidasArr,
}


export const Model = () => {
  const {model, id} = useParams();
  const currentModel = model ? crossModels[model].find(el => el.id === Number(id)) : null;

  // console.log(currentModel)

  return (
    <div style={{textAlign: 'center'}}>
      {currentModel
        ? <>
          <h2>{currentModel.model}</h2>
          <h4>{currentModel.collection}</h4>
          <h3>{currentModel.price}</h3>
          <img
            src={currentModel.picture}
            alt={currentModel.model}
            style={{width: '600px', height: 'auto', marginRight: '10px'}}
          />
        </>
        : <h2>Модель отсутствует</h2>
      }
    </div>
  );
};
