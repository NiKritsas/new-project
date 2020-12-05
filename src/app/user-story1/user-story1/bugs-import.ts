export interface BugsImport {
    id?: string;
    title: string;
    description?: string;
    priority: string;
    reporter: string;
    status: string;
    updatedAt?: string;
    createdAt: string;
    comments?: [
        {
            _id: string;
            reporter : string;
            description: string;
        }
    ]
}
