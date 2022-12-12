import {IDonorList} from "../../../../types/donor";

export type DonorListProps = {
    donors: IDonorList[];
    donorInfo?: {city: string; bloodGroup: string}
}