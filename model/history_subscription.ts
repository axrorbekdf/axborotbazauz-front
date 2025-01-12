
export default class CrudHistorySubscription{

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
      user_id: {
        type: String,
        name: "Foydalanuvchi",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['user_id'] : null
      },
      subscription_id: {
        type: String,
        name: "Obuna",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['subscription_id'] : null
      },
      payment_id: {
        type: String,
        name: "To'lov tizimi",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['payment_id'] : null
      },
      start_date: {
        type: String,
        name: "Boshlanish kuni",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['start_date'] : null
      },
      end_date: {
        type: String,
        name: "Tugash kuni",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['end_date'] : null
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
    }, {
      key: 'user.name',
      label: 'Foydalanuvchi'
    }, {
      key: 'subscription.name',
      label: 'Obuna'
    }, {
      key: 'payment_id',
      label: 'To\'lov tizimi'
    }, {
      key: 'start_date',
      label: 'Boshlanish kuni'
    }, {
      key: 'end_date',
      label: 'Tugash kuni'
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
