
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
        name: "Amal qilish muddati",
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
      label: 'Nomi'
    }, {
      key: 'period',
      label: 'Amal qilish muddati'
    }, {
      key: 'price',
      label: 'Narxi'
    }, {
      key: 'responsible_worker',
      label: 'Kim tomonidan'
    }, {
      key: 'created_at',
      label: 'Sana'
    },
    // {
    //   key: 'updated_at',
    //   label: 'updated_at'
    // },
    {
      key: 'actions'
    }];

    return columns;
  }
}
