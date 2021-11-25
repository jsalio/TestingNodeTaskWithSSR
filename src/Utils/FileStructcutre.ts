export type FileStructcutre = {
    messages: {
        runningDate: string;
        message: string;
        status: '' | 'success' | 'error';
    }[];
    lastRun: Date;
};
