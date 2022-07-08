import ProductModel from "./models/product-model";
import ProductView from "./views/product-view";
import ProductController from "./controllers/product-controllers";

const app = new ProductController(new ProductModel(), new ProductView())
