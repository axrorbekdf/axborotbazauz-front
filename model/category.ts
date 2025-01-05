// // Category interfeysi
// interface ICategory {
//     id: Number,
//     name: String,
//     slug: String,
//     count: String,
//     responsible_worker: String,
//     created_at: String,
//     updated_at: String,
// }
  
//   // Category sinfi
// export default class Category {
//     id: Number;
//     name: String;
//     slug: String;
//     count: String;
//     responsible_worker: String;
//     created_at: String;
//     updated_at: String;
  
//     constructor(
//       id: Number,
//       name: String,
//       slug: String,
//       count: String,
//       responsible_worker: String,
//       created_at: String,
//       updated_at: String
//     ) {

//       this.id = id;
//       this.name = name;
//       this.slug = slug;
//       this.count = count;
//       this.responsible_worker = responsible_worker;
//       this.created_at = created_at;
//       this.updated_at = updated_at;
//     }
  
//     // To'liq formatlangan ma'lumotlarni qaytarish
//     getFormattedCategory(): ICategory {
//       return {
//         id: this.id,
//         name: this.name,
//         slug: this.slug,
//         count: this.count,
//         responsible_worker: this.responsible_worker,
//         created_at: this.created_at,
//         updated_at: this.updated_at,
//       };
//     }

//     // Statik metod: API-dan kelgan obyektni Category sinfiga aylantirish
//     static fromApiData(apiData: ICategory): Category {
//       return new Category(
//         apiData.id,
//         apiData.name,
//         apiData.slug,
//         apiData.count,
//         apiData.responsible_worker,
//         apiData.created_at,
//         apiData.updated_at,
//       );
//     }
// }

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
        value: model['id'] ?? null
      },
      name: {
        type: String,
        name: "Nomi",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: model['name'] ?? null
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
          value: "required",
          message: "To'ldirilishi shart!"
        },
        hidden: false,
        value: model['count'] ?? null
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
      label: 'Ism'
    }, {
      key: 'slug',
      label: 'slug'
    }, {
      key: 'count',
      label: 'count'
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
