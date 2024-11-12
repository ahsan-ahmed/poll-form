export type POLL_DATA_TYPE = {
    id: number;
    title: string;
    value: null | number;
    options: {
        icon: string;
        label: string;
    }[];
}