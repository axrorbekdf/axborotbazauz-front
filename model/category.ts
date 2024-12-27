// Category interfeysi
interface ICategory {
    id: Number,
    name: String,
    slug: String,
    count: String,
    responsible_worker: String,
    created_at: String,
    updated_at: String,
}
  
  // Category sinfi
export default class Category {
    id: Number;
    name: String;
    slug: String;
    count: String;
    responsible_worker: String;
    created_at: String;
    updated_at: String;
  
    constructor(
      id: Number,
      name: String,
      slug: String,
      count: String,
      responsible_worker: String,
      created_at: String,
      updated_at: String
    ) {

      this.id = id;
      this.name = name;
      this.slug = slug;
      this.count = count;
      this.responsible_worker = responsible_worker;
      this.created_at = created_at;
      this.updated_at = updated_at;
    }
  
    // To'liq formatlangan ma'lumotlarni qaytarish
    getFormattedCategory(): ICategory {
      return {
        id: this.id,
        name: this.name,
        slug: this.slug,
        count: this.count,
        responsible_worker: this.responsible_worker,
        created_at: this.created_at,
        updated_at: this.updated_at,
      };
    }

    getDateTest(){
      console.log(this.name);
      
    }

    // Statik metod: API-dan kelgan obyektni Category sinfiga aylantirish
    static fromApiData(apiData: ICategory): Category {
      return new Category(
        apiData.id,
        apiData.name,
        apiData.slug,
        apiData.count,
        apiData.responsible_worker,
        apiData.created_at,
        apiData.updated_at,
      );
    }
  }
