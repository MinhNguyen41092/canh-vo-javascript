import Model from "./models/product-model";
import View from "./views/view";
import Controller from "./controllers/product-controllers";

const app = new Controller(new Model(), new View())
