import rootReducer from "./modules/rootReducer";

import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;
