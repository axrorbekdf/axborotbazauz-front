
export default class CrudSubscription{

  getFormFields(model:any = {}){
    
    return {
      id: {
        type: Number,
        name: "id",
        rules: {
          value: null,
          message: "To'ldirilishi shart!"
        },
        hidden: true,
        value: (JSON.stringify(model) !== "{}") ? model['id'] : null
      },
      name: {
        type: String,
        name: "Nomi",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['name'] : null
      },
      period: {
        type: Array<String>,
        name: "Amal qilish oralig'i",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['period'] : null
      },
      price: {
        type: String,
        name: "Summasi",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['price'] : null
      },
    };
  }

  getColumns():any {
    const columns = [{
      key: 'select',
      label: 'Select'
    },{
      key: 'id',
      label: 'ID'
    },{
      key: 'name',
      label: 'Ism'
    }, {
      key: 'period',
      label: 'period'
    }, {
      key: 'price',
      label: 'price'
    }, {
      key: 'responsible_worker',
      label: 'responsible_worker'
    }, {
      key: 'created_at',
      label: 'created_at'
    },{
      key: 'updated_at',
      label: 'updated_at'
    },{
      key: 'actions'
    }];

    return columns;
  }
}
