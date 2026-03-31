import { ProdukController } from "./modules/controller.js";
import { ProdukView } from "./modules/view.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const view = new ProdukView();
    const controller = new ProdukController(view);

    view.bindTambahProduk(controller);
});