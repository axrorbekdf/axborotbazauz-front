
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
        name: "user_id",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['user_id'] : null
      },
      subscription_id: {
        type: String,
        name: "subscription_id",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['subscription_id'] : null
      },
      payment_id: {
        type: String,
        name: "payment_id",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['payment_id'] : null
      },
      start_date: {
        type: String,
        name: "start_date",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['start_date'] : null
      },
      end_date: {
        type: String,
        name: "end_date",
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
      key: 'user_id',
      label: 'user_id'
    }, {
      key: 'subscription_id',
      label: 'subscription_id'
    }, {
      key: 'payment_id',
      label: 'payment_id'
    }, {
      key: 'start_date',
      label: 'start_date'
    }, {
      key: 'end_date',
      label: 'end_date'
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
