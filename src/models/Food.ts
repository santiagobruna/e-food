class Food {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string
    infos: string[];
    assessment: string;
    

    constructor(id: number, image: string,  title: string, descrption: string, link: string, infos: string[],  assessment: string){
        this.id = id;
        this.image = image;
        this.title = title;
        this.description = descrption;
        this.link = link
        this.infos = infos;
        this.assessment = assessment;
    }
}

export default Food;