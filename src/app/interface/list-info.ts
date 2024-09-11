export interface ListInfo {
    list:{
        _id: string;
        user_id: string;
        title: string;
        type: string;

        comments: {
            time: string;
            user_id: string;
            comment: string;
        }[];

        list_items:{
            title: string;
            content: string;
            status: string;
            creator_id: string;

        }[];
    }[];
}
