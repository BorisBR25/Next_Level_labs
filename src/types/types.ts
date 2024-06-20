export enum SelectedPage {
    Home = "home",
    Consuting = "consulting",
    Products = "products",
    AboutUs = "aboutus",
    Contact = "contact", 
  }

export interface ProductType {
  title: string,
  img: string
  description: string
}

export interface AboutUsType {
  title: string,
  description?: string,
  image: string,
}