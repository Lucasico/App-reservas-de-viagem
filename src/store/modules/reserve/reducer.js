import produce from "immer";

/**
 * 
 *A LIB Immer ajuda a trabalhar com a parte de imutabilidade do react
 ela te da uma propriedade chamada produce que receber uma state original,
 uma draftState que é uma copia do state original, ou seja, um rascunho
 desse estado em que se pode dar um push, pop, operações que quebram a imutabilidade
 mas que com essa lib se torna possivel apos a operaçõa o rascunho se torna o state original
 de forma imutavel
 */
export default function reducerReserver(state = [], action) {
  switch (action.type) {
    case "ADD_RESERVE":
      return produce(state, (copyState) => {
        // [{0},{1},{2},{3}]
        const tripIndex = copyState.findIndex(
          (copy) => copy.id === action.trip.id
        );
        if (tripIndex >= 0) {
          copyState[tripIndex].amount += 1;
        } else {
          copyState.push({
            ...action.trip,
            amount: 1,
          });
        }
      });
    case "REMOVE_RESERVE":
      return produce(state, (copyState) => {
        const tripIndex = copyState.findIndex((copy) => copy.id === action.id);
        if (tripIndex >= 0) {
          copyState.splice(tripIndex, 1);
        }
      });
    case "UPDATE_RESERVE":
      if (action.amount <= 0) {
        return state;
      } else {
        return produce(state, (copyState) => {
          const tripIndex = copyState.findIndex(
            (copy) => copy.id === action.id
          );
          if (tripIndex >= 0) {
            copyState[tripIndex].amount = Number(action.amount);
          }
        });
      }
    default:
      return state;
  }
}
