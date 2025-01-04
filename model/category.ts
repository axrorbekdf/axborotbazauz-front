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

export class CrudCategory{

  getFormFields(){
    return {
      // id: {
      //   type: Number,
      //   name: "id",
      //   rules: {
      //     value: "required",
      //     message: "To'ldirilishi shart!"
      //   },
      // },
      name: {
        type: String,
        name: "Nomi",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
      },
      // slug: {
      //   type: String,
      //   name: "slug",
      //   rules: {
      //     value: "required",
      //     message: "To'ldirilishi shart!"
      //   },
      // },
      count: {
        type: String,
        name: "count",
        rules: {
          value: "required",
          message: "To'ldirilishi shart!"
        },
      },
      // responsible_worker: {
      //   type: String,
      //   name: "responsible_worker",
      //   rules: {
      //     value: "required",
      //     message: "To'ldirilishi shart!"
      //   },
      // },
      // created_at: {
      //   type: String,
      //   name: "created_at",
      //   rules: {
      //     value: "required",
      //     message: "To'ldirilishi shart!"
      //   },
      // },
      // updated_at: {
      //   type: String,
      //   name: "updated_at",
      //   rules: {
      //     value: "required",
      //     message: "To'ldirilishi shart!"
      //   },
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
