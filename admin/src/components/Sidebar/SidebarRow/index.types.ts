interface IPage {
  id: number;
  rowName: string;
  routeTo: string;
}
export interface ISidebarRow {
    id: number;
    title?: string;
    pages?: IPage[]
    routeTo?: string;
    rowName: string;
    Icon: any;
  }
  
export type SidebarRowProps = {
    sidebarRow: ISidebarRow;
    activePageId: number;
    isMobile?: boolean;
    toggleSidebar?: () => void;
    getActivePageId: (pageId: number) => void;
};