export interface Family {
    id: number,
    name:string,
    born: number,
    spouseId?: number,
    parentId1?: number,
    parentId2?: number,
    hometown: string,
}