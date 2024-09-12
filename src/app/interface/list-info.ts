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

export class ListData implements ListInfo {
        list = [{
            _id: '',
            user_id: '',
            title: '',
            type: '',
            comments: [{
                time: '',
                user_id: '',
                comment: '',
            }],
            list_items: [{
                title: '',
                content: '',
                status: '',
                creator_id: '',
            }]
        }]
    }
   