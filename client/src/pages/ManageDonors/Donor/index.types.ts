import {IDonorList} from "../../../types/donor"

export type DonorProps = {
    donors: IDonorList[];
    displayAtHome?: boolean;
    donorInfo?: {city: string; bloodGroup: string}
    donorDisplayAmount: number;
}