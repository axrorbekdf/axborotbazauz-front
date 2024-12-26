// Category interfeysi
interface ICategory {
    id: Number;
    name: String;
    slug: String;
    date: String;
}
  
  // Category sinfi
  class Category {
    id: Number;
    name: String;
    slug: String;
    date: String;
  
    constructor(id: Number, name: String, slug: String, date: String) {
      this.id = id;
      this.name = name;
      this.slug = slug;
      this.date = date;
    }
  
    // To'liq formatlangan ma'lumotlarni qaytarish
    getFormattedCategory(): { id: Number; name: String; slug: String; date: String } {
      return {
        id: this.id,
        name: this.name,
        slug: this.slug,
        date: this.date,
      };
    }
  
    // Statik metod: API-dan kelgan obyektni Category sinfiga aylantirish
    static fromApiData(apiData: ICategory): Category {
      return new Category(apiData.id, apiData.name, apiData.slug, apiData.date);
    }
  }