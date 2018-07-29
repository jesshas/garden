export class Weather {
    constructor(
        public city: string,
        public icon: string,
        public main: string,
        public description: string,
        public clouds: number,
        public temperature: number) {
              this.city = city;
              this.icon = icon;
              this.main = main;
              this.description = description;
              this.clouds = clouds;
              this.temperature = temperature;
        }
    }