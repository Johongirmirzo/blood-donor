export type DonorSearchProps = {
    getDonorInfo: (donorInfo: {bloodGroup: string; city: string})=> void;
}