import { Observable } from 'rxjs/Observable';
import { ServicosProvider } from '../../providers/servicos/servicos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ServicosPageModule } from '../servicos/servicos.module';




@IonicPage()
@Component({
  selector: 'page-servicos-lista',
  templateUrl: 'servicos-lista.html',
})
export class ServicosListaPage {
  servicos: Observable<any[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toast: ToastController,
              private servicosProvider: ServicosProvider)
              {

                this.servicos = this.servicosProvider.getAll();//aqui ta guardando todos os produtos
  }

  newItemProdutos(){ // push é método que chama/abre uma página
                     // o nome da page vc vê na classe da Page
    this.navCtrl.push('ProdutosEditaPage');
  }

  editItemServicos(servicos:any){
    this.navCtrl.push('ServicosEditaPage', {servicoskey: servicos.key});

  }


  removeItemServicos(servicoskey:string, hasImg: boolean){
    this.servicosProvider.remove(servicoskey, hasImg);
    this.toast.create({
     message:"Produto removida com sucesso",
     duration: 3000,
     position: 'botton'}).present();


  }





}
