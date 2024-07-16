export enum SelectedPage {
    Home = "home",
    Consuting = "consulting",
    Services = "services",
    AboutUs = "aboutus",
    Contact = "contact", 
  }

export interface ProductType {
  title: string,
  video?: string,
  img?: string,
  description: string,
}

export interface AboutUsType {
  title: string,
  description?: string,
  image: string,
  video?: string,
}