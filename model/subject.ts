
export default class CrudSubject{

  getFormFields(model:any = {}){
    
    return {
      id: {
        type: Number,
        name: "ID",
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
      category_id: {
        type: String,
        name: "Kategoriya",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['category_id'] : null
      },
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
    },{
      key: 'category.name',
      label: 'Kategoriya'
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
