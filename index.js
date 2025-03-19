const Counter = {
    data () {
        return {
title: '',
price: '',
count: '',

            order: []
        }
    },
    methods:{
        addProduct(e){
            e.preventDefault();
            if (!this.title.trim()) { // проверка пустой строки
                this.isTitleEmpty = true; 
               alert('Введите название товара')
                return;
            }
            if (this.price<0) {
                alert ('Отрицательной стоимости не бывает, давай еще разок попробуем!')
                return
            }
            if (this.count<0) {
                alert ('Отрицательного количества не бывает, давай еще разок попробуем!')
                return
            }
            //добавление товара в список
this.order.push({
    id: Date.now(),
    title: this.title,
    price: Number(this.price),
    count: Number(this.count)>0,
});
//очищаем поля формы
this.title="";
this.price="";
this.count="";

        }
    },
    //вычисления итоговой стоимости
  computed:{
    totalPrice() {
        let totalPrice =0;
        for (const product of this.order) {
            totalPrice += product.price * product.count
        }
        return totalPrice;
    },
    //сортировка от большей стоимости к меньшей
sortOrder(){
    return this.order.sort((a, b) => b.price-a.price)
},
}
}

Vue.createApp(Counter).mount('#app');