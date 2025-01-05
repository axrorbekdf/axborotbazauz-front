
export default class CrudUser{

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
      phone: {
        type: String,
        name: "phone",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['phone'] : null
      },
      password: {
        type: String,
        name: "password",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['password'] : null
      },
      is_active: {
        type: String,
        name: "status",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['is_active'] : null
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
    },{
      key: 'phone',
      label: 'Telefon'
    }, {
      key: 'is_active',
      label: 'Status'
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
