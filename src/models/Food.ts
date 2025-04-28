class Food {
    id: number;
    image: string;
    title: string;
    descrption: string;
    infos: string[];
    assessment: string;
    

    constructor(id: number, image: string,  title: string, descrption: string, infos: string[],  assessment: string){
        this.id = id;
        this.image = image;
        this.title = title;
        this.descrption = descrption;
        this.infos = infos;
        this.assessment = assessment;
    }
}

export default Food;