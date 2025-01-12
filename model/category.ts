export default class CrudCategory{

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
      // slug: {
      //   type: String,
      //   name: "slug",
      //   rules: {
      //     value: "required",
      //     message: "To'ldirilishi shart!"
      //   },
      //   hidden: true,
      //   value: null
      // },
      count: {
        type: String,
        name: "Soni",
        rules: {
          // value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: true,
        value: (JSON.stringify(model) !== "{}") ? model['count'] : 0
      },
      // responsible_worker: {
      //   type: String,
      //   name: "responsible_worker",
      //   rules: {
      //     value: "required",
      //     message: "To'ldirilishi shart!"
      //   },
      //   hidden: true,
      //   value: null
      // },
      // created_at: {
      //   type: String,
      //   name: "created_at",
      //   rules: {
      //     value: "required",
      //     message: "To'ldirilishi shart!"
      //   },
      //   hidden: true,
      //   value: null
      // },
      // updated_at: {
      //   type: String,
      //   name: "updated_at",
      //   rules: {
      //     value: "required",
      //     message: "To'ldirilishi shart!"
      //   },
      //   hidden: true,
      //   value: null
      // },
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
    }, 
    // {
    //   key: 'slug',
    //   label: 'slug'
    // }, 
    // {
    //   key: 'count',
    //   label: 'count'
    // },
    {
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
