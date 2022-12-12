declare namespace Express {
    interface IFile {
        filename: string;
        path: string;
    }
    export interface Request {
          donor: {
              id: string;
              fullname: string;
              isHidden: boolean;
              isAdmin: boolean;
          }
          file: {
            filename: string;
            path: string;
          }
          files: IFile[];
      }
  }