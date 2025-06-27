export interface IPostulation {
    id?: string;
    title: string;
    company: string;
    status: "pending" | "approved" | "rejected";
}