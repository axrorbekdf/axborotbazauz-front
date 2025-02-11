
export default class CrudMaterial{

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
      title: {
        type: String,
        name: "Nomi",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['title'] : null
      },
      category_id: {
        type: String,
        name: "Kategoriya",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: true,
        value: (JSON.stringify(model) !== "{}") ? model['category_id'] : null
      },
      category: {
        type: String,
        name: "Kategoriya",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        relation: {
          name: "name",
          status: true
        },
        value: (JSON.stringify(model) !== "{}") ? model['category'] : null
      },
      subject_id: {
        type: String,
        name: "Fan",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: true,
        value: (JSON.stringify(model) !== "{}") ? model['subject_id'] : null
      },
      subject: {
        type: String,
        name: "Fan",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        relation: {
          name: "name",
          status: true
        },
        value: (JSON.stringify(model) !== "{}") ? model['subject'] : null,
      },
      downloads: {
        type: String,
        name: "Yuklanishlar soni",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['downloads'] : null
      },
      path: {
        type: String,
        name: "Url",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['path'] : null
      },
      size: {
        type: String,
        name: "Hajmi",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['size'] : null
      },
      type: {
        type: String,
        name: "Turi",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: (JSON.stringify(model) !== "{}") ? model['type'] : null
      },
      pages: {
        type: Array,
        name: "Sahifalar",
        // rules: {
        //   value: "required",
        //   message: "To'ldirilishi shart!"
        // },
        hidden: true,
        value: (JSON.stringify(model) !== "{}") ? model['pages'] : null
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
      key: 'title',
      label: 'Nomi'
    },{
      key: 'category.name',
      label: 'Kategoriya'
    }, {
      key: 'subject.name',
      label: 'Fan'
    }, 
    // {
    //   key: 'slug',
    //   label: 'slug'
    // }, 
    {
      key: 'downloads',
      label: 'Yuklanishlar'
    }, 
    // {
    //   key: 'path',
    //   label: 'path'
    // }, 
    {
      key: 'size',
      label: 'O\'lchami'
    }, {
      key: 'type',
      label: 'Turi'
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
