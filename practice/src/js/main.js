import productModel from "./models/product-model";
import productView from "./views/product-view";
import productController from "./controllers/product-controllers";

const app = new productController(new productModel(), new productView())
