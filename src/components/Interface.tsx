export interface Data{
    id: number,
    title: string,
    client: string,
    due: string,
    count: number,
    amount: number,
    method: string[],
    material: string[],
    status: string
    docs : number
}

export interface NotMobile{
    NotMobile : boolean;
  }